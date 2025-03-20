"use client";

import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useAdventure } from "../context/AdventureContext";
import { Clock, MapPin, Calendar, Users } from "lucide-react";

// Define Adventure Type
type Adventure = {
  id: number;
  name: string;
  image?: string;
  duration: string;
  location: string;
  description: string;
  price: number;
  availability: string[];
};

const AdventureDetailPage = () => {
    const { id } = useParams(); // id is a string from useParams()
  const { getAdventureById } = useAdventure();
  const [adventure, setAdventure] = useState<Adventure | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Ensure id is a valid number before calling getAdventureById
    if (id) {
      const adventureId = Number(id); // Convert id to a number
      if (!isNaN(adventureId)) {
        const foundAdventure = getAdventureById(adventureId);

        // Check if foundAdventure is undefined and handle accordingly
        if (foundAdventure === undefined) {
          setAdventure(null); // If not found, set adventure to null
        } else {
          setAdventure(foundAdventure); // If found, set the adventure data
        }
      }
    }
  }, [id, getAdventureById]);

  if (!adventure) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Adventure not found</h2>
        <Link
          to="/adventures"
          className="bg-primary text-primary-foreground px-4 py-2 rounded hover:bg-primary/90 transition-colors"
        >
          Back to Adventures
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-background">
      {/* Hero Image */}
      <div className="w-full h-[40vh] md:h-[50vh] relative">
        <img
          src={adventure.image || "/placeholder.svg"} // Ensure image path is correct
          alt={adventure.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            {adventure.name}
          </h1>
          <div className="flex flex-wrap gap-4 text-sm md:text-base">
            <div className="flex items-center">
              <Clock className="h-5 w-5 mr-1" />
              <span>{adventure.duration}</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-5 w-5 mr-1" />
              <span>{adventure.location}</span>
            </div>
            <div className="flex items-center">
              <Users className="h-5 w-5 mr-1" />
              <span>Max 8 people per group</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">About This Adventure</h2>
              <p className="text-muted-foreground mb-6">
                {adventure.description}
              </p>

              <h3 className="text-xl font-bold mb-3">What to Expect</h3>
              <ul className="space-y-2 mb-6">
                {/* List items */}
              </ul>

              <h3 className="text-xl font-bold mb-3">What to Bring</h3>
              <ul className="space-y-2">
                {/* List items */}
              </ul>
            </div>

            <div className="bg-card rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4">Location</h2>
              <div className="aspect-video bg-muted rounded-lg mb-4">
                <img
                  src="/placeholder.svg?height=300&width=600"
                  alt="Map location"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <p className="text-muted-foreground">
                {adventure.location} - Detailed directions will be sent after
                booking.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <div className="bg-card rounded-lg p-6 sticky top-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Book Now</h2>
                <span className="text-2xl font-bold">
                  ${adventure.price.toFixed(2)}
                </span>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Available Days</h3>
                <div className="flex flex-wrap gap-2">
                  {adventure.availability.map((day, index) => (
                    <span
                      key={index}
                      className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                    >
                      {day}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-muted-foreground mr-2" />
                  <span>Multiple time slots available</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-muted-foreground mr-2" />
                  <span>1-8 participants</span>
                </div>
              </div>

              <Link
                to={`/book/${adventure.id}`}
                className="w-full bg-primary text-primary-foreground py-3 rounded-md font-medium text-center block hover:bg-primary/90 transition-colors"
              >
                Book This Adventure
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdventureDetailPage;
