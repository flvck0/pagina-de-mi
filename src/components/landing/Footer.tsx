export function Footer() {
  return (
    <footer className="bg-[#d7c6c8] px-4 pb-6 pt-10 md:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 rounded-[2rem] border border-[#a41420]/45 bg-[#4e2b2e] px-6 py-6 text-center text-[#fffdfb] sm:flex-row sm:text-left">
        <p className="text-sm font-semibold">José Concha</p>
        <p className="text-xs text-[#fffdfb]/65">
          © {new Date().getFullYear()} · Desarrollo, IA y soluciones digitales.
        </p>
      </div>
    </footer>
  );
}
