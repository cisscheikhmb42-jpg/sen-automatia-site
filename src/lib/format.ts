/** 100000 → "100 000 FCFA" (espaces insécables pour éviter les retours à la ligne) */
export function fcfa(montant: number) {
  const chiffres = montant.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return `${chiffres} FCFA`;
}
