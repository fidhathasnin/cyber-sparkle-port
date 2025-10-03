import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, AlertTriangle, Bot, Monitor, Network } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "SafeSpect",
      description: "XAI-based Intrusion Detection System",
      details: "Real-time ML-powered IDS with SHAP & LIME explainability",
      icon: Shield
    },
    {
      title: "PhishGuard",
      description: "Web-based Phishing Detection Tool",
      details: "Using Firebase + VirusTotal API",
      icon: AlertTriangle
    },
    {
      title: "AI Robot Framework Generator",
      description: "Natural Language to Test Cases",
      details: "Converts natural language prompts into Robot Framework test cases",
      icon: Bot
    },
    {
      title: "Hardware 360",
      description: "PC Simulator Application",
      details: "Interactive PC building simulator with quizzes",
      icon: Monitor
    },
    {
      title: "Network Packet Analyzer",
      description: "Custom Python-based Tool",
      details: "Traffic analysis and packet inspection",
      icon: Network
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => {
            const Icon = project.icon;
            return (
              <Card 
                key={idx} 
                className="cyber-border bg-card hover:cyber-glow hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-accent">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{project.details}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
