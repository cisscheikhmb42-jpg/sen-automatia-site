const etapes = [
  {
    titre: "Audit gratuit",
    texte: "Nous analysons votre présence en ligne et vos tâches répétitives. Sans engagement.",
  },
  {
    titre: "Plan d'action",
    texte: "Vous recevez des recommandations claires, avec les prix, adaptées à votre budget.",
  },
  {
    titre: "Mise en place",
    texte: "Nous lançons vos campagnes, votre site ou votre assistant IA, rapidement.",
  },
  {
    titre: "Résultats suivis",
    texte: "Un rapport chaque mois pour mesurer les clients gagnés et le temps économisé.",
  },
];

export function Process({ sombre = false }: { sombre?: boolean }) {
  return (
    <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {etapes.map((e, i) => (
        <li
          key={e.titre}
          className={`rounded-3xl p-6 ${sombre ? "border border-white/10 bg-white/5" : "border border-encre/10 bg-white"}`}
        >
          <span className="font-titre text-4xl font-extrabold texte-degrade">0{i + 1}</span>
          <h3 className="mt-3 text-xl font-bold">{e.titre}</h3>
          <p className={`mt-2 ${sombre ? "text-white/70" : "text-encre/70"}`}>{e.texte}</p>
        </li>
      ))}
    </ol>
  );
}
