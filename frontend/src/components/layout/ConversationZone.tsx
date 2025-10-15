import ChatHeader from "../conversationZone/ChatHeader";
import ChatInput from "../conversationZone/ChatInput";
import ChatToolbar from "../conversationZone/ChatToolbar";
import ChatZone from "../conversationZone/ChatZone";

export default function ConversationZone() {
  return (
    <div className="hidden lg:flex flex-1 flex-col bg-red-700 text-white h-full">
      <ChatHeader />
      <ChatZone />
      <ChatToolbar />
      <ChatInput />
    </div>
  );
}
