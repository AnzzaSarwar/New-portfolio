import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative py-12 overflow-hidden border-t border-border">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-background" />
      
      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            Made <Heart className="w-4 h-4 text-primary fill-primary animate-pulse" /> by a Anza Sarwar
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            © {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
