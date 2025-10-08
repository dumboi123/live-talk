/**
 * Typography Showcase Component
 * Demonstrates all semantic typography classes from globals.css
 */

export function TypographyShowcase() {
  return (
    <div className="p-6 space-y-8 max-w-4xl">
      {/* App Level Typography */}
      <section className="space-y-4">
        <h2 className="app-title">App Level Typography</h2>
        <div className="space-y-3">
          <h1 className="app-title">Live-Talk Chat Application</h1>
          <h2 className="page-heading">Recent Conversations</h2>
          <h3 className="section-header">Today</h3>
        </div>
      </section>

      {/* Chat Conversation Demo */}
      <section className="space-y-4">
        <h2 className="app-title">Chat Conversation</h2>

        {/* Chat Header */}
        <div className="bg-card rounded-lg p-4 border">
          <h2 className="chat-room-title">Sarah Wilson</h2>
          <p className="status-text">Online • Last seen 2 minutes ago</p>
        </div>

        {/* Messages */}
        <div className="space-y-4">
          {/* Received Message */}
          <div className="flex gap-3">
            <div className="avatar-medium bg-secondary rounded-full"></div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="message-username">Sarah Wilson</span>
                <time className="message-timestamp">14:32</time>
              </div>
              <div className="chat-bubble-received">
                <p className="message-text">Hey! How are you doing today? 😊</p>
              </div>
            </div>
          </div>

          {/* Sent Message */}
          <div className="flex gap-3 justify-end">
            <div className="space-y-1 text-right">
              <div className="flex items-center gap-2 justify-end">
                <time className="message-timestamp">14:35</time>
                <span className="message-username">You</span>
              </div>
              <div className="chat-bubble-sent">
                <p className="message-text">
                  I'm doing great! Just working on the new chat app design. What
                  about you?
                </p>
              </div>
            </div>
            <div className="avatar-medium bg-primary rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Chat List Demo */}
      <section className="space-y-4">
        <h2 className="app-title">Chat List</h2>
        <div className="bg-card rounded-lg border divide-y">
          {/* Chat Item 1 */}
          <div className="chat-item">
            <div className="flex items-center gap-3">
              <div className="avatar-medium bg-primary rounded-full"></div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h3 className="chat-contact-name">John Doe</h3>
                  <div className="flex items-center gap-2">
                    <time className="message-timestamp">2m</time>
                    <span className="notification-count bg-primary text-primary-foreground px-2 py-1 rounded-full">
                      3
                    </span>
                  </div>
                </div>
                <p className="chat-preview-text">
                  Thanks for helping me with the project! I really appreciate
                  your time and effort.
                </p>
              </div>
            </div>
          </div>

          {/* Chat Item 2 */}
          <div className="chat-item">
            <div className="flex items-center gap-3">
              <div className="avatar-medium bg-success rounded-full"></div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h3 className="chat-contact-name">Design Team</h3>
                  <div className="flex items-center gap-2">
                    <span className="badge-text bg-accent text-accent-foreground px-2 py-1 rounded">
                      Group
                    </span>
                    <time className="message-timestamp">1h</time>
                  </div>
                </div>
                <p className="chat-last-message">
                  Alex shared the new mockups for review
                </p>
              </div>
            </div>
          </div>

          {/* Chat Item 3 */}
          <div className="chat-item">
            <div className="flex items-center gap-3">
              <div className="avatar-medium bg-warning rounded-full"></div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h3 className="chat-contact-name">Mom</h3>
                  <time className="message-timestamp">3h</time>
                </div>
                <p className="chat-preview-text">
                  Don't forget to call me when you get home 💕
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Input Controls Demo */}
      <section className="space-y-4">
        <h2 className="app-title">Input & Controls</h2>

        {/* Chat Input Area */}
        <div className="chat-input-area rounded-lg">
          <div className="flex items-center gap-3">
            <input
              type="text"
              placeholder="Type a message..."
              className="input-text flex-1 bg-input border border-border rounded-lg px-3 py-2"
            />
            <button className="button-text bg-primary text-primary-foreground px-4 py-2 rounded-lg">
              Send
            </button>
          </div>
        </div>

        {/* Button Variants */}
        <div className="flex gap-3">
          <button className="button-text bg-secondary text-secondary-foreground px-3 py-2 rounded">
            Cancel
          </button>
          <button className="button-text-large bg-primary text-primary-foreground px-4 py-2 rounded">
            Start Video Call
          </button>
        </div>
      </section>

      {/* Avatar Sizes Demo */}
      <section className="space-y-4">
        <h2 className="app-title">Avatar Sizes</h2>
        <div className="flex items-center gap-4">
          <div className="text-center">
            <div className="avatar-small bg-primary rounded-full mx-auto mb-2"></div>
            <p className="status-text">Small</p>
          </div>
          <div className="text-center">
            <div className="avatar-medium bg-secondary rounded-full mx-auto mb-2"></div>
            <p className="status-text">Medium</p>
          </div>
          <div className="text-center">
            <div className="avatar-large bg-accent rounded-full mx-auto mb-2"></div>
            <p className="status-text">Large</p>
          </div>
        </div>
      </section>

      {/* Status & Metadata Demo */}
      <section className="space-y-4">
        <h2 className="app-title">Status & Metadata</h2>
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="badge-text bg-success text-success-foreground px-2 py-1 rounded">
              Online
            </span>
            <span className="status-text">Active now</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="badge-text bg-warning text-warning-foreground px-2 py-1 rounded">
              Away
            </span>
            <span className="status-text">Last seen 5 minutes ago</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="notification-count bg-destructive text-destructive-foreground px-2 py-1 rounded-full">
              12
            </span>
            <span className="status-text">Unread messages</span>
          </div>
        </div>
      </section>

      {/* Font Families */}
      <section className="space-y-4">
        <h2 className="app-title">Font Families</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="bg-card p-4 rounded-lg border">
            <h3 className="section-header mb-2">Inter Font (UI Text)</h3>
            <p className="message-text">
              The quick brown fox jumps over the lazy dog.
            </p>
            <p className="chat-contact-name">
              Perfect for usernames and headings
            </p>
          </div>
          <div className="bg-card p-4 rounded-lg border">
            <h3 className="section-header mb-2">JetBrains Mono (Timestamps)</h3>
            <p className="message-timestamp">14:32:15 - Timestamp format</p>
            <p className="message-timestamp">2024-10-08 - Date format</p>
          </div>
        </div>
      </section>

      {/* Responsive Test */}
      <section className="space-y-4">
        <h2 className="app-title">Responsive Behavior</h2>
        <div className="bg-card p-4 rounded-lg border">
          <p className="message-text mb-2">
            Resize your browser window to see how typography adapts across
            different screen sizes:
          </p>
          <ul className="space-y-1">
            <li className="chat-preview-text">
              • Mobile: Smaller, compact text for thumb navigation
            </li>
            <li className="chat-preview-text">
              • Tablet: Balanced sizing for comfortable reading
            </li>
            <li className="chat-preview-text">
              • Desktop: Larger text with generous spacing
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
