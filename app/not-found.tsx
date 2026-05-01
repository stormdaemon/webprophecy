import Link from "next/link";

export default function NotFound() {
  return (
    <main className="px-4 py-24 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-gold-dark">Page introuvable</p>
        <h1 className="mt-4 text-4xl font-semibold text-ink sm:text-5xl">Cette page n'existe pas encore.</h1>
        <p className="mt-5 text-lg leading-8 text-stone-650">
          Vous pouvez revenir à l'accueil, consulter les ressources ou demander un diagnostic de votre site paroissial.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/" className="rounded-md bg-ink px-5 py-3 text-sm font-semibold text-white hover:bg-stone-800">
            Retour à l'accueil
          </Link>
          <Link href="/audit-site-paroissial" className="rounded-md border border-stone-300 px-5 py-3 text-sm font-semibold text-ink hover:bg-stone-100">
            Demander un diagnostic
          </Link>
        </div>
      </section>
    </main>
  );
}
