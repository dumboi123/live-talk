import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function ConversationItem() {
  return (
    <div className="chat-item h-[90px] flex items-center justify-between gap-3">
      {/* Left side: Avatar + User Info */}
      <div className="flex items-center gap-3 flex-1 min-w-0">
        <Avatar className="w-15 h-15">
          <AvatarImage
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="User Avatar"
          />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>

        <div className="flex flex-col min-w-0 flex-1">
          <span className="chat-contact-name truncate">John Doe</span>
          <span className="chat-preview-text line-clamp-2">
            Thanks for helping me with the project! I really appreciate your
            time and effort. I'll make sure to review everything carefully.
          </span>
        </div>
      </div>

      {/* Right side: Time + Badge (fixed width, never shrinks) */}
      <div className="flex flex-col items-end justify-center gap-2 flex-shrink-0 ">
        <span className="message-timestamp whitespace-nowrap">10:45 AM</span>
        <span className="notification-count bg-primary text-primary-foreground px-2 py-1 rounded-full min-w-[1.5rem] h-6 flex items-center justify-center">
          3
        </span>
      </div>
    </div>
  );
}
