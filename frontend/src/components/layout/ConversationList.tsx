// import { Columns, User } from "@/components/conversationList/Columns";
// import { DataTable } from "@/components/conversationList/DataTable";

// const data: User[] = [
//   {
//     id: "1",
//     avatarUrl: "https://randomuser.me/api/portraits/men/32.jpg",
//     name: "Nguyễn Minh Tuấn",
//     status: "online",
//     time: "10:45 AM",
//     message: "Ê, trưa nay có đi ăn không?",
//   },
//   {
//     id: "2",
//     avatarUrl: "https://randomuser.me/api/portraits/women/17.jpg",
//     name: "Trần Thảo Vy",
//     status: "busy",
//     time: "09:58 AM",
//     message: "Đang họp xíu nha, lát mình gọi lại ❤️",
//   },
//   {
//     id: "3",
//     avatarUrl: "https://randomuser.me/api/portraits/men/46.jpg",
//     name: "Lê Đức Huy",
//     status: "offline",
//     time: "Hôm qua",
//     message: "Ok, mai mình chốt deal luôn nhé!",
//   },
//   {
//     id: "4",
//     avatarUrl: "https://randomuser.me/api/portraits/women/25.jpg",
//     name: "Phạm Hồng Nhung",
//     status: "online",
//     time: "11:12 AM",
//     message: "Cậu gửi lại file giúp tớ được không?",
//   },
//   {
//     id: "5",
//     avatarUrl: "https://randomuser.me/api/portraits/men/54.jpg",
//     name: "Đoàn Quốc Khánh",
//     status: "busy",
//     time: "Thứ 6",
//     message: "Tối nay off team ở The Coffee House nha ☕",
//   },
// ];

import ConversationItem from "../conversationList/ConversationItem";

export default function ConversationList() {
  return (
    <div className="w-full lg:w-[420px] bg-card h-full overflow-x-hidden">
      <ConversationItem />
      <ConversationItem />
      <ConversationItem />
    </div>
  );
}
