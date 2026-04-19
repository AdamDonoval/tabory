import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import heroImg from "@/assets/hero.jpg";
import outdoorImg from "@/assets/outdoor.jpg";
import workshopImg from "@/assets/workshop.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Papaya Camp — Denný letný tábor podnikavosti pre deti 10–14" },
      {
        name: "description",
        content:
          "Denný letný tábor v Bratislave, kde sa deti 10–14 rokov hravou formou učia podnikavosť, kritické myslenie a tímovú prácu. Workshopy s osobnosťami, hry, šport a príroda.",
      },
      { property: "og:title", content: "Papaya Camp — Letný tábor podnikavosti" },
      {
        property: "og:description",
        content:
          "Denný tábor pre deti 10–14. Workshopy, hry, šport a stretnutia s osobnosťami slovenskej startup scény.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: heroImg },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <Vision />
        <Info />
        <Team />
        <Partners />
        <Contact />
        <FinalCTA />
      </main>
      <SiteFooter />
    </div>
  );
}

/* ----------------------------- HERO ----------------------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground pt-32 pb-20 md:pt-44 md:pb-28">
      <div className="container-px mx-auto max-w-7xl grid gap-12 md:grid-cols-12 md:gap-8 items-center">
        <div className="md:col-span-7">
          <div className="eyebrow text-primary-foreground/60">Bratislava · Júl 2026</div>
          <h1 className="display-xl mt-4">
            Letný tábor,<br />
            kde deti riešia<br />
            <span className="text-primary-foreground/60">reálne problémy.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base md:text-lg text-primary-foreground/80">
            Denný tábor pre 10–14 ročných. Cez hry, workshopy s osobnosťami a outdoor aktivity sa
            učia hľadať príležitosti, premýšľať kriticky a fungovať v tíme.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              to="/prihlaska"
              className="bg-primary-foreground px-7 py-4 text-sm font-semibold text-primary transition-opacity hover:opacity-90"
            >
              Nezáväzná prihláška →
            </Link>
            <a
              href="#vizia"
              className="border border-primary-foreground/30 px-7 py-4 text-sm font-semibold transition-colors hover:bg-primary-foreground/10"
            >
              Zistiť viac
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-6 max-w-lg">
            {[
              { k: "10–14", v: "rokov" },
              { k: "2", v: "turnusy" },
              { k: "5", v: "dní/turnus" },
            ].map((s) => (
              <div key={s.v} className="border-t border-primary-foreground/20 pt-3">
                <dt className="font-display text-3xl md:text-4xl font-bold">{s.k}</dt>
                <dd className="mt-1 text-xs uppercase tracking-widest opacity-60">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="md:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src={heroImg}
              alt="Deti pracujú na nápade pri laptope na workshope"
              width={1600}
              height={1024}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
            <div className="absolute bottom-0 left-0 bg-primary-foreground text-primary px-4 py-2 text-xs font-bold uppercase tracking-wider">
              The Spot · Bratislava
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- VÍZIA ----------------------------- */
function Vision() {
  const pillars = [
    {
      n: "01",
      title: "Hľadať problémy",
      text: "Deti sa učia všímať si svet okolo seba a pomenovať reálne problémy, ktoré stoja za riešenie.",
    },
    {
      n: "02",
      title: "Vymýšľať riešenia",
      text: "Cez komplexné hry a tímové výzvy si skúsia, ako sa z nápadu stáva fungujúci projekt.",
    },
    {
      n: "03",
      title: "Učiť sa od najlepších",
      text: "Workshopy a piknik s osobnosťami slovenskej startup a vedeckej scény. Bez teórie, len reálne príbehy.",
    },
    {
      n: "04",
      title: "Zostať v rovnováhe",
      text: "Pohyb v prírode, šport a outdoor aktivity striedame s rozvojom mysle. Telo a hlava idú spolu.",
    },
  ];

  return (
    <section id="vizia" className="section-pad bg-background">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="eyebrow">Naša vízia</div>
            <h2 className="display-lg mt-4">
              Podnikavosť ako<br />nový jazyk detstva.
            </h2>
            <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-md">
              Veríme, že podnikavosť a kritické myslenie sú v dnešnej dobe rovnako dôležité ako
              čítanie a počítanie. Nevyučujeme ich za tabuľou — ukazujeme ich cez zážitok.
            </p>
          </div>

          <div className="md:col-span-7 grid gap-px bg-border md:grid-cols-2">
            {pillars.map((p) => (
              <div key={p.n} className="bg-background p-8">
                <div className="font-display text-xs font-bold tracking-widest text-muted-foreground">
                  {p.n}
                </div>
                <h3 className="mt-4 text-xl font-bold">{p.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-2">
          <figure className="relative aspect-[4/3] overflow-hidden">
            <img
              src={workshopImg}
              alt="Workshop pre deti vo svetlej miestnosti"
              loading="lazy"
              width={1280}
              height={896}
              className="h-full w-full object-cover"
            />
            <figcaption className="absolute bottom-4 left-4 bg-primary px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-foreground">
              Workshopy
            </figcaption>
          </figure>
          <figure className="relative aspect-[4/3] overflow-hidden">
            <img
              src={outdoorImg}
              alt="Mladí ľudia na túre v slovenských horách"
              loading="lazy"
              width={1280}
              height={896}
              className="h-full w-full object-cover"
            />
            <figcaption className="absolute bottom-4 left-4 bg-primary px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-foreground">
              Príroda & šport
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- INFO ----------------------------- */
function Info() {
  const facts = [
    { label: "Vek", value: "10 – 14 rokov" },
    { label: "Forma", value: "Denný tábor" },
    { label: "Strava", value: "3× denne — desiata, obed, olovrant" },
    { label: "Cena", value: "150 – 200 €" },
    { label: "Termíny", value: "Prvé dva júlové týždne · 2 turnusy" },
    { label: "Miesto", value: "The Spot, Bratislava (príp. okolie)" },
  ];

  return (
    <section id="info" className="section-pad bg-secondary">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-12 items-end">
          <div className="md:col-span-6">
            <div className="eyebrow">Základné info</div>
            <h2 className="display-lg mt-4">Praktické detaily.</h2>
          </div>
          <p className="md:col-span-6 text-base text-muted-foreground max-w-md md:ml-auto">
            Cena ešte nie je presne stanovená a podľa záujmu vieme otvoriť aj ďalšie turnusy mimo júla.
          </p>
        </div>

        <dl className="mt-12 grid gap-px bg-border md:grid-cols-2">
          {facts.map((f) => (
            <div key={f.label} className="bg-secondary p-8 flex items-baseline justify-between gap-6">
              <dt className="eyebrow">{f.label}</dt>
              <dd className="text-right font-display text-lg md:text-xl font-bold">{f.value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-12 flex flex-col items-start gap-4 border border-foreground/15 p-8 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="font-display text-xl font-bold">Zaujíma vás miesto?</div>
            <p className="mt-1 text-sm text-muted-foreground">
              Nezáväzná prihláška nám pomôže odhadnúť záujem a otvoriť správny počet turnusov.
            </p>
          </div>
          <Link
            to="/prihlaska"
            className="bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground"
          >
            Zapísať záujem →
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- TÍM ----------------------------- */
function Team() {
  const members = [
    { name: "Hlavný vedúci", role: "Koordinátor programu", initials: "HV" },
    { name: "Vedúca workshopov", role: "Lektorka & mentor", initials: "VW" },
    { name: "Outdoor vedúci", role: "Šport & príroda", initials: "OV" },
    { name: "Mentor podnikavosti", role: "Founder coach", initials: "MP" },
  ];

  return (
    <section id="tim" className="section-pad bg-background">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="eyebrow">O nás</div>
            <h2 className="display-lg mt-4">Kto stojí za táborom.</h2>
            <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-md">
              Sme skupina mladých nadšencov so skúsenosťami z práce s deťmi naprieč Slovenskom,
              z medzinárodných projektov, startupov a rôznych vedných odborov.
            </p>
            <p className="mt-4 text-sm text-muted-foreground max-w-md">
              Tábor organizuje{" "}
              <a
                href="https://ppya.eu"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-foreground underline underline-offset-4"
              >
                Papaya International
              </a>
              {" "}— venujeme sa mládeži, neformálnemu vzdelávaniu a podpore podnikavosti.
            </p>
          </div>

          <div className="md:col-span-7 grid gap-px bg-border sm:grid-cols-2">
            {members.map((m) => (
              <div key={m.name} className="bg-background p-6 flex items-center gap-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center bg-primary text-primary-foreground font-display text-lg font-bold">
                  {m.initials}
                </div>
                <div>
                  <div className="font-bold">{m.name}</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">
                    {m.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- PARTNERS ----------------------------- */
function Partners() {
  return (
    <section id="partneri" className="section-pad bg-primary text-primary-foreground">
      <div className="container-px mx-auto max-w-7xl">
        <div className="eyebrow text-primary-foreground/60">Partneri & podpora</div>
        <h2 className="display-lg mt-4 max-w-3xl">
          Tábor podporuje coworking{" "}
          <span className="text-primary-foreground/60">The Spot.</span>
        </h2>
        <p className="mt-6 max-w-xl text-base text-primary-foreground/70">
          Spolupracujeme so sponzormi, partnerskými organizáciami a osobnosťami zo slovenskej
          startup scény, ktoré k nám prídu viesť workshopy.
        </p>

        <div className="mt-12 grid gap-px bg-primary-foreground/15 sm:grid-cols-2 md:grid-cols-4">
          {["The Spot", "Partner 02", "Partner 03", "Partner 04"].map((p) => (
            <div
              key={p}
              className="bg-primary aspect-[3/2] flex items-center justify-center"
            >
              <span className="font-display text-lg font-bold tracking-tight opacity-80">
                {p}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- KONTAKT ----------------------------- */
function Contact() {
  return (
    <section id="kontakt" className="section-pad bg-background">
      <div className="container-px mx-auto max-w-7xl grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="eyebrow">Kontakt</div>
          <h2 className="display-lg mt-4">Ozvite sa.</h2>
          <p className="mt-6 text-muted-foreground max-w-md">
            Máte otázku k programu, cene alebo termínu? Napíšte nám — odpovedáme zvyčajne do 48 hodín.
          </p>
        </div>
        <div className="md:col-span-7 grid gap-px bg-border">
          <a
            href="mailto:info@ppya.eu"
            className="bg-background p-8 flex items-baseline justify-between gap-4 group"
          >
            <span className="eyebrow">Email</span>
            <span className="font-display text-xl md:text-2xl font-bold underline-offset-4 group-hover:underline">
              info@ppya.eu
            </span>
          </a>
          <a
            href="https://ppya.eu"
            target="_blank"
            rel="noreferrer"
            className="bg-background p-8 flex items-baseline justify-between gap-4 group"
          >
            <span className="eyebrow">Web organizácie</span>
            <span className="font-display text-xl md:text-2xl font-bold underline-offset-4 group-hover:underline">
              ppya.eu →
            </span>
          </a>
          <div className="bg-background p-8 flex items-baseline justify-between gap-4">
            <span className="eyebrow">Sídlo</span>
            <span className="font-display text-xl md:text-2xl font-bold">Bratislava, SK</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="bg-secondary section-pad">
      <div className="container-px mx-auto max-w-4xl text-center">
        <div className="eyebrow">Kapacita je limitovaná</div>
        <h2 className="display-lg mt-4">
          Zapíšte záujem dnes.<br />
          <span className="text-muted-foreground">Bez záväzku.</span>
        </h2>
        <p className="mt-6 text-muted-foreground">
          Vyplnenie prihlášky vám trvá menej ako minútu a pomôže nám nastaviť počet turnusov.
        </p>
        <Link
          to="/prihlaska"
          className="mt-8 inline-block bg-primary px-9 py-5 text-sm font-semibold text-primary-foreground"
        >
          Vyplniť nezáväznú prihlášku →
        </Link>
      </div>
    </section>
  );
}
