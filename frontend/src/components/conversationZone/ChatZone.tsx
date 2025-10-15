import ChatList from "./ChatList";

export default function ChatZone() {
  return (
    <div className="bg-yellow-400 w-full flex-1 overflow-y-auto space-y-3">
      <ChatList />
    </div>
  );
}
