"use client"

import { useEffect } from "react"
import Hero from "../components/Hero"
import AdventureCard from "../components/AdventureCard"
import { useAdventure } from "../context/AdventureContext"
import { Link } from "react-router-dom"
import { Mountain, Shield, Clock, Users } from "lucide-react"

const HomePage = () => {
  const { getFeaturedAdventures } = useAdventure()
  const featuredAdventures = getFeaturedAdventures()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <Hero />

      {/* Featured Adventures */}
      <section id="featured" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Adventures</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our most popular experiences, handpicked for thrill-seekers like you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredAdventures.map((adventure) => (
              <AdventureCard key={adventure.id} adventure={adventure} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/adventures"
              className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
            >
              View All Adventures
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're committed to providing safe, exciting, and memorable adventure experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-card p-6 rounded-lg text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                <Mountain className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Guides</h3>
              <p className="text-muted-foreground">
                Our professional guides have years of experience and extensive training.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Safety First</h3>
              <p className="text-muted-foreground">
                Your safety is our top priority with rigorous equipment checks and protocols.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Flexible Booking</h3>
              <p className="text-muted-foreground">
                Easy booking process with free cancellation up to 48 hours before your adventure.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Small Groups</h3>
              <p className="text-muted-foreground">
                We keep our groups small to ensure personalized attention and better experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for Your Next Adventure?</h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Book your adventure today and create memories that will last a lifetime.
          </p>
          <Link
            to="/adventures"
            className="bg-background text-foreground px-6 py-3 rounded-md font-medium hover:bg-accent transition-colors"
          >
            Book Now
          </Link>
        </div>
      </section>
    </div>
  )
}

export default HomePage

