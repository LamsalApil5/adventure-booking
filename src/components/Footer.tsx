import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="/logo.png?height=300&width=800"
                alt="About Us Hero"
                className="w-24 h-auto object-cover opacity-60"
              />
              <span className="text-xl font-bold">ThrillNepal</span>
            </div>
            <p className="text-primary-foreground/80 mb-4">
              Your gateway to thrilling adventures and unforgettable
              experiences.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-primary-foreground hover:text-white/80 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-primary-foreground hover:text-white/80 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-primary-foreground hover:text-white/80 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-primary-foreground/80 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/adventures"
                  className="text-primary-foreground/80 hover:text-white transition-colors"
                >
                  Adventures
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-primary-foreground/80 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-primary-foreground/80 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-0.5" />
                <span className="text-primary-foreground/80">
                  Pokhara, Nepal
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5" />
                <span className="text-primary-foreground/80">
                  (123) 456-7890
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5" />
                <span className="text-primary-foreground/80">
                  info@thrillnepal.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center text-primary-foreground/60">
          <p>
            &copy; {new Date().getFullYear()} ThrillNepal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
