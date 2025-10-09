import { Button } from "@/components/ui/button";
import { ToggleTheme } from "@/components/toggle-theme";
import ConversationDetail from "@/components/layout/ConversationDetail";
import ConversationList from "@/components/layout/ConversationList";
import ConversationZone from "@/components/layout/ConversationZone";
import { TypographyShowcase } from "@/components/typography-examples";

export default function Home() {
  return (
    <div className="container mx-auto py-8 px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-display-md">Typography System Test</h1>
          <ToggleTheme />
        </div>
    <div className="flex flex-col md:flex-row gap-4">
      <div className="md:w-1/4 w-full">
        <ConversationList />
      </div>
      <div className="md:w-1/2 w-full">
        <ConversationZone />
      </div>
      <div className="md:w-1/4 w-full">
        <ConversationDetail />
      </div>
    </div>
        {/* <TypographyShowcase /> */}
      </div>
  );
}
