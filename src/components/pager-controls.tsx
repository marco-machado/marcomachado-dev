"use client";

import { useEffect, useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

interface PagerControlsProps {
  /** id of the horizontally scrolling list these controls drive. */
  targetId: string;
  count: number;
}

/** Counter and arrows for themes that show Selected work as a pager. */
export function PagerControls({ targetId, count }: PagerControlsProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const list = document.getElementById(targetId);
    if (!list) return;
    const onScroll = () => {
      const width = list.clientWidth || 1;
      setCurrent(Math.round(list.scrollLeft / width));
    };
    list.addEventListener("scroll", onScroll, { passive: true });
    return () => list.removeEventListener("scroll", onScroll);
  }, [targetId]);

  const go = (step: number) => {
    const list = document.getElementById(targetId);
    if (!list) return;
    const next = Math.min(count - 1, Math.max(0, current + step));
    list.scrollTo({ left: next * list.clientWidth, behavior: "smooth" });
  };

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="pager">
      <span className="pager__count">
        <span className="sr-only">Project </span>
        {pad(current + 1)}
        <span aria-hidden="true"> / </span>
        <span className="sr-only"> of </span>
        {pad(count)}
      </span>
      <button
        type="button"
        className="pager__btn"
        onClick={() => go(-1)}
        disabled={current === 0}
        aria-controls={targetId}
        aria-label="Previous project"
      >
        <ArrowLeftIcon aria-hidden="true" />
      </button>
      <button
        type="button"
        className="pager__btn"
        onClick={() => go(1)}
        disabled={current >= count - 1}
        aria-controls={targetId}
        aria-label="Next project"
      >
        <ArrowRightIcon aria-hidden="true" />
      </button>
    </div>
  );
}
