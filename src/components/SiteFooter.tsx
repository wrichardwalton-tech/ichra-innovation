export function SiteFooter() {
  return (
    <footer className="py-12 text-center text-muted-foreground border-t border-border bg-card">
      <p className="font-bold text-sm tracking-widest uppercase">
        © {new Date().getFullYear()} ICHRA Innovation. A strategic advisory.
      </p>
    </footer>
  )
}
