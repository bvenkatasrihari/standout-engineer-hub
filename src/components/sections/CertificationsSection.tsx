import { Award, Cloud, Code, Layers } from 'lucide-react';

const certifications = [
  {
    title: 'Google Cloud Computing',
    subtitle: 'Google Kubernetes Certificate',
    issuer: 'Google Cloud',
    icon: Cloud,
  },
  {
    title: 'Python for Software Engineering',
    subtitle: 'Professional Certificate',
    issuer: 'Coursera',
    icon: Code,
  },
  {
    title: 'Full Stack Web Development',
    subtitle: 'Introduction Course',
    issuer: 'Great Learning',
    icon: Layers,
  },
];

export const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24 md:py-32 relative">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-medium text-primary mb-4 tracking-wider uppercase">
            Certifications
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Credentials &
            <span className="text-gradient"> achievements</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional certifications that validate my expertise
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="group relative p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <cert.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
                {cert.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-3">{cert.subtitle}</p>
              
              {/* Issuer Badge */}
              <div className="flex items-center gap-2">
                <Award size={14} className="text-primary" />
                <span className="text-xs font-medium text-primary">{cert.issuer}</span>
              </div>

              {/* Decorative Gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
