import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building, GraduationCap } from "lucide-react";

const ResumeSection = () => {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Tech Innovators Inc.",
      location: "Pune, MH, India",
      duration: "Jan 2022 - Present",
      description: [
        "Led a team of 10 extraordinary engineers in developing scalable microservices architecture",
        "Optimized text detection accuracy by 35% using advanced Computer Vision techniques",
        "Engineered end-to-end systems for finance automation processing 10M+ transactions",
        "Implemented AWS cloud solutions reducing infrastructure costs by 40%"
      ],
      technologies: ["Python", "Django", "AWS", "React", "Docker", "Kubernetes"]
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      location: "Mumbai, MH, India", 
      duration: "Jun 2020 - Dec 2021",
      description: [
        "Developed responsive web applications using React.js and Node.js",
        "Built RESTful APIs serving 1M+ daily requests with 99.9% uptime",
        "Integrated machine learning models for predictive analytics",
        "Collaborated with cross-functional teams using Agile methodologies"
      ],
      technologies: ["JavaScript", "React", "Node.js", "MongoDB", "Python", "TensorFlow"]
    },
    {
      title: "Software Developer Intern",
      company: "StartupTech",
      location: "Pune, MH, India",
      duration: "Jan 2020 - May 2020",
      description: [
        "Contributed to open-source projects with 500+ GitHub stars",
        "Developed computer vision applications using OpenCV and hand tracking",
        "Created automated testing suites improving code coverage by 60%"
      ],
      technologies: ["Python", "OpenCV", "Git", "Linux", "SQL"]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Engineering in Computer Science",
      institution: "Pune University",
      location: "Pune, MH, India",
      duration: "2017 - 2021",
      grade: "First Class with Distinction (8.5/10 CGPA)",
      achievements: [
        "President of Computer Science Student Society",
        "Winner of National Level Hackathon 2020",
        "Published research paper on Machine Learning optimization"
      ]
    }
  ];

  const skills = {
    "Programming Languages": ["Python", "JavaScript", "TypeScript", "Java", "C++"],
    "Frameworks & Libraries": ["Django", "React", "Node.js", "Express", "TensorFlow", "OpenCV"],
    "Cloud & DevOps": ["AWS", "Docker", "Kubernetes", "Jenkins", "Git", "Linux"],
    "Databases": ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch"],
    "Specializations": ["Machine Learning", "Computer Vision", "Microservices", "System Design"]
  };

  return (
    <div className="space-y-8">
      {/* Experience Section */}
      <Card className="glass floating-card p-8 animate-fade-in">
        <h2 className="text-3xl font-bold gradient-text mb-8 flex items-center gap-3">
          <Building className="h-8 w-8" />
          Professional Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative border-l-2 border-primary/20 pl-8 pb-8 last:pb-0 animate-slide-in-left" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-2 top-2 animate-glow"></div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                  <p className="text-primary font-medium">{exp.company}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mt-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {exp.location}
                    </span>
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-muted-foreground leading-relaxed">• {item}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="hover:bg-primary/10 transition-colors">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Education Section */}
      <Card className="glass floating-card p-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
        <h2 className="text-3xl font-bold gradient-text mb-8 flex items-center gap-3">
          <GraduationCap className="h-8 w-8" />
          Education
        </h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div key={index} className="space-y-4 animate-bounce-in" style={{ animationDelay: `${0.5 + index * 0.2}s` }}>
              <div>
                <h3 className="text-xl font-semibold text-foreground">{edu.degree}</h3>
                <p className="text-primary font-medium">{edu.institution}</p>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mt-2">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {edu.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {edu.location}
                  </span>
                </div>
                <p className="text-primary/80 font-medium mt-2">{edu.grade}</p>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-2">Key Achievements:</h4>
                <ul className="space-y-1">
                  {edu.achievements.map((achievement, i) => (
                    <li key={i} className="text-muted-foreground">• {achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Skills Section */}
      <Card className="glass floating-card p-8 animate-fade-in" style={{ animationDelay: "0.6s" }}>
        <h2 className="text-3xl font-bold gradient-text mb-8">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(skills).map(([category, skillList], index) => (
            <div key={category} className="space-y-3 animate-scale-in" style={{ animationDelay: `${0.8 + index * 0.1}s` }}>
              <h3 className="font-semibold text-foreground border-b border-primary/20 pb-2">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="outline" 
                    className="hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 hover:scale-105"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default ResumeSection;