import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  Eye,
  FileCheck2,
  Flag,
  HeartHandshake,
  LockKeyhole,
  Menu,
  ShieldCheck,
  TriangleAlert,
  Users,
  X,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/signal-cyber-icon-rounded.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SIGNAL CYBER | Signaler les violences numériques" },
      {
        name: "description",
        content:
          "Signalez en sécurité les violences numériques au Mali et accédez à un accompagnement confidentiel.",
      },
      { property: "og:title", content: "SIGNAL CYBER | Signaler en sécurité" },
      {
        property: "og:description",
        content:
          "Une plateforme confidentielle de signalement, de protection et d'accompagnement au Mali.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="relative min-h-screen overflow-hidden bg-frost text-ink antialiased">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_5%_4%,var(--brand-soft),transparent_25%),radial-gradient(circle_at_100%_42%,color-mix(in_oklab,var(--warning)_18%,transparent),transparent_22%)] opacity-35" />
      <nav
        className="relative z-20 mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-6"
        aria-label="Navigation principale"
      >
        <a href="#accueil" className="flex items-center gap-3" aria-label="SIGNAL CYBER, accueil">
          <img src={logo} alt="SIGNAL CYBER" className="size-9 rounded-sm object-contain" />
          <span className="font-display text-lg font-bold">SIGNAL CYBER</span>
        </a>
        <div className="hidden items-center gap-6 font-mono text-xs text-muted-foreground md:flex">
          <a href="#fonctionnement" className="hover:text-ink">
            Comment ça marche
          </a>
          <a href="#garanties" className="hover:text-ink">
            Garanties
          </a>
          <a href="#education" className="hover:text-ink">
            Éducation
          </a>
          <a href="#partenaires" className="hover:text-ink">
            Partenaires
          </a>
        </div>
        <div className="hidden items-center gap-2 sm:flex">
          <Button variant="glass" onClick={() => scrollTo("presentation")}>
            Découvrir
          </Button>
        </div>
        <Button
          variant="glass"
          size="icon"
          className="sm:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {menuOpen ? <X /> : <Menu />}
        </Button>
      </nav>
      {menuOpen && (
        <div className="relative z-20 mx-5 glass p-4 sm:hidden">
          <div className="flex flex-col gap-4 font-mono text-sm">
            <a href="#fonctionnement" onClick={() => setMenuOpen(false)}>
              Comment ça marche
            </a>
            <a href="#garanties" onClick={() => setMenuOpen(false)}>
              Garanties
            </a>
            <a href="#education" onClick={() => setMenuOpen(false)}>
              Éducation
            </a>
          </div>
        </div>
      )}

      <main id="accueil" className="relative z-10">
        <header className="mx-auto grid max-w-6xl gap-10 px-5 pb-16 pt-10 sm:px-6 lg:grid-cols-12 lg:pt-14">
          <div className="animate-rise lg:col-span-7">
            <h1 className="max-w-[20ch] text-balance font-display text-5xl font-extrabold leading-[1.02] md:text-6xl">
              Signalez en sécurité, restez anonyme par défaut.
            </h1>
            <p className="mt-6 max-w-[48ch] text-pretty text-lg leading-relaxed text-muted-foreground">
              SIGNAL CYBER accompagne les victimes, témoins et lanceurs d'alerte face aux violences
              numériques, avec une écoute humaine et confidentielle.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button variant="glass" size="lg" onClick={() => scrollTo("fonctionnement")}>
                Voir le parcours
              </Button>
              <span className="ml-1 font-mono text-xs text-muted-foreground">
                Français · Bamanankan à venir
              </span>
            </div>
          </div>
          <div className="animate-rise lg:col-span-5 lg:[animation-delay:120ms]" id="parcours">
            <div className="rounded-md p-6 glass glass-edge">
              <div className="mb-5 flex items-start justify-between">
                <h2 className="font-display text-xl font-bold">Trois portes d'entrée</h2>
                <span className="font-mono text-xs text-muted-foreground">01—03</span>
              </div>
              <div className="space-y-2">
                {[
                  {
                    n: "01",
                    title: "Je suis victime",
                    text: "Être protégé et orienté vers une aide adaptée.",
                    icon: HeartHandshake,
                    tone: "text-warning bg-warning/15",
                  },
                  {
                    n: "02",
                    title: "Je suis témoin",
                    text: "Déposer une observation sans s'exposer.",
                    icon: Eye,
                    tone: "text-brand bg-brand/10",
                  },
                  {
                    n: "03",
                    title: "Je lance une alerte",
                    text: "Signaler un risque de manière sécurisée.",
                    icon: Flag,
                    tone: "text-ink bg-ink/10",
                  },
                ].map(({ n, title, text, icon: Icon, tone }) => (
                  <button
                    key={n}
                    onClick={() => scrollTo("presentation")}
                    className="flex w-full items-center gap-3 rounded-sm border border-ink/5 bg-ink/[0.03] p-3 text-left transition-colors hover:bg-ink/[0.06]"
                  >
                    <span className={`grid size-10 shrink-0 place-items-center rounded-sm ${tone}`}>
                      <Icon className="size-4" />
                    </span>
                    <span className="flex-1">
                      <span className="block text-sm font-semibold">{title}</span>
                      <span className="block text-xs text-muted-foreground">{text}</span>
                    </span>
                    <span className="font-mono text-xs text-muted-foreground">{n}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </header>

        <section
          className="mx-auto max-w-6xl px-5 pb-20 sm:px-6"
          aria-label="Garanties essentielles"
        >
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 rounded-md px-6 py-4 glass glass-edge">
            <span className="font-mono text-xs text-muted-foreground">Nos engagements</span>
            {[
              "Anonymat public par défaut",
              "Validation humaine systématique",
              "Preuves horodatées et scellées",
              "Orientation juridique & psychosociale",
            ].map((item) => (
              <span key={item} className="flex items-center gap-2 text-sm">
                <ShieldCheck className="size-4 text-brand" />
                {item}
              </span>
            ))}
          </div>
        </section>

        <section id="presentation" className="mx-auto max-w-6xl px-5 pb-20 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <span className="font-mono text-xs text-brand">Pourquoi SIGNAL CYBER</span>
              <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">
                Ne plus rester seul face aux violences numériques.
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Cyberharcèlement, menaces, discours de haine, usurpation d'identité, diffusion de
                contenus intimes, chantage ou doxxing : la plateforme réunit en un seul lieu le
                signalement, la protection des preuves, le suivi et l'accompagnement.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Les signalements ne sont jamais publiés automatiquement. Une équipe formée les
                examine avant toute orientation, transmission ou publication anonymisée.
              </p>
            </div>
          </div>
        </section>

        <section id="fonctionnement" className="mx-auto max-w-6xl px-5 pb-20 sm:px-6">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <span className="font-mono text-xs text-brand">Parcours guidé</span>
              <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">
                Quatre étapes, en moins de cinq minutes
              </h2>
            </div>
            <span className="hidden font-mono text-xs text-muted-foreground md:block">01 → 04</span>
          </div>
          <div className="grid gap-4 md:grid-cols-4">
            {[
              {
                title: "Créer son espace",
                text: "Une inscription minimale avec pseudonyme accepté.",
                icon: Users,
              },
              {
                title: "Décrire les faits",
                text: "Choisir les catégories et joindre captures, liens ou documents.",
                icon: FileCheck2,
              },
              {
                title: "Choisir l'anonymat",
                text: "Rester anonyme vis-à-vis du public, par défaut.",
                icon: LockKeyhole,
              },
              {
                title: "Suivre le dossier",
                text: "Recevoir une référence et consulter chaque évolution.",
                icon: ShieldCheck,
              },
            ].map(({ title, text, icon: Icon }, i) => (
              <article key={title} className="rounded-md p-5 glass glass-edge">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-brand">0{i + 1}</span>
                  <Icon className="size-4 text-muted-foreground" />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="garanties"
          className="mx-auto grid max-w-6xl gap-8 px-5 pb-20 sm:px-6 lg:grid-cols-12"
        >
          <div className="lg:col-span-5">
            <span className="font-mono text-xs text-brand">Confidentialité & intégrité</span>
            <h2 className="mt-2 font-display text-3xl font-bold">
              Votre sécurité guide chaque décision.
            </h2>
            <p className="mt-4 max-w-[42ch] leading-relaxed text-muted-foreground">
              Les données sensibles restent accessibles uniquement aux personnes autorisées et toute
              décision importante reste humaine.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:col-span-7">
            {[
              {
                title: "Jamais publié automatiquement",
                text: "Chaque dossier passe par la modération.",
              },
              {
                title: "Aucune accusation publique",
                text: "L'identité d'un auteur présumé n'est jamais affichée.",
              },
              {
                title: "Preuves protégées",
                text: "Chaque fichier reçoit un horodatage et une empreinte numérique.",
              },
              {
                title: "Données maîtrisées",
                text: "Profil, contact et compte restent sous votre contrôle.",
              },
            ].map(({ title, text }) => (
              <article key={title} className="rounded-md p-4 glass glass-edge">
                <p className="text-sm font-semibold">{title}</p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-6">
          <div className="grid gap-8 rounded-md p-8 glass glass-edge md:grid-cols-3 md:p-10">
            <div className="md:col-span-2">
              <span className="font-mono text-xs text-warning">Évaluation du danger</span>
              <h2 className="mt-2 font-display text-3xl font-bold">
                Du conseil à la prise en charge urgente.
              </h2>
              <p className="mt-3 max-w-[52ch] text-muted-foreground">
                Vert pour l'information, jaune pour une situation préoccupante, orange pour une
                situation grave et rouge lorsqu'un danger est imminent.
              </p>
            </div>
            <div className="flex flex-col justify-center">
              <div className="mb-3 flex gap-2" aria-label="Niveaux de danger">
                <span className="h-2 flex-1 rounded-sm bg-chart-2" />
                <span className="h-2 flex-1 rounded-sm bg-chart-4" />
                <span className="h-2 flex-1 rounded-sm bg-chart-1" />
                <span className="h-2 flex-1 rounded-sm bg-destructive" />
              </div>
              <p className="text-sm font-semibold">En cas de danger immédiat</p>
              <p className="mt-1 text-xs text-muted-foreground">
                Contactez sans délai les services de sécurité compétents.
              </p>
            </div>
          </div>
        </section>

        <section id="education" className="mx-auto max-w-6xl px-5 pb-20 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <span className="font-mono text-xs text-brand">Comprendre et se protéger</span>
              <h2 className="mt-2 font-display text-3xl font-bold">
                Des repères clairs pour agir.
              </h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:col-span-7">
              {[
                "Reconnaître le cyberharcèlement",
                "Conserver les preuves utiles",
                "Protéger ses comptes et ses données",
                "Connaître ses droits et ses recours",
              ].map((title, i) => (
                <article
                  key={title}
                  className="flex items-center gap-4 rounded-md p-4 glass glass-edge"
                >
                  <span className="grid size-9 shrink-0 place-items-center rounded-sm bg-brand/10 text-brand">
                    {i === 0 ? (
                      <TriangleAlert className="size-4" />
                    ) : i === 1 ? (
                      <FileCheck2 className="size-4" />
                    ) : i === 2 ? (
                      <LockKeyhole className="size-4" />
                    ) : (
                      <BookOpen className="size-4" />
                    )}
                  </span>
                  <h3 className="text-sm font-semibold">{title}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="partenaires" className="mx-auto max-w-6xl px-5 pb-20 sm:px-6">
          <div className="border-y border-ink/10 py-8 text-center">
            <p className="font-mono text-xs text-muted-foreground">UN DISPOSITIF COLLECTIF</p>
            <h2 className="mx-auto mt-3 max-w-3xl font-display text-2xl font-bold">
              Justice, sécurité, droits humains, soutien psychosocial, médias, écoles et opérateurs
              réunis autour des victimes.
            </h2>
          </div>
        </section>
      </main>

      <footer className="relative z-10 mx-auto max-w-6xl px-5 pb-12 sm:px-6">
        <div className="rounded-md p-8 text-center glass glass-edge md:p-10">
          <span className="font-mono text-xs text-brand">SIGNAL CYBER</span>
          <h2 className="mx-auto mt-3 max-w-[18ch] text-balance font-display text-4xl font-extrabold md:text-5xl">
            Signaler, protéger, accompagner.
          </h2>
          <p className="mx-auto mt-4 max-w-[52ch] text-pretty text-muted-foreground">
            Une réponse malienne, humaine et confidentielle pour faire reculer les violences
            numériques.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button variant="ink" size="lg" onClick={() => scrollTo("parcours")}>
              Découvrir les parcours <ArrowRight />
            </Button>
            <Button variant="glass" size="lg" onClick={() => scrollTo("education")}>
              Consulter les ressources
            </Button>
          </div>
          {/* <p className="mt-8 font-mono text-xs text-muted-foreground">
            © 2026 SIGNAL CYBER · Hackathon Tuwindi — Groupe 3
          </p> */}
        </div>
      </footer>
    </div>
  );
}
