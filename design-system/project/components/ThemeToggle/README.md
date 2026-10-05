# ThemeToggle

The light/dark switch in the header: a 40px ghost icon Button showing the Sun in dark mode and the Moon in light mode.

**Consumer provides:** nothing. It must sit inside the next-themes `ThemeProvider` (`attribute="class"`, `defaultTheme="dark"`, `enableSystem={false}`). It is a Client Component.

- Uses Lucide `SunIcon` / `MoonIcon` at 16px. The `aria-label` names the action ("Switch to light theme").
- Until it mounts, it renders an empty 40px placeholder, so the header doesn't shift during hydration.
- In this system's preview, next-themes is replaced by a small stand-in that flips the frame's `data-theme`. Click it to see every token change.
