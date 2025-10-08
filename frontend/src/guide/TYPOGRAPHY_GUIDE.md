# Typography & Components Guide

## � Layer Structure Overview

The CSS is organized into clear, maintainable layers:

### 🎯 **TYPOGRAPHY LAYER**

**Purpose**: All text styling classes with responsive behavior

- **App Level**: Main headers and navigation (`app-title`, `page-heading`, `section-header`)
- **Chat Conversation**: Message content styling (`chat-room-title`, `message-text`, `message-username`, `message-timestamp`)
- **Chat List**: List item text styling (`chat-preview-text`, `chat-last-message`, `chat-contact-name`)
- **Input & Controls**: Interactive element text (`input-text`, `button-text`, `button-text-large`)
- **Status & Metadata**: Indicators and badges (`status-text`, `badge-text`, `notification-count`)

### 💬 **CHAT COMPONENTS LAYER**

**Purpose**: Reusable chat-specific UI components

- **Message Bubbles**: Chat message containers (`chat-bubble-sent`, `chat-bubble-received`)
- **Chat List Components**: Interactive list items (`chat-item`)
- **Chat Input Components**: Message input areas (`chat-input-area`)

### 👤 **AVATAR COMPONENTS LAYER**

**Purpose**: User avatar components in various sizes

- **Size Variants**: Small, medium, large avatars (`avatar-small`, `avatar-medium`, `avatar-large`)

---

## �📝 Typography Classes Usage

### App Level Typography

```tsx
// App title (main header)
<h1 className="app-title">Live-Talk Chat</h1>

// Page headings (Chat, Settings, Profile)
<h2 className="page-heading">Recent Conversations</h2>

// Section headers (Today, Yesterday, Groups)
<h3 className="section-header">Today</h3>
```

### Chat Conversation Typography

```tsx
// Chat room title
<h2 className="chat-room-title">John Doe</h2>

// Message text content
<p className="message-text">Hey there! How are you doing today?</p>

// Username in message
<span className="message-username">john_doe</span>

// Message timestamp
<time className="message-timestamp">12:34 PM</time>
```

### Chat List Typography

```tsx
// Contact name in chat list
<h3 className="chat-contact-name">Sarah Wilson</h3>

// Last message preview
<p className="chat-preview-text">Thanks for the help today!</p>

// Alternative for last message (if different styling needed)
<p className="chat-last-message">Thanks for the help today!</p>
```

### Input & Controls Typography

```tsx
// Message input field
<input className="input-text" placeholder="Type a message..." />

// Small buttons (send, emoji, attach)
<button className="button-text">Send</button>

// Large buttons (Call, Video Call)
<button className="button-text-large">Video Call</button>
```

### Status & Metadata Typography

```tsx
// Online status, typing indicator
<span className="status-text">Online</span>

// Badges (admin, moderator)
<span className="badge-text">Admin</span>

// Notification count
<span className="notification-count">5</span>
```

## 🎨 Chat Components

### Message Bubbles

```tsx
// Sent message (your message)
<div className="chat-bubble-sent">
  <p className="message-text">Hello there!</p>
</div>

// Received message (other person's message)
<div className="chat-bubble-received">
  <p className="message-text">Hi! How are you?</p>
</div>
```

### Chat List Item

```tsx
<div className="chat-item">
  <img className="avatar-medium" src="/avatar.jpg" alt="User" />
  <div>
    <h3 className="chat-contact-name">Sarah Wilson</h3>
    <p className="chat-preview-text">Thanks for the help today!</p>
  </div>
  <span className="notification-count">2</span>
</div>
```

### Chat Input Area

```tsx
<div className="chat-input-area">
  <input className="input-text" placeholder="Type a message..." />
  <button className="button-text">Send</button>
</div>
```

## 👤 Avatar Sizes

```tsx
// Small avatar (in message headers)
<img className="avatar-small" src="/avatar.jpg" alt="User" />

// Medium avatar (in chat list, default)
<img className="avatar-medium" src="/avatar.jpg" alt="User" />

// Large avatar (in profile, chat header)
<img className="avatar-large" src="/avatar.jpg" alt="User" />
```

## 📱 Responsive Behavior

All typography classes are responsive by default:

- **Mobile (< 768px)**: Smaller, denser text for mobile viewing
- **Tablet (768-1023px)**: Medium sizing for comfortable tablet reading
- **Desktop (1024px+)**: Larger text with more spacing for desktop


## 🚀 Maintenance Guidelines

### ✅ **DO:**

- Keep related classes in the same layer
- Use descriptive comments for each section
- Follow the established naming convention
- Test responsive behavior on all breakpoints

### ❌ **DON'T:**

- Mix typography with component styling in the same layer
- Remove layer comments (they're crucial for maintenance)
- Change class names without updating all usage
- Add new classes without proper layer organization

## 🎯 Class Naming Convention

| Prefix      | Purpose                | Example           |
| ----------- | ---------------------- | ----------------- |
| `app-*`     | Application-level UI   | `app-title`       |
| `page-*`    | Page-level headers     | `page-heading`    |
| `section-*` | Section divisions      | `section-header`  |
| `chat-*`    | Chat-specific elements | `chat-room-title` |
| `message-*` | Message content        | `message-text`    |
| `input-*`   | Input fields           | `input-text`      |
| `button-*`  | Button text            | `button-text`     |
| `status-*`  | Status indicators      | `status-text`     |
| `avatar-*`  | Avatar sizes           | `avatar-medium`   |

This naming convention makes it clear what each class is for and where it should be used in your chat application.
