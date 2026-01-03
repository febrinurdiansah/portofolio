import { motion } from 'motion/react';
import {
  Mail,
  MapPin,
  Phone,
  ExternalLink,
  Sparkles,
  Clock,
  Calendar,
  Send
} from 'lucide-react';

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'febrinurdiansah0@gmail.com',
      link: 'mailto:febrinurdiansah0@gmail.com',
      description: 'Get in touch via email',
    },
    {
      icon: Phone,
      label: 'WhatsApp',
      value: '+62 895 370 855 594',
      link: 'https://wa.me/62895370855594',
      description: 'Contact me on WhatsApp',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Yogyakarta, Indonesia',
      link: null,
      description: 'Available for remote/hybrid roles',
    },
  ];

  const socialLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/febrinrdsh/', icon: null },
    { name: 'GitHub', url: 'https://github.com/febrinurdiansah', icon: null },
    { name: 'Instagram', url: 'https://www.instagram.com/febrinrd_/', icon: null },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section id="contact" className="min-h-screen flex justify-center px-4 md:px-6 py-40 bg-neutral-950"> 
      <div className="max-w-6xl w-full">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* HEADER */}
          <motion.div variants={itemVariants} className="mb-24"> 
            <div className="pt-8"> 
              <div className="flex items-center gap-3 mb-4">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-neutral-500 animate-pulse"></div>
                  <div className="w-2 h-2 bg-neutral-600 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                </div>
                <p className="pixel-font text-[10px] md:text-xs tracking-[0.2em] text-neutral-500 uppercase">
                  Ready to Level Up?
                </p>
              </div>

              <h2 className="pixel-title text-3xl md:text-5xl mb-4 text-neutral-50 leading-tight"> 
                Let&apos;s Collaborate
              </h2>
              <div className="h-1 w-24 bg-neutral-800 mb-8"></div>
              
              <p className="text-neutral-400 max-w-2xl text-sm md:text-base leading-relaxed mt-6"> 
                Have a project in mind or just want to say hi? I&apos;m always open to discussing new opportunities and creative ideas.
              </p>
            </div>
          </motion.div>

          {/* CONTACT CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"> 
            {contactInfo.map((info) => (
              <motion.div
                key={info.label}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group relative bg-neutral-900/50 border border-neutral-800 p-6 transition-all hover:bg-neutral-900 hover:border-neutral-600"
              >
                <div className="absolute top-0 left-0 w-2 h-2 bg-neutral-700"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 bg-neutral-700"></div>
                
                <div className="flex flex-col gap-4">
                  <div className="w-12 h-12 bg-neutral-950 border border-neutral-800 flex items-center justify-center group-hover:border-neutral-500 transition-colors">
                    <info.icon className="w-6 h-6 text-neutral-400 group-hover:text-neutral-50" />
                  </div>
                  <div>
                    <p className="text-xs pixel-font text-neutral-500 mb-1">{info.label}</p>
                    {info.link ? (
                      <a href={info.link} target="_blank" rel="noopener noreferrer" 
                         className="text-neutral-100 font-medium break-all flex items-center gap-2 hover:text-neutral-400 transition-colors">
                        {info.value}
                        <ExternalLink className="w-3 h-3 flex-shrink-0" />
                      </a>
                    ) : (
                      <p className="text-neutral-100 font-medium">{info.value}</p>
                    )}
                    <p className="text-xs text-neutral-500 mt-3 italic">{info.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* BOTTOM AREA */}
          <div className="grid lg:grid-cols-5 gap-8 mb-20"> 
            {/* SOCIAL */}
            <motion.div variants={itemVariants} className="lg:col-span-3 bg-neutral-900/30 border border-neutral-800 p-8 relative">
              <div className="absolute top-0 right-0 w-3 h-3 bg-neutral-800"></div>
              
              <h3 className="text-xl pixel-title mb-8 flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-yellow-500/50" />
                Digital Footprint
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {socialLinks.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center gap-3 border border-neutral-800 p-6 hover:bg-neutral-800 hover:border-neutral-600 transition-all group"
                  >
                    <span className="text-2xl group-hover:scale-125 transition-transform">{s.icon}</span>
                    <span className="pixel-font text-[10px] text-neutral-400 uppercase group-hover:text-neutral-50">{s.name}</span>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* WORKING HOURS */}
            <motion.div variants={itemVariants} className="lg:col-span-2 bg-neutral-900/30 border border-neutral-800 p-8 relative">
              <div className="absolute bottom-0 left-0 w-3 h-3 bg-neutral-800"></div>
              
              <h3 className="text-xl pixel-title mb-8 flex items-center gap-3">
                <Clock className="w-5 h-5 text-blue-500/50" />
                Availability
              </h3>

              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-neutral-800 pb-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-4 h-4 text-neutral-500" />
                    <span className="text-neutral-400 text-sm">Mon — Fri</span>
                  </div>
                  <span className="text-neutral-100 text-sm font-medium bg-neutral-800 px-3 py-1">09:00 - 18:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-400 text-sm italic">Status</span>
                  <span className="text-green-500 text-xs pixel-font animate-pulse flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    OPEN FOR WORK
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* FOOTER */}
          <div className="mt-32 pt-16 pb-16 border-t border-neutral-900">
            <p className="text-center text-neutral-500 text-sm md:text-base px-4">
              Looking forward to hearing from you. Let&apos;s build something great together!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}