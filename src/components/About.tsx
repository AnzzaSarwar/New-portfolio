import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Zap, Sparkles } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const features = [
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating intuitive, beautiful interfaces that users love"
    },
    {
      icon: Code2,
      title: "Web Development",
      description: "Building responsive, performant web applications"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimized code for lightning-fast experiences"
    },
    {
      icon: Sparkles,
      title: "Animations",
      description: "Bringing designs to life with smooth animations"
    }
  ];

  return (
    <section id="about" className="relative py-32 overflow-hidden" ref={ref}>
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about creating digital experiences that combine aesthetics with functionality. 
            With expertise in both design and development, I bring ideas to life with pixel-perfect precision.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.08,
                rotate: [0, 2, -2, 0],
              }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-50 group-hover:opacity-100 animate-glow-pulse" />
              <div className="relative p-8 rounded-2xl bg-card/80 backdrop-blur-sm border-2 border-primary/30 hover:border-primary transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,20,147,0.6)] animate-border-flow">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <feature.icon className="w-12 h-12 mb-4 text-primary animate-glow" />
                </motion.div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-border"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl" />
          <div className="relative">
            <h3 className="text-3xl font-bold mb-4">My Journey</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Started as a designer, evolved into a full-stack developer. I believe in continuous learning 
              and staying updated with the latest technologies. My goal is to create experiences that not 
              only look great but also solve real problems and delight users.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
