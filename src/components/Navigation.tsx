import { User, FileText, Briefcase, HelpCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Navigation = ({ activeSection, onSectionChange }: NavigationProps) => {
  const navItems = [
    { id: "about", label: "About", icon: User },
    { id: "resume", label: "Resume", icon: FileText },
    { id: "portfolio", label: "Portfolio", icon: Briefcase },
    { id: "faq", label: "FAQ", icon: HelpCircle },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  return (
    <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50">
      <div className="glass rounded-2xl p-2 space-y-2">
        {navItems.map(({ id, label, icon: Icon }) => (
          <Button
            key={id}
            variant={activeSection === id ? "default" : "ghost"}
            size="sm"
            onClick={() => onSectionChange(id)}
            className={`w-12 h-12 p-0 transition-all duration-300 ${
              activeSection === id
                ? "bg-primary text-primary-foreground shadow-floating"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
            }`}
            title={label}
          >
            <Icon className="h-5 w-5" />
          </Button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;