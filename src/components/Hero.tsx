import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Sparkles, Code2, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-black">
      {/* Animated Background Effects */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,20,147,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,20,147,0.05)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_100%_100%_at_50%_50%,black,transparent)]" />
        
        {/* Multiple Floating Orbs with different animations */}
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 rounded-full blur-[120px] animate-morph"
          style={{ background: "radial-gradient(circle, rgba(255,20,147,0.4), transparent)" }}
          animate={{
            scale: [1, 1.3, 1.1, 1],
            x: [0, 100, -50, 0],
            y: [0, -50, 50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-40 right-32 w-[500px] h-[500px] rounded-full blur-[140px] animate-morph"
          style={{ background: "radial-gradient(circle, rgba(255,105,180,0.3), transparent)" }}
          animate={{
            scale: [1, 1.2, 1.4, 1],
            x: [0, -80, 60, 0],
            y: [0, 60, -40, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[160px]"
          style={{ background: "radial-gradient(circle, rgba(255,20,147,0.2), transparent)" }}
          animate={{
            scale: [1, 1.5, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, type: "spring" }}
          >
            {/* Animated Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2  mt-20
   rounded-full bg-primary/10 border border-primary/30  animate-glow-pulse ml-6 mb-3"
            >
              <Sparkles className="w-4 h-4 text-primary animate-spin-slow" />
              <span className="text-sm font-semibold text-primary">Available for Work</span>
            </motion.div>

            <motion.h1 
              className="text-3xl md:text-6xl ml-5 font-black mb-6 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="inline-block animate-fade-in">
                Creative
              </span>
              <br />
              <motion.span 
                className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent bg-400% animate-text-shimmer text-glow"
                animate={{ backgroundPosition: ["0%", "200%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                Designer
              </motion.span>
              <br />
              <span className="inline-block animate-fade-in">
                & Developer
              </span>
            </motion.h1>
            
            <motion.p
              className="text-md md:text-2xl text-muted-foreground mb-8 ml-5 max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Building stunning digital experiences with cutting-edge technologies and creative design
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 mb-8 ml-5"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  onClick={() => scrollToSection("projects")}
                  className="bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_40px_rgba(255,20,147,0.8)] transition-all duration-300 animate-glow-pulse font-bold text-lg px-5 group relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Code2 className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                    View Projects
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-secondary to-primary"
                    initial={{ x: "100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection("contact")}
                  className="border-2 border-primary/50 hover:bg-primary/20 hover:border-primary transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,20,147,0.6)] font-bold text-lg px-8 group animate-border-flow"
                >
                  <Palette className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                  Get in Touch
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              className="flex gap-4 ml-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {[
                { icon: Github, href: "#", color: "hover:bg-[#FF1493]" },
                { icon: Linkedin, href: "#", color: "hover:bg-[#FF69B4]" },
                { icon: Mail, href: "#contact", color: "hover:bg-[#FF1493]" }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  whileHover={{ scale: 1.3, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className={`p-4 rounded-full bg-primary/10 backdrop-blur-sm border-2 border-primary/30 hover:border-primary ${social.color} transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,20,147,0.8)] animate-glow`}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Animated Image */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, type: "spring" }}
            className="relative hidden md:block p-14"
          >
            <motion.div
              className="relative z-10"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Main Image Container */}
              <motion.div 
                className=" rounded-3xl overflow-hidden border-4  border-primary/30 animate-border-flow"
                whileHover={{ scale: 1.05, rotate: 2 }}
              >
                <div className=" inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 animate-gradient-rotate" />
                <div className="relative h-[450px] w-full animate-gradient-shift">
                  {/* Placeholder for actual image */}
                  <img src="/anza.png" alt="" />
                   </div>
                
                {/* Glow Effect */}
                <div className="absolute inset-0 shadow-[0_0_100px_rgba(255,20,147,0.8)] rounded-3xl animate-glow-pulse" />
              </motion.div>

              {/* Floating Elements Around Image */}
              {[
                { icon: Code2, position: "-top-6 -left-6", delay: 0 },
                { icon: Palette, position: "-top-6 -right-6", delay: 0.5 },
                { icon: Sparkles, position: "-bottom-6 -left-6", delay: 1 },
                { icon: Sparkles, position: "-bottom-6 -right-6", delay: 1.5 },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className={`absolute ${item.position} p-4 rounded-2xl bg-black/80 backdrop-blur-sm border-2 border-primary/50 shadow-[0_0_30px_rgba(255,20,147,0.6)] animate-glow`}
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, 10, 0, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: item.delay,
                  }}
                >
                  <item.icon className="w-6 h-6 text-primary" />
                </motion.div>
              ))}
            </motion.div>

            {/* Background Glow for Image */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-3xl blur-[100px]"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Button
            variant="ghost"
            size="icon"
            onClick={() => scrollToSection("about")}
            className="rounded-full hover:bg-primary/20 border-2 border-primary/30 hover:border-primary transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,20,147,0.8)] animate-bounce-slow"
          >
            <ArrowDown className="w-6 h-6 text-primary animate-pulse" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
