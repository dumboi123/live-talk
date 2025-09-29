# Real-time Chat Backend (Nest.js + MVC Pattern)

## 🏗️ Cấu trúc thư mục MVC

### 📁 `/src/config`

**Chức năng**: Quản lý tất cả các cấu hình của ứng dụng

- `database.config.ts` - Cấu hình kết nối Prisma/PostgreSQL
- `jwt.config.ts` - Cấu hình JWT (secret, expiration time)
- `socket.config.ts` - Cấu hình Socket.IO (CORS, adapter)
- `app.config.ts` - Cấu hình tổng quát của app

### 🎮 `/src/controllers`

**Chức năng**: Xử lý HTTP requests và responses (Layer Controller trong MVC)

- `auth.controller.ts` - Endpoints đăng nhập, đăng ký, refresh token
- `users.controller.ts` - CRUD user profiles, tìm kiếm user
- `chats.controller.ts` - Quản lý conversations, chat rooms
- `messages.controller.ts` - Gửi/sửa/xóa tin nhắn, lịch sử chat
- `friends.controller.ts` - Hệ thống bạn bè (gửi lời mời, chấp nhận)
- `groups.controller.ts` - Quản lý nhóm chat (tạo, thêm member, admin)
- `media.controller.ts` - Upload/download hình ảnh, video, files

### 🧠 `/src/services`

**Chức năng**: Business Logic Layer - xử lý logic nghiệp vụ

- `auth.service.ts` - Logic đăng nhập, hash password, validate JWT
- `users.service.ts` - Logic quản lý user, tìm kiếm, cập nhật profile
- `chats.service.ts` - Logic tạo chat room, quản lý participants
- `messages.service.ts` - Logic gửi tin nhắn, reactions, reply, forward
- `friends.service.ts` - Logic hệ thống bạn bè, gợi ý kết bạn
- `groups.service.ts` - Logic nhóm chat, roles, permissions
- `media.service.ts` - Logic upload, resize ảnh, compress video
- `socket.service.ts` - Logic real-time events, room management

### 🗄️ `/src/models`

**Chức năng**: Data Models - định nghĩa cấu trúc dữ liệu (Model trong MVC)

- `user.model.ts` - Model User (id, name, email, avatar, status)
- `chat.model.ts` - Model Chat/Conversation
- `message.model.ts` - Model Message (content, type, timestamp, reactions)
- `friendship.model.ts` - Model quan hệ bạn bè
- `group.model.ts` - Model Group chat
- `group-member.model.ts` - Model thành viên nhóm với roles
- `notification.model.ts` - Model thông báo
- `media.model.ts` - Model file uploads

### 💾 `/src/database`

**Chức năng**: Database Layer - quản lý kết nối và truy vấn database

- `prisma.service.ts` - Prisma client service
- `/repositories/` - Repository Pattern cho từng entity
  - `user.repository.ts` - Truy vấn database cho User
  - `chat.repository.ts` - Truy vấn database cho Chat
  - `message.repository.ts` - Truy vấn database cho Message
  - `friend.repository.ts` - Truy vấn database cho Friendship

### 📄 `/src/views`

**Chức năng**: Response DTOs - format dữ liệu trả về cho client (View trong MVC)

- `auth.view.ts` - Format response đăng nhập (user info + tokens)
- `user.view.ts` - Format thông tin user profile
- `chat.view.ts` - Format danh sách chat với tin nhắn cuối
- `message.view.ts` - Format tin nhắn với sender info, reactions
- `friend.view.ts` - Format danh sách bạn bè, lời mời kết bạn
- `group.view.ts` - Format thông tin nhóm với members

### 📝 `/src/dto`

**Chức năng**: Data Transfer Objects - validation input từ client

- `/auth/` - DTOs cho authentication (login, register)
- `/users/` - DTOs cho user operations (update profile, search)
- `/chats/` - DTOs cho chat operations (create chat, join room)
- `/messages/` - DTOs cho messaging (send, edit, react)
- `/friends/` - DTOs cho friend system (send request, accept)
- `/groups/` - DTOs cho group management (create, add member)

### 🔌 `/src/gateways`

**Chức năng**: WebSocket Gateways - xử lý real-time communication

- `chat.gateway.ts` - Real-time messaging, join/leave rooms
- `presence.gateway.ts` - Online/offline status, last seen
- `typing.gateway.ts` - Typing indicators trong chat

### 🛡️ `/src/middleware`

**Chức năng**: Middleware - xử lý requests trước khi đến controllers

- `auth.middleware.ts` - Verify JWT tokens + validation logic
- `rate-limit.middleware.ts` - Giới hạn số requests từ hackers

### ⚡ `/src/pipes` (TÙY CHỌN)

**Chức năng**: Pipes - transform và validate data (có thể thay bằng middleware)

- `validation.pipe.ts` - Validate DTOs với class-validator
- `transform.pipe.ts` - Transform data format

### � `/src/guards` (TÙY CHỌN)

**Chức năng**: Guards - bảo vệ routes (có thể làm trong controller)

- `jwt-auth.guard.ts` - Bảo vệ HTTP endpoints
- `ws-jwt.guard.ts` - Bảo vệ WebSocket connections

### 🔧 `/src/utils`

**Chức năng**: Utility functions - helper functions tái sử dụng

- `bcrypt.util.ts` - Hash/compare passwords
- `jwt.util.ts` - JWT operations (sign, verify)
- `file.util.ts` - File operations (upload, resize)
- `socket.util.ts` - Socket helper functions

### 📊 `/prisma`

**Chức năng**: Database Schema và migrations

- `schema.prisma` - Database schema definition
- `migrations/` - Database migrations
- `seed.ts` - Database seeding cho development

## 🎯 Quyết định thiết kế cho Real-time Chat:

### ✅ **CORE MVC + NestJS PATTERNS**:

1. **Controllers** - Handle HTTP requests only (thin controllers)
2. **Services** - Business logic layer (fat services)
3. **Guards** - Authentication & authorization (declarative)
4. **Pipes** - Input validation & transformation (with DTOs)
5. **Models** - Data structure definitions
6. **Views** - Response formatting (DTOs)
7. **Database/Repositories** - Data access layer
8. **Gateways** - WebSocket real-time communication

### 🛡️ **CROSS-CUTTING CONCERNS**:

1. **Middleware** - Logging, CORS, rate limiting, validation
2. **DTOs** - Type safety + runtime validation
3. **Utils** - Reusable helper functions

### 🏗️ **ARCHITECTURE PATTERN**:

```
┌─────────────────────────────────────┐
│           NestJS Framework          │
├─────────────────────────────────────┤
│ Middleware → Guards → Pipes         │
│      ↓          ↓       ↓           │
│  Controllers → Services             │
│      ↓          ↓                   │
│ Views (DTOs) ← Repositories         │
│                    ↓                │
│                Database             │
└─────────────────────────────────────┘
```

## 🔄 Request Lifecycle theo NestJS:

```
Client Request → Middleware → Guards → Pipes → Controller → Service → Repository → Database
                                                    ↓
Client Response ← Views (DTOs) ← Controller ← Service ← Repository ← Database
```

