import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll';

const experiences = [
  {
    type: 'work',
    title: 'Java Full Stack Development Intern',
    organization: 'VaultSphere AI Technologies',
    duration: 'Dec 2024 - Mar 2025',
    description: 'Completed structured internship in Java Full Stack Development',
    achievements: [
      'Gained proficiency in Core Java, JDBC, Servlets, JSP, and Spring Boot',
      'Learned frontend frameworks including React and Angular',
      'Worked with MySQL for data modeling, CRUD operations, and backend integration',
    ],
  },
  {
    type: 'work',
    title: 'Artificial Intelligence Intern',
    organization: 'AIMERS Society',
    duration: 'May 2024 - Aug 2024',
    description: 'Worked on AI and Data Visualization projects',
    achievements: [
      'Developed summarization model using Hugging Face Transformers',
      'Implemented object detection using YOLO for real-time image recognition',
      'Built and deployed Telegram bot integrating ChatGPT and Gemini APIs',
      'Utilized Power BI for data visualization and dashboards',
    ],
  },
  {
    type: 'work',
    title: 'Web Development Intern',
    organization: 'APSSDC',
    duration: 'May 2023 - Jul 2023',
    description: 'Web development with Django framework focus',
    achievements: [
      'Designed projects with database modeling and user authentication',
      'Built responsive web applications with HTML, CSS, JavaScript, and Python',
      'Strengthened skills in MVC architecture and API integration',
    ],
  },
  {
    type: 'education',
    title: 'B.Tech in Computer Science',
    organization: 'GIET College of Engineering',
    duration: '2021 - 2025',
    description: 'Computer Science Engineering',
    achievements: [
      'Specialization in Computer Science and Engineering',
      'Project work in ML-based security systems and AI applications',
    ],
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 md:py-32 relative">
      {/* Background Accent */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="container max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <AnimateOnScroll className="text-center mb-16">
          <span className="inline-block text-sm font-medium text-primary mb-4 tracking-wider uppercase">
            Experience
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            My
            <span className="text-gradient"> journey</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional experiences and educational background that shaped my skills
          </p>
        </AnimateOnScroll>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent hidden md:block origin-top"
          />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Node */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.2 + 0.2 }}
                  className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10"
                />

                {/* Card */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <motion.div
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    className="group p-6 md:p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300"
                  >
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <motion.div
                        whileHover={{ rotate: 10 }}
                        className={`p-3 rounded-xl ${exp.type === 'work' ? 'bg-primary/10 text-primary' : 'bg-glow-secondary/10 text-glow-secondary'}`}
                      >
                        {exp.type === 'work' ? <Briefcase size={20} /> : <GraduationCap size={20} />}
                      </motion.div>
                      <div className="flex-1">
                        <span className="text-sm text-primary font-medium">
                          {exp.duration}
                        </span>
                        <h3 className="text-xl font-bold mt-1">{exp.title}</h3>
                        <p className="text-muted-foreground">{exp.organization}</p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-4">{exp.description}</p>

                    {/* Achievements */}
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.1 * i }}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
