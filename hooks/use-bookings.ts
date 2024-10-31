"use client";

import { useState, useEffect } from 'react';
import { 
  collection, 
  query, 
  where, 
  getDocs, 
  addDoc,
  updateDoc,
  doc,
  serverTimestamp 
} from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Booking } from '@/lib/types/booking';
import { useAuth } from '@/hooks/use-auth';

export function useBookings(tradesPersonId: string) {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    if (!user) return;

    const fetchBookings = async () => {
      try {
        const q = query(
          collection(db, 'bookings'),
          where('tradesPersonId', '==', tradesPersonId),
          where('customerId', '==', user.uid)
        );

        const querySnapshot = await getDocs(q);
        const bookingsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Booking[];

        setBookings(bookingsData);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, [tradesPersonId, user]);

  const createBooking = async (bookingData: Omit<Booking, 'id' | 'createdAt'>) => {
    if (!user) throw new Error('User must be authenticated');

    const newBooking = {
      ...bookingData,
      createdAt: serverTimestamp(),
      status: 'pending',
      customerId: user.uid,
      customerEmail: user.email,
    };

    const docRef = await addDoc(collection(db, 'bookings'), newBooking);
    return docRef.id;
  };

  const updateBookingStatus = async (bookingId: string, status: Booking['status']) => {
    const bookingRef = doc(db, 'bookings', bookingId);
    await updateDoc(bookingRef, { status });
  };

  return {
    bookings,
    loading,
    createBooking,
    updateBookingStatus,
  };
}