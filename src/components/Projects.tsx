import { motion } from 'motion/react';
import { ExternalLink, Github, Smartphone, Globe } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { useState } from 'react';

//import Img
import mobileApp1Img from '../assets/mobile-app-1.png';
import mobileApp2Img from '../assets/mobile-app-2.png';
// import mobileApp3Img from '../assets/mobile-app-3.png';
import web1Img from '../assets/web-1.png';

type ProjectType = 'mobile' | 'web';

export function Projects() {
  const [filter, setFilter] = useState<ProjectType | 'all'>('all');

  const projects = [
    {
      id: 1,
      title: 'News App',
      description: 'A mobile news reader application built for fast, simple content consumption. Features include real-time data fetching and an intuitive, modern UI/UX.',
      tags: ['Flutter', 'Dart', 'Node Js', 'Express Js'],
      type: 'mobile' as ProjectType,
      image: mobileApp1Img,
      githubUrl:'https://github.com/febrinurdiansah/news_app',
      liveLink: '',
      isLive: false,
    },
    {
      id: 2,
      title: 'Lapor Semanu App',
      description: 'An integrated mobile platform for civil activity reporting. Designed to streamline reporting, tracking, and management of local activities with reliable REST API communication.',
      tags: ['Flutter', 'Dart', 'REST API'],
      type: 'mobile' as ProjectType,
      image: mobileApp2Img,
      githubUrl:'https://github.com/febrinurdiansah/LaporSemanuApp',
      liveLink: '',
      isLive: false,
    },
    {
      id: 3,
      title: 'Habit Tracker App (Process)',
      description: 'A comprehensive habit-tracking mobile application designed to help users build and maintain healthy daily routines with a customizable UI.',
      tags: ['Flutter', 'Dart'],
      type: 'mobile' as ProjectType,
      // image: mobileApp3Img, 
      githubUrl: 'https://github.com/febrinurdiansah/habit-tracker-app.git',
      liveLink: '',
      isLive: false,
    },
    {
      id: 4,
      title: 'Cosmic Observation',
      description: 'An interactive web-based platform for astronomical data visualization and space exploration monitoring.',
      tags: ['PHP', 'JavaScript', 'Web API'],
      type: 'web' as ProjectType,
      image: web1Img,
      githubUrl: 'https://github.com/febrinurdiansah/Cosmic-Observation',
      liveLink: 'https://cosmic-observation.wasmer.app/',
      isLive: true,
    },
    {
      id: 5,
      title: 'Node.js REST API',
      description: 'A robust and scalable backend service providing structured data endpoints, built with Node.js and Express for high-performance applications.',
      tags: ['Node.js', 'Express', 'JavaScript'],
      type: 'web' as ProjectType,
      // image: web2Img,
      githubUrl: 'https://github.com/febrinurdiansah/node-api',
      liveLink: 'https://node-api-mu-ochre.vercel.app/',
      isLive: true,
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.type === filter);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 py-20">
      <div className="max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="flex items-center gap-3 mb-4">
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-neutral-500"></div>
              <div className="w-2 h-2 bg-neutral-600"></div>
              <div className="w-2 h-2 bg-neutral-700"></div>
            </div>
            <div className="text-neutral-400 tracking-widest uppercase text-xs pixel-font">
              My Work
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl mb-6 relative inline-block pixel-title">
            Projects
            <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-neutral-700"></div>
            <div className="absolute -bottom-2 -right-5 w-2 h-2 bg-neutral-600"></div>
          </h2>

          <p className="text-sm md:text-base text-neutral-400 max-w-3xl mb-12">
            Explore my collection of mobile and web development projects, ranging from interactive user interfaces to robust backend services.
          </p>

          {/* Filter Tabs with Pixelated Style */}
          <div className="flex gap-3 mb-12 flex-wrap">
            {[
              { value: 'all', label: 'All' },
              { value: 'mobile', label: 'Mobile' },
              { value: 'web', label: 'Web' },
            ].map((tab) => (
              <button
                key={tab.value}
                onClick={() => setFilter(tab.value as ProjectType | 'all')}
                className={`px-6 py-3 border-2 transition-all relative pixel-font text-xs ${
                  filter === tab.value
                    ? 'border-neutral-50 bg-neutral-50 text-neutral-950'
                    : 'border-neutral-700 hover:border-neutral-500 disabled:opacity-40 disabled:cursor-not-allowed'
                }`}
              >
                {tab.label}
                {/* Pixelated corners */}
                <div className={`absolute -top-1 -left-1 w-3 h-3 ${filter === tab.value ? 'bg-neutral-950' : 'bg-neutral-700'}`}></div>
                <div className={`absolute -top-1 -right-1 w-3 h-3 ${filter === tab.value ? 'bg-neutral-950' : 'bg-neutral-700'}`}></div>
                <div className={`absolute -bottom-1 -left-1 w-3 h-3 ${filter === tab.value ? 'bg-neutral-950' : 'bg-neutral-700'}`}></div>
                <div className={`absolute -bottom-1 -right-1 w-3 h-3 ${filter === tab.value ? 'bg-neutral-950' : 'bg-neutral-700'}`}></div>
              </button>
            ))}
          </div>

          {/* Projects Grid - Card Style with Pixel Design */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                className="group relative"
              >
                {/* Pixelated Card */}
                <div className="relative border-4 border-neutral-800 bg-neutral-900 hover:border-neutral-700 transition-all overflow-hidden">
                  {/* Pixelated corners */}
                  <div className="absolute -top-2 -left-2 w-6 h-6 bg-neutral-700 z-10"></div>
                  <div className="absolute -top-2 -left-2 w-4 h-4 bg-neutral-800 z-10"></div>
                  <div className="absolute -top-2 -left-2 w-2 h-2 bg-neutral-900 z-10"></div>
                  
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-neutral-700 z-10"></div>
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-neutral-800 z-10"></div>
                  <div className="absolute -top-2 -right-2 w-2 h-2 bg-neutral-900 z-10"></div>
                  
                  <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-neutral-700 z-10"></div>
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-neutral-800 z-10"></div>
                  <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-neutral-900 z-10"></div>
                  
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-neutral-700 z-10"></div>
                  <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-neutral-800 z-10"></div>
                  <div className="absolute -bottom-2 -right-2 w-2 h-2 bg-neutral-900 z-10"></div>

                  {/* Project Image */}
                  <div className="relative aspect-video overflow-hidden border-b-4 border-neutral-800 flex items-center justify-center bg-neutral-850">

                      {project.image ? (
                        <ImageWithFallback
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      ) : (
                        <div className="flex flex-col items-center justify-center text-neutral-500 gap-3">
                          {project.type === 'mobile' ? (
                            <Smartphone className="w-14 h-14 opacity-60" />
                          ) : (
                            <ExternalLink className="w-14 h-14 opacity-60" />
                          )}
                          <span className="pixel-font text-xs tracking-widest opacity-70">
                            NO PREVIEW
                          </span>
                        </div>
                      )}
                    
                    {/* Pixel overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-60"></div>
                    
                    {/* Type Badge - Pixelated */}
                      <div className="absolute top-4 right-4 bg-neutral-900/90 border-2 border-neutral-700 px-3 py-2 z-20">
                        <div className="flex items-center gap-2">
                          {/* Logika Ganti Ikon */}
                          {project.type === 'mobile' ? (
                            <Smartphone className="w-4 h-4 text-neutral-400" />
                          ) : (
                            <Globe className="w-4 h-4 text-neutral-400" />
                          )}
                          
                          {/* Logika Ganti Teks */}
                          <span className="pixel-font text-xs text-neutral-300 uppercase">
                            {project.type === 'mobile' ? 'Mobile' : 'Web'}
                          </span>
                        </div>
                        
                        {/* Pixelated corners tetap dipertahankan */}
                        <div className="absolute -top-1 -left-1 w-2 h-2 bg-neutral-600"></div>
                        <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-neutral-600"></div>
                      </div>

                    {/* Pixel grid overlay effect */}
                    <div className="absolute inset-0 opacity-5 pointer-events-none">
                      <svg width="100%" height="100%">
                        <defs>
                          <pattern id={`pixel-grid-${project.id}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                            <rect x="0" y="0" width="10" height="10" fill="currentColor" opacity="0.3" />
                            <rect x="10" y="10" width="10" height="10" fill="currentColor" opacity="0.3" />
                          </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill={`url(#pixel-grid-${project.id})`} />
                      </svg>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl pixel-title relative inline-block">
                      {project.title}
                      <div className="absolute -top-1 -right-1 w-2 h-2 bg-neutral-600"></div>
                    </h3>
                    
                    <p className="text-neutral-400 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Tags - Pixelated */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-2 bg-neutral-800 border-2 border-neutral-700 text-xs text-neutral-300 relative group/tag hover:bg-neutral-750 transition-colors pixel-font"
                        >
                          {tag}
                          <div className="absolute -top-1 -left-1 w-2 h-2 bg-neutral-600 opacity-0 group-hover/tag:opacity-100 transition-opacity"></div>
                          <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-neutral-600 opacity-0 group-hover/tag:opacity-100 transition-opacity"></div>
                        </span>
                      ))}
                    </div>

                    {/* Buttons - Pixelated */}
                    <div className="flex gap-3 pt-2">
                      <a
                        href={project.githubUrl} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-3 border-2 border-neutral-700 hover:bg-neutral-800 transition-all relative group/btn text-sm"
                      >
                        <span className="flex items-center justify-center gap-2">
                          <Github className="w-4 h-4" />
                          <span className="pixel-font text-xs">Code</span>
                        </span>
                        <div className="absolute -top-1 -left-1 w-2 h-2 bg-neutral-600"></div>
                        <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-neutral-600 opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
                      </a>
                      
                      {/* Tombol View (Live Link) */}
                      {project.isLive ? (
                        // Opsi A: If project.isLive === TRUE (Link On)
                        <a 
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 px-4 py-3 bg-neutral-50 text-neutral-950 border-2 border-neutral-50 hover:bg-neutral-200 transition-all relative group/btn text-sm"
                        >
                          <span className="flex items-center justify-center gap-2">
                            <ExternalLink className="w-4 h-4" />
                            <span className="pixel-font text-xs">View</span>
                          </span>
                          <div className="absolute -top-1 -right-1 w-2 h-2 bg-neutral-900 opacity-30"></div>
                          <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-neutral-900 opacity-30"></div>
                        </a>
                      ) : (
                        // Opsi B: If project.isLive === FALSE (Disabled/Maintenance)
                        <button 
                          disabled
                          className="flex-1 px-4 py-3 bg-neutral-50 text-neutral-950 border-2 border-neutral-50 disabled:opacity-40 transition-all relative group/btn text-sm cursor-not-allowed"
                        >
                          <span className="flex items-center justify-center gap-2">
                            <ExternalLink className="w-4 h-4" />
                            <span className="pixel-font text-xs">View [Soon]</span>
                          </span>
                          <div className="absolute -top-1 -right-1 w-2 h-2 bg-neutral-900 opacity-30"></div>
                          <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-neutral-900 opacity-30"></div>
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Hover effect - Pixel glow */}
                <div className="absolute inset-0 border-4 border-neutral-600 opacity-0 group-hover:opacity-20 transition-opacity pointer-events-none -z-10 translate-x-1 translate-y-1"></div>
              </motion.div>
            ))}
          </div>

          {/* Coming Soon Message - Pixelated */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="inline-block p-8 border-4 border-neutral-800 relative">
                {/* Pixelated corners */}
                <div className="absolute -top-2 -left-2 w-4 h-4 bg-neutral-700"></div>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-neutral-700"></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-neutral-700"></div>
                <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-neutral-700"></div>
                
                <p className="text-lg pixel-title text-neutral-400">Coming Soon...</p>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
