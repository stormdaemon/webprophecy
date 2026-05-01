type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
};

export function SectionHeader({ eyebrow, title, text, align = "left" }: SectionHeaderProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-gold-dark">{eyebrow}</p>
      ) : null}
      <h2 className="mt-3 font-serif text-4xl font-semibold text-ink sm:text-5xl">{title}</h2>
      {text ? <p className="mt-4 text-lg leading-8 text-stone-650">{text}</p> : null}
    </div>
  );
}
