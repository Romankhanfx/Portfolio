import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Eye, Rocket, Database, Brain, Cloud, Smartphone, Globe } from "lucide-react";

const PortfolioSection = () => {
  const projects = [
    {
      title: "AI-Powered Document Analysis Platform",
      description: "Enterprise-grade document processing system using Computer Vision and NLP to extract and analyze information from various document types with 95% accuracy.",
      image: "🤖",
      technologies: ["Python", "TensorFlow", "OpenCV", "Django", "AWS", "PostgreSQL"],
      features: [
        "Real-time document processing",
        "Multi-language OCR support", 
        "Advanced text classification",
        "RESTful API with 99.9% uptime"
      ],
      metrics: {
        users: "10,000+",
        accuracy: "95%",
        processing: "1M+ docs/month"
      },
      links: {
        demo: "#",
        github: "#",
        live: "#"
      },
      category: "AI/ML",
      status: "Production"
    },
    {
      title: "Microservices E-Commerce Platform",
      description: "Scalable e-commerce solution built with microservices architecture, handling high-traffic loads with real-time inventory management and payment processing.",
      image: "🛒",
      technologies: ["Node.js", "React", "Docker", "Kubernetes", "MongoDB", "Redis"],
      features: [
        "Microservices architecture",
        "Real-time inventory tracking",
        "Secure payment gateway",
        "Advanced analytics dashboard"
      ],
      metrics: {
        transactions: "100K+/day",
        uptime: "99.99%",
        performance: "< 200ms response"
      },
      links: {
        demo: "#",
        github: "#"
      },
      category: "Full Stack",
      status: "Production"
    },
    {
      title: "Computer Vision Hand Tracking",
      description: "Interactive hand tracking application using OpenCV and MediaPipe for gesture recognition, enabling touchless control interfaces for various applications.",
      image: "👋",
      technologies: ["Python", "OpenCV", "MediaPipe", "NumPy", "Tkinter"],
      features: [
        "Real-time hand detection",
        "Gesture recognition",
        "Multi-hand tracking",
        "Customizable gestures"
      ],
      metrics: {
        accuracy: "98%",
        fps: "60 FPS",
        latency: "< 10ms"
      },
      links: {
        demo: "#",
        github: "#"
      },
      category: "Computer Vision",
      status: "Open Source"
    },
    {
      title: "AWS Cloud Infrastructure Automation",
      description: "Infrastructure as Code solution for automated deployment and scaling of cloud resources using Terraform and AWS services with monitoring and alerting.",
      image: "☁️",
      technologies: ["AWS", "Terraform", "Docker", "Jenkins", "Python", "CloudWatch"],
      features: [
        "Infrastructure as Code",
        "Auto-scaling policies",
        "Monitoring & alerting",
        "Cost optimization"
      ],
      metrics: {
        cost_saving: "40%",
        deployment_time: "90% faster",
        availability: "99.9%"
      },
      links: {
        demo: "#",
        github: "#"
      },
      category: "DevOps",
      status: "Production"
    },
    {
      title: "Real-time Data Analytics Dashboard",
      description: "Interactive dashboard for real-time data visualization and analytics with machine learning insights for business intelligence and decision making.",
      image: "📊",
      technologies: ["React", "D3.js", "Python", "FastAPI", "WebSocket", "PostgreSQL"],
      features: [
        "Real-time data streaming",
        "Interactive visualizations",
        "ML-powered insights",
        "Custom alerting system"
      ],
      metrics: {
        data_points: "10M+/day",
        users: "500+",
        response_time: "< 100ms"
      },
      links: {
        demo: "#",
        github: "#"
      },
      category: "Data Analytics",
      status: "Production"
    },
    {
      title: "Mobile Finance App",
      description: "Cross-platform mobile application for personal finance management with AI-powered expense categorization and financial planning recommendations.",
      image: "💰",
      technologies: ["React Native", "Firebase", "Node.js", "TensorFlow", "MongoDB"],
      features: [
        "Expense tracking",
        "AI categorization",
        "Financial insights",
        "Budget planning"
      ],
      metrics: {
        downloads: "50K+",
        rating: "4.8/5",
        retention: "85%"
      },
      links: {
        demo: "#",
        github: "#"
      },
      category: "Mobile",
      status: "Production"
    }
  ];

  const categories = ["All", "AI/ML", "Full Stack", "Computer Vision", "DevOps", "Data Analytics", "Mobile"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    const icons = {
      "AI/ML": Brain,
      "Full Stack": Globe,
      "Computer Vision": Eye,
      "DevOps": Cloud,
      "Data Analytics": Database,
      "Mobile": Smartphone
    };
    return icons[category] || Rocket;
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <Card className="glass floating-card p-8 animate-fade-in">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold gradient-text">Portfolio</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Showcasing innovative solutions and cutting-edge projects that demonstrate expertise in 
            full-stack development, AI/ML, and cloud technologies.
          </p>
        </div>
      </Card>

      {/* Category Filter */}
      <Card className="glass floating-card p-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category) => {
            const Icon = category === "All" ? Rocket : getCategoryIcon(category);
            return (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`transition-all duration-300 ${
                  selectedCategory === category 
                    ? "bg-primary text-primary-foreground shadow-floating scale-105" 
                    : "hover:bg-primary/10 hover:scale-105"
                }`}
              >
                <Icon className="h-4 w-4 mr-2" />
                {category}
              </Button>
            );
          })}
        </div>
      </Card>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project, index) => (
          <Card key={index} className="glass floating-card overflow-hidden group animate-scale-in" style={{ animationDelay: `${0.4 + index * 0.1}s` }}>
            {/* Project Header */}
            <div className="p-6 space-y-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="text-4xl animate-bounce-in" style={{ animationDelay: `${0.6 + index * 0.1}s` }}>
                    {project.image}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge variant="secondary" className="text-xs">{project.category}</Badge>
                      <Badge 
                        variant={project.status === "Production" ? "default" : "outline"}
                        className="text-xs"
                      >
                        {project.status}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                {project.description}
              </p>

              {/* Features */}
              <div>
                <h4 className="font-medium text-foreground mb-2">Key Features:</h4>
                <ul className="grid grid-cols-2 gap-1 text-sm text-muted-foreground">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-1">
                      <div className="w-1 h-1 bg-primary rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4 p-4 rounded-xl bg-muted/20">
                {Object.entries(project.metrics).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-lg font-bold text-primary">{value}</div>
                    <div className="text-xs text-muted-foreground capitalize">{key.replace('_', ' ')}</div>
                  </div>
                ))}
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="outline" className="text-xs hover:bg-primary/10 transition-colors">
                    {tech}
                  </Badge>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4">
                {project.links.live && (
                  <Button size="sm" className="bg-gradient-primary text-primary-foreground hover:shadow-floating transition-all duration-300 hover:scale-105">
                    <Eye className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                )}
                {project.links.github && (
                  <Button variant="outline" size="sm" className="hover:bg-primary/10 hover:scale-105 transition-all duration-300">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                )}
                {project.links.demo && (
                  <Button variant="ghost" size="sm" className="hover:bg-primary/10 hover:scale-105 transition-all duration-300">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Details
                  </Button>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PortfolioSection;