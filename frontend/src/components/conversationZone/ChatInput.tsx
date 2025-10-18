"use client";
import { useState } from "react";
import { useTheme } from "next-themes";
import TextareaAutosize from "react-textarea-autosize";
import { Icon } from "@iconify/react";
import EmojiPicker, { Theme } from "emoji-picker-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { PopoverArrow } from "@radix-ui/react-popover";

export default function ChatInput() {
  const [message, setMessage] = useState("");
  const [emojiPicker, setEmojiPicker] = useState(false);
  const { resolvedTheme } = useTheme();
  const emojiTheme = resolvedTheme === "dark" ? Theme.DARK : Theme.LIGHT;

  const handleEmojiClick = (emojiData: any) => {
    setMessage((prev) => prev + emojiData.emoji);
  };

  return (
    <div className="w-full bg-gray-800 flex items-end p-2">
      <TextareaAutosize
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Enter your message..."
        minRows={1}
        maxRows={6} // tương ứng với khoảng 220px
        className="flex-1 resize-none overflow-y-auto bg-gray-800 text-white p-3 outline-none"
      />
      <div className="flex items-center gap-2">
        {/* Icon outline */}

        <Popover>
          <PopoverTrigger>
            <Icon
              icon="heroicons:face-smile"
              width="32"
              height="32"
              className="text-gray-300 cursor-pointer hover:text-white hover:scale-110 transition-transform translate-y-[-7px]"
              onClick={() => setEmojiPicker(!emojiPicker)}
            />
          </PopoverTrigger>

          <PopoverContent
            side="top"
            align="start"
            sideOffset={10}
            alignOffset={20}
            avoidCollisions
            collisionPadding={60}
            className="p-0 border-none shadow-none bg-transparent w-[350px] max-w-[90vw]"
          >
            <EmojiPicker
              theme={emojiTheme}
              lazyLoadEmojis={true}
              onEmojiClick={handleEmojiClick}
            />
          </PopoverContent>
        </Popover>

        <Icon
          icon="noto:thumbs-up"
          width="32"
          height="32"
          className="cursor-pointer hover:scale-110 active:scale-90 transition-transform translate-y-[-10px]"
          onClick={() => console.log("Liked!")}
        />
      </div>
    </div>
  );
}

// VỀ SAU NẾU CÓ THỜI GIAN ĐỔI EMOJI-PICKER-REACT -> EMOJI-MART
