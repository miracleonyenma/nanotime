"use client";

import { useState, useEffect } from "react";
import { Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function BigVerticalClock() {
  const [time, setTime] = useState(new Date());
  const [showSeconds, setShowSeconds] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formatTime = (date: Date) => {
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");
    return { hours, minutes, seconds };
  };

  const { hours, minutes, seconds } = formatTime(time);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white font-mono relative">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="ghost" className="absolute top-4 right-4 text-white">
            <Settings className="h-6 w-6" />
          </Button>
        </DialogTrigger>
        <DialogContent className="bg-gray-800 text-white">
          <DialogHeader>
            <DialogTitle>Clock Settings</DialogTitle>
          </DialogHeader>
          <div className="flex items-center space-x-2">
            <label htmlFor="showSeconds">Show Seconds</label>
            <input
              id="showSeconds"
              type="checkbox"
              checked={showSeconds}
              onChange={(e) => setShowSeconds(e.target.checked)}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
          </div>
        </DialogContent>
      </Dialog>

      <div className="text-center">
        <div className="text-9xl md:text-[12rem] lg:text-[16rem] font-bold leading-none">
          {hours}
        </div>
        <div className="text-9xl md:text-[12rem] lg:text-[16rem] font-bold leading-none">
          {minutes}
        </div>
        {showSeconds && (
          <div className="text-4xl md:text-6xl lg:text-8xl font-bold opacity-70">
            {seconds}
          </div>
        )}
      </div>
    </div>
  );
}
