# Real-time Chat Frontend (Next.js + App Router)

## 🏗️ Cấu trúc thư mục

### 📁 `/src/app`

**Next.js App Router** - routing và layout chính

- `layout.tsx` - Root layout (navbar, providers, global styles)
- `page.tsx` - Homepage dashboard
- `globals.css` - Global styles với Tailwind CSS

### 🧩 `/src/components`

**React Components** - UI building blocks

#### `/components/layout`

- `NavigationBar.tsx` - Header với user info, search
- `ChatList.tsx` - Sidebar danh sách conversations
- `ChatZone.tsx` - Main chat area
- `ChatDetail.tsx` - Right sidebar với chat info

#### `/components/conversationList`

- `ConversationItem.tsx` - Chat item trong list
- `SearchBar.tsx` - Search conversations và users

#### `/components/conversationZone`

- `MessageList.tsx` - Container hiển thị messages
- `MessageItem.tsx` - Từng tin nhắn
- `MessageInput.tsx` - Input gửi tin nhắn
- `TypingIndicator.tsx` - "X đang nhập..."

#### `/components/conversationDetail`

- `ChatInfo.tsx` - Thông tin chat
- `MemberList.tsx` - Danh sách members
- `SharedMedia.tsx` - Photos, files shared

#### `/components/common`

- `Avatar.tsx` - User avatars với online status
- `Button.tsx` - Reusable buttons
- `Modal.tsx` - Pop-up modals
- `Loading.tsx` - Skeleton loaders

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **State**: Zustand (lightweight)
- **Real-time**: Socket.IO Client
- **Forms**: React Hook Form + Zod
- **UI**: Headless UI components


