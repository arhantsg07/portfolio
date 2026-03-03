'use client';

import { useState, useEffect } from 'react';
import { useTheme } from '../context/themeContext';

const ServerTime = () => {
  const { themeClasses } = useTheme();
  const [time, setTime] = useState<Date | null>(null);
  const [timezone, setTimezone] = useState<string>('');

  useEffect(() => {
    setTime(new Date());
    setTimezone(Intl.DateTimeFormat().resolvedOptions().timeZone);

    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!time) return null;

  const timeFormatted = time.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  });

  const dateFormatted = time.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div className="flex items-center gap-3 font-mono">

      {/* Pulsing live dot */}
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
      </span>

      {/* Date */}
      
      <span className={`${themeClasses.textSecondary} text-xs`}>
        {dateFormatted}
      </span>

      {/* Divider */}
      <span className="text-gray-600 text-xs">|</span>

      {/* Time */}
      <span className={ `${themeClasses.textSecondary} text-sm font-semibold tracking-widest`}>
        {timeFormatted}
      </span>

      {/* Divider */}
      <span className="text-gray-600 text-xs">|</span>

      {/* Timezone */}
      <span className={`${themeClasses.textSecondary} text-xs`}>
        {timezone}
      </span>

    </div>
  );
};

export default ServerTime;