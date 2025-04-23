import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import Button from "../components/Button";
import Section from "../components/Section";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (to be implemented)
    alert("Message envoyé ! Nous vous contacterons bientôt.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  return (
    <div>
      <Section 
        className="bg-gradient-to-r from-blue-600 to-blue-700 text-white" 
        title="Contactez-nous" 
        subtitle="Nous sommes là pour répondre à vos questions et vous accompagner dans vos projets"
      />
      
      <Section className="py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Parlons de votre projet</h2>
            <p className="text-gray-600 mb-8">
              Que vous ayez une question sur nos services, que vous souhaitiez discuter d'un projet ou simplement en savoir plus sur nos offres, 
              n'hésitez pas à nous contacter. Notre équipe est prête à vous aider.
            </p>
            
            <div className="space-y-6 mb-8">
              <motion.div 
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-blue-100 text-blue-600 p-3 rounded-full mr-4">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Notre adresse</h3>
                  <p className="text-gray-600">123 Avenue Principale, Paris 75001, France</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="bg-blue-100 text-blue-600 p-3 rounded-full mr-4">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Téléphone</h3>
                  <p className="text-gray-600">+33 1 23 45 67 89</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="bg-blue-100 text-blue-600 p-3 rounded-full mr-4">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Email</h3>
                  <p className="text-gray-600">contact@naniaconsulting.com</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="bg-blue-100 text-blue-600 p-3 rounded-full mr-4">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Heures d'ouverture</h3>
                  <p className="text-gray-600">Lundi - Vendredi: 9h00 - 18h00</p>
                  <p className="text-gray-600">Samedi: Sur rendez-vous uniquement</p>
                </div>
              </motion.div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-inner">
              <h3 className="text-lg font-semibold mb-3">Réseaux sociaux</h3>
              <p className="text-gray-600 mb-4">Suivez-nous pour rester informé de nos actualités et événements</p>
              <div className="flex space-x-4">
                {["facebook", "twitter", "linkedin", "instagram"].map((social) => (
                  <a 
                    key={social}
                    href="#" 
                    className="w-10 h-10 bg-white text-blue-600 rounded-full flex items-center justify-center shadow-sm hover:bg-blue-600 hover:text-white transition-colors duration-300"
                  >
                    <i className={`fab fa-${social}`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div>
            <motion.div 
              className="bg-white rounded-xl shadow-lg p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-6">Envoyez-nous un message</h3>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Nom complet</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Téléphone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Sujet</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      <option value="">Sélectionnez un sujet</option>
                      <option value="formation">Formation</option>
                      <option value="coaching">Coaching</option>
                      <option value="supervision">Supervision</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  ></textarea>
                </div>
                
                <Button 
                  variant="primary" 
                  size="lg" 
                  className="w-full flex items-center justify-center"
                >
                  <Send size={18} className="mr-2" />
                  Envoyer le message
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </Section>
      
      {/* Map Section */}
      <Section className="p-0 h-96">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.292292615509614!3d48.85836507928746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1655051496382!5m2!1sfr!2sfr"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Section>
      
      {/* FAQ Section */}
      <Section 
        className="bg-gray-50"
        title="Questions fréquentes" 
        subtitle="Trouvez rapidement des réponses à vos questions"
      >
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            {[
              {
                question: "Comment se déroule une première séance de coaching ?",
                answer: "La première séance est une consultation de découverte qui dure environ 1h. Nous discutons de vos objectifs, vos attentes et vos besoins. C'est également l'occasion de voir si le coaching vous convient et si nous sommes la bonne équipe pour vous accompagner."
              },
              {
                question: "Quelle est la durée d'un programme de coaching ?",
                answer: "La durée varie selon vos objectifs et vos besoins. En général, nos programmes comportent entre 5 et 10 séances réparties sur plusieurs mois. Chaque programme est personnalisé pour s'adapter à votre situation spécifique."
              },
              {
                question: "Où se déroulent les séances de coaching ?",
                answer: "Nous proposons des séances en présentiel dans nos locaux à Paris, ainsi que des séances à distance par visioconférence. C'est vous qui choisissez la formule qui vous convient le mieux."
              },
              {
                question: "Est-ce que vous proposez des formations en entreprise ?",
                answer: "Oui, nous proposons des formations sur mesure pour les entreprises. Nous pouvons intervenir directement dans vos locaux ou organiser des sessions dans nos espaces de formation."
              }
            ].map((faq, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <p className="text-gray-600 mb-4">Vous avez d'autres questions ?</p>
            <Button variant="primary">
              Contactez notre équipe
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}