import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-700 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link 
            to="/" 
            className="flex items-center"
          >
            <motion.h1 
              className="text-2xl md:text-3xl font-bold text-white"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              NANIA <span className="text-yellow-300">Consulting</span>
            </motion.h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {[
              { path: "/", label: "Accueil" },
              { path: "/formations", label: "Formations" },
              { path: "/blog", label: "Blog" },
              { path: "/coaching", label: "Coaching" },
              { path: "/contact", label: "Contact" }
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-lg font-medium transition-all duration-300 ${
                  isActive(item.path)
                    ? "text-yellow-300 font-semibold"
                    : "text-white hover:text-yellow-100"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Auth Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-700 px-4 py-2 rounded-md font-medium hover:bg-blue-50 transition duration-300"
            >
              Connexion
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-md font-medium hover:bg-yellow-300 transition duration-300"
            >
              Inscription
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div 
          className="md:hidden bg-blue-800"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-4 pt-2 pb-4 space-y-2">
            {[
              { path: "/", label: "Accueil" },
              { path: "/formations", label: "Formations" },
              { path: "/blog", label: "Blog" },
              { path: "/coaching", label: "Coaching" },
              { path: "/contact", label: "Contact" }
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block py-3 px-4 rounded-md ${
                  isActive(item.path)
                    ? "bg-blue-700 text-yellow-300 font-semibold"
                    : "text-white hover:bg-blue-700"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 flex flex-col space-y-3">
              <button className="bg-white text-blue-700 px-4 py-2 rounded-md font-medium">
                Connexion
              </button>
              <button className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-md font-medium">
                Inscription
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}