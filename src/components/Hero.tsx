import { motion } from 'motion/react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { PixelatedAccent } from './PixelDecoration';

interface HeroProps {
  onNavigate: (section: 'hero' | 'about' | 'projects' | 'contact') => void;
}

export function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative">
      {/* Pixelated background accent */}
      <div className="absolute top-1/4 right-1/4 opacity-10">
        <PixelatedAccent />
      </div>
      <div className="absolute bottom-1/4 left-1/4 opacity-10">
        <PixelatedAccent />
      </div>
      
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-neutral-400 tracking-widest uppercase relative"
          >
            <div className="flex items-center gap-3">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-neutral-500"></div>
                <div className="w-2 h-2 bg-neutral-600"></div>
                <div className="w-2 h-2 bg-neutral-700"></div>
              </div>
              <span className="pixel-font text-xs">Hello, I'm</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl tracking-tight relative pixel-title"
          >
            Febri Nur Diansah
            {/* Pixel accent on title */}
            <div className="absolute -top-4 -left-4 w-4 h-4 bg-neutral-700"></div>
            <div className="absolute -top-4 -left-2 w-2 h-2 bg-neutral-600"></div>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-base md:text-xl text-neutral-400 pixel-font"
          >
            Multi-Platform Developer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg text-neutral-500 max-w-2xl"
          >
            I craft beautiful digital experiences across web and mobile platforms through code and design. Specializing in front-end development, mobile application development, and user interface design.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex gap-4 pt-4"
          >
            <Button 
              onClick={() => onNavigate('projects')}
              className="group bg-neutral-50 text-neutral-950 hover:bg-neutral-200 relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                View My Work
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              {/* Pixel corner accent */}
              <div className="absolute top-0 right-0 w-2 h-2 bg-neutral-900 opacity-20"></div>
            </Button>
            <Button 
              onClick={() => onNavigate('contact')}
              variant="outline"
              className="border-neutral-700 hover:bg-neutral-900 relative"
            >
              Get in Touch
              <div className="absolute bottom-0 left-0 w-2 h-2 bg-neutral-700"></div>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex gap-4 pt-8"
          >
            <a
              href="https://github.com/febrinurdiansah"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-neutral-800 hover:bg-neutral-900 transition-colors relative group"
            >
              <Github className="w-5 h-5" />
              <div className="absolute top-0 right-0 w-1 h-1 bg-neutral-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>
            <a
              href="https://www.linkedin.com/in/febrinrdsh/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-neutral-800 hover:bg-neutral-900 transition-colors relative group"
            >
              <Linkedin className="w-5 h-5" />
              <div className="absolute top-0 right-0 w-1 h-1 bg-neutral-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>
            <a
              href="mailto:febrinurdiansah0@gmail.com"
              className="p-3 rounded-full border border-neutral-800 hover:bg-neutral-900 transition-colors relative group"
            >
              <Mail className="w-5 h-5" />
              <div className="absolute top-0 right-0 w-1 h-1 bg-neutral-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}