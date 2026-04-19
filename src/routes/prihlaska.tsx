import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { SiteFooter } from "@/components/SiteFooter";
import { submitRegistration } from "@/server/registrations.functions";

export const Route = createFileRoute("/prihlaska")({
  head: () => ({
    meta: [
      { title: "Nezáväzná prihláška — Papaya Camp" },
      {
        name: "description",
        content:
          "Nezáväzná prihláška na Papaya Camp — denný letný tábor podnikavosti pre deti 10–14 rokov v Bratislave.",
      },
      { property: "og:title", content: "Nezáväzná prihláška — Papaya Camp" },
      {
        property: "og:description",
        content: "Vyplňte nezáväznú prihlášku a rezervujte si miesto na letnom tábore.",
      },
    ],
  }),
  component: PrihlaskaPage,
});

type Status = "idle" | "submitting" | "success" | "error";

function PrihlaskaPage() {
  const submit = useServerFn(submitRegistration);
  const navigate = useNavigate();
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [selectedTurnus, setSelectedTurnus] = useState<string>("first");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg(null);

    const fd = new FormData(e.currentTarget);
    const childAge = (fd.get("child_age") as string | null) ?? "";

    try {
      const res = await submit({
        data: {
          parent_name: ((fd.get("parent_name") as string) || "").trim(),
          parent_email: ((fd.get("parent_email") as string) || "").trim(),
          parent_phone: ((fd.get("parent_phone") as string) || "").trim(),
          child_name: ((fd.get("child_name") as string) || "").trim(),
          child_age: childAge === "" ? "" : Number(childAge),
          child_email: ((fd.get("child_email") as string) || "").trim(),
          child_phone: ((fd.get("child_phone") as string) || "").trim(),
          preferred_turnus: (fd.get("preferred_turnus") as
            | "first"
            | "second"
            | "any"
            | "other") || "any",
          preferred_turnus_other: ((fd.get("preferred_turnus_other") as string) || "").trim(),
          notes: ((fd.get("notes") as string) || "").trim(),
        },
      });

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMsg(res.error);
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMsg("Skontrolujte prosím vyplnené polia a skúste znova.");
    }
  }

  if (status === "success") {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <header className="border-b border-border">
          <div className="container-px mx-auto max-w-7xl h-16 flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <span className="inline-block h-3 w-3 bg-primary" aria-hidden />
              <span className="font-display text-lg font-bold">PAPAYA CAMP</span>
            </Link>
          </div>
        </header>
        <main className="flex-1 container-px mx-auto max-w-2xl py-24 text-center">
          <div className="eyebrow">Hotovo</div>
          <h1 className="display-lg mt-4">Ďakujeme!</h1>
          <p className="mt-6 text-muted-foreground">
            Vašu nezáväznú prihlášku sme prijali. Ozveme sa vám hneď, ako budú známe presné termíny
            a cena turnusov.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Link to="/" className="bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground">
              Späť na úvod
            </Link>
            <button
              onClick={() => {
                setStatus("idle");
                navigate({ to: "/prihlaska" });
              }}
              className="border border-foreground/20 px-7 py-4 text-sm font-semibold"
            >
              Prihlásiť ďalšie dieťa
            </button>
          </div>
        </main>
        <SiteFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="border-b border-border bg-background sticky top-0 z-40">
        <div className="container-px mx-auto max-w-7xl h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="inline-block h-3 w-3 bg-primary" aria-hidden />
            <span className="font-display text-lg font-bold">
              PAPAYA <span className="text-muted-foreground font-normal">CAMP</span>
            </span>
          </Link>
          <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-foreground">
            ← Späť
          </Link>
        </div>
      </header>

      <main className="flex-1">
        <div className="container-px mx-auto max-w-3xl py-16 md:py-24">
          <div className="eyebrow">Nezáväzná prihláška</div>
          <h1 className="display-lg mt-4">Zaregistrujte sa nezáväzne!</h1>
          <p className="mt-6 text-muted-foreground max-w-xl">
            Vyplnenie trvá menej ako minútu. Nezáväzne — pomáha nám to odhadnúť záujem a otvoriť
            správny počet turnusov. Neskôr sa vám ozveme s detailmi :)
          </p>

          <form onSubmit={onSubmit} className="mt-12 space-y-10">
            <Fieldset title="Rodič / zákonný zástupca">
              <Field label="Meno a priezvisko *" name="parent_name" required maxLength={200} />
              <div className="grid gap-6 md:grid-cols-2">
                <Field label="Email *" name="parent_email" type="email" required maxLength={320} />
                <Field label="Telefón" name="parent_phone" type="tel" maxLength={40} />
              </div>
            </Fieldset>

            <Fieldset title="Dieťa (nepovinné)">
              <div className="grid gap-6 md:grid-cols-[1fr_140px]">
                <Field label="Meno dieťaťa" name="child_name" maxLength={200} />
                <Field label="Vek" name="child_age" type="number" min={8} max={16} />
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <Field label="Email dieťaťa" name="child_email" type="email" maxLength={320} />
                <Field label="Telefón dieťaťa" name="child_phone" type="tel" maxLength={40} />
              </div>
            </Fieldset>

            <Fieldset title="Preferovaný turnus">
              <div className="grid gap-px bg-border">
                {[
                  { v: "first", l: "1. turnus — začiatok júla" },
                  { v: "second", l: "2. turnus — druhý júlový týždeň" },
                  { v: "any", l: "Je mi to jedno (jeden z prvých dvoch)" },
                  { v: "other", l: "Iný termín" },
                ].map((opt) => (
                  <label
                    key={opt.v}
                    className="bg-background flex items-center gap-4 p-4 cursor-pointer hover:bg-secondary transition-colors"
                  >
                    <input
                      type="radio"
                      name="preferred_turnus"
                      value={opt.v}
                      checked={selectedTurnus === opt.v}
                      onChange={(e) => setSelectedTurnus(e.target.value)}
                      className="h-4 w-4 accent-primary"
                    />
                    <span className="text-sm font-medium">{opt.l}</span>
                  </label>
                ))}
              </div>
              {selectedTurnus === "other" && (
                <div className="mt-6">
                  <Field 
                    label="Aký termín by vám vyhovoval?" 
                    name="preferred_turnus_other" 
                    maxLength={500}
                    placeholder="Napr. august, september, alebo konkrétny dátum…"
                  />
                </div>
              )}
            </Fieldset>

            <Fieldset title="Otázky alebo poznámky">
              <textarea
                name="notes"
                rows={4}
                maxLength={1000}
                placeholder="Čokoľvek, čo by sme mali vedieť alebo na čo sa chcete spýtať…"
                className="w-full border border-foreground/20 bg-background p-4 text-sm focus:border-primary focus:outline-none resize-none"
              />
            </Fieldset>

            {status === "error" && errorMsg && (
              <div className="border border-destructive bg-destructive/5 p-4 text-sm text-destructive">
                {errorMsg}
              </div>
            )}

            <div className="flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-muted-foreground">
                Odoslaním súhlasíte, že vás môžeme kontaktovať e-mailom v súvislosti s táborom.
              </p>
              <button
                type="submit"
                disabled={status === "submitting"}
                className="bg-primary px-9 py-4 text-sm font-semibold text-primary-foreground disabled:opacity-60"
              >
                {status === "submitting" ? "Odosielam…" : "Odoslať prihlášku →"}
              </button>
            </div>
          </form>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

function Fieldset({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="eyebrow mb-4">{title}</div>
      <div className="space-y-6">{children}</div>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  maxLength,
  min,
  max,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  maxLength?: number;
  min?: number;
  max?: number;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="block text-sm font-medium mb-2">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        maxLength={maxLength}
        min={min}
        max={max}
        placeholder={placeholder}
        className="w-full border border-foreground/20 bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none"
      />
    </label>
  );
}
