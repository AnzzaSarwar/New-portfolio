import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // ✅ Updated project data (from your "Home" section)
  const projects = [
    {
      title: "Simple Calculator",
      description:
        "A simple calculator app that allows users to perform basic arithmetic operations with a clean, responsive interface.",
      tags: ["HTML", "CSS", "JavaScript"],
      imgSrc:"/Calculator.jpg",
      gradient: "from-yellow-500 to-orange-500",
      liveDemo: "https://github.com/Anzabajwa/guessing-game-.git",
      github: "https://github.com/Anzabajwa/guessing-game-.git",
    },
    {
      title: "Resume Builder",
      description:
        "A dynamic resume builder that helps users create professional resumes by customizing templates, adding details, and generating PDFs instantly.",
      tags: ["Next.js", "Tailwind CSS", "React"],
      gradient: "from-pink-500 to-purple-500",
      imgSrc:"https://www.shutterstock.com/image-vector/application-claim-form-filling-3d-600nw-2298436983.jpg",

      liveDemo: "https://mileston-5-unique-url-resume-by-anza.vercel.app/",
      github: "https://github.com/yourusername/resume-builder",
    },
    {
      title: "Fruits & Vegetables Website",
      description:
        "Fresh and organic fruits and vegetables delivered to your doorstep, ensuring health, quality, and sustainability in every bite!",
      tags: ["Next.js", "CSS", "Frontend"],
            imgSrc:"/image.png",

      gradient: "from-green-500 to-lime-500",
      liveDemo: "https://my-project-olive-omega.vercel.app/",
      github: "https://github.com/yourusername/fruits-vegetables",
    },
    {
      title: "Ecommerce Website",
      description:
        "Built for GIAIC Hackathon using Next.js + Sanity. Features fast SSR/SSG, dynamic product CMS, and sleek, responsive UI.",
      tags: ["Next.js", "Sanity", "Tailwind CSS"],
      gradient: "from-purple-500 to-blue-500",
            imgSrc:"/mywebsite.jpeg",
      liveDemo: "https://hacathon-phqz.vercel.app/",
      github: "https://github.com/yourusername/ecommerce-platform",
    },
       {
      title: "Ecommerce Website",
      description:
        "Built for GIAIC Hackathon using Next.js + Sanity. Features fast SSR/SSG, dynamic product CMS, and sleek, responsive UI.",
      tags: ["Next.js", "Sanity", "Tailwind CSS"],
            imgSrc:"",
      gradient: "from-purple-500 to-blue-500",
      liveDemo: "https://hacathon-phqz.vercel.app/",
      github: "https://github.com/yourusername/ecommerce-platform",
    },
   {
      title: "Ecommerce Website",
      description:
        "Built for GIAIC Hackathon using Next.js + Sanity. Features fast SSR/SSG, dynamic product CMS, and sleek, responsive UI.",
      tags: ["Next.js", "Sanity", "Tailwind CSS"],
      gradient: "from-purple-500 to-blue-500",
            imgSrc:"/mywebsite.jpeg",
      liveDemo: "https://hacathon-phqz.vercel.app/",
      github: "https://github.com/yourusername/ecommerce-platform",
    },

  ];
  

  return (
    <section id="projects" className="relative py-32 overflow-hidden" ref={ref}>
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-accent via-primary to-secondary">
            Past Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            -- You can check out my past works here --
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br from-primary/40 to-secondary/40 rounded-3xl blur-3xl opacity-30 group-hover:opacity-70 transition-all duration-500 animate-glow-pulse`} />
              
              <div className="relative h-full p-8 rounded-3xl bg-card/80 backdrop-blur-sm border-2 border-primary/30 hover:border-primary transition-all duration-300 flex flex-col hover:shadow-[0_0_50px_rgba(255,20,147,0.8)] animate-border-flow">
               
                 <motion.div
  className="w-full h-48 rounded-2xl mb-6 relative overflow-hidden"
  whileHover={{ scale: 1.02 }}
>
  {/* Project Image */}
  <img
    src={project.imgSrc}
    alt={project.title}
    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
  />

  {/* Overlay gradient for readability */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
</motion.div>

                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-6 flex-grow">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary border border-primary/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {/* Live Demo Button */}
                  <motion.div className="flex-1" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button
                        size="sm"
                        className="w-full bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_40px_rgba(255,20,147,0.9)] animate-glow-pulse font-bold relative overflow-hidden group"
                      >
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-secondary to-primary"
                          initial={{ x: "100%" }}
                          whileHover={{ x: 0 }}
                          transition={{ duration: 0.3 }}
                        />
                        <span className="relative z-10 flex items-center justify-center">
                          <ExternalLink className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                          Live Demo
                        </span>
                      </Button>
                    </a>
                  </motion.div>

                  {/* GitHub Button */}
                  <motion.div whileHover={{ scale: 1.1, rotate: 360 }} whileTap={{ scale: 0.9 }}>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-2 border-primary/50 hover:bg-primary/20 hover:border-primary hover:shadow-[0_0_30px_rgba(255,20,147,0.8)] animate-border-flow"
                      >
                        <Github className="w-4 h-4" />
                      </Button>
                    </a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
