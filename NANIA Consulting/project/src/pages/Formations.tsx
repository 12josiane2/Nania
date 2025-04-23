import { useState } from "react";
import { motion } from "framer-motion";
import { Clock, Calendar, Users, DollarSign, Filter, Search } from "lucide-react";
import Button from "../components/Button";
import Card from "../components/Card";
import Section from "../components/Section";

const formations = [
  {
    id: 1,
    title: "Développement Web",
    description: "Apprenez à créer des sites web interactifs avec HTML, CSS et JavaScript. Ce cours couvre les fondamentaux jusqu'aux frameworks modernes.",
    duration: "2 mois",
    sessions: "3 sessions par semaine",
    studentsCount: 24,
    price: "500€",
    category: "tech",
    image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    title: "Marketing Digital",
    description: "Maîtrisez les bases du marketing en ligne, des réseaux sociaux à la publicité payante. Développez une stratégie digitale complète.",
    duration: "1 mois",
    sessions: "2 sessions par semaine",
    studentsCount: 18,
    price: "300€",
    category: "marketing",
    image: "https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    title: "Design Graphique",
    description: "Apprenez à créer des visuels et des maquettes pour le web avec des outils comme Photoshop et Figma. Devenez un designer professionnel.",
    duration: "3 mois",
    sessions: "2 sessions par semaine",
    studentsCount: 15,
    price: "700€",
    category: "design",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 4,
    title: "Management d'Équipe",
    description: "Développez vos compétences en leadership et en gestion d'équipe pour améliorer la productivité et la satisfaction de vos collaborateurs.",
    duration: "6 semaines",
    sessions: "1 session par semaine",
    studentsCount: 12,
    price: "450€",
    category: "business",
    image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 5,
    title: "Intelligence Artificielle",
    description: "Découvrez les principes fondamentaux de l'IA et du machine learning. Apprenez à créer des modèles prédictifs et des algorithmes.",
    duration: "3 mois",
    sessions: "2 sessions par semaine",
    studentsCount: 20,
    price: "800€",
    category: "tech",
    image: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 6,
    title: "Communication Efficace",
    description: "Améliorez vos compétences en communication verbale et non verbale pour mieux vous exprimer en contexte professionnel.",
    duration: "4 semaines",
    sessions: "2 sessions par semaine",
    studentsCount: 16,
    price: "250€",
    category: "business",
    image: "https://images.pexels.com/photos/3153201/pexels-photo-3153201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

const categories = [
  { value: "all", label: "Toutes les catégories" },
  { value: "tech", label: "Technologie" },
  { value: "marketing", label: "Marketing" },
  { value: "design", label: "Design" },
  { value: "business", label: "Business" }
];

export default function Formations() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  
  const filteredFormations = formations.filter(formation => {
    const matchesSearch = formation.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         formation.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || formation.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      <Section 
        className="bg-gradient-to-r from-blue-600 to-blue-700 text-white" 
        title="Nos Formations" 
        subtitle="Développez vos compétences avec nos formations professionnelles de qualité"
      />
      
      <Section className="py-8">
        <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-8">
          <div className="w-full md:w-auto flex-1 relative">
            <input
              type="text"
              placeholder="Rechercher une formation..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <Search size={20} className="absolute top-2.5 left-3 text-gray-400" />
          </div>
          
          <div className="w-full md:w-auto flex items-center gap-2">
            <Filter size={20} className="text-gray-600" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {categories.map(category => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        
        {filteredFormations.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFormations.map((formation, index) => (
              <Card key={formation.id} delay={index * 0.1}>
                <div>
                  <img 
                    src={formation.image} 
                    alt={formation.title}
                    className="w-full h-52 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{formation.title}</h3>
                    <p className="text-gray-600 mb-4">{formation.description}</p>
                    
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center text-gray-600">
                        <Clock size={16} className="mr-2" />
                        <span>Durée: {formation.duration}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Calendar size={16} className="mr-2" />
                        <span>{formation.sessions}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Users size={16} className="mr-2" />
                        <span>{formation.studentsCount} étudiants</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <DollarSign size={16} className="mr-2" />
                        <span>Prix: {formation.price}</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button variant="primary" size="md" className="flex-1">
                        En savoir plus
                      </Button>
                      <Button variant="outline" size="md" className="flex-1">
                        S'inscrire
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold mb-2">Aucune formation trouvée</h3>
            <p className="text-gray-600">Veuillez modifier vos critères de recherche et réessayer.</p>
          </div>
        )}
      </Section>
      
      {/* CTA Section */}
      <Section className="bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Vous ne trouvez pas ce que vous cherchez ?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Contactez-nous pour discuter de vos besoins spécifiques en formation. 
            Nous pouvons créer des programmes personnalisés adaptés à vos objectifs.
          </p>
          <Button variant="primary" size="lg">
            Demander un programme personnalisé
          </Button>
        </div>
      </Section>
    </div>
  );
}