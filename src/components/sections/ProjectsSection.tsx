import { ExternalLink, Github, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'DDoS Attack Detection System',
    description: 'Semi-supervised ML approach for real-time DDoS detection using network entropy estimation, co-clustering, and Extra-Trees algorithm.',
    problem: 'Detecting distributed denial-of-service attacks with limited labeled data',
    impact: 'Achieved high accuracy on benchmark datasets with semi-supervised learning',
    tech: ['Python', 'Machine Learning', 'Scikit-learn', 'Network Analysis'],
    icon: Shield,
    featured: true,
    liveUrl: '#',
    sourceUrl: '#',
  },
  {
    title: 'Django Web Applications',
    description: 'Multiple full-stack web applications with user authentication, database management, and responsive frontend integration.',
    problem: 'Building scalable web platforms with robust backend infrastructure',
    impact: 'Delivered production-ready applications during APSSDC internship',
    tech: ['Django', 'Python', 'SQL', 'HTML/CSS', 'JavaScript'],
    featured: true,
    liveUrl: '#',
    sourceUrl: '#',
  },
  {
    title: 'Responsive UI Components',
    description: 'Cross-browser compatible component library achieving 95% usability across devices and platforms.',
    problem: 'Creating consistent user experiences across diverse browsers and devices',
    impact: '95% usability rate across all major platforms and browsers',
    tech: ['React.js', 'CSS3', 'Bootstrap', 'Cross-browser Testing'],
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
        <div className="text-center mb-16">
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
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
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
                        <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                          <project.icon size={24} />
                        </div>
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
                      <div className="p-4 rounded-xl bg-secondary/30 border border-border/30">
                        <span className="text-xs font-medium text-primary uppercase tracking-wider">
                          Problem
                        </span>
                        <p className="text-sm text-muted-foreground mt-1">
                          {project.problem}
                        </p>
                      </div>
                      <div className="p-4 rounded-xl bg-secondary/30 border border-border/30">
                        <span className="text-xs font-medium text-primary uppercase tracking-wider">
                          Impact
                        </span>
                        <p className="text-sm text-muted-foreground mt-1">
                          {project.impact}
                        </p>
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                        >
                          {tech}
                        </span>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
