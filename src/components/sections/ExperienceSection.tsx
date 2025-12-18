import { Briefcase, GraduationCap } from 'lucide-react';

const experiences = [
  {
    type: 'work',
    title: 'AI & ML Intern',
    organization: 'AIMERS',
    duration: 'May 2024 - Jul 2024',
    description: 'Implemented advanced ML & AI techniques in real-world projects',
    achievements: [
      'Acquired hands-on ML & AI implementation experience',
      'Achieved 95% usability across devices through cross-browser testing',
      'Collaborated using Agile methodologies for on-time delivery',
    ],
  },
  {
    type: 'work',
    title: 'Django Developer Intern',
    organization: 'APSSDC',
    duration: 'Mar 2023 - Apr 2023',
    description: 'Web development with Django framework focus',
    achievements: [
      'Enhanced skills in database management and user authentication',
      'Developed full-stack web applications',
      'Integrated frontend technologies with Django backend',
    ],
  },
  {
    type: 'education',
    title: 'B.Tech in Computer Science',
    organization: 'GIET (A), JNTU Kakinada',
    duration: '2021 - 2025',
    description: 'CGPA: 7.18',
    achievements: [
      'Specialization in Computer Science and Engineering',
      'Project work in ML-based security systems',
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
        <div className="text-center mb-16">
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
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={exp.title}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Node */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />

                {/* Card */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="group p-6 md:p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`p-3 rounded-xl ${exp.type === 'work' ? 'bg-primary/10 text-primary' : 'bg-glow-secondary/10 text-glow-secondary'}`}>
                        {exp.type === 'work' ? <Briefcase size={20} /> : <GraduationCap size={20} />}
                      </div>
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
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
