export function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[260px] rounded-[2.5rem] border-[10px] border-[#1a2336] bg-[#0a0e1a] shadow-card overflow-hidden">
      <div className="absolute top-2 left-1/2 -translate-x-1/2 h-5 w-24 rounded-full bg-[#1a2336] z-10" />
      <div className="aspect-[9/19] flex flex-col bg-[#0e1420]">
        <div className="bg-[#0a0e1a] px-4 pt-9 pb-4 border-b border-border">
          <div className="flex items-center justify-between">
            <span className="text-sm font-extrabold italic text-foreground tracking-tight">D<span className="text-primary">I</span>N</span>
            <div className="h-8 w-8 rounded-full bg-primary/15 border border-primary/30" />
          </div>
          <div className="mt-3">
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground">ID DIN</p>
            <p className="font-bold text-foreground text-sm">DIN-IT-04812</p>
          </div>
        </div>
        <div className="p-3 space-y-2 flex-1">
          <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground px-1">Allievi recenti</p>
          {["Marco R.", "Giulia B.", "Andrea P.", "Sara L."].map((n, i) => (
            <div key={n} className="flex items-center gap-2 rounded-lg bg-[#151c2a] p-2 border border-border">
              <div className="h-7 w-7 rounded-full bg-primary/15 grid place-items-center text-[10px] font-bold text-primary">
                {n[0]}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[11px] font-semibold text-foreground truncate">{n}</p>
                <p className="text-[9px] text-muted-foreground">Guida #{12 + i}</p>
              </div>
              <span className="text-[9px] font-semibold text-primary">●</span>
            </div>
          ))}
          <div className="rounded-lg border border-primary/30 bg-primary/10 p-3 mt-3">
            <p className="text-[10px] text-muted-foreground">Tasso di successo</p>
            <p className="text-xl font-bold text-primary">87%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function DesktopMockup() {
  return (
    <div className="relative mx-auto w-full max-w-2xl rounded-2xl border border-border bg-[#0a0e1a] shadow-card overflow-hidden">
      <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-border bg-[#0e1420]">
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
        <div className="ml-3 flex-1 h-5 rounded bg-[#151c2a] border border-border" />
      </div>
      <div className="grid grid-cols-[140px_1fr]">
        <aside className="bg-[#0e1420] border-r border-border p-3 space-y-1.5">
          <div className="mb-3 text-base font-extrabold italic text-foreground tracking-tight">D<span className="text-primary">I</span>N</div>
          {["Dashboard", "Istruttori", "Allievi", "Esami", "Report"].map((l, i) => (
            <div key={l} className={`text-xs px-2 py-1.5 rounded ${i === 0 ? "bg-primary text-primary-foreground font-semibold" : "text-muted-foreground"}`}>
              {l}
            </div>
          ))}
        </aside>
        <main className="p-4 space-y-3 bg-[#0a0e1a]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-muted-foreground">Panoramica scuola</p>
              <p className="font-bold text-foreground">Autoscuola Centrale</p>
            </div>
            <div className="h-7 w-20 rounded bg-primary shadow-glow" />
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[["Istruttori", "8"], ["Allievi attivi", "142"], ["Esami / mese", "37"]].map(([k, v]) => (
              <div key={k} className="rounded-lg border border-border bg-[#151c2a] p-2.5">
                <p className="text-[10px] text-muted-foreground">{k}</p>
                <p className="text-lg font-bold text-foreground">{v}</p>
              </div>
            ))}
          </div>
          <div className="rounded-lg border border-border bg-[#151c2a] p-3">
            <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-2">Istruttori collegati</p>
            <div className="space-y-1.5">
              {[["M. Conti", "DIN-IT-04812", "92%"], ["L. Russo", "DIN-IT-03127", "88%"], ["A. Esposito", "DIN-IT-05901", "85%"]].map(([n, id, r]) => (
                <div key={id} className="flex items-center gap-2 text-xs">
                  <div className="h-6 w-6 rounded-full bg-primary/15 grid place-items-center text-[10px] font-bold text-primary">{n[0]}</div>
                  <span className="font-semibold text-foreground flex-1">{n}</span>
                  <span className="text-muted-foreground text-[10px] font-mono">{id}</span>
                  <span className="text-primary font-bold">{r}</span>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
