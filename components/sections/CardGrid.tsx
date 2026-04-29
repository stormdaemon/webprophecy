import type { LucideIcon } from "lucide-react";

type Card = {
  icon: LucideIcon;
  title: string;
  text: string;
};

export function CardGrid({ cards }: { cards: Card[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {cards.map((card) => {
        const Icon = card.icon;
        return (
          <article key={card.title} className="rounded-md border border-stone-200 bg-white p-6 shadow-sm">
            <div className="flex h-11 w-11 items-center justify-center rounded-md bg-sage text-ink">
              <Icon aria-hidden="true" size={22} />
            </div>
            <h3 className="mt-5 text-xl font-semibold text-ink">{card.title}</h3>
            <p className="mt-3 leading-7 text-stone-650">{card.text}</p>
          </article>
        );
      })}
    </div>
  );
}
