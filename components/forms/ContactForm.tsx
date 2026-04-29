"use client";

import { useForm } from "@formspree/react";

const formId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID;

export function ContactForm() {
  const [state, handleSubmit] = useForm(formId || "missing-form-id");

  if (!formId) {
    return (
      <div className="rounded-md border border-amber-300 bg-amber-50 p-5 text-sm leading-7 text-amber-950">
        Le formulaire est prêt, mais la variable <code>NEXT_PUBLIC_FORMSPREE_FORM_ID</code> doit
        être renseignée pour activer l'envoi via Formspree.
      </div>
    );
  }

  if (state.succeeded) {
    return (
      <div className="rounded-md border border-emerald-200 bg-emerald-50 p-6 text-emerald-950">
        Merci, votre message a bien été envoyé. Web Prophecy vous répondra rapidement.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5" noValidate={false}>
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-ink">
          Nom et prénom
          <input
            required
            name="name"
            autoComplete="name"
            className="rounded-md border border-stone-300 px-4 py-3 text-base text-ink outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-ink">
          Adresse email
          <input
            required
            type="email"
            name="email"
            autoComplete="email"
            className="rounded-md border border-stone-300 px-4 py-3 text-base text-ink outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30"
          />
        </label>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-ink">
          Téléphone
          <input
            name="phone"
            autoComplete="tel"
            className="rounded-md border border-stone-300 px-4 py-3 text-base text-ink outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-ink">
          Paroisse ou structure
          <input
            required
            name="organization"
            className="rounded-md border border-stone-300 px-4 py-3 text-base text-ink outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30"
          />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-medium text-ink">
        Besoin principal
        <select
          required
          name="need"
          className="rounded-md border border-stone-300 px-4 py-3 text-base text-ink outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30"
        >
          <option value="">Sélectionner une option</option>
          <option>Création d'un site paroissial</option>
          <option>Refonte d'un ancien site</option>
          <option>Application ou PWA</option>
          <option>Formulaires et inscriptions</option>
          <option>Audit ou conseil</option>
        </select>
      </label>
      <label className="grid gap-2 text-sm font-medium text-ink">
        Message
        <textarea
          required
          name="message"
          rows={6}
          className="rounded-md border border-stone-300 px-4 py-3 text-base text-ink outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30"
        />
      </label>
      <label className="flex gap-3 text-sm leading-6 text-stone-650">
        <input required type="checkbox" name="rgpd_consent" value="oui" className="mt-1 h-4 w-4 rounded border-stone-300 text-ink" />
        <span>
          J'accepte que Web Prophecy utilise ces informations pour répondre à ma demande. Les
          données ne sont pas vendues à des tiers.
        </span>
      </label>
      {state.errors ? (
        <p className="text-sm text-red-700">L'envoi n'a pas abouti. Vérifiez les champs ou réessayez dans un instant.</p>
      ) : null}
      <button
        type="submit"
        disabled={state.submitting}
        className="w-full rounded-md bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-stone-800 disabled:cursor-not-allowed disabled:opacity-70 sm:w-fit"
      >
        {state.submitting ? "Envoi en cours..." : "Envoyer la demande"}
      </button>
    </form>
  );
}
