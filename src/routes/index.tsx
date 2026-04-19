import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import heroImg from "@/assets/spot.png";
import outdoorImg from "@/assets/outdoor.jpg";
import workshopImg from "@/assets/workshop.jpg";
import foundersImg from "@/assets/founders.png";
import spotLogoImg from "@/assets/the_spot_slovakia_logo.jpeg";
import adamImg from "@/assets/adam.jpeg";
import romanImg from "@/assets/roman.jpg";

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
    <section className="relative bg-primary text-primary-foreground pt-32 pb-20 md:pt-44 md:pb-28">
      <div className="container-px mx-auto max-w-7xl rounded-2xl overflow-hidden bg-primary">
        <div className="grid gap-12 md:grid-cols-12 md:gap-8 items-center p-8 md:p-12">
        <div className="md:col-span-7">
          <div className="eyebrow text-primary-foreground/60">Bratislava · Júl 2026</div>
          <h1 className="display-xl mt-4">
            Letný detský tábor<br />
            pre podnikavé mozgy<br />
            <span className="text-primary-foreground/60">v centre startupovej scény</span>
          </h1>
          <p className="mt-6 max-w-xl text-base md:text-lg text-primary-foreground/80">
            Päť dní plných hier, ktoré učia podnikavosti. Workshopy vedené osobnostami slovenskej startupovej scény, komplexné výzvy v tímoch, a každý deň niečo nové. Program dopĺňaný prírodou, športom a piknikom.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              to="/prihlaska"
              className="bg-primary-foreground px-7 py-4 text-sm font-semibold text-primary transition-opacity hover:opacity-90"
              style={{ borderRadius: "16px" }}
            >
              Nezáväzná prihláška →
            </Link>
            <a
              href="#vizia"
              className="border border-primary-foreground/30 px-7 py-4 text-sm font-semibold transition-colors hover:bg-primary-foreground/10"
              style={{ borderRadius: "16px" }}
            >
              Zistiť viac
            </a>
          </div>

         
        </div>

        <div className="md:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
            <img
              src={heroImg}
              alt="Deti pracujú na nápade pri laptope na workshope"
              width={1600}
              height={1024}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
            <div className="absolute bottom-0 left-0 bg-primary-foreground text-primary px-4 py-2 text-xs font-bold uppercase tracking-wider">
              The Spot
            </div>
          </div>
          <a
            href="https://maps.app.goo.gl/7GGSfwviXU5LKSuGA"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center gap-2 text-primary-foreground transition-opacity hover:opacity-70"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5z"/>
            </svg>
            <span className="text-sm font-semibold">Pozrieť na mape</span>
          </a>
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
      title: "Rozvoj podnikavosti",
      text: "Deti sa naučia vidieť svet ako miesto, na ktorom je stále čo zlepšovať. V skupinkách si vyskúšajú hľadať, vymýšľať a realizovať riešenia na rôzne problémy. Toto všetko cez hry a workshopy, bez tabule a čiste prakticky.",
    },
    {
      n: "02",
      title: "Kritické myslenie",
      text: "Komplexné hry a výzvy deti naučia rozmýšľať v súvislostiach. Ako z nápadu vyrástol biznis? Ako sa dá argument otestovať? Učíme sa spolu, bez správnej a nesprávnej odpovede.",
    },
    {
      n: "03",
      title: "Stretnutia s osobnosťami",
      text: "Každý deň workshopy so profesionálmi a zakladateľmi, ktorí už niečo dokázali. Bez slajdov a teórie, reálne príbehy, prehry a víťazstvá. Tábor zakončíme piknikom so zakladateľmi startupu priamo v prírode.",
    },
    {
      n: "04",
      title: "Šport ako súčasť každého dňa",
      text: "Pohyb, šport, príroda. Myseľ, tímová spolupráca, kreatívne riešenia. Striedame fyzickú aktivitu s mentálnym vývojom — telo aj hlava sú rovnako dôležité.",
    },
  ];

  return (
    <section id="vizia" className="section-pad bg-background">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="eyebrow">Naša vízia</div>
            <h2 className="display-lg mt-4">
              Vidieť, riešiť,<br />rásť.
            </h2>
            <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-md italic">
              "Veríme, že podnikavosť je spôsob myslenia — vidieť problémy a vedieť ich riešiť. Päť dní hier, workshopov s osobnosťami slovenskej startup scény a skupinových výziev. Striedame kreativitu s pohybom v prírode a inšpiráciou od ľudí, ktorí už niečo dosiahli."
            </p>
            <div className="mt-8 flex gap-6">
              <img
                src={foundersImg}
                alt="Founders logo"
                width={120}
                height={80}
                className="h-24 object-contain"
                style={{ borderRadius: "16px" }}
              />
              <img
                src={spotLogoImg}
                alt="The Spot Slovakia logo"
                width={120}
                height={80}
                className="h-24 object-contain"
                style={{ borderRadius: "16px" }}
              />
            </div>
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
    { label: "Cena", value: <><span style={{ textDecoration: 'line-through', fontWeight: 'normal' }}>240€</span> 195€ <span style={{ fontWeight: 'normal', fontSize: '0.875em' }}>(zľava na druhé dieťa)</span></> },
    { label: "Termíny", value: "6.6 - 10.6, 13.6 - 17.6" },
    { label: "Miesto", value: <a href="https://maps.app.goo.gl/ZJzCLHp4MYCbciJ7A" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }} onMouseEnter={(e) => e.target.style.textDecoration = 'underline'} onMouseLeave={(e) => e.target.style.textDecoration = 'none'}>The Spot, Bratislava Bottova 2</a> },
  ];

  return (
    <section id="info" className="section-pad bg-secondary">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-12 items-end">
          <div className="md:col-span-6">
            <div className="eyebrow">Základné info</div>
            <h2 className="display-lg mt-4">Praktické detaily</h2>
          </div>
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
            <div className="font-display text-xl font-bold">Máte záujem o miesto?</div>
            <p className="mt-1 text-sm text-muted-foreground">
              Nezáväzná prihláška nám pomôže odhadnúť záujem a otvoriť správny počet turnusov.
            </p>
          </div>
          <Link
            to="/prihlaska"
            className="bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground"
          >
           Nezáväzná prihláška →
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- TÍM ----------------------------- */
function Team() {
  const members = [
    { name: "Hlavný vedúci", role: "Koordinátor programu", initials: "HV", image: adamImg },
    { name: "Vedúca workshopov", role: "Lektorka & mentor", initials: "VW" },
    { name: "Outdoor vedúci", role: "Šport & príroda", initials: "OV", image: romanImg },
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
              Sme skupina mladých nadšencov so skúsenosťami z práce s deťmi naprieč Slovenskom. Dlhodobo pracujeme na medzinárodných projektoch a mládežníckych výmenach ako aj Erasmus mobilitách.
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
                {m.image ? (
                  <img
                    src={m.image}
                    alt={m.name}
                    className="h-48 w-48 shrink-0 object-cover rounded-full"
                  />
                ) : (
                  <div className="flex h-48 w-48 shrink-0 items-center justify-center bg-primary text-primary-foreground font-display text-lg font-bold rounded-full">
                    {m.initials}
                  </div>
                )}
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
            Máte otázku k programu, cene alebo termínu? Napíšte nám!
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
          Prihláste sa nezáväzne už dnes!<br />
          <span className="text-muted-foreground">Bez nutnosti platiť.</span>
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
