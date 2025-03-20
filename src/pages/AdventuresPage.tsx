"use client"

import { useEffect } from "react"
import { useAdventure } from "../context/AdventureContext"
import AdventureCard from "../components/AdventureCard"

const AdventuresPage = () => {
  const { adventures } = useAdventure()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Our Adventures</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our range of thrilling adventures and find your perfect experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {adventures.map((adventure) => (
            <AdventureCard key={adventure.id} adventure={adventure} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default AdventuresPage

