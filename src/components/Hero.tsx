import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Hi, I'm Fidha Thasni
          </h1>
          <p className="text-2xl md:text-3xl text-muted-foreground">
            Cyber Security Enthusiast & Computer Science Student
          </p>
        </div>
        
        <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
          🔐 Passionate about securing systems, building AI-driven security solutions, 
          and solving real-world problems with technology.
        </p>
        
        <p className="text-base md:text-lg text-muted-foreground">
          Final-year B.Tech in Computer Science & Design | Government Engineering College, Kozhikode
        </p>

        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Button 
            variant="default" 
            size="lg"
            className="cyber-glow"
            asChild
          >
            <a href="https://www.linkedin.com/in/fidha-thasni-n/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </a>
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="cyber-border"
            asChild
          >
            <a href="https://github.com/fidhathasnin" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </a>
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="cyber-border"
            asChild
          >
            <a href="mailto:fidha.thasni04@gmail.com">
              <Mail className="mr-2 h-5 w-5" />
              Email
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
