import { CheckCircle, Clock, Users } from "lucide-react";
import { motion } from "framer-motion";
import Button from "../components/Button";
import Card from "../components/Card";
import Section from "../components/Section";

export default function Coaching() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div>
      <Section 
        className="bg-gradient-to-r from-blue-600 to-blue-700 text-white" 
        title="Coaching Personnalisé" 
        subtitle="Un accompagnement sur mesure pour atteindre vos objectifs personnels et professionnels"
      />
      
      {/* Introduction Section */}
      <Section>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Notre approche de coaching</h2>
            <p className="text-lg text-gray-600 mb-6">
              Chez Nania Consulting, nous croyons qu'un coaching efficace est celui qui est adapté à vos besoins spécifiques. 
              Notre méthode combine différentes approches et techniques pour vous aider à surmonter vos défis et à atteindre vos objectifs.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Que vous souhaitiez développer votre leadership, améliorer votre communication, gérer votre stress ou 
              accélérer votre développement de carrière, nos coachs certifiés sont là pour vous accompagner à chaque étape.
            </p>
            <div className="space-y-3">
              {[
                "Accompagnement personnalisé selon vos besoins",
                "Méthodes éprouvées et basées sur des principes scientifiques",
                "Coachs certifiés avec une expérience solide",
                "Suivi régulier de vos progrès",
                "Approche pragmatique orientée résultats"
              ].map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle size={20} className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2">
            <img 
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Coaching session" 
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>
        </div>
      </Section>
      
      {/* Programs Section */}
      <Section 
        className="bg-gray-50"
        title="Nos programmes de coaching"
        subtitle="Découvrez notre gamme de programmes conçus pour répondre à différents besoins"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Coaching de Carrière",
              description: "Définissez vos objectifs professionnels et élaborez un plan d'action concret pour les atteindre. Idéal pour les transitions de carrière ou l'évolution professionnelle.",
              duration: "6 sessions",
              format: "Individuel",
              price: "800€",
              color: "blue",
              icon: "🚀",
              delay: 0.1
            },
            {
              title: "Leadership & Management",
              description: "Développez vos compétences en leadership pour inspirer et motiver vos équipes. Améliorez votre prise de décision et votre gestion d'équipe.",
              duration: "8 sessions",
              format: "Individuel ou groupe",
              price: "1200€",
              color: "yellow",
              icon: "👥",
              delay: 0.2
            },
            {
              title: "Équilibre Vie Pro/Perso",
              description: "Retrouvez l'harmonie entre votre vie professionnelle et personnelle. Gérez votre stress et améliorez votre bien-être global.",
              duration: "5 sessions",
              format: "Individuel",
              price: "650€",
              color: "green",
              icon: "⚖️",
              delay: 0.3
            },
            {
              title: "Communication Efficace",
              description: "Améliorez votre communication interpersonnelle, votre prise de parole en public et votre capacité à gérer les conflits.",
              duration: "6 sessions",
              format: "Individuel ou groupe",
              price: "750€",
              color: "purple",
              icon: "🗣️",
              delay: 0.4
            },
            {
              title: "Développement Personnel",
              description: "Identifiez vos forces et travaillez sur vos axes d'amélioration pour devenir la meilleure version de vous-même.",
              duration: "7 sessions",
              format: "Individuel",
              price: "900€",
              color: "pink",
              icon: "🌱",
              delay: 0.5
            },
            {
              title: "Coaching d'Équipe",
              description: "Améliorez la cohésion et la performance de votre équipe. Idéal pour les équipes de direction ou les départements en transformation.",
              duration: "4 sessions",
              format: "Groupe (5-10 personnes)",
              price: "1500€",
              color: "orange",
              icon: "🤝",
              delay: 0.6
            }
          ].map((program, index) => (
            <Card key={index} delay={program.delay}>
              <div className="p-6">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl mb-4 ${
                  program.color === "blue" ? "bg-blue-100" :
                  program.color === "yellow" ? "bg-yellow-100" :
                  program.color === "green" ? "bg-green-100" :
                  program.color === "purple" ? "bg-purple-100" :
                  program.color === "pink" ? "bg-pink-100" :
                  "bg-orange-100"
                }`}>
                  {program.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{program.title}</h3>
                <p className="text-gray-600 mb-5">{program.description}</p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Clock size={16} className="mr-2" />
                    <span>{program.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users size={16} className="mr-2" />
                    <span>Format: {program.format}</span>
                  </div>
                  <div className="font-semibold text-lg mt-1">
                    {program.price}
                  </div>
                </div>
                <Button variant="primary">
                  En savoir plus
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Section>
      
      {/* Coach Introduction */}
      <Section
        title="Nos coachs experts"
        subtitle="Une équipe de professionnels qualifiés prêts à vous accompagner"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Dr. Philippe Laurent",
              role: "Coach Exécutif",
              bio: "Avec plus de 15 ans d'expérience en coaching exécutif, Philippe accompagne les dirigeants dans leur développement de leadership.",
              image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              specialties: ["Leadership", "Stratégie", "Transition de carrière"],
              delay: 0.1
            },
            {
              name: "Marie Dubois",
              role: "Coach de Vie et Carrière",
              bio: "Certifiée en coaching et en PNL, Marie aide ses clients à trouver l'équilibre parfait entre vie professionnelle et personnelle.",
              image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              specialties: ["Équilibre de vie", "Gestion du stress", "Développement personnel"],
              delay: 0.2
            },
            {
              name: "Antoine Moreau",
              role: "Coach d'Équipe",
              bio: "Expert en dynamique de groupe, Antoine accompagne les équipes pour améliorer leur cohésion et leur performance collective.",
              image: "https://images.pexels.com/photos/2406949/pexels-photo-2406949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              specialties: ["Cohésion d'équipe", "Résolution de conflits", "Management agile"],
              delay: 0.3
            }
          ].map((coach, index) => (
            <Card key={index} delay={coach.delay}>
              <div className="p-6 text-center">
                <img 
                  src={coach.image} 
                  alt={coach.name} 
                  className="w-28 h-28 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold mb-1">{coach.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{coach.role}</p>
                <p className="text-gray-600 mb-4">{coach.bio}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {coach.specialties.map((specialty, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
                      {specialty}
                    </span>
                  ))}
                </div>
                <Button variant="outline" className="mt-5">
                  Voir le profil complet
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Section>
      
      {/* Process Section */}
      <Section className="bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Notre processus de coaching</h2>
          
          <div className="space-y-12">
            {[
              {
                step: 1,
                title: "Consultation initiale",
                description: "Une première rencontre pour comprendre vos besoins, objectifs et définir le cadre de notre collaboration.",
                icon: "🤝",
                delay: 0.1
              },
              {
                step: 2,
                title: "Évaluation et diagnostic",
                description: "Analyse approfondie de votre situation actuelle, identification des forces et axes d'amélioration.",
                icon: "🔍",
                delay: 0.2
              },
              {
                step: 3,
                title: "Élaboration du plan d'action",
                description: "Définition d'objectifs clairs et mesurables, et création d'un plan d'action personnalisé.",
                icon: "📝",
                delay: 0.3
              },
              {
                step: 4,
                title: "Sessions de coaching",
                description: "Accompagnement régulier avec des sessions structurées pour avancer vers vos objectifs.",
                icon: "🚀",
                delay: 0.4
              },
              {
                step: 5,
                title: "Suivi et ajustements",
                description: "Évaluation continue des progrès et adaptation du plan d'action si nécessaire.",
                icon: "📊",
                delay: 0.5
              }
            ].map((step, index) => (
              <motion.div 
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.5, delay: step.delay }}
                className="flex"
              >
                <div className="flex-shrink-0 mr-6">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                    {step.step}
                  </div>
                  {index < 4 && (
                    <div className="h-16 w-0.5 bg-blue-200 mx-auto mt-3"></div>
                  )}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 flex items-center">
                    {step.title} <span className="ml-2 text-2xl">{step.icon}</span>
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
      
      {/* CTA Section */}
      <Section className="bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Prêt à commencer votre parcours de coaching ?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Réservez dès maintenant une consultation gratuite de 30 minutes avec l'un de nos coachs pour discuter de vos objectifs.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="secondary" size="lg">
            Réserver une consultation
          </Button>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-blue-700">
            En savoir plus
          </Button>
        </div>
      </Section>
    </div>
  );
}