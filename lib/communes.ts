import source from "@/data/communes-66.json";

export interface Commune {
  nom: string;
  code: string;
  codesPostaux: string[];
}
export const communes: readonly Commune[] = source;
export const communeSource =
  "https://geo.api.gouv.fr/departements/66/communes?fields=nom,code,codesPostaux&format=json";

// Aucun chemin local n’est généré depuis cet annuaire : chaque future page
// nécessitera un contenu propre et une validation éditoriale avant indexation.
