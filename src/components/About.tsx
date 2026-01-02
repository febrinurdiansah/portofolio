import { motion } from 'motion/react';
import { Code2, Database, Palette, Zap } from 'lucide-react';

export function About() {
  const skills = [
    {
      icon: Code2,
      title: 'Frontend & Mobile',
      description: 'Crafting pixel-perfect and performant user interfaces on web and mobile.',
      items: ['Flutter', 'Laravel', 'React', 'Tailwind CSS'],
    },
    {
      icon: Database, 
      title: 'Backend/API',
      description: 'Designing and implementing robust backend services and APIs.',
      items: ['Node.js', 'Express', 'Databases (SQL/NoSQL)', 'REST/GraphQL'],
    },
    {
      icon: Palette,
      title: 'Design',
      description: 'Creating intuitive and visually appealing user interfaces and experiences.',
      items: ['UI/UX', 'Figma', 'Prototyping'],
    },
];

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
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
              About Me
            </div>
          </div>
          <h2 className="text-3xl md:text-5xl mb-8 relative inline-block pixel-title">
            About Me
            <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-neutral-700"></div>
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mb-16">
            I'm a Multi-Platform Developer with a passion for building beautiful and functional digital experiences across web and mobile. With expertise in both design and development, I bridge the gap between aesthetics and functionality on every screen.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.2 }}
                className="p-8 border border-neutral-800 hover:bg-neutral-900/50 transition-colors relative group"
              >
                {/* Pixel corners */}
                <div className="absolute top-0 left-0 w-2 h-2 bg-neutral-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute top-0 right-0 w-2 h-2 bg-neutral-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 bg-neutral-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 bg-neutral-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <skill.icon className="w-12 h-12 mb-4 text-neutral-400" />
                <h3 className="text-2xl mb-3">{skill.title}</h3>
                <p className="text-neutral-400 mb-4">{skill.description}</p>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 bg-neutral-800 rounded-full text-sm text-neutral-300 relative group/item"
                    >
                      {item}
                      <div className="absolute top-0 right-1 w-1 h-1 bg-neutral-600 opacity-0 group-hover/item:opacity-100 transition-opacity"></div>
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}