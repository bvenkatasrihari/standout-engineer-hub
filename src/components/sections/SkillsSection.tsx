import { motion } from 'framer-motion';
import { AnimateOnScroll, StaggerContainer, StaggerItem } from '@/components/ui/AnimateOnScroll';

const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'Responsive Design'],
  },
  {
    title: 'Languages',
    skills: ['JavaScript', 'C++', 'Java', 'Python'],
  },
  {
    title: 'Backend & Database',
    skills: ['Django', 'SQL', 'REST APIs', 'Node.js Basics'],
  },
  {
    title: 'Tools & DevOps',
    skills: ['Git', 'GitHub', 'VS Code', 'Google Cloud', 'Kubernetes'],
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 md:py-32 relative">
      {/* Background Accent */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-glow-secondary/5 rounded-full blur-[120px]" />
      </div>

      <div className="container max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <AnimateOnScroll className="text-center mb-16">
          <span className="inline-block text-sm font-medium text-primary mb-4 tracking-wider uppercase">
            Skills
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            My technical
            <span className="text-gradient"> toolkit</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </AnimateOnScroll>

        {/* Skills Grid */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
          {skillCategories.map((category) => (
            <StaggerItem key={category.title}>
              <motion.div
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group h-full p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold mb-4 text-foreground group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1.5 text-sm rounded-full bg-secondary/50 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Soft Skills */}
        <AnimateOnScroll delay={0.3} className="mt-12 text-center">
          <h3 className="text-lg font-semibold mb-6 text-muted-foreground">
            Also skilled in
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Critical Thinking', 'Agile Methodology', 'Team Collaboration', 'Problem Solving', 'Data-Driven Decisions'].map(
              (skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="px-5 py-2.5 rounded-full border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-foreground transition-all duration-300"
                >
                  {skill}
                </motion.span>
              )
            )}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};
