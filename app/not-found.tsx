import { LinkButton } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
      <p className="eyebrow mb-4">Erreur 404</p>
      <h1 className="font-display text-5xl font-bold text-stone-800 mb-4">
        Page introuvable
      </h1>
      <p className="text-stone-500 text-lg max-w-md mb-8">
        Cette page n&apos;existe pas ou a été déplacée. Retournez à l&apos;accueil pour continuer votre recherche.
      </p>
      <div className="flex gap-4 flex-wrap justify-center">
        <LinkButton href="/" size="lg">Retour à l&apos;accueil</LinkButton>
        <LinkButton href="/appartements" variant="ghost" size="lg">Voir les appartements</LinkButton>
      </div>
    </div>
  );
}
