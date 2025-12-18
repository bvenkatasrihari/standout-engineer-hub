import { Heart } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo / Name */}
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-gradient">VSH</span>
            <span className="text-muted-foreground">|</span>
            <span className="text-sm text-muted-foreground">
              Building digital experiences
            </span>
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>© {currentYear}</span>
            <span>Venkata Sri Hari Boyi.</span>
            <span className="hidden sm:inline">Crafted with</span>
            <Heart size={14} className="text-primary hidden sm:inline" />
          </div>
        </div>
      </div>
    </footer>
  );
};
