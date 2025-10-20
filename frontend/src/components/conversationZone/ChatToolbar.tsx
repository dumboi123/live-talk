'use client'

import { FileImage, File, Sticker, Timer } from "lucide-react";
import { Button } from "@/components/ui/button";
export default function ChatToolbar() {
  return (
    <div className="w-full h-[50px] flex items-center border-b">
      <Button variant={"ghost"} className="[&>svg]:!w-8 [&>svg]:!h-8">
        <Sticker color="#ffffff" strokeWidth={1.25} />
      </Button>
      <Button variant={"ghost"} className="[&>svg]:!w-8 [&>svg]:!h-8">
        <FileImage color="#ffffff" strokeWidth={1.25} />
      </Button>
      <Button variant={"ghost"} className="[&>svg]:!w-8 [&>svg]:!h-8">
        <File color="#ffffff" strokeWidth={1.25} />
      </Button>
      <Button variant={"ghost"} className="[&>svg]:!w-8 [&>svg]:!h-8">
        <Timer color="#ffffff" strokeWidth={1.25} />
      </Button>
    </div>
  );
}
