"use client"

import { useEffect } from "react"
import { Link } from "react-router-dom"
import { useAdventure } from "../context/AdventureContext"
import { CheckCircle, Calendar, Clock, Users, DollarSign } from "lucide-react"

const ConfirmationPage = () => {
  const { booking, getAdventureById } = useAdventure()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const adventure = booking.adventureId ? getAdventureById(booking.adventureId) : null

  if (!booking.adventureId || !adventure) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">No booking information found</h2>
        <p className="text-muted-foreground mb-6">Please return to the adventures page to make a booking.</p>
        <Link
          to="/adventures"
          className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
        >
          Browse Adventures
        </Link>
      </div>
    )
  }

  return (
    <div className="bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-card rounded-lg p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
              <CheckCircle className="h-8 w-8" />
            </div>
            <h1 className="text-3xl font-bold mb-2">Booking Confirmed!</h1>
            <p className="text-muted-foreground">
              Thank you for booking with us. A confirmation email has been sent to {booking.email}.
            </p>
          </div>

          <div className="border border-border rounded-md p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Booking Details</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium mb-3">Adventure Information</h3>
                <div className="space-y-3">
                  <div>
                    <span className="text-muted-foreground">Adventure:</span>
                    <p className="font-medium">{adventure.name}</p>
                  </div>

                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 text-muted-foreground mr-2" />
                    <div>
                      <span className="text-muted-foreground">Date:</span>
                      <p className="font-medium">
                        {new Date(booking.date).toLocaleDateString("en-US", {
                          weekday: "long",
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Clock className="h-4 w-4 text-muted-foreground mr-2" />
                    <div>
                      <span className="text-muted-foreground">Time:</span>
                      <p className="font-medium">{booking.time}</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Users className="h-4 w-4 text-muted-foreground mr-2" />
                    <div>
                      <span className="text-muted-foreground">Participants:</span>
                      <p className="font-medium">
                        {booking.participants} {booking.participants === 1 ? "person" : "people"}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <DollarSign className="h-4 w-4 text-muted-foreground mr-2" />
                    <div>
                      <span className="text-muted-foreground">Total Amount:</span>
                      <p className="font-medium">${booking.totalAmount.toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-3">Contact Information</h3>
                <div className="space-y-3">
                  <div>
                    <span className="text-muted-foreground">Name:</span>
                    <p className="font-medium">{booking.name}</p>
                  </div>

                  <div>
                    <span className="text-muted-foreground">Email:</span>
                    <p className="font-medium">{booking.email}</p>
                  </div>

                  <div>
                    <span className="text-muted-foreground">Phone:</span>
                    <p className="font-medium">{booking.phone}</p>
                  </div>

                  {booking.specialRequests && (
                    <div>
                      <span className="text-muted-foreground">Special Requests:</span>
                      <p className="font-medium">{booking.specialRequests}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-muted p-6 rounded-md mb-8">
            <h3 className="font-semibold mb-3">What's Next?</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <span>You'll receive a detailed confirmation email with all the information about your booking.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <span>
                  Our team will contact you 24 hours before your adventure with weather updates and final instructions.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <span>Please arrive 15 minutes before your scheduled time for check-in and safety briefing.</span>
              </li>
            </ul>
          </div>

          <div className="text-center">
            <Link
              to="/"
              className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConfirmationPage

