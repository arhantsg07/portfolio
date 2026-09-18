import ServerTime from "./serverTime";

export default function Footer() {
  return (
    <footer className="zen-shell py-8">
      <div className="surface-card rounded-2xl border px-5 py-6 text-center transition-colors duration-300">
        <p className="theme-text-muted text-sm">
          &copy; 2026 Arhant Gourkhede. Built as a digital garden.
        </p>
        <div className="mt-3 flex justify-center">
          <ServerTime />
        </div>
      </div>
    </footer>
  );
}
