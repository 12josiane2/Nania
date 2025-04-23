import { useState } from "react";
import { Calendar, User, MessageCircle, Tag } from "lucide-react";
import Button from "../components/Button";
import Card from "../components/Card";
import Section from "../components/Section";

const blogs = [
  {
    id: 1,
    title: "10 conseils pour améliorer votre leadership",
    excerpt: "Découvrez comment devenir un leader plus efficace et inspirer votre équipe vers la réussite.",
    content: "Le leadership est une compétence qui peut être développée et améliorée...",
    date: "15 Mai 2025",
    author: "Sophie Martin",
    comments: 24,
    tags: ["Leadership", "Management"],
    image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    title: "L'impact de l'intelligence artificielle sur les entreprises",
    excerpt: "Comment l'IA transforme le paysage des affaires et pourquoi vous devriez vous y intéresser.",
    content: "L'intelligence artificielle est en train de révolutionner la manière dont les entreprises fonctionnent...",
    date: "28 Avril 2025",
    author: "Thomas Dubois",
    comments: 18,
    tags: ["Technologie", "IA", "Innovation"],
    image: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    title: "Comment créer une culture d'entreprise positive",
    excerpt: "Les stratégies pour développer un environnement de travail motivant et productif.",
    content: "La culture d'entreprise est l'âme de votre organisation...",
    date: "10 Avril 2025",
    author: "Marie Leroy",
    comments: 32,
    tags: ["Culture d'entreprise", "RH"],
    image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 4,
    title: "Les compétences essentielles pour réussir en 2025",
    excerpt: "Quelles sont les aptitudes que les professionnels doivent développer pour rester compétitifs.",
    content: "Le marché du travail évolue rapidement et certaines compétences deviennent cruciales...",
    date: "2 Mars 2025",
    author: "Jean Dupont",
    comments: 15,
    tags: ["Carrière", "Développement personnel"],
    image: "https://images.pexels.com/photos/3205568/pexels-photo-3205568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 5,
    title: "Gérer le stress professionnel efficacement",
    excerpt: "Des techniques éprouvées pour faire face à la pression au travail et préserver votre bien-être.",
    content: "Le stress au travail est un phénomène courant mais qui peut être géré...",
    date: "18 Février 2025",
    author: "Céline Durand",
    comments: 29,
    tags: ["Bien-être", "Stress", "Santé"],
    image: "https://images.pexels.com/photos/3807738/pexels-photo-3807738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

const allTags = Array.from(new Set(blogs.flatMap(blog => blog.tags)));

export default function Blog() {
  const [activeTag, setActiveTag] = useState<string | null>(null);
  
  const filteredBlogs = activeTag 
    ? blogs.filter(blog => blog.tags.includes(activeTag))
    : blogs;

  return (
    <div>
      <Section 
        className="bg-gradient-to-r from-blue-600 to-blue-700 text-white" 
        title="Notre Blog" 
        subtitle="Insights, conseils et actualités pour votre développement professionnel"
      />
      
      <Section className="py-8">
        <div className="mb-8 flex flex-wrap gap-2 justify-center">
          <Button 
            variant={activeTag === null ? "primary" : "outline"} 
            size="sm"
            onClick={() => setActiveTag(null)}
          >
            Tous
          </Button>
          {allTags.map(tag => (
            <Button 
              key={tag} 
              variant={activeTag === tag ? "primary" : "outline"} 
              size="sm"
              onClick={() => setActiveTag(tag)}
            >
              {tag}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {filteredBlogs.slice(0, 2).map((blog, index) => (
            <Card key={blog.id} delay={index * 0.1} className="flex flex-col">
              <img 
                src={blog.image} 
                alt={blog.title}
                className="w-full h-60 object-cover"
              />
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                  <span className="flex items-center">
                    <Calendar size={14} className="mr-1" />
                    {blog.date}
                  </span>
                  <span className="flex items-center">
                    <User size={14} className="mr-1" />
                    {blog.author}
                  </span>
                  <span className="flex items-center">
                    <MessageCircle size={14} className="mr-1" />
                    {blog.comments}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold mb-4">{blog.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow">{blog.excerpt}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {blog.tags.map(tag => (
                    <span 
                      key={tag}
                      className="inline-flex items-center text-xs px-2.5 py-1 rounded-full bg-blue-100 text-blue-800"
                    >
                      <Tag size={12} className="mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Button variant="primary">Lire la suite</Button>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.slice(2).map((blog, index) => (
            <Card key={blog.id} delay={(index + 2) * 0.1} className="flex flex-col">
              <img 
                src={blog.image} 
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5 flex-1 flex flex-col">
                <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
                  <span className="flex items-center">
                    <Calendar size={12} className="mr-1" />
                    {blog.date}
                  </span>
                  <span className="flex items-center">
                    <MessageCircle size={12} className="mr-1" />
                    {blog.comments}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-3">{blog.title}</h3>
                <p className="text-gray-600 mb-4 text-sm flex-grow">{blog.excerpt}</p>
                
                <div className="flex flex-wrap gap-1 mb-3">
                  {blog.tags.map(tag => (
                    <span 
                      key={tag}
                      className="inline-flex items-center text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Button variant="outline" size="sm">Lire la suite</Button>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="primary" size="lg">
            Voir plus d'articles
          </Button>
        </div>
      </Section>
      
      {/* Newsletter Section */}
      <Section className="bg-gray-50">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Restez informé</h2>
          <p className="text-gray-600 mb-8">
            Abonnez-vous à notre newsletter pour recevoir les derniers articles, conseils et actualités directement dans votre boîte mail.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Votre adresse email" 
              className="flex-grow py-3 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <Button variant="primary">S'abonner</Button>
          </div>
        </div>
      </Section>
    </div>
  );
}