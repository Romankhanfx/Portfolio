import { Card } from "@/components/ui/card";

const AboutSection = () => {
  const skills = [
    {
      title: "Python Development",
      description: "Experienced in crafting intuitive user interfaces with a keen eye for design aesthetics, ensuring seamless user experiences.",
      icon: "🐍"
    },
    {
      title: "AWS",
      description: "Experienced in utilizing AWS services to deploy, manage, & scale applications, ensuring reliability & efficiency.",
      icon: "☁️"
    },
    {
      title: "System Design",
      description: "Proficient in designing scalable & efficient systems, ensuring optimal performance & reliability in application architecture.",
      icon: "🏗️"
    },
    {
      title: "Generative AI",
      description: "Experienced in developing and implementing generative models for creative applications, including text, image, and music generation.",
      icon: "🤖"
    },
    {
      title: "React JS",
      description: "Skilled in developing dynamic & interactive user interfaces using React JS, enhancing user engagement & experience.",
      icon: "⚛️"
    },
    {
      title: "Computer Vision",
      description: "Passionate about leveraging Computer Vision technologies for advanced image processing & analysis.",
      icon: "👁️"
    }
  ];

  return (
    <div className="space-y-8">
      {/* About Text */}
      <Card className="glass floating-card p-8">
        <h2 className="text-3xl font-bold gradient-text mb-6">About</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            With over <span className="text-primary font-semibold">4Yr & 3M of experience</span> in{" "}
            <span className="text-primary font-semibold">Full Stack development</span>, including expertise in{" "}
            <code className="bg-muted px-2 py-1 rounded text-foreground">Core Python</code>,{" "}
            <code className="bg-muted px-2 py-1 rounded text-foreground">Django</code>, &{" "}
            <code className="bg-muted px-2 py-1 rounded text-foreground">AWS</code>, I've led successful 
            projects at multiple organizations, leveraging cutting-edge technologies to enhance user interactions 
            and automate tasks. Skilled in{" "}
            <code className="bg-muted px-2 py-1 rounded text-foreground">microservice architecture</code> &{" "}
            <code className="bg-muted px-2 py-1 rounded text-foreground">API integration</code>, I bring a 
            robust skill set to drive innovation and efficiency.
          </p>
          
          <p>
            As the <span className="text-primary font-semibold">Senior Software Engineer</span>, I've managed a team of{" "}
            <span className="text-primary font-semibold">10 extraordinary engineers</span> while demonstrating 
            proficiency in <code className="bg-muted px-2 py-1 rounded text-foreground">Python</code>,{" "}
            <code className="bg-muted px-2 py-1 rounded text-foreground">JavaScript</code>, &{" "}
            <code className="bg-muted px-2 py-1 rounded text-foreground">AWS</code>. My contributions to various 
            projects have centered around:
          </p>
          
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><span className="font-semibold text-foreground">Optimizing Text Detection Accuracy</span></li>
            <li><span className="font-semibold text-foreground">Engineering E2E systems</span></li>
            <li><span className="font-semibold text-foreground">Finance Automation & Processing</span></li>
          </ul>
          
          <p>
            Passionate about interactive projects, I've developed applications utilizing{" "}
            <code className="bg-muted px-2 py-1 rounded text-foreground">OpenCV</code> and{" "}
            <code className="bg-muted px-2 py-1 rounded text-foreground">Hand Tracking Modules</code>, 
            showcasing my commitment to leveraging technology for intuitive user experiences.
          </p>
        </div>
      </Card>

      {/* Skills Grid */}
      <div>
        <h3 className="text-2xl font-bold gradient-text mb-6">What I do!</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <Card key={index} className="glass floating-card p-6 group">
              <div className="flex items-start space-x-4">
                <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-lg text-foreground">{skill.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;