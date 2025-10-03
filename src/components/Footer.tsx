import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-6">
          <p className="text-xl text-foreground/90">
            ✨ Let's connect and collaborate on building secure, innovative, and AI-powered tech solutions.
          </p>
          
          <div className="flex justify-center gap-6">
            <a 
              href="https://www.linkedin.com/in/fidha-thasni-n/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="https://github.com/fidhathasnin" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="mailto:fidha.thasni04@gmail.com"
              className="text-primary hover:text-accent transition-colors"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
          
          <p className="text-sm text-muted-foreground">
            © 2025 Fidha Thasni. Built with passion for cybersecurity.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
