import Link from "next/link";

type CTAProps = {
  title?: string;
  text?: string;
};

export function CTA({
  title = "Un site paroissial plus clair commence par un audit.",
  text = "Partagez votre contexte, vos contraintes et vos priorites. Web Prophecy vous aide a identifier les premiers leviers utiles."
}: CTAProps) {
  return (
    <section className="bg-ink px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold sm:text-4xl">{title}</h2>
          <p className="mt-4 text-lg leading-8 text-stone-300">{text}</p>
        </div>
        <Link
          href="/contact"
          className="rounded-md bg-gold px-5 py-3 text-sm font-semibold text-ink shadow-sm transition hover:bg-gold-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Demander un audit gratuit
        </Link>
      </div>
    </section>
  );
}
