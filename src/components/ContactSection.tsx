import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, MessageSquare, Linkedin, Github, Twitter } from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    projectType: "",
    budget: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Message Sent Successfully! 🎉",
      description: "Thank you for reaching out. I'll get back to you within 24 hours.",
    });
    
    setFormData({
      name: "",
      email: "",
      subject: "",
      projectType: "",
      budget: "",
      message: ""
    });
    setIsSubmitting(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "akp3067@mail.com",
      href: "mailto:akp3067@mail.com?subject=Opportunity%20Discussion&body=Hello%20Ankit,%0A%0AI%20would%20like%20to%20discuss%20an%20opportunity%20with%20you.",
      description: "Best for project inquiries"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9876543210",
      href: "tel:+919876543210",
      description: "Available Mon-Fri, 9AM-6PM IST"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Pune, Maharashtra, India",
      href: "https://maps.google.com/?q=Pune,Maharashtra,India",
      description: "Open to remote opportunities"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/ankitpakhale",
      color: "hover:text-[#0077B5]"
    },
    {
      icon: Github,
      label: "GitHub", 
      href: "https://github.com/ankitpakhale",
      color: "hover:text-[#333]"
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com/ankitpakhale",
      color: "hover:text-[#1DA1F2]"
    }
  ];

  const faqs = [
    {
      question: "What types of projects do you work on?",
      answer: "I specialize in full-stack web development, AI/ML solutions, cloud architecture, and mobile applications. From MVPs to enterprise-scale systems."
    },
    {
      question: "What's your typical project timeline?",
      answer: "Project timelines vary based on complexity. Simple websites: 2-4 weeks, Complex web apps: 6-12 weeks, AI/ML projects: 8-16 weeks."
    },
    {
      question: "Do you work with international clients?",
      answer: "Absolutely! I work with clients globally and am comfortable with different time zones. All communication is in English."
    },
    {
      question: "What's included in your development services?",
      answer: "Complete end-to-end development including planning, design, development, testing, deployment, and 3 months of free maintenance."
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <Card className="glass floating-card p-8 text-center animate-fade-in">
        <h2 className="text-3xl font-bold gradient-text mb-4">Let's Work Together</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Ready to bring your ideas to life? I'm always excited to work on innovative projects 
          and help businesses achieve their goals through technology.
        </p>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Form */}
        <Card className="glass floating-card p-8 animate-slide-in-left">
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <MessageSquare className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-semibold gradient-text">Send a Message</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="John Doe"
                    required
                    className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="john@example.com"
                    required
                    className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject *</Label>
                <Input
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => handleInputChange("subject", e.target.value)}
                  placeholder="Project Discussion"
                  required
                  className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="projectType">Project Type</Label>
                  <Select value={formData.projectType} onValueChange={(value) => handleInputChange("projectType", value)}>
                    <SelectTrigger className="transition-all duration-300 focus:ring-2 focus:ring-primary/20">
                      <SelectValue placeholder="Select project type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="web-app">Web Application</SelectItem>
                      <SelectItem value="mobile-app">Mobile Application</SelectItem>
                      <SelectItem value="ai-ml">AI/ML Solution</SelectItem>
                      <SelectItem value="cloud">Cloud Architecture</SelectItem>
                      <SelectItem value="consulting">Technical Consulting</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="budget">Budget Range</Label>
                  <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                    <SelectTrigger className="transition-all duration-300 focus:ring-2 focus:ring-primary/20">
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5k-10k">$5K - $10K</SelectItem>
                      <SelectItem value="10k-25k">$10K - $25K</SelectItem>
                      <SelectItem value="25k-50k">$25K - $50K</SelectItem>
                      <SelectItem value="50k+">$50K+</SelectItem>
                      <SelectItem value="discuss">Let's Discuss</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  placeholder="Tell me about your project, goals, and requirements..."
                  required
                  rows={5}
                  className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-gradient-primary text-primary-foreground hover:shadow-floating transition-all duration-300 hover:scale-105"
              >
                {isSubmitting ? (
                  <>
                    <Clock className="h-4 w-4 mr-2 animate-spin" />
                    Sending Message...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </Card>

        {/* Contact Info & FAQ */}
        <div className="space-y-8">
          {/* Contact Information */}
          <Card className="glass floating-card p-8 animate-slide-in-right">
            <h3 className="text-2xl font-semibold gradient-text mb-6">Get in Touch</h3>
            <div className="space-y-6">
              {contactInfo.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <div key={index} className="flex items-start gap-4 group animate-fade-in" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-foreground">{contact.label}</h4>
                      <a 
                        href={contact.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary-hover transition-colors"
                      >
                        {contact.value}
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">{contact.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="mt-8 pt-6 border-t border-border">
              <h4 className="font-medium text-foreground mb-4">Connect on Social</h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <Button
                      key={social.label}
                      variant="outline"
                      size="sm"
                      className={`hover:scale-110 transition-all duration-300 ${social.color}`}
                      asChild
                    >
                      <a href={social.href} target="_blank" rel="noopener noreferrer">
                        <Icon className="h-4 w-4 mr-2" />
                        {social.label}
                      </a>
                    </Button>
                  );
                })}
              </div>
            </div>
          </Card>

          {/* FAQ */}
          <Card className="glass floating-card p-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <h3 className="text-2xl font-semibold gradient-text mb-6">Frequently Asked Questions</h3>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details key={index} className="group">
                  <summary className="flex items-center justify-between cursor-pointer p-4 rounded-lg hover:bg-muted/20 transition-colors">
                    <span className="font-medium text-foreground">{faq.question}</span>
                    <CheckCircle className="h-4 w-4 text-primary group-open:rotate-45 transition-transform" />
                  </summary>
                  <div className="px-4 pb-4 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;