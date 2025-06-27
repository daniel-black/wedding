"use client";

import { useEffect, useState } from "react";
import { Badge, BadgeVariant } from "./ui/badge";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function CountDown({
  targetDate,
  variant,
}: {
  targetDate: string;
  variant: BadgeVariant;
}) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [isExpired, setIsExpired] = useState<boolean>(false);

  useEffect(() => {
    const targetDateTime = new Date(targetDate).getTime();

    const updateCountdown = (): void => {
      const now = new Date().getTime();
      const difference = targetDateTime - now;

      if (difference <= 0) {
        setIsExpired(true);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    // Update countdown immediately
    updateCountdown();

    // Set interval to update countdown every second
    const interval = setInterval(updateCountdown, 1000);

    // Clean up interval on unmount
    return () => clearInterval(interval);
  }, [targetDate]);

  if (isExpired) return null;

  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <Badge
      variant={variant}
      className="select-none px-3 py-1 rounded-full flex items-baseline gap-2 tabular-nums"
    >
      <div>
        <span className="inline-block w-[3ch] font-mono text-right">
          {days}
        </span>
        <span className="text-muted-foreground">&nbsp;d</span>
      </div>
      <span>:</span>
      <div>
        <span className="inline-block w-[2ch] font-mono text-right">
          {hours}
        </span>
        <span className="text-muted-foreground">&nbsp;h</span>
      </div>
      <span>:</span>
      <div>
        <span className="inline-block w-[2ch] font-mono text-right">
          {minutes}
        </span>
        <span className="text-muted-foreground">&nbsp;m</span>
      </div>
      <span>:</span>
      <div>
        <span className="inline-block w-[2ch] font-mono text-right">
          {seconds}
        </span>
        <span className="text-muted-foreground">&nbsp;s</span>
      </div>
    </Badge>
  );
}
