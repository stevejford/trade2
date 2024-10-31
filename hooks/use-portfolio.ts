"use client";

import { useState, useEffect } from 'react';
import { 
  collection, 
  query, 
  where, 
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  serverTimestamp,
  updateDoc
} from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { db, storage } from '@/lib/firebase';
import { PortfolioItem } from '@/lib/types/portfolio';

export function usePortfolio(tradesPersonId: string) {
  const [items, setItems] = useState<PortfolioItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const q = query(
          collection(db, 'portfolioItems'),
          where('tradesPersonId', '==', tradesPersonId)
        );

        const querySnapshot = await getDocs(q);
        const portfolioData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as PortfolioItem[];

        setItems(portfolioData);
      } catch (error) {
        console.error('Error fetching portfolio:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolio();
  }, [tradesPersonId]);

  const uploadImage = async (file: File): Promise<string> => {
    const storageRef = ref(storage, `portfolio/${tradesPersonId}/${Date.now()}_${file.name}`);
    await uploadBytes(storageRef, file);
    return getDownloadURL(storageRef);
  };

  const addItem = async (item: Omit<PortfolioItem, 'id'>, files: File[]) => {
    const imageUrls = await Promise.all(files.map(uploadImage));
    
    const newItem = {
      ...item,
      images: imageUrls,
      createdAt: serverTimestamp(),
    };

    const docRef = await addDoc(collection(db, 'portfolioItems'), newItem);
    return docRef.id;
  };

  const deleteItem = async (itemId: string, imageUrls: string[]) => {
    // Delete images from storage
    await Promise.all(
      imageUrls.map(async (url) => {
        const imageRef = ref(storage, url);
        try {
          await deleteObject(imageRef);
        } catch (error) {
          console.error('Error deleting image:', error);
        }
      })
    );

    // Delete document from Firestore
    await deleteDoc(doc(db, 'portfolioItems', itemId));
  };

  const updateItem = async (
    itemId: string,
    updates: Partial<PortfolioItem>,
    newFiles?: File[]
  ) => {
    let imageUrls = updates.images || [];

    if (newFiles?.length) {
      const newImageUrls = await Promise.all(newFiles.map(uploadImage));
      imageUrls = [...imageUrls, ...newImageUrls];
    }

    await updateDoc(doc(db, 'portfolioItems', itemId), {
      ...updates,
      images: imageUrls,
      updatedAt: serverTimestamp(),
    });
  };

  return {
    items,
    loading,
    addItem,
    deleteItem,
    updateItem,
  };
}