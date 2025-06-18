import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Download,
  ChevronDown,
  Code,
  Database,
  Server,
  Smartphone,
  Globe,
  Users,
  Star,
  ArrowRight,
  CheckCircle,
  Zap,
  Trophy,
  Target,
} from "lucide-react";
import profileImage from "./assets/images/profile.jpg";
import aboutImage from "./assets/images/about.jpg";


export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Full Stack Web Development",
      description:
        "End-to-end web applications that drive business growth and user engagement.",
      features: [
        "Custom Web Applications",
        "E-commerce Solutions",
        "Admin Dashboards",
        "API Development",
      ],
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Responsive Design",
      description:
        "Mobile-first designs that work flawlessly across all devices and screen sizes.",
      features: [
        "Mobile Optimization",
        "Cross-Browser Support",
        "UI/UX Design",
        "Performance Optimization",
      ],
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Backend & Database",
      description:
        "Robust server-side solutions with secure and scalable database architecture.",
      features: [
        "RESTful APIs",
        "Database Design",
        "Server Architecture",
        "Security Implementation",
      ],
    },
  ];

  const projects = [
    {
      title: "Enterprise E-Commerce Platform",
      description:
        "Built a complete e-commerce solution that increased client's online sales by 300%. Features include inventory management, payment processing, and real-time analytics.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Spring Boot", "MySQL", "Stripe API"],
      results: "300% increase in sales, 50% faster load times",
      github: "#",
      live: "#",
      featured: true,
    },
    {
      title: "Healthcare Management System",
      description:
        "Developed a comprehensive patient management system for a medical clinic, streamlining appointments and reducing administrative overhead by 60%.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Django", "MySQL", "REST API"],
      results: "60% reduction in admin overhead",
      github: "#",
      live: "#",
      featured: true,
    },
    {
      title: "Real Estate CRM Platform",
      description:
        "Custom CRM solution that helped real estate agents manage 500+ properties and increased lead conversion by 45%.",
      image: "/api/placeholder/600/400",
      technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
      results: "45% increase in lead conversion",
      github: "#",
      live: "#",
      featured: false,
    },
    {
      title: "Restaurant Management System",
      description:
        "Full-featured restaurant POS and management system with online ordering, inventory tracking, and staff management.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Spring Boot", "MySQL"],
      results: "40% faster order processing",
      github: "#",
      live: "#",
      featured: false,
    },
  ];

  const skills = [
    {
      category: "Frontend Development",
      icon: <Code className="w-6 h-6" />,
      items: [
        "HTML5",
        "CSS3",
        "JavaScript ES6+",
        "React.js",
        "Responsive Design",
        "Modern UI/UX",
      ],
      color: "blue",
    },
    {
      category: "Backend Development",
      icon: <Server className="w-6 h-6" />,
      items: [
        "Spring Boot",
        "Django",
        "PHP",
        "RESTful APIs",
        "Microservices",
        "Server Architecture",
      ],
      color: "green",
    },
    {
      category: "Database & Tools",
      icon: <Database className="w-6 h-6" />,
      items: [
        "MySQL",
        "Database Design",
        "Git",
        "Docker",
        "AWS",
        "API Integration",
      ],
      color: "purple",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, TechStart Inc.",
      content:
        "Al Prince delivered an exceptional e-commerce platform that transformed our business. Our sales increased by 300% within the first quarter!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      position: "Operations Manager, HealthCare Plus",
      content:
        "The healthcare management system Al Prince built for us reduced our administrative overhead by 60%. Highly professional and reliable.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      position: "Founder, Local Bistro",
      content:
        "Our restaurant management system has streamlined everything. Order processing is 40% faster and customer satisfaction is through the roof!",
      rating: 5,
    },
  ];

  const stats = [
    {
      number: "50+",
      label: "Projects Completed",
      icon: <Trophy className="w-6 h-6" />,
    },
    {
      number: "30+",
      label: "Happy Clients",
      icon: <Users className="w-6 h-6" />,
    },
    {
      number: "5+",
      label: "Years Experience",
      icon: <Target className="w-6 h-6" />,
    },
    {
      number: "98%",
      label: "Client Satisfaction",
      icon: <Star className="w-6 h-6" />,
    },
  ];

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-gray-900">
              LLAVA<span className="text-blue-600">N</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {[
                "Home",
                "About",
                "Services",
                "Projects",
                "Skills",
                "Testimonials",
                "Contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 bg-white/95 backdrop-blur-md rounded-lg">
              {[
                "Home",
                "About",
                "Services",
                "Projects",
                "Skills",
                "Testimonials",
                "Contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200 rounded-lg"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/2 w-32 h-32 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* Profile Image */}
          <div className="relative mb-6">
            <img
              src={profileImage}
              alt="Al Prince Llavan - Full Stack Developer"
              className="w-28 h-28 rounded-full mx-auto shadow-xl border-3 border-white"
            />
            <div className="absolute -bottom-1 -right-1 bg-green-500 w-6 h-6 rounded-full border-3 border-white flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Al Prince Llavan
          </h1>

          {/* Title and Tagline */}
          <div className="text-xl md:text-2xl text-gray-700 mb-2 font-semibold">
            Full Stack Developer
          </div>
          <div className="text-base md:text-lg text-blue-600 mb-6 font-medium">
            Turning Ideas Into Profitable Digital Solutions
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            I build{" "}
            <span className="font-semibold text-blue-600">
              high-performance web applications
            </span>{" "}
            that drive business growth. From concept to deployment, I deliver
            solutions that{" "}
            <span className="font-semibold text-green-600">
              increase revenue
            </span>{" "}
            and
            <span className="font-semibold text-purple-600">
              {" "}
              enhance user experience
            </span>
            .
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10">
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center group"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 font-semibold flex items-center group">
              <Download size={18} className="mr-2 group-hover:animate-bounce" />
              Download Resume
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center bg-white/70 backdrop-blur-sm rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center mb-2 text-blue-600">
                  {stat.icon}
                </div>
                <div className="text-xl md:text-2xl font-bold text-gray-900">
                  {stat.number}
                </div>
                <div className="text-xs md:text-sm text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Scroll indicator */}
          <div className="animate-bounce">
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <ChevronDown size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Me?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I don't just write code – I solve business problems and create
              digital experiences that deliver measurable results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src={aboutImage}
                alt="Al Prince Llavan at work"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-lg shadow-xl">
                <div className="text-2xl font-bold">5+</div>
                <div className="text-sm">Years Experience</div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Results-Driven Development
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  With over 5 years of experience in full-stack development,
                  I've helped 30+ businesses transform their ideas into
                  successful digital products. My focus is always on creating
                  solutions that not only work perfectly but also drive real
                  business growth.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {[
                  "✅ Custom solutions tailored to your business needs",
                  "✅ Clean, maintainable, and scalable code",
                  "✅ Mobile-first responsive design approach",
                  "✅ SEO optimization and performance tuning",
                  "✅ Ongoing support and maintenance",
                  "✅ On-time delivery and transparent communication",
                ].map((point, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">
                      {point.replace("✅ ", "")}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex space-x-6 pt-4">
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 transition-colors transform hover:scale-110"
                >
                  <Github size={28} />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 transition-colors transform hover:scale-110"
                >
                  <Linkedin size={28} />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 transition-colors transform hover:scale-110"
                >
                  <Mail size={28} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Services That Drive Growth
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive full-stack development services designed to
              transform your business digitally
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 group hover:-translate-y-2"
              >
                <div className="text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <Zap className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real projects, real results. See how I've helped businesses
              achieve their goals through innovative development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-lg hover:shadow-2xl overflow-hidden group transition-all duration-300 hover:-translate-y-2 ${
                  project.featured ? "ring-2 ring-blue-200" : ""
                }`}
              >
                {project.featured && (
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-2 text-sm font-semibold">
                    ⭐ FEATURED PROJECT
                  </div>
                )}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
                    <div className="flex items-center mb-1">
                      <Trophy className="w-4 h-4 text-green-600 mr-2" />
                      <span className="text-sm font-semibold text-green-800">
                        Results Achieved
                      </span>
                    </div>
                    <p className="text-sm text-green-700">{project.results}</p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      className="flex items-center text-gray-600 hover:text-blue-600 transition-colors font-medium"
                    >
                      <Github size={16} className="mr-1" />
                      Code
                    </a>
                    <a
                      href={project.live}
                      className="flex items-center text-gray-600 hover:text-green-600 transition-colors font-medium"
                    >
                      <ExternalLink size={16} className="mr-1" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Technical Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mastery of modern technologies to build scalable, maintainable,
              and high-performance applications
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillCategory, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 group"
              >
                <div
                  className={`text-${skillCategory.color}-600 mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {skillCategory.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  {skillCategory.category}
                </h3>
                <div className="space-y-3">
                  {skillCategory.items.map((skill) => (
                    <div
                      key={skill}
                      className={`bg-${skillCategory.color}-50 text-${skillCategory.color}-800 px-4 py-3 rounded-lg hover:bg-${skillCategory.color}-100 transition-colors duration-200 font-medium`}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Clients Say
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take my word for it – hear from the businesses I've
              helped transform
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 shadow-lg">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map(
                    (_, i) => (
                      <Star
                        key={i}
                        className="w-6 h-6 text-yellow-400 fill-current"
                      />
                    )
                  )}
                </div>
                <blockquote className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed italic">
                  "{testimonials[currentTestimonial].content}"
                </blockquote>
                <div>
                  <div className="font-bold text-lg text-gray-900">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-blue-600 font-medium">
                    {testimonials[currentTestimonial].position}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentTestimonial ? "bg-blue-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Let's discuss how I can help transform your business with
              cutting-edge web solutions. Get a free consultation and project
              quote today!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">
                Let's Build Something Amazing Together
              </h3>
              <div className="space-y-6 mb-8">
                <div className="flex items-center">
                  <Mail className="mr-4 text-blue-400" size={24} />
                  <div>
                    <div className="font-semibold">Email</div>
                    <span className="text-gray-300">
                      alprince.llavan@email.com
                    </span>
                  </div>
                </div>
                <div className="flex items-center">
                  <Github className="mr-4 text-blue-400" size={24} />
                  <div>
                    <div className="font-semibold">GitHub</div>
                    <span className="text-gray-300">
                      github.com/alprincellavan
                    </span>
                  </div>
                </div>
                <div className="flex items-center">
                  <Linkedin className="mr-4 text-blue-400" size={24} />
                  <div>
                    <div className="font-semibold">LinkedIn</div>
                    <span className="text-gray-300">
                      linkedin.com/in/alprincellavan
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-800/30 rounded-lg p-6 border border-blue-600/30">
                <h4 className="font-bold mb-3 text-blue-300">
                  🚀 Free Consultation Includes:
                </h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>✅ Project scope analysis</li>
                  <li>✅ Technology recommendations</li>
                  <li>✅ Timeline and cost estimation</li>
                  <li>✅ Growth strategy discussion</li>
                </ul>
              </div>
            </div>

            <div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h3 className="text-xl font-bold mb-6">Get Your Free Quote</h3>
                <div className="space-y-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name *"
                      className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg focus:outline-none focus:border-blue-400 transition-colors placeholder-gray-300 text-white"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email *"
                      className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg focus:outline-none focus:border-blue-400 transition-colors placeholder-gray-300 text-white"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Company Name"
                      className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg focus:outline-none focus:border-blue-400 transition-colors placeholder-gray-300 text-white"
                    />
                  </div>
                  <div>
                    <select className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg focus:outline-none focus:border-blue-400 transition-colors text-white">
                      <option value="" className="text-gray-900">
                        Select Project Type
                      </option>
                      <option value="web-app" className="text-gray-900">
                        Web Application
                      </option>
                      <option value="ecommerce" className="text-gray-900">
                        E-commerce Site
                      </option>
                      <option value="cms" className="text-gray-900">
                        Content Management System
                      </option>
                      <option value="api" className="text-gray-900">
                        API Development
                      </option>
                      <option value="other" className="text-gray-900">
                        Other
                      </option>
                    </select>
                  </div>
                  <div>
                    <textarea
                      rows="4"
                      placeholder="Tell me about your project... What are your goals? What challenges are you facing? *"
                      className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg focus:outline-none focus:border-blue-400 transition-colors resize-none placeholder-gray-300 text-white"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center group"
                  >
                    Get Free Consultation
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <p className="text-sm text-gray-400 text-center">
                    ⚡ Usually respond within 2 hours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="text-2xl font-bold text-white mb-4">
                LLAVA<span className="text-blue-500">N</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Full Stack Developer specializing in creating high-performance
                web applications that drive business growth and enhance user
                experience.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110"
                >
                  <Github size={24} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    E-commerce Solutions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    API Development
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Database Design
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="hover:text-blue-400 transition-colors"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("projects")}
                    className="hover:text-blue-400 transition-colors"
                  >
                    Projects
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("skills")}
                    className="hover:text-blue-400 transition-colors"
                  >
                    Skills
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="hover:text-blue-400 transition-colors"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p>
              &copy; 2024 Al Prince Llavan. All rights reserved. Built with
              React & Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
