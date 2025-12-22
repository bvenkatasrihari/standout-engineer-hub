import { motion } from 'framer-motion';
import { ExternalLink, Github, Shield, Globe, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll';

const projects = [
  {
    title: 'DDoS Attack Detection System',
    description: 'Semi-supervised machine learning solution for network security using entropy estimation and co-clustering techniques.',
    problem: 'Network security threats with limited labeled data',
    impact: 'Achieved high detection accuracy with semi-supervised learning',
    tech: ['Python', 'Machine Learning', 'AI', 'Network Security'],
    icon: Shield,
    featured: true,
    liveUrl: '#',
    sourceUrl: '#',
  },
  {
    title: 'AI Telegram Bot',
    description: 'Conversational AI bot integrating ChatGPT and Gemini APIs for intelligent automated interactions.',
    problem: 'Need for intelligent automated customer interactions',
    impact: 'Built and deployed real-time conversational AI solution',
    tech: ['Python', 'ChatGPT API', 'Gemini API', 'Telegram Bot API'],
    icon: Bot,
    featured: true,
    liveUrl: '#',
    sourceUrl: '#',
  },
  {
    title: 'Django Web Application',
    description: 'Full-stack web app with user authentication, database modeling, and dynamic page rendering.',
    problem: 'Need for scalable and maintainable web solutions',
    impact: 'Implemented MVC architecture with robust backend',
    tech: ['Django', 'Python', 'MySQL', 'HTML/CSS', 'JavaScript'],
    icon: Globe,
    featured: true,
    liveUrl: '#',
    sourceUrl: '#',
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <AnimateOnScroll className="text-center mb-16">
          <span className="inline-block text-sm font-medium text-primary mb-4 tracking-wider uppercase">
            Projects
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Featured
            <span className="text-gradient"> work</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Projects that showcase my skills and problem-solving capabilities
          </p>
        </AnimateOnScroll>

        {/* Projects Grid */}
        <div className="grid gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className={`group relative rounded-2xl bg-card border border-border/50 overflow-hidden hover:border-primary/30 transition-all duration-500 ${
                index === 0 ? 'lg:col-span-2' : ''
              }`}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-glow-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative p-8 md:p-10">
                <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                  {/* Content */}
                  <div className="flex-1 space-y-4">
                    {/* Header */}
                    <div className="flex items-start gap-4">
                      {project.icon && (
                        <motion.div
                          whileHover={{ rotate: 5, scale: 1.1 }}
                          className="p-3 rounded-xl bg-primary/10 text-primary shrink-0"
                        >
                          <project.icon size={24} />
                        </motion.div>
                      )}
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                    </div>

                    {/* Problem & Impact */}
                    <div className="grid sm:grid-cols-2 gap-4 pt-4">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        className="p-4 rounded-xl bg-secondary/30 border border-border/30"
                      >
                        <span className="text-xs font-medium text-primary uppercase tracking-wider">
                          Problem
                        </span>
                        <p className="text-sm text-muted-foreground mt-1">
                          {project.problem}
                        </p>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                        className="p-4 rounded-xl bg-secondary/30 border border-border/30"
                      >
                        <span className="text-xs font-medium text-primary uppercase tracking-wider">
                          Impact
                        </span>
                        <p className="text-sm text-muted-foreground mt-1">
                          {project.impact}
                        </p>
                      </motion.div>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tech.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.1 * techIndex }}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3 pt-4">
                      <Button variant="glass" size="sm" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={16} />
                          Live Demo
                        </a>
                      </Button>
                      <Button variant="ghost" size="sm" asChild>
                        <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer">
                          <Github size={16} />
                          Source
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
