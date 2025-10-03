const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          About Me
        </h2>
        
        <div className="bg-card cyber-border rounded-2xl p-8 md:p-12 space-y-6">
          <p className="text-lg leading-relaxed text-foreground/90">
            I am a proactive and adaptable final-year Computer Science student specializing in 
            <span className="text-primary font-semibold"> cybersecurity, AI, and networking</span>. 
            With hands-on experience in intrusion detection systems, phishing and malware detection, 
            and vulnerability analysis, I aim to apply my skills to strengthen IT infrastructures.
          </p>
          
          <p className="text-lg leading-relaxed text-foreground/90">
            I enjoy working on projects that combine security and innovation — from developing 
            explainable AI-based IDS solutions to phishing detection tools. Alongside my technical 
            journey, I've led events, coordinated placement drives, and volunteered at cybersecurity 
            conferences like <span className="text-accent font-semibold">BSides Kerala</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
