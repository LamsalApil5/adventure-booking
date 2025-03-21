"use client";

import { useEffect } from "react";
import { useAdventure } from "../context/AdventureContext";
import AdventureCard from "../components/AdventureCard";

const AdventuresPage = () => {
  const { adventures } = useAdventure();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-background">
      <section className="relative bg-gray-900 text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="/pokhara.jpg?height=600&width=1600"
            alt="About Us Hero"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-bold mb-4">Our Adventures</h1>
            <p className="text-muted-foreground max-w-2xl">
              Explore our range of thrilling adventures and find your perfect
              experience.
            </p>
          </div>
        </div>
      </section>
      <div className="container mx-auto py-8 lg:py-16">     

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {adventures.map((adventure) => (
            <AdventureCard key={adventure.id} adventure={adventure} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdventuresPage;
