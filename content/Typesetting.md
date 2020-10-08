# Typesetting

Produire des documents avec un ordinateur est aujourd'hui une chose ordinaire, c'est pourtant un art
combinant esthétique et technicité et qui fourmi d'algorithmes sophistiqués afin de permettre à un programme
de produire automatique des document de qualité typographique.

## Césure

En fin de ligne si la place est insuffisantes, il est possible de couper un mot pour continuer l'écriture sur la ligne suivante.
Mais il n'est pas possible de couper les mots n'importe où, cette opération appelée césure ou *hyphenation* en anglais.
Comment écrire un algorithme qui de façon simple permet de trouver les positions de césures valides ?

GitHub: [Hyphenation](https://github.com/madbrain/line-breaking)

## Line breaking

Un paragraphe agréable à lire nécessite d'avoir un espacement entre les mots ni trop petit ni trop grand, pour cela il faut couper
le paragraphe en lignes aux positions qui permettes d'équilibrer ces espaces. Mais il existe un grand nombre de combinaisons possibles
pour couper un paragraphe (d'autant plus si la césure des mots est autorisée), comment trouver la combinaison qui produit les espacements
les plus équilibrés ?

GitHub: [Line Breaking](https://github.com/madbrain/line-breaking)

## Les polices de caractères TrueType

Pour visualiser ou imprimer un document il faut être capable de dessiner chaque caractère, pour un humain qui s'entraîne à
cela depuis son plus jeune âge la tâche est intuitive, mais pour un ordinateur tout cela ne reste qu'un paquet de pixels.
Le format de police de caractères TrueType permet de décrire la forme des caractères afin qu'un ordinateur puisse les dessiner
à l'écran ou les imprimer, mais même avec le meilleur écran du monde la résolution d'une imprimante, laser en particulier, sera
toujours bien supérieure. Vos fichiers TTF contiennent de véritables programmes pour aider les ordinateurs à produire des
caractères les plus lisibles possibles peut importe la résolution utilisée, ce processus s'appelle *hinting*.

GitHub: [True Type Viewer](https://github.com/madbrain/truetype-viewer)

## Half-Tone

La technique d'impression *half-tone* permet d'imprimer des images en utilisant de points de différentes tailles, les zones claires
sont composées de petits points très espacés et les zones foncées de gros points pouvant aller jusqu'à se toucher (observez à la loupe
votre quotidien préféré. Oui, en papier ça existe encore!). Ces différentes tailles de points permettent de générer des dégradés
de noir et blanc, ils peuvent même être utilisés pour imprimer des images en couleurs en utilisant la quadrichromie.

GitHub: [Half Tone](https://github.com/madbrain/halftone)

Application: [Half Tone](https://madbrain.github.io/halftone)

## PDF

Le format PDF (Portable Document Format) est le format de document le plus populaire permettant à la fois un affichage à l'écran et une
impression de qualité. Tout traitement de texte digne de ce nom permet de d'exporter le résultat de votre composition dans ce format, mais
il est en très simple de produire des fichiers PDF quasi manuellement.
