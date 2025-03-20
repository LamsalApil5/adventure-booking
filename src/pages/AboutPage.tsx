import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Mountain, Award, Heart, Users } from 'lucide-react'

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-background">
      {/* Hero Section */}
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our Story
            </h1>
            <p className="text-lg md:text-xl">
              Passionate adventurers dedicated to creating unforgettable experiences since 2010.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">How It All Started</h2>
              <p className="text-muted-foreground mb-4">
                AdventureBooking was founded in 2010 by a group of passionate outdoor enthusiasts who wanted to share their love for adventure with the world. What started as a small operation offering weekend paragliding trips has grown into a comprehensive adventure booking platform.
              </p>
              <p className="text-muted-foreground mb-4">
                Our founders, Alex and Jamie, met during a hiking expedition in the Rockies. They quickly realized they shared a vision: to make thrilling outdoor experiences accessible to everyone, regardless of experience level.
              </p>
              <p className="text-muted-foreground">
                Over the years, we've expanded our offerings to include a wide range of adventures, from paragliding and white water rafting to ziplining and skydiving. Our mission remains the same: to provide safe, exciting, and memorable experiences that push boundaries and create lasting memories.
              </p>
            </div>
            <div className="order-first lg:order-last">
              <img 
                src="/placeholder.svg?height=500&width=600" 
                alt="Our Story" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at AdventureBooking.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-card p-6 rounded-lg text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                <Mountain className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Adventure</h3>
              <p className="text-muted-foreground">
                We believe in pushing boundaries and exploring new horizons, both literally and figuratively.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-muted-foreground">
                We strive for excellence in everything we do, from customer service to safety protocols.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Passion</h3>
              <p className="text-muted-foreground">
                Our team is driven by a genuine passion for adventure and the great outdoors.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-muted-foreground">
                We foster a sense of community among our customers and partners, united by a love for adventure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The passionate individuals behind AdventureBooking who make your thrilling experiences possible.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-card rounded-lg overflow-hidden shadow-md">
              <img 
                src="/placeholder.svg?height=300&width=300" 
                alt="Alex Johnson" 
                className="w-full h-64 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-bold mb-1">Alex Johnson</h3>
                <p className="text-primary text-sm mb-3">Co-Founder & CEO</p>
                <p className="text-muted-foreground text-sm">
                  Former professional paraglider with over 15 years of experience in adventure tourism.
                </p>
              </div>
            </div>
            
            <div className="bg-card rounded-lg overflow-hidden shadow-md">
              <img 
                src="/placeholder.svg?height=300&width=300" 
                alt="Jamie Rivera" 
                className="w-full h-64 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-bold mb-1">Jamie Rivera</h3>
                <p className="text-primary text-sm mb-3">Co-Founder & COO</p>
                <p className="text-muted-foreground text-sm">
                  Outdoor enthusiast and business strategist with a background in sustainable tourism.
                </p>
              </div>
            </div>
            
            <div className="bg-card rounded-lg overflow-hidden shadow-md">
              <img 
                src="/placeholder.svg?height=300&width=300" 
                alt="Sam Taylor" 
                className="w-full h-64 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-bold mb-1">Sam Taylor</h3>
                <p className="text-primary text-sm mb-3">Head of Operations</p>
                <p className="text-muted-foreground text-sm">
                  Logistics expert ensuring all adventures run smoothly and safely.
                </p>
              </div>
            </div>
            
            <div className="bg-card rounded-lg overflow-hidden shadow-md">
              <img 
                src="/placeholder.svg?height=300&width=300" 
                alt="Morgan Lee" 
                className="w-full h-64 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-bold mb-1">Morgan Lee</h3>
                <p className="text-primary text-sm mb-3">Customer Experience</p>
                <p className="text-muted-foreground text-sm">
                  Dedicated to ensuring every customer has an exceptional adventure experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Adventurers Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it—hear from those who've experienced our adventures firsthand.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img 
                  src="/placeholder.svg?height=100&width=100" 
                  alt="Customer" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold">Michael P.</h4>
                  <p className="text-sm text-muted-foreground">Paragliding Adventure</p>
                </div>
              </div>
              <p className="text-muted-foreground italic">
                "The paragliding experience was absolutely incredible! The views were breathtaking, and the instructors made me feel safe the entire time. Will definitely be booking another adventure soon!"
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img 
                  src="/placeholder.svg?height=100&width=100" 
                  alt="Customer" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold">Sarah K.</h4>
                  <p className="text-sm text-muted-foreground">White Water Rafting</p>
                </div>
              </div>
              <p className="text-muted-foreground italic">
                "White water rafting with AdventureBooking was the highlight of our family vacation! The booking process was seamless, and the guides were knowledgeable and fun. Can't wait to try ziplining next!"
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img 
                  src="/placeholder.svg?height=100&width=100" 
                  alt="Customer" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold">David T.</h4>
                  <p className="text-sm text-muted-foreground">Skydiving Thrill</p>
                </div>
              </div>
              <p className="text-muted-foreground italic">
                "Skydiving was on my bucket list for years, and I'm so glad I chose AdventureBooking for this experience. The team was professional, the equipment was top-notch, and the adrenaline rush was unmatched!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join the Adventure?</h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Discover our range of thrilling experiences and book your next adventure today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/adventures"
              className="bg-background text-foreground px-6 py-3 rounded-md font-medium hover:bg-accent transition-colors"
            >
              Explore Adventures
            </Link>
            <Link 
              to="/contact"
              className="bg-transparent border border-primary-foreground text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary-foreground/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
