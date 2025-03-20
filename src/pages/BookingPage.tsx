"use client";

import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAdventure } from "../context/AdventureContext";
import emailjs from "@emailjs/browser";
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
const BookingPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getAdventureById, updateBooking, calculateTotal } = useAdventure();
  const [adventure, setAdventure] = useState<Adventure | null>(null);
  const [formData, setFormData] = useState<{
    date: string;
    time: string;
    participants: number;
    name: string;
    email: string;
    phone: string;
    specialRequests: string;
  }>({
    date: "",
    time: "",
    participants: 1,
    name: "",
    email: "",
    phone: "",
    specialRequests: "",
  });

  const [totalAmount, setTotalAmount] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    const adventureId = Number(id);
    const foundAdventure = getAdventureById(adventureId);
    if (foundAdventure) {
      setAdventure(foundAdventure);
      setTotalAmount(calculateTotal(foundAdventure.id, formData.participants));
    }
  }, [id, getAdventureById, calculateTotal, formData.participants]);

  useEffect(() => {
    if (adventure) {
      setTotalAmount(calculateTotal(adventure.id, formData.participants));
    }
  }, [formData.participants, adventure, calculateTotal]);

  const handleChange = (e: { target: { name: string; value: unknown } }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      // Prepare booking data
      const bookingData = {
        adventureId: adventure?.id,
        ...formData,
        totalAmount,
        adventureName: adventure?.name,
      };

      // Update context with booking data
      updateBooking(bookingData);

      // Send email with EmailJS
      await emailjs.send(
        "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
        {
          adventure_name: adventure?.name,
          customer_name: formData.name,
          customer_email: formData.email,
          customer_phone: formData.phone,
          booking_date: formData.date,
          booking_time: formData.time,
          participants: formData.participants,
          total_amount: `$${totalAmount.toFixed(2)}`,
          special_requests: formData.specialRequests || "None",
        },
        "YOUR_PUBLIC_KEY" // Replace with your EmailJS public key
      );

      // Navigate to confirmation page
      navigate("/confirmation");
    } catch (error) {
      console.error("Booking error:", error);
      setError("There was an error processing your booking. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!adventure) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Adventure not found</h2>
      </div>
    );
  }

  // Generate time slots
  const timeSlots = ["9:00 AM", "11:00 AM", "1:00 PM", "3:00 PM"];

  // Generate dates for the next 30 days
  const generateDates = () => {
    const dates = [];
    const today = new Date();

    for (let i = 1; i <= 30; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);

      // Only include days that are available for this adventure
      const dayName = date.toLocaleDateString("en-US", { weekday: "long" });
      if (adventure.availability.includes(dayName)) {
        const formattedDate = date.toISOString().split("T")[0];
        dates.push({
          value: formattedDate,
          label: date.toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          }),
        });
      }
    }

    return dates;
  };

  const availableDates = generateDates();

  return (
    <div className="bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">
            Book Your {adventure.name}
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Booking Form */}
            <div className="md:col-span-2">
              <div className="bg-card rounded-lg p-6">
                <form onSubmit={handleSubmit}>
                  {error && (
                    <div className="bg-destructive/10 text-destructive p-4 rounded-md mb-6">
                      {error}
                    </div>
                  )}

                  <div className="space-y-6">
                    <div>
                      <h2 className="text-xl font-semibold mb-4">
                        Adventure Details
                      </h2>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        <div>
                          <label
                            htmlFor="date"
                            className="block text-sm font-medium mb-1"
                          >
                            Date
                          </label>
                          <select
                            id="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            required
                            className="w-full p-2 border border-input rounded-md bg-background"
                          >
                            <option value="">Select a date</option>
                            {availableDates.map((date, index) => (
                              <option key={index} value={date.value}>
                                {date.label}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label
                            htmlFor="time"
                            className="block text-sm font-medium mb-1"
                          >
                            Time
                          </label>
                          <select
                            id="time"
                            name="time"
                            value={formData.time}
                            onChange={handleChange}
                            required
                            className="w-full p-2 border border-input rounded-md bg-background"
                          >
                            <option value="">Select a time</option>
                            {timeSlots.map((time, index) => (
                              <option key={index} value={time}>
                                {time}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="participants"
                          className="block text-sm font-medium mb-1"
                        >
                          Number of Participants
                        </label>
                        <select
                          id="participants"
                          name="participants"
                          value={formData.participants}
                          onChange={handleChange}
                          required
                          className="w-full p-2 border border-input rounded-md bg-background"
                        >
                          {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                            <option key={num} value={num}>
                              {num} {num === 1 ? "Person" : "People"}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-xl font-semibold mb-4">
                        Contact Information
                      </h2>

                      <div className="grid grid-cols-1 gap-4">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium mb-1"
                          >
                            Full Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full p-2 border border-input rounded-md bg-background"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium mb-1"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full p-2 border border-input rounded-md bg-background"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="phone"
                            className="block text-sm font-medium mb-1"
                          >
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full p-2 border border-input rounded-md bg-background"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="specialRequests"
                            className="block text-sm font-medium mb-1"
                          >
                            Special Requests (Optional)
                          </label>
                          <textarea
                            id="specialRequests"
                            name="specialRequests"
                            value={formData.specialRequests}
                            onChange={handleChange}
                            className="w-full p-2 border border-input rounded-md bg-background"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-6 bg-primary text-primary-foreground py-3 rounded-md font-medium hover:bg-primary/90 transition-colors disabled:opacity-70"
                  >
                    {isSubmitting ? "Processing..." : "Complete Booking"}
                  </button>
                </form>
              </div>
            </div>

            {/* Booking Summary */}
            <div>
              <div className="bg-card rounded-lg p-6 sticky top-6">
                <h2 className="text-xl font-semibold mb-4">Booking Summary</h2>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Adventure:</span>
                    <span>{adventure.name}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="font-medium">Date:</span>
                    <span>{formData.date || "Not selected"}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="font-medium">Time:</span>
                    <span>{formData.time || "Not selected"}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="font-medium">Participants:</span>
                    <span>{formData.participants}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="font-medium">Total:</span>
                    <span>${totalAmount.toFixed(2)}</span>
                  </div>
                </div>

                <div className="text-sm text-center text-muted">
                  Prices include taxes and fees.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
