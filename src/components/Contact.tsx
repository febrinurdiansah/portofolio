import { motion } from 'motion/react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'febrinurdiansah0@gmail.com',
      link: 'mailto:febrinurdiansah0@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+62 895 537 0855 594',
      link: 'tel:+62895370855594',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Yogyakarta, Indonesia',
      link: null,
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 py-20">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-neutral-500"></div>
              <div className="w-2 h-2 bg-neutral-600"></div>
              <div className="w-2 h-2 bg-neutral-700"></div>
            </div>
            <div className="text-neutral-400 tracking-widest uppercase pixel-font text-xs">
              Get in Touch
            </div>
          </div>
          <h2 className="text-3xl md:text-5xl mb-4 relative inline-block pixel-title">
            Let's Work
            <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-neutral-700"></div>
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mb-16">
            Have a project in mind? I'd love to hear about it. Send me a message and let's create something amazing together.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-neutral-900 border-neutral-800 focus:border-neutral-700"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-neutral-900 border-neutral-800 focus:border-neutral-700"
                    required
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-neutral-900 border-neutral-800 focus:border-neutral-700 min-h-[150px]"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-neutral-50 text-neutral-950 hover:bg-neutral-200 relative group"
                >
                  Send Message
                  <div className="absolute top-0 right-0 w-2 h-2 bg-neutral-900 opacity-20"></div>
                </Button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.label}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="flex items-start gap-4 group"
                    >
                      <div className="p-3 bg-neutral-900 border border-neutral-800 relative">
                        <info.icon className="w-5 h-5 text-neutral-400" />
                        <div className="absolute top-0 left-0 w-1.5 h-1.5 bg-neutral-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      </div>
                      <div>
                        <div className="text-sm text-neutral-500 mb-1">{info.label}</div>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-neutral-200 hover:text-neutral-50 transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className="text-neutral-200">{info.value}</div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="p-8 bg-neutral-900 border border-neutral-800 relative group">
                {/* Pixel corners */}
                <div className="absolute top-0 left-0 w-2 h-2 bg-neutral-700"></div>
                <div className="absolute top-0 right-0 w-2 h-2 bg-neutral-700"></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 bg-neutral-700"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 bg-neutral-700"></div>
                
                <h4 className="text-xl mb-3">Let's Connect</h4>
                <p className="text-neutral-400">
                  I'm always interested in hearing about new projects and opportunities. 
                  Whether you have a question or just want to say hi, feel free to reach out!
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}