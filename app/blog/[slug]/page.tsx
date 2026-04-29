import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { CTA } from "@/components/sections/CTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { blogArticles, getBlogArticle } from "@/content/blog";
import { siteConfig } from "@/content/site";
import { articleSchema } from "@/lib/blogSchema";

type BlogArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return blogArticles.map((article) => ({
    slug: article.slug
  }));
}

export async function generateMetadata({ params }: BlogArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getBlogArticle(slug);

  if (!article) {
    return {};
  }

  return {
    title: article.title,
    description: article.description,
    alternates: {
      canonical: `/blog/${article.slug}`
    },
    openGraph: {
      title: article.title,
      description: article.description,
      url: `/blog/${article.slug}`,
      siteName: siteConfig.name,
      locale: "fr_FR",
      type: "article",
      publishedTime: article.publishedAt
    }
  };
}

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
  const { slug } = await params;
  const article = getBlogArticle(slug);

  if (!article) {
    notFound();
  }

  return (
    <main>
      <JsonLd data={articleSchema(article)} />
      <article className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-ink underline">
            <ArrowLeft aria-hidden="true" size={16} /> Retour au blog
          </Link>
          <div className="mt-8">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-gold-dark">
              {article.category} · {article.readingTime}
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-ink sm:text-5xl">
              {article.title}
            </h1>
            <p className="mt-6 text-xl leading-8 text-stone-650">{article.description}</p>
          </div>

          <div className="mt-12 grid gap-10">
            {article.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-3xl font-semibold text-ink">{section.heading}</h2>
                <div className="mt-5 grid gap-5 text-lg leading-8 text-stone-650">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <section className="mt-12 rounded-md border border-stone-200 bg-white p-6">
            <h2 className="text-2xl font-semibold text-ink">Sources utilisees</h2>
            <ul className="mt-5 grid gap-3">
              {article.sources.map((source) => (
                <li key={source.url}>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-ink underline"
                  >
                    {source.label} <ArrowRight aria-hidden="true" size={15} />
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-10 rounded-md border border-gold/60 bg-sage p-6">
            <h2 className="text-2xl font-semibold text-ink">Vous voulez appliquer cela a votre paroisse ?</h2>
            <p className="mt-3 leading-7 text-stone-650">
              Web Prophecy peut auditer votre site, clarifier vos priorites et transformer vos
              pages en parcours utiles pour les fideles.
            </p>
            <Link href="/contact" className="mt-5 inline-flex rounded-md bg-ink px-5 py-3 text-sm font-semibold text-white hover:bg-stone-800">
              Demander un audit gratuit
            </Link>
          </section>
        </div>
      </article>
      <CTA title="Besoin d'un plan SEO catholique complet ?" />
    </main>
  );
}
