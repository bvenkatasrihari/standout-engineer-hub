import { motion } from 'framer-motion';
import { Code2, Lightbulb, Target, Zap } from 'lucide-react';
import { AnimateOnScroll, StaggerContainer, StaggerItem } from '@/components/ui/AnimateOnScroll';

const highlights = [
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable code',
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Optimized for speed & efficiency',
  },
  {
    icon: Target,
    title: 'User-Focused',
    description: 'Accessibility & UX first approach',
  },
  {
    icon: Lightbulb,
    title: 'Problem Solver',
    description: 'Data-driven decision making',
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <AnimateOnScroll className="text-center mb-16">
          <span className="inline-block text-sm font-medium text-primary mb-4 tracking-wider uppercase">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Passionate about crafting
            <br />
            <span className="text-gradient">digital experiences</span>
          </h2>
        </AnimateOnScroll>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <AnimateOnScroll variant="fadeLeft" delay={0.1}>
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a recent Computer Science graduate with a strong foundation in software 
                development, algorithms, and problem-solving. I've built projects ranging from 
                Django Web Applications to Semi-Supervised Learning for DDoS Detection.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I enjoy turning complex problems into clean, efficient solutions and collaborating 
                in team environments to bring ideas to life. Seeking opportunities as a Software 
                Engineer / Full-Stack Developer where I can contribute, grow, and continue 
                learning cutting-edge technologies.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-6">
                {[
                  { value: '3+', label: 'Projects' },
                  { value: '3', label: 'Internships' },
                  { value: '2025', label: 'Graduate' },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="text-center p-4 rounded-xl bg-secondary/30 border border-border/50"
                  >
                    <div className="text-3xl font-bold text-gradient mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>

          {/* Highlights Grid */}
          <StaggerContainer className="grid grid-cols-2 gap-4" staggerDelay={0.1}>
            {highlights.map((item, index) => (
              <StaggerItem key={item.title}>
                <motion.div
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className={`group p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 ${
                    index % 2 === 1 ? 'mt-8' : ''
                  }`}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};
