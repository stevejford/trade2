export interface BookingSlot {
  id: string;
  tradesPersonId: string;
  date: string;
  startTime: string;
  endTime: string;
  isAvailable: boolean;
}

export interface Booking {
  id: string;
  tradesPersonId: string;
  customerId: string;
  serviceId: string;
  date: string;
  timeSlot: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  description: string;
  createdAt: string;
}