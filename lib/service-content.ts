export interface ServiceSection { title: string; paragraphs: string[]; points?: string[] }
export interface ServiceContent { title: string; description: string; intro: string; sections: ServiceSection[]; faq: { question: string; answer: string }[] }
export const serviceContent = {
  '/toiture': {
    title: 'Réparer aujourd’hui. Préserver pour demain.',
    description: 'Réparation, rénovation et pose de toiture à Perpignan et dans les Pyrénées-Orientales : diagnostic des infiltrations, remplacement de tuiles et réfection de couverture.',
    intro: 'Une infiltration, des tuiles déplacées ou une couverture qui vieillit appellent des réponses différentes. Élite Couverture 66 étudie votre toiture pour distinguer les réparations ponctuelles d’une réfection plus complète.',
    sections: [
      { title: 'Comprendre l’origine du désordre', paragraphs: ['Une trace d’humidité au plafond ne situe pas toujours le point d’entrée de l’eau. L’observation porte sur les tuiles, les faîtages, les rives, les solins et les raccords autour des ouvertures.', 'Avant toute intervention, précisez quand le problème apparaît, les pièces concernées et les travaux déjà réalisés. Ces informations orientent la recherche de fuite.'], points: ['Tuiles cassées, fissurées ou déplacées', 'Raccords et points singuliers à reprendre', 'Infiltrations après pluie ou épisode de vent'] },
      { title: 'Réparer ou remplacer la couverture', paragraphs: ['Une dégradation localisée peut permettre une réparation ciblée : remplacement de tuiles, reprise d’un raccord ou d’une partie du faîtage. La compatibilité avec les éléments conservés est examinée.', 'Lorsque les désordres sont étendus, la réfection peut comprendre la dépose de la couverture, l’examen du support et de la charpente, un écran sous toiture adapté, puis la pose du revêtement et de ses finitions. Le devis détaille les opérations retenues.'] },
      { title: 'Préparer une toiture neuve', paragraphs: ['Pour une construction ou une extension, le choix de la couverture tient compte de la pente, de l’exposition, de la ventilation et des prescriptions d’urbanisme. La charpente et l’isolation doivent être coordonnées avec l’ensemble du projet.', 'Tuiles en terre cuite et autres solutions de couverture sont étudiées selon le bâtiment. Les évacuations d’eau, les rives et les raccords de zinguerie font partie de cette réflexion.'] },
      { title: 'Après des intempéries', paragraphs: ['Ne montez pas sur la toiture pour constater les dégâts. Rassemblez les photos prises depuis un endroit sûr et signalez les infiltrations, éléments déplacés ou bruits inhabituels.', 'Contactez-nous pour étudier les mesures de réparation. Le périmètre des travaux, le délai d’intervention et les documents utiles à votre assureur seront précisés lors de l’échange.'] },
    ],
    faq: [
      { question: 'Faut-il refaire toute la toiture en cas de fuite ?', answer: 'Pas systématiquement. L’étendue des défauts et l’état du support permettent de déterminer si une réparation localisée est suffisante. Un nettoyage ne remplace pas une réparation.' },
      { question: 'Que faut-il prévoir avant une rénovation ?', answer: 'Rassemblez l’âge approximatif de la couverture, les interventions antérieures et les désordres constatés. Les éventuelles démarches d’urbanisme se vérifient auprès de la mairie selon les travaux envisagés.' },
    ],
  },
  '/zinguerie': {
    title: 'Les détails qui conduisent l’eau.',
    description: 'Travaux de zinguerie à Perpignan : entretien, réparation et remplacement de gouttières, raccords et évacuations d’eau pluviale dans les Pyrénées-Orientales.',
    intro: 'Discrète, la zinguerie accompagne la couverture et dirige l’eau vers les évacuations. Une gouttière qui déborde ou un raccord dégradé peut affecter les façades et l’intérieur de la maison.',
    sections: [
      { title: 'Observer le chemin de l’eau', paragraphs: ['Les gouttières, chéneaux et descentes recueillent les eaux de pluie. Leur état, leur pente et leurs fixations sont examinés pour repérer les obstructions, les fuites ou les déformations.', 'Une trace sur la façade, de l’eau qui déborde pendant la pluie ou une fixation desserrée justifient un contrôle. Le problème peut venir d’un encrassement comme d’un élément détérioré.'] },
      { title: 'Soigner les raccords', paragraphs: ['Les raccords entre la couverture et les cheminées, murs ou autres émergences sont des points de vigilance. Leur étanchéité dépend du bon assemblage des éléments et de leur adaptation au support.', 'Selon l’état constaté, l’intervention peut porter sur une réparation ciblée, le remplacement d’une section ou une reprise plus complète des évacuations. Les matériaux existants sont pris en compte pour éviter les incompatibilités.'] },
      { title: 'Entretenir et remplacer', paragraphs: ['Les feuilles et débris végétaux peuvent perturber l’écoulement. Le nettoyage des évacuations s’accompagne d’une observation des joints et fixations.', 'En rénovation, le dimensionnement et le tracé des évacuations doivent être étudiés avec la couverture. Le devis distingue les éléments conservés, réparés et remplacés.'] },
    ],
    faq: [
      { question: 'Une gouttière qui déborde doit-elle être remplacée ?', answer: 'Un débordement peut être lié à une obstruction, une pente inadaptée ou une descente insuffisante. Un examen permet de décider entre entretien, réparation et remplacement.' },
      { question: 'Peut-on vérifier la zinguerie pendant une rénovation ?', answer: 'Oui. Une rénovation de couverture permet d’examiner les raccords et les évacuations afin de coordonner les travaux nécessaires.' },
    ],
  },
  '/nettoyage': {
    title: 'Entretenir, avec la juste mesure.',
    description: 'Nettoyage et entretien de toiture à Perpignan et dans le département 66. Examen du support et méthode adaptée à l’état des tuiles et de la couverture.',
    intro: 'L’entretien d’une toiture commence par l’observation du support. Mousses, dépôts et débris ne se traitent pas de la même manière sur une tuile récente ou sur une couverture fragile.',
    sections: [
      { title: 'Examiner avant de nettoyer', paragraphs: ['L’état des tuiles, des joints, des raccords et des évacuations est observé avant de choisir une méthode. Les éléments cassés ou déplacés doivent être signalés : un nettoyage ne répare pas une infiltration.', 'L’exposition aux arbres, l’orientation des versants et les zones d’accumulation d’humidité aident à comprendre l’encrassement.'] },
      { title: 'Adapter la méthode au matériau', paragraphs: ['Le retrait des dépôts et le nettoyage sont adaptés à la résistance du support. Une pression trop forte peut endommager une tuile et ses finitions ; le choix de la méthode ne doit donc pas être automatique.', 'Si un traitement complémentaire est retenu, sa compatibilité, ses conditions d’application et les précautions pour les abords sont intégrées à la préparation du chantier.'] },
      { title: 'Préserver les évacuations', paragraphs: ['L’entretien concerne aussi les gouttières et les points où s’accumulent feuilles et débris. Leur dégagement contribue au bon écoulement de l’eau.', 'La fréquence d’entretien dépend de la végétation environnante et de l’évolution de la couverture. Un contrôle depuis le sol après un épisode venteux permet de repérer certains changements sans prendre de risque en hauteur.'] },
    ],
    faq: [
      { question: 'Un nettoyage suffit-il pour rendre le toit étanche ?', answer: 'Non. Les tuiles fissurées, les raccords dégradés et les défauts de couverture nécessitent des réparations distinctes. Le nettoyage ne doit pas masquer ces problèmes.' },
      { question: 'Quand prévoir un entretien ?', answer: 'L’accumulation de végétation, l’encrassement des évacuations et les changements visibles justifient un examen. La périodicité s’adapte au matériau et à l’environnement de la maison.' },
    ],
  },
  '/anti-mousse': {
    title: 'Comprendre le support. Choisir le traitement.',
    description: 'Démoussage et traitement de toiture à Perpignan : examen des tuiles, retrait des mousses et étude d’une protection adaptée au support.',
    intro: 'Les mousses et les lichens se développent selon l’exposition, l’humidité et l’environnement du toit. Leur présence appelle un entretien adapté, accompagné d’un examen de l’état de la couverture.',
    sections: [
      { title: 'Distinguer végétation et dégradation', paragraphs: ['Une couverture colonisée par les mousses peut aussi présenter des tuiles fissurées ou des évacuations encombrées. Ces défauts sont à distinguer du simple encrassement.', 'L’observation aide à choisir entre retrait mécanique adapté, nettoyage et traitement complémentaire. Elle permet également de repérer les réparations à prévoir séparément.'] },
      { title: 'Appliquer un traitement adapté', paragraphs: ['Un produit anti-mousse doit être compatible avec le matériau et appliqué selon ses prescriptions : dosage, météo et précautions pour les personnes, les végétaux et les eaux de ruissellement.', 'La disparition des traces peut être progressive selon la méthode et le produit retenus. Le résultat attendu et les conditions d’entretien sont précisés avant l’intervention.'] },
      { title: 'Étudier une protection hydrofuge', paragraphs: ['Une protection hydrofuge ne convient pas automatiquement à toutes les couvertures. L’état et la porosité du support, ses finitions et les recommandations du fabricant doivent être pris en compte.', 'Un traitement de surface ne remplace jamais une tuile endommagée ou un raccord défectueux. L’objectif est de choisir une intervention cohérente avec le toit, sans promettre de protection universelle.'] },
    ],
    faq: [
      { question: 'Le traitement empêche-t-il définitivement le retour des mousses ?', answer: 'L’évolution dépend de l’exposition et de l’environnement. Aucune absence définitive de repousse ne peut être promise ; la surveillance et l’entretien restent nécessaires.' },
      { question: 'Faut-il toujours appliquer un hydrofuge ?', answer: 'Non. La pertinence d’un hydrofuge s’étudie selon le matériau et son état. Un support dégradé nécessite d’abord une réparation ou un remplacement.' },
    ],
  },
  '/isolation': {
    title: 'Le confort commence sous le toit.',
    description: 'Isolation des combles à Perpignan et dans les Pyrénées-Orientales. Étude de l’isolant, de la ventilation et des contraintes de l’espace sous toiture.',
    intro: 'Isoler les combles demande de considérer le volume disponible, l’état de la toiture, la ventilation et l’usage des pièces. Le choix d’un isolant se fait avec ces contraintes, pour les combles perdus comme pour les espaces aménagés.',
    sections: [
      { title: 'Étudier l’espace sous toiture', paragraphs: ['L’accès aux combles, la présence d’humidité et l’état du support sont examinés avant de définir les travaux. Une fuite doit être traitée avant de recouvrir la zone concernée.', 'La continuité de l’isolation et le traitement des points singuliers sont importants : trappe d’accès, passages de réseaux et liaisons avec les parois.'] },
      { title: 'Choisir la technique de pose', paragraphs: ['Dans les combles perdus, la pose peut être envisagée sur le plancher selon la configuration. Pour des combles aménagés, les travaux se coordonnent avec la structure de la toiture et l’espace habitable.', 'Laine minérale, ouate de cellulose ou autres solutions sont étudiées selon les contraintes du projet. La résistance thermique, l’épaisseur, la gestion de la vapeur d’eau et la ventilation doivent être cohérentes.'] },
      { title: 'Coordonner isolation et couverture', paragraphs: ['La rénovation de la couverture peut être l’occasion de réfléchir à l’isolation et à l’écran sous toiture. Les travaux ne doivent pas bloquer les circulations d’air nécessaires.', 'Le devis précise la technique, les matériaux et les surfaces concernées. Aucune économie chiffrée ni aide financière n’est annoncée sans étude de votre situation et vérification des conditions applicables.'] },
    ],
    faq: [
      { question: 'Peut-on isoler si le toit présente une fuite ?', answer: 'L’origine de l’humidité doit d’abord être identifiée et traitée. Poser un isolant sur un support humide risque de compromettre les travaux.' },
      { question: 'Faut-il conserver une ventilation des combles ?', answer: 'La ventilation et la gestion de la vapeur d’eau doivent être étudiées avec l’isolation. La solution dépend de la constitution de la toiture et de l’usage des combles.' },
    ],
  },
} satisfies Record<string, ServiceContent>;
export type ServicePath = keyof typeof serviceContent;
