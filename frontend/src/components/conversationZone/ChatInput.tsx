'use client'
import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";

export default function ChatInput() {
  const [message, setMessage] = useState("");

  return (
    <div className="w-full bg-gray-900 flex items-end">
      <TextareaAutosize
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Enter your message..."
        minRows={2}
        maxRows={6} // tương ứng với khoảng 220px
        className="flex-1 resize-none overflow-y-auto bg-gray-800 text-white p-3 outline-none"
      />
    </div>
  );
}
// h-[65px]
