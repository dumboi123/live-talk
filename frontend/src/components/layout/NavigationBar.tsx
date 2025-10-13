import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MessageCircleMore, BookUser, Settings } from "lucide-react";
export default function NavigationBar() {
  return (
    <div className="flex flex-col bg-gray-800 text-white h-full w-20 py-4  justify-between">
      <div className="flex flex-col gap-8 items-center">
        <Avatar className="w-10 h-10">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Button variant="ghost" className="[&>svg]:!w-9 [&>svg]:!h-9">
          <MessageCircleMore color="#fff" strokeWidth={1.5} />
        </Button>
        <Button variant={"ghost"} className="[&>svg]:!w-9 [&>svg]:!h-9">
          <BookUser color="#ffffff" strokeWidth={1.5} />
        </Button>
      </div>

      <div className="flex flex-col gap-8 items-center">
        <Button variant={"ghost"} className="[&>svg]:!w-9 [&>svg]:!h-9">
          <Settings color="#ffffff" strokeWidth={1.5} />
        </Button>
      </div>
    </div>
  );
}
