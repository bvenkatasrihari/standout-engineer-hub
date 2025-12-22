import { motion } from 'framer-motion';
import { GraduationCap, School, BookOpen } from 'lucide-react';
import { AnimateOnScroll, StaggerContainer, StaggerItem } from '@/components/ui/AnimateOnScroll';

const education = [
  {
    period: '2021 - 2025',
    degree: 'B.Tech in Computer Science',
    institution: 'GIET College of Engineering',
    field: 'Computer Science Engineering',
    description: 'Specialization in Computer Science and Engineering. Project work in ML-based security systems and AI applications.',
    icon: GraduationCap,
  },
  {
    period: '2019 - 2021',
    degree: 'High School',
    institution: 'Sri Chaithanya College',
    field: 'Intermediate Education',
    description: 'Completed intermediate education with focus on Mathematics, Physics, and Chemistry.',
    icon: School,
  },
  {
    period: '2018 - 2019',
    degree: 'Secondary Education',
    institution: 'Government Boys School',
    field: 'SSC',
    description: 'Completed secondary school education.',
    icon: BookOpen,
  },
];

export const EducationSection = () => {
  return (
    <section id="education" className="py-24 md:py-32 relative">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <AnimateOnScroll className="text-center mb-16">
          <span className="inline-block text-sm font-medium text-primary mb-4 tracking-wider uppercase">
            Education
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Academic
            <span className="text-gradient"> Journey</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My educational background and qualifications
          </p>
        </AnimateOnScroll>

        {/* Education Timeline */}
        <StaggerContainer className="relative" staggerDelay={0.15}>
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border/50 md:-translate-x-px" />

          {education.map((edu, index) => (
            <StaggerItem key={edu.degree + edu.institution}>
              <div className={`relative flex items-center mb-12 last:mb-0 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1/2 z-10" />

                {/* Content Card */}
                <motion.div
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}
                >
                  <div className="group p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300">
                    {/* Period Badge */}
                    <span className="inline-block px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full mb-4">
                      {edu.period}
                    </span>

                    {/* Icon & Title */}
                    <div className="flex items-start gap-4 mb-3">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                        <edu.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                          {edu.degree}
                        </h3>
                        <p className="text-primary font-medium">{edu.institution}</p>
                      </div>
                    </div>

                    {/* Field */}
                    <p className="text-sm text-muted-foreground mb-2">{edu.field}</p>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground">{edu.description}</p>
                  </div>
                </motion.div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
