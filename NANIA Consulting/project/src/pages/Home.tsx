import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Award, BookOpen, Heart } from "lucide-react";
import Button from "../components/Button";
import Card from "../components/Card";
import Section from "../components/Section";
import ablawaboko from '../assets/ablawaboko.jpg';

export default function Home() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white overflow-hidden">
        <div className="container mx-auto px-4 py-16 sm:py-24">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-8">
            <motion.div 
              className="lg:w-1/2"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
                Transformez votre potentiel avec <span className="text-yellow-300">Nania Consulting</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Des solutions personnalisées pour votre développement personnel et professionnel. 
                Nous vous accompagnons dans la réalisation de vos objectifs.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="secondary" size="lg">
                  Découvrez nos formations
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-blue-700">
                  En savoir plus
                </Button>
              </div>
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
            >
              <img 
                src={ablawaboko} 
                alt="Nania Consulting" 
                className="w-full h-auto rounded-xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Section 
        title="Nos Services" 
        subtitle="Découvrez les solutions que nous proposons pour vous accompagner dans votre développement"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card delay={0.1}>
            <div className="p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
                <BookOpen size={32} />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Formation</h3>
              <p className="text-gray-600 mb-6">
                Améliorez vos compétences avec nos formations de qualité adaptées à vos besoins professionnels.
              </p>
              <Link to="/formations" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                En savoir plus <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </Card>
          
          <Card delay={0.2}>
            <div className="p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mb-4">
                <Heart size={32} />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Coaching</h3>
              <p className="text-gray-600 mb-6">
                Accompagnement personnalisé pour atteindre vos objectifs personnels et professionnels.
              </p>
              <Link to="/coaching" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                En savoir plus <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </Card>
          
          <Card delay={0.3}>
            <div className="p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mb-4">
                <Award size={32} />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Supervision</h3>
              <p className="text-gray-600 mb-6">
                Nous supervisons vos travaux et projets pour vous aider à atteindre l'excellence.
              </p>
              <Link to="/blog" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                En savoir plus <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </Card>
        </div>
      </Section>

      {/* Why Choose Us Section */}
      <Section className="bg-gray-50">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img 
              src="https://images.pexels.com/photos/3184429/pexels-photo-3184429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Équipe Nania Consulting" 
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Pourquoi choisir Nania Consulting ?</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold mb-1">Expertise reconnue</h3>
                  <p className="text-gray-600">Notre équipe est composée d'experts reconnus dans leurs domaines respectifs.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold mb-1">Approche personnalisée</h3>
                  <p className="text-gray-600">Chaque client bénéficie d'un accompagnement adapté à ses besoins spécifiques.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold mb-1">Résultats mesurables</h3>
                  <p className="text-gray-600">Nous nous engageons à vous aider à obtenir des résultats concrets et mesurables.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold mb-1">Innovation continue</h3>
                  <p className="text-gray-600">Nous actualisons constamment nos méthodes pour rester à la pointe des dernières avancées.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <Button variant="primary" size="lg">
                Contactez-nous
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section 
        title="Ce que nos clients disent" 
        subtitle="Découvrez les témoignages de nos clients satisfaits"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Sophie D.",
              role: "Directrice Marketing",
              quote: "Un coaching incroyable qui m'a permis d'atteindre mes objectifs professionnels ! Nania Consulting a vraiment fait la différence dans ma carrière.",
              image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              delay: 0.1
            },
            {
              name: "Marc T.",
              role: "Entrepreneur",
              quote: "Les formations proposées sont très complètes et adaptées à mes besoins. J'ai pu acquérir des compétences clés pour développer mon entreprise.",
              image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              delay: 0.2
            },
            {
              name: "Claire L.",
              role: "Responsable RH",
              quote: "Une équipe très professionnelle, je recommande vivement ! Leur approche personnalisée a transformé notre département RH.",
              image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              delay: 0.3
            }
          ].map((testimonial, index) => (
            <Card key={index} delay={testimonial.delay}>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                <div className="mt-4 flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-blue-600 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à transformer votre avenir ?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Rejoignez Nania Consulting et découvrez comment nous pouvons vous aider à atteindre vos objectifs.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="secondary" size="lg">
            Réserver une consultation
          </Button>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-blue-700">
            Voir nos services
          </Button>
        </div>
      </Section>
    </div>
  );
}