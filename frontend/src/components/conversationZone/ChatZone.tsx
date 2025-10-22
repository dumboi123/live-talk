import ChatList from "./ChatList";

export default function ChatZone() {
  return (
    <div className="bg-card w-full flex-1 overflow-y-auto space-y-3 border-b">
      <ChatList />
    </div>
  );
}
