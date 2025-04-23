import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">NANIA <span className="text-yellow-300">Consulting</span></h3>
            <p className="text-gray-300 mb-4">
              Des solutions innovantes pour votre développement personnel et professionnel.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Accueil</Link></li>
              <li><Link to="/formations" className="text-gray-300 hover:text-white transition-colors">Formations</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/coaching" className="text-gray-300 hover:text-white transition-colors">Coaching</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Formation professionnelle</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Coaching personnel</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Développement de carrière</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Supervision</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 text-yellow-300" />
                <span className="text-gray-300">Cotonou, Bénin</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-yellow-300" />
                <span className="text-gray-300">+229 0195186639</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-yellow-300" />
                <span className="text-gray-300">nania.cabinetconseil@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Nania Consulting. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}