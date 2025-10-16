import { Button } from "@/components/ui/button";
import { ToggleTheme } from "@/components/toggle-theme";
import { TypographyShowcase } from "@/components/typography-examples";

import ConversationDetail from "@/components/layout/ConversationDetail";
import ConversationList from "@/components/layout/ConversationList";
import ConversationZone from "@/components/layout/ConversationZone";
import NavigationBar from "@/components/layout/NavigationBar";

export default function Home() {
  return (
    <div className="flex flex-row h-screen w-screen overflow-hidden">
      {/* <TypographyShowcase /> */}
      <NavigationBar />
      <ConversationList />
      <ConversationZone />
      <ConversationDetail />
    </div>
  );
}
// <div className="flex justify-between items-center mb-8">
//   <h1 className="text-display-md">Typography System Test</h1>
//   <ToggleTheme />
// </div>

{
  /* <TypographyShowcase /> */
}
