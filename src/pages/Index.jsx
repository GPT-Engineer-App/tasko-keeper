import { useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const navigation = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const skills = ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Node.js", "Git"];

  const projects = [
    { name: "Project 1", description: "A brief description of Project 1" },
    { name: "Project 2", description: "A brief description of Project 2" },
    { name: "Project 3", description: "A brief description of Project 3" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 bg-background/80 backdrop-blur-sm z-10">
        <nav className="container mx-auto px-4 py-4">
          <ul className="flex justify-center space-x-6">
            {navigation.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={`text-lg hover:text-primary transition-colors ${
                    activeSection === item.name.toLowerCase() ? "text-primary font-semibold" : ""
                  }`}
                  onClick={() => setActiveSection(item.name.toLowerCase())}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section id="home" className="mb-16">
          <h1 className="text-4xl font-bold mb-4">John Doe</h1>
          <p className="text-xl mb-4">Web Developer & Designer</p>
          <p className="text-lg">
            Welcome to my personal website! I'm passionate about creating beautiful and functional web experiences.
          </p>
        </section>

        <section id="skills" className="mb-16">
          <h2 className="text-3xl font-semibold mb-4">Skills</h2>
          <ul className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <li key={skill} className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full">
                {skill}
              </li>
            ))}
          </ul>
        </section>

        <section id="projects" className="mb-16">
          <h2 className="text-3xl font-semibold mb-4">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div key={project.name} className="bg-card text-card-foreground p-4 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact">
          <h2 className="text-3xl font-semibold mb-4">Contact</h2>
          <p className="mb-4">Feel free to reach out to me through any of the following channels:</p>
          <div className="flex space-x-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary">
              <Linkedin size={24} />
            </a>
            <a href="mailto:johndoe@example.com" className="text-foreground hover:text-primary">
              <Mail size={24} />
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-secondary text-secondary-foreground py-4 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 John Doe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
