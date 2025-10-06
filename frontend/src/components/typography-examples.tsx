/**
 * Typography Showcase Component
 *
 * Purpose: Test and demonstrate all typography styles
 * Usage: Import this component to test typography system
 *
 * Learning: Shows real-world application of typography classes
 */

export function TypographyShowcase() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6 lg:space-y-8 max-w-full sm:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
      <div className="space-y-2 sm:space-y-3 lg:space-y-4">
        <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-semibold">
          Typography System Demo
        </h2>
        <p className="text-sm sm:text-base lg:text-lg text-muted-foreground">
          Testing all typography styles for Live-Talk chat application
        </p>
      </div>

      {/* Display Typography */}
      <section className="space-y-3 sm:space-y-4 lg:space-y-6">
        <h3 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-semibold">
          Display Typography
        </h3>
        <div className="space-y-2 sm:space-y-3 lg:space-y-4">
          <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold">
            Live-Talk App Title
          </h1>
          <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-semibold">
            Welcome to Chat
          </h2>
        </div>
      </section>

      {/* Heading Typography */}
      <section className="space-y-3 sm:space-y-4 lg:space-y-6">
        <h3 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-semibold">
          Headings
        </h3>
        <div className="space-y-2 sm:space-y-3 lg:space-y-4">
          <h3 className="text-base sm:text-lg lg:text-xl font-semibold">
            Chat Section Header
          </h3>
          <h4 className="text-sm sm:text-base lg:text-lg font-medium">
            Group Settings
          </h4>
        </div>
      </section>

      {/* Body Typography */}
      <section className="space-y-3 sm:space-y-4 lg:space-y-6">
        <h3 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-semibold">
          Body Text
        </h3>
        <div className="space-y-3 sm:space-y-4 lg:space-y-5">
          <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
            Large body text for important messages and descriptions. This size
            is perfect for message content and primary information.
          </p>
          <p className="text-xs sm:text-sm lg:text-base leading-normal">
            Medium body text for secondary information, navigation items, and
            general UI text. Most readable size for interface elements.
          </p>
          <p className="text-xs sm:text-sm leading-normal text-muted-foreground">
            Small body text for metadata, captions, and supporting information.
            Used sparingly for less important details.
          </p>
        </div>
      </section>

      {/* Chat-Specific Typography */}
      <section className="space-y-3 sm:space-y-4 lg:space-y-6">
        <h3 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-semibold">
          Chat-Specific Styles
        </h3>

        {/* Message Example */}
        <div className="bg-card rounded-lg p-3 sm:p-4 lg:p-6 space-y-1 sm:space-y-2 lg:space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
            <span className="text-xs sm:text-sm lg:text-base font-medium text-primary">
              john_doe
            </span>
            <span className="text-xs sm:text-sm text-muted-foreground font-mono">
              14:32
            </span>
          </div>
          <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
            Hey everyone! This is a sample message to demonstrate how our
            typography system works in real chat scenarios. Notice the spacing
            and readability optimizations.
          </p>
        </div>

        {/* Chat Preview Example */}
        <div className="bg-card rounded-lg p-3 sm:p-4 lg:p-6">
          <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
            <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-primary rounded-full flex-shrink-0"></div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs sm:text-sm lg:text-base font-medium truncate">
                  Jane Smith
                </span>
                <span className="text-xs sm:text-sm text-muted-foreground font-mono flex-shrink-0 ml-2">
                  2m ago
                </span>
              </div>
              <p className="text-xs sm:text-sm lg:text-base text-muted-foreground truncate">
                This is a very long message that should be truncated with
                ellipsis when it exceeds the container width
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Font Family Demonstration */}
      <section className="space-y-3 sm:space-y-4 lg:space-y-6">
        <h3 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-semibold">
          Font Families
        </h3>
        <div className="space-y-3 sm:space-y-4">
          <div className="p-3 sm:p-4 lg:p-6 bg-card rounded-lg">
            <p className="text-xs sm:text-sm lg:text-base font-medium mb-2">
              Inter Font (Primary UI)
            </p>
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
              The quick brown fox jumps over the lazy dog.
              <span className="block mt-1">
                ABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789
              </span>
            </p>
          </div>

          <div className="p-3 sm:p-4 lg:p-6 bg-card rounded-lg">
            <p className="text-xs sm:text-sm lg:text-base font-medium mb-2">
              JetBrains Mono (Monospace)
            </p>
            <div className="text-xs sm:text-sm lg:text-base font-mono space-y-1">
              <p>2024-10-04 14:32:15 - Timestamp format</p>
              <p className="text-muted-foreground">
                Code: const message = "Hello World";
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Responsive Test */}
      <section className="space-y-3 sm:space-y-4 lg:space-y-6">
        <h3 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-semibold">
          Responsive Behavior
        </h3>
        <div className="grid gap-3 sm:gap-4 lg:gap-6 grid-cols-1 md:grid-cols-2">
          <div className="p-3 sm:p-4 lg:p-6 bg-card rounded-lg">
            <h4 className="text-sm sm:text-base lg:text-lg font-medium mb-2">
              Mobile View
            </h4>
            <p className="text-xs sm:text-sm lg:text-base leading-normal">
              Typography should remain readable on small screens. Font sizes are
              optimized for mobile consumption.
            </p>
          </div>
          <div className="p-3 sm:p-4 lg:p-6 bg-card rounded-lg">
            <h4 className="text-sm sm:text-base lg:text-lg font-medium mb-2">
              Desktop View
            </h4>
            <p className="text-xs sm:text-sm lg:text-base leading-normal">
              Larger screens can handle more information density while
              maintaining optimal reading experience.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
