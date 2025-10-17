"use client";
import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { Smile, ThumbsUp } from "lucide-react";
export default function ChatInput() {
  const [message, setMessage] = useState("");

  return (
    <div className="w-full bg-gray-800 flex items-center gap-3 p-2">
      <TextareaAutosize
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Enter your message..."
        minRows={1}
        maxRows={6} // tương ứng với khoảng 220px
        className="flex-1 resize-none overflow-y-auto bg-gray-800 text-white p-3 outline-none"
      />
      <Smile
        size={32}
        className="text-gray-300 cursor-pointer hover:text-white hover:scale-110 transition-transform"
        onClick={() => console.log("Emoji picker opened")}
      />

      <img
        src="https://twemoji.maxcdn.com/v/latest/72x72/1f604.png"
        alt="Emoji"
        className="w-[28px] h-[28px] cursor-pointer hover:scale-110 transition-transform"
        onClick={() => console.log("Emoji clicked")}
      />
    </div>
  );
}
