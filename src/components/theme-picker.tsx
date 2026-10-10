"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { DropdownMenu } from "radix-ui";
import { CheckIcon, PaletteIcon } from "lucide-react";
import { designThemes } from "@/lib/themes";

const emptySubscribe = () => () => {};

const options = [
  { id: "classic", name: "Classic", note: "The original, light or dark" },
  ...designThemes,
];

export function ThemePicker() {
  const { theme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

  const current = theme === "light" || theme === "dark" ? "classic" : theme;
  const currentName =
    options.find((option) => option.id === current)?.name ?? "Classic";

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger
        className="theme-picker inline-flex size-10 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        aria-label={mounted ? `Theme: ${currentName}. Change theme` : "Change theme"}
      >
        <PaletteIcon className="theme-picker__icon size-4" aria-hidden="true" />
        <span className="theme-picker__dot" aria-hidden="true" />
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="end"
          sideOffset={8}
          className="theme-menu z-50 min-w-64 rounded-lg border bg-popover p-1.5 text-popover-foreground shadow-lg"
        >
          <DropdownMenu.Label className="px-2.5 pt-1.5 pb-2 font-mono text-xs tracking-widest text-muted-foreground uppercase">
            Theme
          </DropdownMenu.Label>
          <DropdownMenu.RadioGroup
            value={mounted ? current : undefined}
            onValueChange={(value) =>
              setTheme(value === "classic" ? "dark" : value)
            }
          >
            {options.map((option) => (
              <DropdownMenu.RadioItem
                key={option.id}
                value={option.id}
                className="theme-menu__item flex cursor-default items-center gap-3 rounded-md px-2.5 py-2 text-sm outline-none select-none data-highlighted:bg-muted"
              >
                <span className="min-w-0 flex-1">
                  <span className="block font-medium text-foreground">
                    {option.name}
                  </span>
                  <span className="block text-xs text-muted-foreground">
                    {option.note}
                  </span>
                </span>
                <DropdownMenu.ItemIndicator>
                  <CheckIcon className="size-4 text-primary" aria-hidden="true" />
                </DropdownMenu.ItemIndicator>
              </DropdownMenu.RadioItem>
            ))}
          </DropdownMenu.RadioGroup>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
