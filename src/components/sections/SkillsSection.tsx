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
        <div className="text-center mb-16">
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
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="group p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300"
              style={{ animationDelay: `${categoryIndex * 100}ms` }}
            >
              <h3 className="text-lg font-semibold mb-4 text-foreground group-hover:text-primary transition-colors">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded-full bg-secondary/50 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="mt-12 text-center">
          <h3 className="text-lg font-semibold mb-6 text-muted-foreground">
            Also skilled in
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Critical Thinking', 'Agile Methodology', 'Team Collaboration', 'Problem Solving', 'Data-Driven Decisions'].map(
              (skill) => (
                <span
                  key={skill}
                  className="px-5 py-2.5 rounded-full border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-foreground transition-all duration-300"
                >
                  {skill}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
