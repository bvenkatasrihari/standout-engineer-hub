import { Code2, Lightbulb, Target, Zap } from 'lucide-react';

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
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-medium text-primary mb-4 tracking-wider uppercase">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Passionate about crafting
            <br />
            <span className="text-gradient">digital experiences</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a Frontend Developer with expertise in React.js, JavaScript, and modern 
              web technologies. Currently pursuing B.Tech in Computer Science at GIET (A), 
              I blend academic knowledge with practical experience from internships at 
              AIMERS and APSSDC.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My approach combines technical proficiency with a keen eye for user experience. 
              I believe in building applications that aren't just functional, but truly 
              delightful to use. From cross-browser compatibility to performance optimization, 
              I ensure every detail is polished.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center p-4 rounded-xl bg-secondary/30 border border-border/50">
                <div className="text-3xl font-bold text-gradient mb-1">3+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-secondary/30 border border-border/50">
                <div className="text-3xl font-bold text-gradient mb-1">2</div>
                <div className="text-sm text-muted-foreground">Internships</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-secondary/30 border border-border/50">
                <div className="text-3xl font-bold text-gradient mb-1">95%</div>
                <div className="text-sm text-muted-foreground">Usability</div>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className={`group p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 ${
                  index % 2 === 1 ? 'mt-8' : ''
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
