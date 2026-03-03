import { useTheme } from "../context/themeContext";
import ServerTime from "./serverTime";

export default function Footer() {
  const { themeClasses } = useTheme();
  return (
    <footer
      className={`${themeClasses.bg} py-8 px-6 border-t ${themeClasses.border} transition-colors duration-300`}
    >
      <div
        className={`container mx-auto text-center ${themeClasses.textMuted}`}
      >
        <p>
          &copy; 2026 Arhant Gourkhede. All rights reserved.
        </p>
        <div className="flex justify-center">
        <ServerTime />
        </div>
      </div>
    </footer>
  );
}
