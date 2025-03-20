/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext, ReactNode } from "react";

// Define adventure type
type Adventure = {
  id: number;
  name: string;
  description: string;
  price: number;
  duration: string;
  location: string;
  image: string;
  featured: boolean;
  availability: string[];
};

// Define booking type
type Booking = {
  adventureId: number | null;
  date: string;
  time: string;
  participants: number;
  name: string;
  email: string;
  phone: string;
  specialRequests: string;
  totalAmount: number;
};

// Define context type
interface AdventureContextType {
  adventures: Adventure[];
  booking: Booking;
  updateBooking: (data: Partial<Booking>) => void;
  getAdventureById: (id: number) => Adventure | undefined;
  getFeaturedAdventures: () => Adventure[];
  calculateTotal: (adventureId: number, participants: number) => number;
}

// Create context with proper typing
const AdventureContext = createContext<AdventureContextType | undefined>(
  undefined
);

export const adventures: Adventure[] = [
  {
    id: 1,
    name: "Paragliding Adventure",
    description:
      "Experience the thrill of flying with our expert paragliding guides. Soar above breathtaking landscapes and enjoy panoramic views of mountains and valleys.",
    price: 149.99,
    duration: "2 hours",
    location: "Mountain Heights",
    image: "/placeholder.svg?height=400&width=600",
    featured: true,
    availability: ["Monday", "Wednesday", "Friday", "Saturday", "Sunday"],
  },
  {
    id: 2,
    name: "Buggy Rides",
    description:
      "Navigate rugged terrain in our all-terrain buggies. Perfect for adrenaline seekers looking to explore off-road trails and experience nature up close.",
    price: 89.99,
    duration: "3 hours",
    location: "Desert Trails",
    image: "/placeholder.svg?height=400&width=600",
    featured: true,
    availability: ["Tuesday", "Thursday", "Saturday", "Sunday"],
  },
  {
    id: 3,
    name: "Ziplining Experience",
    description:
      "Zip through lush forests and over stunning valleys. Our zipline course features multiple lines of varying lengths and heights for maximum excitement.",
    price: 79.99,
    duration: "2.5 hours",
    location: "Forest Canopy",
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
    availability: ["Monday", "Tuesday", "Friday", "Saturday", "Sunday"],
  },
  {
    id: 4,
    name: "White Water Rafting",
    description:
      "Brave the rapids with our experienced rafting guides. Suitable for beginners and experienced rafters alike, this adventure will get your heart pumping.",
    price: 129.99,
    duration: "4 hours",
    location: "River Rapids",
    image: "/placeholder.svg?height=400&width=600",
    featured: true,
    availability: ["Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
  },
  {
    id: 5,
    name: "Skydiving Thrill",
    description:
      "Take the ultimate leap of faith with our tandem skydiving experience. Free fall from 12,000 feet and enjoy the rush of adrenaline like never before.",
    price: 299.99,
    duration: "3 hours",
    location: "Sky Center",
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
    availability: ["Monday", "Thursday", "Friday", "Saturday"],
  },
];

// Provider Component
export const AdventureProvider = ({ children }: { children: ReactNode }) => {
  const [booking, setBooking] = useState<Booking>({
    adventureId: null,
    date: "",
    time: "",
    participants: 1,
    name: "",
    email: "",
    phone: "",
    specialRequests: "",
    totalAmount: 0,
  });

  // Update booking function
  const updateBooking = (data: Partial<Booking>) => {
    setBooking((prev) => ({ ...prev, ...data }));
  };

  // Get adventure by ID
  const getAdventureById = (id: number) => {
    return adventures.find((adventure) => adventure.id === id);
  };

  // Get featured adventures
  const getFeaturedAdventures = () => {
    return adventures.filter((adventure) => adventure.featured);
  };

  // Calculate total price
  const calculateTotal = (adventureId: number, participants: number) => {
    const adventure = getAdventureById(adventureId);
    return adventure ? adventure.price * participants : 0;
  };

  return (
    <AdventureContext.Provider
      value={{
        adventures,
        booking,
        updateBooking,
        getAdventureById,
        getFeaturedAdventures,
        calculateTotal,
      }}
    >
      {children}
    </AdventureContext.Provider>
  );
};

// Custom Hook to use Adventure Context
export const useAdventure = () => {
  const context = useContext(AdventureContext);
  if (!context) {
    throw new Error("useAdventure must be used within an AdventureProvider");
  }
  return context;
};
