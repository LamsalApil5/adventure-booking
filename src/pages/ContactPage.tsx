"use client";

import { useEffect, useState } from "react";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<{
    submitting: boolean;
    submitted: boolean;
    info: { error: boolean; msg: string | null };
  }>({
    submitting: false,
    submitted: false,
    info: { error: false, msg: null },
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));

    try {
      // Send email with EmailJS
      await emailjs.send(
        "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "YOUR_PUBLIC_KEY" // Replace with your EmailJS public key
      );

      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: "Message sent successfully!" },
      });

      // Reset form data after successful submission
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus({
        submitted: false,
        submitting: false,
        info: {
          error: true,
          msg: "Something went wrong. Please try again later.",
        },
      });
    }
  };

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="/pokhara.jpg?height=400&width=1600"
            alt="Contact Hero"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Get In Touch
            </h1>
            <p className="text-lg md:text-xl">
              Have questions or need assistance? We're here to help you plan
              your perfect adventure.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <p className="text-muted-foreground mb-8">
                Our team is ready to assist you with any questions about our
                adventures, booking process, or special requests.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Our Location</h3>
                    <p className="text-muted-foreground">
                      Pokhara, Nepal
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email Us</h3>
                    <p className="text-muted-foreground">
                      info@thrillnepal.com
                    </p>
                    <p className="text-muted-foreground">
                      bookings@thrillnepal.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Call Us</h3>
                    <p className="text-muted-foreground">
                      General Inquiries: (123) 456-7890
                    </p>
                    <p className="text-muted-foreground">
                      Booking Support: (123) 456-7891
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-lg overflow-hidden shadow-md">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Map"
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-card rounded-lg p-8 shadow-md">
                <div className="flex items-center mb-6">
                  <MessageSquare className="h-6 w-6 text-primary mr-2" />
                  <h2 className="text-2xl font-bold">Send Us a Message</h2>
                </div>

                {status.info.msg && (
                  <div
                    className={`p-4 mb-6 rounded-md ${
                      status.info.error
                        ? "bg-destructive/10 text-destructive"
                        : "bg-green-100 text-green-800"
                    }`}
                  >
                    {status.info.msg}
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-1"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-input rounded-md bg-background"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-1"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-input rounded-md bg-background"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium mb-1"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-input rounded-md bg-background"
                        placeholder="Booking Inquiry"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium mb-1"
                      >
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full p-3 border border-input rounded-md bg-background"
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={status.submitting}
                      className="w-full bg-primary text-primary-foreground py-3 rounded-md font-medium hover:bg-primary/90 transition-colors disabled:opacity-70"
                    >
                      {status.submitting ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about our adventures and booking
              process.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-2">
                  How far in advance should I book an adventure?
                </h3>
                <p className="text-muted-foreground">
                  We recommend booking at least 2-3 weeks in advance, especially
                  during peak season (June-August). However, we sometimes have
                  last-minute availability, so it's always worth checking our
                  website or contacting us directly.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-2">
                  What is your cancellation policy?
                </h3>
                <p className="text-muted-foreground">
                  We offer free cancellation up to 48 hours before your
                  scheduled adventure. If you cancel within 48 hours, a 50% fee
                  applies. No-shows are charged the full amount.
                  Weather-dependent activities may be rescheduled at no
                  additional cost.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-2">
                  Do I need prior experience for these adventures?
                </h3>
                <p className="text-muted-foreground">
                  Most of our adventures are suitable for beginners with no
                  prior experience. Our expert guides provide thorough
                  instructions and ensure your safety throughout the experience.
                  For more advanced adventures, any prerequisites will be
                  clearly stated in the activity description.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-2">
                  What should I bring with me?
                </h3>
                <p className="text-muted-foreground">
                  Generally, you should wear comfortable clothing appropriate
                  for the weather and closed-toe shoes. We provide all necessary
                  safety equipment. Specific recommendations for each adventure
                  are included in your booking confirmation email and on the
                  adventure detail page.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-2">
                  Are there age or weight restrictions?
                </h3>
                <p className="text-muted-foreground">
                  Yes, most adventures have minimum age requirements (typically
                  8-18 years depending on the activity) and weight restrictions
                  for safety reasons. These are specified on each adventure's
                  detail page. Children under 18 must be accompanied by an
                  adult.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready for Your Next Adventure?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Browse our selection of thrilling experiences and book your
            adventure today.
          </p>
          <a
            href="/adventures"
            className="bg-background text-foreground px-6 py-3 rounded-md font-medium hover:bg-accent transition-colors"
          >
            Explore Adventures
          </a>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
