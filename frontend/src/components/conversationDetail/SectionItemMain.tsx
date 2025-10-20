import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Bell,
  BellOff,
  Pin,
  PinOff,
  Users,
  PencilLine,
  Settings,
} from "lucide-react";
import { Button } from "../ui/button";
export default function SectionItemMain() {
  return (
    <div className="bg-gray-800 w-full h-[280px] flex flex-col items-center justify-center gap-5">
      <Avatar className="w-15 h-15">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="relative">
        <p className="page-heading text-center">Mom</p>
        <Button
          variant="ghost"
          className="absolute top-1/2 -translate-y-1/2 right-[-45px] [&>svg]:!w-5 [&>svg]:!h-5 rounded-full"
        >
          <PencilLine color="#ffffff" strokeWidth={1.5} />
        </Button>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex flex-col justify-center">
          <Button variant={"ghost"} className="[&>svg]:!w-6 [&>svg]:!h-6 rounded-full">
            {true ? (
              <Bell color="#ffffff" strokeWidth={1.5} />
            ) : (
              <BellOff color="#ffffff" strokeWidth={1.5} />
            )}
          </Button>
          <p className="text-sm text-center break-words leading-tight w-[80px] ">
            {true ? "Turn on" : "Turn off"} Notifications
          </p>
        </div>

        <div className="flex flex-col justify-center">
          <Button variant={"ghost"} className="[&>svg]:!w-6 [&>svg]:!h-6 rounded-full">
            {true ? (
              <Pin color="#ffffff" strokeWidth={1.5} />
            ) : (
              <PinOff color="#ffffff" strokeWidth={1.5} />
            )}
          </Button>
          <p className="text-sm text-center break-words leading-tight w-[50px]">
            {true ? "Pin" : "Unpin"} Chat
          </p>
        </div>

        <div className="flex flex-col justify-center">
          <Button variant={"ghost"} className="[&>svg]:!w-6 [&>svg]:!h-6 rounded-full">
            <Users color="#ffffff" strokeWidth={1.5} />
          </Button>
          <p className="text-sm text-center break-words leading-tight w-[60px]">
            {false ? "Add to group" : "Add members"}
          </p>
        </div>

        {true && (
          <div className="flex flex-col justify-center">
            <Button variant={"ghost"} className="[&>svg]:!w-6 [&>svg]:!h-6 rounded-full">
              <Settings color="#ffffff" strokeWidth={1.5} />
            </Button>
            <p className="text-sm text-center break-words leading-tight w-[60px]">
              Group Settings
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
