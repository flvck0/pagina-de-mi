export function Footer() {
  return (
    <footer className="border-t border-border bg-apple-bg px-6 py-8">
      <div className="mx-auto max-w-5xl text-center">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} · Diseñado y construido con pasión.
        </p>
      </div>
    </footer>
  );
}