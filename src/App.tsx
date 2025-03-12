import React, { useEffect, useState, useRef } from 'react';
import { 
  Code2, 
  Terminal, 
  Network, 
  Database, 
  Cpu, 
  MessageSquare,
  Github,
  Linkedin,
  Mail,
  Instagram,
  Globe,
  Brain,
  Users,
  Server,
  Calculator,
  Facebook
} from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

// Sound effect for interactions
const playSound = () => {
  const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3');
  audio.volume = 0.2;
  audio.play();
};

function App() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    setIsLoaded(true);

    // Initialize EmailJS
    emailjs.init("AKZ6QSQ7FCGAcEQgR"); // Replace with your EmailJS public key

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleClick = () => {
    playSound();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    try {
      await emailjs.sendForm(
        'service_t8qrkzt', // Replace with your EmailJS service ID
        'template_bo57dyj', // Replace with your EmailJS template ID
        formRef.current,
        'AKZ6QSQ7FCGAcEQgR' // Replace with your EmailJS public key
      );
      toast.success('Message sent successfully!');
      formRef.current.reset();
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    }
    setIsSubmitting(false);
  };

  const projects = [
    {
      title: "Lumina Enterprises",
      url: "https://luminaenterprises.in",
      icon: <Globe size={24} />,
      description: "A comprehensive business website showcasing enterprise solutions and services.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
    },
    {
      title: "Cultural India",
      url: "https://culturalindia.netlify.app",
      icon: <Globe size={24} />,
      description: "A website celebrating Indian culture, traditions, and heritage.",
      image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
    },
    {
      title: "Fashion Hub",
      url: "https://fashionfuture.netlify.app",
      icon: <Globe size={24} />,
      description: "An e-commerce platform for fashion and lifestyle products.",
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
    },
    {
      title: "TCDAU",
      url: "https://tcdau.com.",
      icon: <Globe size={24} />,
      description: "An Artist Union.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
    },
    {
      title: "Omkar System",
      url: "https://omkarsystem.netlify.app",
      icon: <Globe size={24} />,
      description: "For the media people.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
    },
    {
      title: "Sai Multiservices",
      url: "https://saimultiservices.onrendor.com",
      icon: <Globe size={24} />,
      description: "One place for all documents.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
    },
    {
      title: "AI Face Expression Detector",
      icon: <Brain size={24} />,
      description: "Machine learning application that detects and analyzes facial expressions in real-time.",
      image: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Employee Database Management",
      icon: <Users size={24} />,
      description: "Java & MySQL based system for managing employee records and information.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Student Database (Socket Programming)",
      icon: <Server size={24} />,
      description: "Client-server application using socket programming for student data management.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "GST Invoice Generator",
      icon: <Calculator size={24} />,
      description: "Automated system for generating GST compliant invoices.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-indigo-900 via-fuchsia-900 to-rose-900 text-white relative overflow-hidden">
      <Toaster position="top-right" />
      
      {/* Custom cursor */}
      <div 
        className="fixed w-8 h-8 pointer-events-none z-50 mix-blend-difference"
        style={{
          left: cursorPosition.x - 16,
          top: cursorPosition.y - 16,
          background: 'rgba(255, 255, 255, 0.2)',
          borderRadius: '50%',
          transform: 'scale(1)',
          transition: 'transform 0.2s ease-out',
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-black/20 backdrop-blur-md z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-center space-x-8">
            {['home', 'about', 'projects', 'experience', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => {
                  handleClick();
                  setActiveSection(section);
                  const element = document.getElementById(section);
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`capitalize ${
                  activeSection === section 
                    ? 'text-rose-400 border-b-2 border-rose-400' 
                    : 'text-white/70 hover:text-white'
                } transition-colors`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 pt-20 pb-32">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center">
          <div className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-400">
              SAKA MANISH
            </h1>
            <h2 className="text-xl mb-8 text-gray-300">
              Computer Science Engineering & Data Science Student at BVRIT
            </h2>
            
            <div className="flex gap-4 mb-12">
              <button 
                onClick={() => {
                  handleClick();
                  const element = document.getElementById('contact');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-gradient-to-r from-rose-500 to-fuchsia-500 hover:from-rose-600 hover:to-fuchsia-600 px-6 py-3 rounded-full flex items-center gap-2 transition-all hover:scale-105"
              >
                <Mail size={20} />
                Contact Me
              </button>
              <button 
                onClick={() => {
                  handleClick();
                  const element = document.getElementById('projects');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="border border-fuchsia-500 px-6 py-3 rounded-full flex items-center gap-2 hover:bg-fuchsia-500/20 transition-all"
              >
                <Github size={20} />
                View Projects
              </button>
            </div>

            <div className="flex gap-6">
              {[
                { icon: <Github size={24} />, url: "https://github.com/sakamanish", label: "GitHub" },
                { icon: <Linkedin size={24} />, url: "https://www.linkedin.com/in/saka-manish-404888334/", label: "LinkedIn" },
                { icon: <Facebook size={24} />, url: "https://www.facebook.com/itzsakamanish/", label: "Facebook" },
                { icon: <Instagram size={24} />, url: "https://www.instagram.com/life.of.sonu/", label: "Instagram" },
                { icon: <Mail size={24} />, url: "mailto:sakamanish8@gmail.com", label: "Email" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleClick}
                  className="bg-white/5 p-3 rounded-full hover:bg-white/10 transition-all hover:scale-110 hover:text-rose-400"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen py-20">
          <h2 className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-rose-400 to-fuchsia-500">About Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I am a passionate Computer Science Engineering and Data Science student at BV Raju Institute of Technology (BVRIT). My journey in technology began with a deep curiosity about how computers work and has evolved into a comprehensive understanding of software development, data science, and system architecture.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                With experience in both application development and technical support, I've developed a well-rounded skill set that combines technical expertise with strong problem-solving abilities. I'm particularly interested in full-stack development, artificial intelligence, and creating user-centric solutions.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Outside of my academic pursuits, I actively work on personal projects that challenge me to learn new technologies and improve my skills. I believe in the power of technology to solve real-world problems and am always eager to contribute to innovative solutions.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: <Code2 size={24} />, title: 'Full-Stack Development', desc: 'Proficient in Java, SQL, HTML, CSS, JavaScript' },
                { icon: <Terminal size={24} />, title: 'Application Development', desc: 'Experience at NewSoft Solutions' },
                { icon: <Network size={24} />, title: 'Computer Networking', desc: 'Network architecture and troubleshooting' },
                { icon: <Database size={24} />, title: 'Technical Support', desc: 'Former Technical Support Assistant at Reliance' },
              ].map((skill, index) => (
                <div 
                  key={index}
                  onClick={handleClick}
                  className="bg-white/5 backdrop-blur-sm p-6 rounded-xl hover:bg-white/10 transition-all cursor-pointer hover:scale-105 border border-fuchsia-500/20"
                >
                  <div className="text-rose-400 mb-4">{skill.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                  <p className="text-gray-400">{skill.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen py-20">
          <h2 className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-rose-400 to-fuchsia-500">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                onClick={handleClick}
                className="group relative overflow-hidden rounded-xl aspect-video cursor-pointer border border-fuchsia-500/20"
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6 flex flex-col justify-end transform transition-transform duration-300">
                  <div className="flex items-center gap-2 text-rose-400 mb-2">
                    {project.icon}
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                  </div>
                  <p className="text-gray-300">{project.description}</p>
                  {project.url && (
                    <a 
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center text-rose-400 hover:text-rose-300"
                    >
                      Visit Website <Globe className="ml-2" size={16} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="min-h-screen py-20">
          <h2 className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-rose-400 to-fuchsia-500">Experience</h2>
          <div className="space-y-12">
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-fuchsia-500/20">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-rose-400">Application Developer</h3>
                  <p className="text-xl text-gray-300">NewSoft Solutions</p>
                </div>
                <p className="text-gray-400">5/2024 - 7/2024</p>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Developed and maintained web applications using modern technologies</li>
                <li>Collaborated with team members to implement new features and improve existing ones</li>
                <li>Participated in code reviews and technical discussions</li>
                <li>Worked on both frontend and backend development tasks</li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-fuchsia-500/20">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-rose-400">Technical Support Assistant</h3>
                  <p className="text-xl text-gray-300">Reliance Big Synergy</p>
                </div>
                <p className="text-gray-400">6/2022 - 8/2022</p>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Provided technical support and troubleshooting for hardware and software issues</li>
                <li>Assisted in network configuration and maintenance</li>
                <li>Documented technical procedures and solutions</li>
                <li>Collaborated with team members to resolve complex technical issues</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="min-h-screen py-20">
          <h2 className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-rose-400 to-fuchsia-500">Education</h2>
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-fuchsia-500/20">
              <h3 className="text-2xl font-semibold text-rose-400">Bachelor's degree</h3>
              <p className="text-xl text-gray-300">BV Raju Institute of Technology (BVRIT)</p>
              <p className="text-gray-400 mb-4">Computer Science & Engineering and Data Science</p>
              <p className="text-gray-500">6/2024 - 5/2027</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-fuchsia-500/20">
              <h3 className="text-2xl font-semibold text-rose-400">Diploma of Education</h3>
              <p className="text-xl text-gray-300">Annamacharya Institute of Technology & Sciences</p>
              <p className="text-gray-400 mb-4">Computer Science</p>
              <p className="text-gray-500">6/2021 - 4/2024</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen py-20">
          <h2 className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-rose-400 to-fuchsia-500">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!
              </p>
              <div className="space-y-4">
                <a 
                  href="mailto:sakamanish8@gmail.com"
                  onClick={handleClick}
                  className="flex items-center gap-3 text-gray-300 hover:text-rose-400 transition-colors"
                >
                  <Mail size={24} />
                  sakamanish8@gmail.com
                </a>
                <a 
                  href="https://github.com/sakamanish"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleClick}
                  className="flex items-center gap-3 text-gray-300 hover:text-rose-400 transition-colors"
                >
                  <Github size={24} />
                  GitHub Profile
                </a>
                <a 
                  href="https://www.linkedin.com/in/saka-manish-404888334/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleClick}
                  className="flex items-center gap-3 text-gray-300 hover:text-rose-400 transition-colors"
                >
                  <Linkedin size={24} />
                  LinkedIn Profile
                </a>
                <a 
                  href="https://www.instagram.com/life.of.sonu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleClick}
                  className="flex items-center gap-3 text-gray-300 hover:text-rose-400 transition-colors"
                >
                  <Instagram size={24} />
                  Instagram Profile
                </a>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-fuchsia-500/20">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="from_name" className="block text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    name="from_name"
                    id="from_name"
                    required
                    className="w-full bg-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-rose-400"
                  />
                </div>
                <div>
                  <label htmlFor="from_email" className="block text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    name="from_email"
                    id="from_email"
                    required
                    className="w-full bg-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-rose-400"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    required
                    className="w-full bg-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-rose-400"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  onClick={handleClick}
                  className="w-full bg-gradient-to-r from-rose-500 to-fuchsia-500 hover:from-rose-600 hover:to-fuchsia-600 px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Mail size={20} />
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
