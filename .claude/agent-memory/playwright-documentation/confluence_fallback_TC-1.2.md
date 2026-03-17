---
name: Confluence Fallback — TC-1.2 Liens de navigation
description: Contenu de page Confluence complet pour TC-1.2, stocké en fallback car Confluence n'est pas activé sur l'instance Atlassian
type: project
---

# Navigation Header et Menu Mobile — Documentation des Tests Playwright — 2026-03-13

## Vue d'ensemble

| Champ | Valeur |
|-------|--------|
| Fonctionnalité | Navigation Header et Menu Mobile |
| Suite de tests | Section 1.2 — Les liens de navigation redirigent vers les bonnes pages |
| Application | Codemify (https://codemify.com) |
| Framework | Playwright |
| Date de création | 2026-03-13 |
| Référence Jira | [TEST-2](https://fifalianaangela.atlassian.net/browse/TEST-2) |
| Statut | Brouillon / En attente de validation |

---

## Périmètre

Cette suite de tests vérifie que chaque lien du menu de navigation principal de Codemify redirige correctement l'utilisateur vers la page attendue. La validation repose sur le contrôle du segment d'URL après chaque clic. Il s'agit d'un test de type smoke, exécuté à chaque build pour détecter toute régression dans le comportement de navigation globale.

---

## Environnement de test

- **Navigateur(s)** : Chromium (navigateur Playwright par défaut)
- **URL de base** : https://codemify.com
- **Environnement** : Production (accessible publiquement)
- **Fenêtre d'affichage** : Desktop standard

---

## Préconditions

1. L'application Codemify est accessible à l'adresse https://codemify.com
2. Aucune authentification n'est requise pour ce test
3. Le test s'exécute sur un navigateur supporté avec une fenêtre de taille standard (desktop)

---

## Cas de test

---

### Cas de test TC-1.2 : Les liens de navigation redirigent vers les bonnes pages

**Objectif** : Vérifier que chaque lien du menu de navigation principal de Codemify redirige l'utilisateur vers la page correcte, en contrôlant l'URL de destination après chaque clic.

**Préconditions** :
- Le site Codemify est accessible à https://codemify.com
- Aucune connexion n'est nécessaire

**Données de test** : Aucune donnée spécifique n'est requise. Le test opère sur les éléments de navigation publiquement visibles.

**Étapes** :

| Étape | Action | Résultat attendu |
|-------|--------|-----------------|
| 1 | Ouvrir un navigateur et accéder à https://codemify.com | La page d'accueil se charge correctement et le menu de navigation est visible |
| 2 | Cliquer sur le lien **"About us"** dans le menu de navigation | L'utilisateur est redirigé vers la page À propos ; l'URL contient **/about-us** |
| 3 | Revenir à la page d'accueil en naviguant vers https://codemify.com | La page d'accueil se recharge correctement |
| 4 | Cliquer sur le lien **"Call Experts"** dans le menu de navigation | L'utilisateur est redirigé vers la page Appel Experts ; l'URL contient **/meeting_expert** |
| 5 | Revenir à la page d'accueil en naviguant vers https://codemify.com | La page d'accueil se recharge correctement |
| 6 | Cliquer sur le lien **"Reviews"** dans le menu de navigation | L'utilisateur est redirigé vers la page Témoignages ; l'URL contient **/testimonials** |

**Résultat attendu** : Chaque lien de navigation cliqué redirige l'utilisateur vers la bonne page, confirmée par la présence du segment d'URL attendu :
- "About us" → URL contient `/about-us`
- "Call Experts" → URL contient `/meeting_expert`
- "Reviews" → URL contient `/testimonials`

**Étiquettes / Labels** : `playwright`, `test-automatisé`, `navigation-header`, `test-de-navigation`, `smoke-test`

**Priorité** : Haute

---

## Données de test

Aucune donnée de test spécifique n'est requise pour cette suite. Toutes les assertions ciblent des liens de navigation publiquement visibles sur la page d'accueil de Codemify.

---

## Limitations connues / Hors périmètre

- Le contenu des pages de destination n'est pas validé (seule l'URL est vérifiée)
- Le comportement du menu sur mobile n'est pas couvert dans cette section
- L'apparence visuelle des liens (couleurs, styles, mise en page) n'est pas vérifiée
- Les liens **"QA Courses"**, **"AI Courses"**, **"Offers"** et **"Try intro week"** ne sont pas testés dans cette section

---

## Référence du fichier de test

| Fichier | Rôle |
|---------|------|
| `tests/header/navigation-links.spec.ts` | Spécification principale du test pour cette suite |
| `tests/seed.spec.ts` | Fichier de configuration/initialisation exécuté avant les tests |

---

## Historique des révisions

| Version | Date | Auteur | Modifications |
|---------|------|--------|---------------|
| 1.0 | 2026-03-13 | playwright-documentation agent | Création initiale |
