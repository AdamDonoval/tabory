export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="container-px mx-auto max-w-7xl py-12 grid gap-8 md:grid-cols-3">
        <div>
          <div className="font-display text-xl font-bold">PAPAYA CAMP</div>
          <p className="mt-2 text-sm opacity-70 max-w-xs">
            Denný letný tábor pre deti 10–14 rokov. Učíme podnikavosť cez hru.
          </p>
        </div>
        <div>
          <div className="eyebrow text-primary-foreground/60">Organizátor</div>
          <div className="mt-2 text-sm">Papaya International</div>
          <a href="https://ppya.eu" target="_blank" rel="noreferrer" className="text-sm underline opacity-80 hover:opacity-100">
            ppya.eu
          </a>
        </div>
        <div>
          <div className="eyebrow text-primary-foreground/60">Kontakt</div>
          <a href="mailto:info@ppya.eu" className="mt-2 block text-sm underline opacity-80 hover:opacity-100">
            info@ppya.eu
          </a>
          <div className="text-sm opacity-70">Bratislava, Slovensko</div>
        </div>
      </div>
      <div className="container-px mx-auto max-w-7xl border-t border-primary-foreground/15 py-6 text-xs opacity-60">
        © {new Date().getFullYear()} Papaya International. Všetky práva vyhradené.
      </div>
    </footer>
  );
}
