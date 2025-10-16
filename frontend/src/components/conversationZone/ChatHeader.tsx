import { Phone, Search, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function ChatHeader() {
  return (
    <div className=" w-full h-[80px] flex justify-between items-center gap-3 p-3 border-b">
      <div className="flex flex-1 items-center gap-3">
        <Avatar className="w-15 h-15">
          <AvatarImage
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="User Avatar"
          />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>

        <div className="flex flex-col min-w-0 flex-1">
          <span className="chat-room-title truncate">John Doe</span>
          <span className="chat-preview-text line-clamp-2">
            Online 32min ago
          </span>
        </div>
      </div>
      <div className="flex itetms-center justify-between">
        <Button variant="ghost" className="[&>svg]:!w-7 [&>svg]:!h-7">
          <Phone color="#fff" strokeWidth={2} />
        </Button>
        <Button variant={"ghost"} className="[&>svg]:!w-7 [&>svg]:!h-7">
          <Video color="#ffffff" strokeWidth={2} />
        </Button>
        <Button variant={"ghost"} className="[&>svg]:!w-7 [&>svg]:!h-7">
          <Search color="#ffffff" strokeWidth={2} />
        </Button>
      </div>
    </div>
  );
}
