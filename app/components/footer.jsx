import { useTheme } from "../context/themeContext";


export default function Footer() {
  const { themeClasses } = useTheme();
  return (
    <footer
      className={`${themeClasses.sectionBg} py-8 px-6 border-t ${themeClasses.border} transition-colors duration-300`}
    >
      <div
        className={`container mx-auto text-center ${themeClasses.textMuted}`}
      >
        <p>
          &copy; 2025 Arhant Gourkhede. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
