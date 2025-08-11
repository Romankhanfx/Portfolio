import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Twitter, Instagram, MapPin, Calendar, Mail, Download } from "lucide-react";
import profileAvatar from "@/assets/profile-avatar.png";

const ProfileCard = () => {
  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <Card className="glass floating-card p-8 max-w-sm w-full">
      <div className="text-center space-y-6">
        {/* Avatar */}
        <div className="relative mx-auto w-48 h-48">
          <img
            src={profileAvatar}
            alt="Ankit Pakhale"
            className="w-full h-full object-cover rounded-2xl shadow-floating"
          />
        </div>

        {/* Name and Title */}
        <div className="space-y-2">
          <h1 className="text-2xl font-bold gradient-text">Ankit Pakhale</h1>
          <p className="text-muted-foreground">Senior Software Engineer</p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-3">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <Button
              key={label}
              variant="ghost"
              size="sm"
              className="w-10 h-10 p-0 rounded-xl hover:bg-primary/10 hover:text-primary transition-all duration-300"
              asChild
            >
              <a href={href} target="_blank" rel="noopener noreferrer" title={label}>
                <Icon className="h-4 w-4" />
              </a>
            </Button>
          ))}
        </div>

        {/* Contact Info */}
        <div className="space-y-4 text-sm">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/30">
            <Mail className="h-4 w-4 text-primary" />
            <span className="text-muted-foreground">akp3067@mail.com</span>
          </div>
          
          <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/30">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="text-muted-foreground">Pune, MH, India</span>
          </div>
          
          <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/30">
            <Calendar className="h-4 w-4 text-primary" />
            <span className="text-muted-foreground">Mar 10, 2000</span>
          </div>
        </div>

        {/* Download CV Button */}
        <Button className="w-full bg-gradient-primary border-0 text-primary-foreground hover:shadow-floating transition-all duration-300">
          <Download className="h-4 w-4 mr-2" />
          Download CV
        </Button>
      </div>
    </Card>
  );
};

export default ProfileCard;