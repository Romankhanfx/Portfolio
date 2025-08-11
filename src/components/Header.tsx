import { Button } from "@/components/ui/button";
import { Moon, Sun, Maximize2 } from "lucide-react";
import { useTheme } from "next-themes";
import logoImage from "@/assets/logo.png";

const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="fixed top-6 left-6 right-6 z-40">
      <div className="glass rounded-2xl px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src={logoImage} alt="AP Logo" className="w-8 h-8" />
          <span className="font-bold text-lg gradient-text">Ankit Pakhale</span>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="w-10 h-10 p-0 rounded-xl hover:bg-muted/50 transition-all duration-300"
          >
            {theme === "light" ? (
              <Moon className="h-4 w-4" />
            ) : (
              <Sun className="h-4 w-4" />
            )}
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            className="w-10 h-10 p-0 rounded-xl hover:bg-muted/50 transition-all duration-300"
            title="Fullscreen"
          >
            <Maximize2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;