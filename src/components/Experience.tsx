import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Users } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Cybersecurity Intern",
      company: "Nethram LLC",
      icon: Briefcase,
      points: [
        "Conducted comprehensive security assessments",
        "Built AI-based test automation assistant",
        "Improved CI/CD efficiency"
      ]
    },
    {
      title: "Volunteer",
      company: "BSides Kerala",
      icon: Users,
      points: [
        "Assisted in speaker operations",
        "Event execution at Kerala's largest cybersecurity conference"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Experience
        </h2>
        
        <div className="space-y-6 max-w-3xl mx-auto">
          {experiences.map((exp, idx) => {
            const Icon = exp.icon;
            return (
              <Card key={idx} className="cyber-border bg-card">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle>{exp.title}</CardTitle>
                      <CardDescription className="text-accent">{exp.company}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 ml-16">
                    {exp.points.map((point, pointIdx) => (
                      <li key={pointIdx} className="text-foreground/80 flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
