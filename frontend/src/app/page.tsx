import { Button } from "@/components/ui/button";
import { ToggleTheme } from "@/components/toggle-theme";
import { TypographyShowcase } from "@/components/typography-examples";

export default function Home() {
  return (
    <div className="container mx-auto py-8 px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-display-md">Typography System Test</h1>
          <ToggleTheme />
        </div>
        <TypographyShowcase />
      </div>
  );
}
