# Rapport sur le Choix de la Structure de Données pour la Gestion des Trames Réseau

## Contexte

Le choix d'une structure de données adéquate est crucial pour la gestion efficace des trames réseau dans un projet logiciel. Nous avons analysé plusieurs structures de données en Rust (`Vec`, `HashSet`, `HashMap`) et les bases de données (BDD) pour déterminer la plus appropriée selon les besoins spécifiques du projet.

## Besoins du Projet

Le projet nécessite une structure de données pour stocker des trames réseau avec les exigences suivantes :
1. **Unicité des Trames** : Chaque trame doit être unique dans la collection.
2. **Comptage des Occurrences** : Il faut compter le nombre de fois qu'une trame apparaît.
3. **Gestion de Grandes Quantités** : La structure doit gérer un volume potentiellement élevé de trames.

## Analyse des Structures de Données

### Vec

- **Structure** : Tableau dynamique.
- **Unicité** : Ne garantit pas l'unicité des éléments.
- **Performance** : Bonne pour l'ajout et l'accès par index, mais moins adaptée pour le comptage des occurrences.

### HashSet

- **Structure** : Ensemble sans doublons.
- **Unicité** : Garantit l'unicité des éléments.
- **Performance** : Excellente pour vérifier l'existence, mais ne compte pas les occurrences.

### HashMap

- **Structure** : Paires clé-valeur.
- **Unicité** : Les clés sont uniques.
- **Performance** : Permet de compter les occurrences et garantit l'unicité des trames.

## Tableau Comparatif des Structures de Données

| Caractéristique      | Vec                                               | HashSet                                      | HashMap                                      | Base de données (BDD)                                       |
|----------------------|---------------------------------------------------|----------------------------------------------|----------------------------------------------|--------------------------------------------------------------|
| **Structure**        | Tableau dynamique                                 | Ensemble (set) sans doublons                 | Paires clé-valeur                            | Collections de tables avec des relations                    |
| **Ordre**            | Préserve l'ordre des éléments                     | Ne préserve pas l'ordre des éléments         | Ne préserve pas l'ordre des éléments         | Dépend de la conception et des requêtes                     |
| **Accès aux éléments**| Par index                                         | Par valeur (existence)                       | Par clé                                      | Par requêtes SQL ou équivalent                              |
| **Performance**      | Rapide pour ajouter/retirer à la fin              | Rapide pour vérifier l'existence             | Rapide pour ajouter, retrouver, supprimer    | Varie selon la conception, les index, et la charge          |
| **Unicité**          | Permet les doublons                               | Unicité des éléments                         | Unicité des clés                             | Contraintes d'unicité selon la conception de la table       |
| **Utilisation**      | Quand l'ordre et l'accès rapide par index importent| Quand l'unicité et l'appartenance importent  | Quand on associe des valeurs à des clés uniques | Quand la persistance, l'analyse de données, et les requêtes complexes sont nécessaires |
| **Capacité**         | Limitée par la mémoire                            | Limitée par la mémoire                       | Limitée par la mémoire                       | Peut gérer de grandes quantités de données                  |
| **Persistance**      | Non persistant (sauf si sauvegardé explicitement) | Non persistant (sauf si sauvegardé explicitement) | Non persistant (sauf si sauvegardé explicitement) | Persistant (sauvegarde automatique)                        |
| **Concurrence**      | Gestion manuelle nécessaire                       | Gestion manuelle nécessaire                  | Gestion manuelle nécessaire                  | Support intégré dans la plupart des systèmes                |
| **Sécurité**         | Dépend de l'implémentation                        | Dépend de l'implémentation                   | Dépend de l'implémentation                   | Fonctionnalités avancées (authentification, chiffrement, etc.) |
| **Complexité**       | Simple                                            | Moyennement complexe                         | Moyennement complexe                         | Complexe (nécessite des connaissances en bases de données)  |

### Base de Données (BDD)

- **Structure** : Collections de tables avec des relations.
- **Unicité**

 : Possibilité de contraintes d'unicité.
- **Performance** : Excellente pour gérer de grandes quantités, avec des fonctionnalités avancées pour la requête et la persistance des données.

## Comparaison des Complexités Temporelles

| Opération             | Vec                         | HashSet                  | HashMap                  | Base de données (BDD)                 |
|-----------------------|-----------------------------|--------------------------|--------------------------|---------------------------------------|
| **Ajout**             | O(1) amorti pour l'ajout en fin; O(n) pour l'insertion | O(1) amorti              | O(1) amorti                           | Varie selon l'implémentation, souvent O(log n) pour l'insertion avec index |
| **Recherche**         | O(1) pour l'accès par index; O(n) pour la recherche par valeur | O(1) amorti pour vérifier l'existence | O(1) amorti pour l'accès par clé      | O(log n) pour les requêtes avec index; peut être plus lent sans index |
| **Suppression**       | O(n) pour la suppression (dépend de la position) | O(1) amorti              | O(1) amorti pour la suppression par clé | Varie, souvent O(log n) avec index |
| **Parcours/Itération**| O(n)                        | O(n)                     | O(n)                     | Varie selon la taille de la donnée retournée |
| **Édition**           | O(1) pour l'édition par index; O(n) si recherche nécessaire | Non applicable (les éléments du HashSet ne sont pas éditables directement) | O(1) amorti pour l'édition d'une valeur associée à une clé | Varie, souvent O(log n) pour l'édition avec index; peut être plus lent sans index |

## Conclusion

Le `HashMap` en Rust est identifié comme la structure de données la plus appropriée pour ce projet. Il offre l'unicité des clés (trames), permet un comptage efficace des occurrences, et gère bien les grandes quantités de données. Pour des volumes extrêmement élevés ou des besoins de persistance et d'analyse de données complexes, une base de données pourrait être envisagée.

## Recommandations

- Utiliser `HashMap` pour les phases initiales du projet.
- Si le volume de données augmente considérablement, envisager l'adoption d'une base de données.
- Évaluer régulièrement les performances et ajuster la structure de données en fonction de l'évolution des besoins du projet.