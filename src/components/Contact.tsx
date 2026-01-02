import { motion } from 'motion/react';
import { Mail, MapPin, Phone, ExternalLink, Sparkles, Clock, Calendar } from 'lucide-react';
import { Button } from './ui/button';

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
      value: '+62 895 537 0855 594',
      link: 'https://wa.me/62895370855594',
      description: 'Contact me on WhatsApp',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Yogyakarta, Indonesia',
      link: null,
      description: 'Available for remote and hybrid opportunities',
    },
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/febrinrdsh/',
      icon: null,
      color: 'hover:bg-blue-500/10 hover:border-blue-500/30 hover:text-blue-400',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/febrinurdiansah',
      icon: null,
      color: 'hover:bg-gray-500/10 hover:border-gray-500/30 hover:text-gray-300',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/febrinrd_/',
      icon: null,
      color: 'hover:bg-pink-500/10 hover:border-pink-500/30 hover:text-pink-400',
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 py-20" id="contact">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header Section */}
          <div className="flex items-center gap-3 mb-4">
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-neutral-500 animate-pulse"></div>
              <div className="w-2 h-2 bg-neutral-600 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 bg-neutral-700 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
            <div className="text-neutral-400 tracking-widest uppercase pixel-font text-xs">
              Connect With Me
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl mb-4 relative inline-block pixel-title">
                Let's Collaborate
                <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-neutral-700"></div>
              </h2>
              <p className="text-xl text-neutral-400 max-w-3xl">
                Ready to bring your ideas to life? Reach out through any of these channels.
              </p>
            </div>
            
            <div className="flex items-center gap-2 px-4 py-2 bg-neutral-900 border border-neutral-800 rounded">
              <Sparkles className="w-4 h-4 text-neutral-400" />
              <span className="text-sm text-neutral-300">Available for projects</span>
            </div>
          </div>

          {/* Contact Cards Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="group relative"
              >
                <div className="relative h-full p-6 bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition-all duration-300">
                  
                  <div className="absolute top-0 left-0 w-2 h-2 bg-neutral-700"></div>
                  <div className="absolute top-0 right-0 w-2 h-2 bg-neutral-700"></div>
                  <div className="absolute bottom-0 left-0 w-2 h-2 bg-neutral-700"></div>
                  <div className="absolute bottom-0 right-0 w-2 h-2 bg-neutral-700"></div>
                  
                  {/* Hover effect pixel */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neutral-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-neutral-950 border border-neutral-800">
                      <info.icon className="w-5 h-5 text-neutral-300" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-neutral-500 mb-1">{info.label}</div>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="flex items-center gap-2 text-neutral-200 hover:text-neutral-50 transition-colors group/link"
                          target={info.link.startsWith('http') ? '_blank' : '_self'}
                          rel="noopener noreferrer"
                        >
                          <span className="text-lg font-medium">{info.value}</span>
                          <ExternalLink className="w-4 h-4 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                        </a>
                      ) : (
                        <div className="text-lg text-neutral-200 font-medium">{info.value}</div>
                      )}
                      <p className="text-sm text-neutral-500 mt-2">{info.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Main Content Area*/}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Side - Direct Contact */}

            {/* Right Side */}
            <div className="flex flex-col gap-8">
              {/* Social Panel*/}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="relative p-6 bg-neutral-900 border border-neutral-800 group flex-1"
              >
                
                <div className="absolute top-0 left-0 w-2 h-2 bg-neutral-700"></div>
                <div className="absolute top-0 right-0 w-2 h-2 bg-neutral-700"></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 bg-neutral-700"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 bg-neutral-700"></div>
                
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-neutral-800 border border-neutral-700 rounded">
                    <span className="text-lg">🔗</span>
                  </div>
                  <h4 className="text-xl">Connect on Social</h4>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-4 border border-neutral-800 rounded-lg text-center transition-all duration-300 flex flex-col items-center gap-2 ${social.color} group/social`}
                    >
                      <div className="text-2xl mb-1">{social.icon}</div>
                      <div className="font-medium text-sm">{social.name}</div>
                      <div className="text-xs text-neutral-500 group-hover/social:text-current transition-colors">
                        Visit →
                      </div>
                    </a>
                  ))}
                </div>
              </motion.div>

              {/* Working Hours Panel*/}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="relative p-6 bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 group flex-1"
              >
                
                <div className="absolute top-0 left-0 w-2 h-2 bg-neutral-700"></div>
                <div className="absolute top-0 right-0 w-2 h-2 bg-neutral-700"></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 bg-neutral-700"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 bg-neutral-700"></div>
                
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-neutral-800 border border-neutral-700 rounded">
                    <Calendar className="w-4 h-4 text-neutral-300" />
                  </div>
                  <h4 className="text-xl">Working Hours</h4>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 px-4 bg-neutral-900/50 border border-neutral-800 rounded">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-neutral-500 rounded-full"></div>
                      <span className="text-neutral-300">Mon - Fri</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3 h-3 text-neutral-400" />
                      <span className="text-neutral-200 font-medium">9:00 - 18:00</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center py-3 px-4 bg-neutral-900/50 border border-neutral-800 rounded">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <span className="text-neutral-300">Weekend</span>
                    </div>
                    <span className="text-neutral-200 font-medium">Flexible</span>
                  </div>
                </div>
                
                <div className="mt-6 p-3 bg-neutral-950/80 border border-neutral-800 rounded text-center">
                  <p className="text-sm text-neutral-300">
                    <span className="text-green-400">✓</span> Open for freelance & full-time opportunities
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Footer Note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-16 pt-8 border-t border-neutral-800 text-center"
          >
            <p className="text-neutral-500">
              Looking forward to hearing from you. Let's build something great together!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}