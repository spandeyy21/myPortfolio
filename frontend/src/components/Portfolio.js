import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { 
  Cloud, 
  Shield, 
  Database, 
  Code, 
  Mail, 
  Phone, 
  Linkedin, 
  ChevronDown,
  MapPin,
  Calendar,
  Building
} from "lucide-react";
import mockData from "../data/mock";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "skills", "experience", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/90 backdrop-blur-md z-50 border-b border-gray-700">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="font-light text-xl tracking-tight text-white"
            >
              SP
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {mockData.navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-normal transition-all duration-300 hover:-translate-y-0.5 ${
                    activeSection === item.id 
                      ? "text-white font-medium" 
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <Button 
              onClick={() => scrollToSection("contact")}
              className="bg-white text-gray-900 hover:bg-gray-100 transition-all duration-300"
            >
              Contact
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-cyan-400/20 rounded-full blur-lg"></div>
          <div className="absolute bottom-40 left-20 w-20 h-20 bg-yellow-400/20 rounded-full blur-lg"></div>
          <div className="absolute bottom-20 right-40 w-28 h-28 bg-green-400/20 rounded-full blur-xl"></div>
          
          {/* Geometric shapes */}
          <div className="absolute top-32 right-32 w-16 h-16 border-2 border-blue-400/30 rotate-45"></div>
          <div className="absolute bottom-32 left-32 w-12 h-12 border-2 border-cyan-400/30 rotate-12"></div>
          
          {/* Dot patterns */}
          <div className="absolute top-60 left-1/4 grid grid-cols-4 gap-2 opacity-30">
            {[...Array(16)].map((_, i) => (
              <div key={i} className="w-1 h-1 bg-blue-400 rounded-full"></div>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center space-x-2 mb-4">
              <span className="text-2xl">👋</span>
            </div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold tracking-tight leading-tight text-white"
            >
              Hello, I am <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                {mockData.hero.name}
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-lg"
            >
              {mockData.hero.tagline}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-3"
            >
              {mockData.hero.highlights.map((highlight, index) => (
                <Badge 
                  key={index}
                  variant="outline" 
                  className="px-4 py-2 text-sm border-gray-600 text-gray-300 bg-gray-800/50 backdrop-blur-sm"
                >
                  {highlight}
                </Badge>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side - Creative profile image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Background creative shapes */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-80 h-96">
                {/* Colorful background sections */}
                <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-b from-yellow-400/80 to-yellow-500/80 rounded-l-3xl"></div>
                <div className="absolute top-0 left-20 w-32 h-full bg-gradient-to-b from-cyan-400/80 to-blue-500/80"></div>
                <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-b from-blue-500/80 to-purple-600/80 rounded-r-3xl"></div>
                
                {/* Pattern overlays */}
                <div className="absolute top-4 left-4 w-28 h-full opacity-60">
                  <div className="grid grid-cols-6 gap-1 h-full">
                    {[...Array(180)].map((_, i) => (
                      <div key={i} className="w-1 h-1 bg-gray-900 rounded-full"></div>
                    ))}
                  </div>
                </div>
                
                <div className="absolute top-4 left-24 w-28 h-full opacity-40">
                  <div className="grid grid-cols-6 gap-1 h-full">
                    {[...Array(180)].map((_, i) => (
                      <div key={i} className="w-1 h-1 bg-white rounded-full"></div>
                    ))}
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-8 right-8 space-y-2">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="w-3 h-3 border-2 border-white/60 rounded-full"></div>
                  ))}
                </div>
                
                {/* Wavy lines */}
                <div className="absolute bottom-20 left-8">
                  <svg width="60" height="40" viewBox="0 0 60 40" className="text-gray-900/40">
                    <path d="M0 20 Q15 10 30 20 T60 20" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <path d="M0 25 Q15 15 30 25 T60 25" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <path d="M0 30 Q15 20 30 30 T60 30" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Profile image with creative mask */}
            <div className="relative z-10 w-80 h-96 flex items-center justify-center">
              <div className="relative w-64 h-80">
                <div 
                  className="w-full h-full bg-cover bg-center bg-no-repeat rounded-3xl shadow-2xl"
                  style={{
                    backgroundImage: `url('https://customer-assets.emergentagent.com/job_data-governance-1/artifacts/hqmhyi1a_profile%20photo.jpg')`,
                    clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)'
                  }}
                ></div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <button
            onClick={() => scrollToSection("about")}
            className="animate-bounce p-2 rounded-full hover:bg-gray-800 transition-colors duration-300"
          >
            <ChevronDown className="w-6 h-6 text-gray-400" />
          </button>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-light mb-16 text-center"
          >
            About Me
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <div className="aspect-square rounded-lg mb-6 overflow-hidden">
                <img 
                  src="https://customer-assets.emergentagent.com/job_data-governance-1/artifacts/hqmhyi1a_profile%20photo.jpg"
                  alt="Saurabh Pandey"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-gray-300">
                {mockData.about.description}
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-300">{mockData.about.location}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-300">{mockData.about.experience}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Building className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-300">{mockData.about.currentRole}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-light mb-16 text-center"
          >
            Skills & Expertise
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {mockData.skills.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="border-gray-700 bg-gray-800 hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-2 bg-gray-700 rounded-lg">
                        {category.icon}
                      </div>
                      <CardTitle className="text-xl font-normal text-white">{category.category}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.items.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex}
                          variant="secondary" 
                          className="bg-gray-700 text-gray-200 hover:bg-gray-600 transition-colors duration-200"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-light mb-16 text-center"
          >
            Experience
          </motion.h2>
          <div className="space-y-12">
            {mockData.experience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border-l-2 border-gray-600 pl-8 relative"
              >
                <div className="absolute -left-2 top-0 w-4 h-4 bg-white rounded-full"></div>
                <div className="bg-gray-700 p-8 rounded-lg shadow-sm border border-gray-600">
                  <h3 className="text-2xl font-normal mb-2 text-white">{job.title}</h3>
                  <p className="text-gray-300 mb-2">{job.company}</p>
                  <p className="text-sm text-gray-400 mb-4">{job.duration}</p>
                  <p className="text-gray-300 leading-relaxed">{job.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-light mb-16 text-center"
          >
            Key Projects
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {mockData.projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="border-gray-700 bg-gray-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <CardTitle className="text-xl font-normal mb-2 text-white">{project.title}</CardTitle>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex}
                          variant="outline" 
                          className="text-xs border-gray-600 text-gray-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300 leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-light mb-8"
          >
            Let's Connect
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl font-light text-gray-300 mb-12"
          >
            Ready to discuss your next privacy engineering or cloud architecture project?
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col md:flex-row justify-center items-center gap-8"
          >
            {mockData.contact.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="flex items-center space-x-3 text-lg hover:text-gray-300 transition-colors duration-300 group"
              >
                <div className="p-3 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors duration-300">
                  {item.icon}
                </div>
                <span>{item.label}</span>
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-6 border-t border-gray-700">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Saurabh Pandey. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;