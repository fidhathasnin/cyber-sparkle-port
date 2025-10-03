import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Code, Network, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Cybersecurity Tools",
      icon: Shield,
      skills: ["Kali Linux", "Nmap", "Wireshark", "Burp Suite", "OWASP ZAP", "Nikto", "Metasploit", "ClamAV", "DVWA", "VirusTotal API"]
    },
    {
      title: "Security Domains",
      icon: Network,
      skills: ["Intrusion Detection", "Vulnerability Assessment", "Penetration Testing", "Packet Analysis", "Threat Intelligence", "Malware Detection"]
    },
    {
      title: "Programming & Scripting",
      icon: Code,
      skills: ["Python", "Bash", "C", "Java"]
    },
    {
      title: "Other Skills",
      icon: Wrench,
      skills: ["Networking", "Firewall Configuration", "GitHub Documentation", "Team Leadership", "Problem Solving"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Skills
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <Card key={idx} className="cyber-border bg-card hover:cyber-glow transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-primary">
                    <Icon className="h-6 w-6" />
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIdx) => (
                      <span 
                        key={skillIdx}
                        className="px-3 py-1 bg-primary/10 text-primary border border-primary/30 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
