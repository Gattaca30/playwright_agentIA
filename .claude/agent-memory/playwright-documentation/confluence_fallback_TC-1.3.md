---
name: Confluence Fallback TC-1.3
description: Sauvegarde locale de la page Confluence pour TC-1.3 — Le sous-menu QA Courses s'affiche au clic
type: project
---

# Navigation Header et Menu Mobile — Documentation des Tests Playwright — 2026-03-13

## Vue d'ensemble

| Champ | Valeur |
|-------|--------|
| Fonctionnalité | Navigation Header et Menu Mobile |
| Suite de tests | Section 1.3 — QA Courses dropdown/submenu |
| Identifiant | TC-1.3 |
| Framework | Playwright |
| Date de création | 2026-03-13 |
| Référence Jira | TEST-3 — https://fifalianaangela.atlassian.net/browse/TEST-3 |
| Statut | Prêt pour revue |

---

## Objectif

Vérifier que le sous-menu "QA Courses" s'affiche correctement lorsqu'un utilisateur clique sur le lien "QA Courses" dans la barre de navigation principale de l'application Codemify, et que l'URL est mise à jour en conséquence.

---

## Périmètre

Ce cas de test couvre l'interaction utilisateur avec le lien "QA Courses" dans le header de navigation de Codemify. Il valide l'apparition du sous-menu (dropdown) ainsi que la mise à jour de l'URL avec le fragment `#submenu:QAcourses`.

---

## Environnement de test

| Paramètre | Valeur |
|-----------|--------|
| Application | Codemify |
| URL de base | https://codemify.com |
| Environnement | Production |
| Framework | Playwright |
| Fichier de test | `tests/header/qa-courses-submenu.spec.ts` |
| Fichier seed | `tests/seed.spec.ts` |

---

## Préconditions

1. L'application Codemify est accessible à l'adresse https://codemify.com.
2. La page d'accueil est entièrement chargée et la barre de navigation est visible.
3. Aucune session utilisateur active n'est requise (accès public).
4. Le navigateur est initialisé via Playwright avec le fichier seed `tests/seed.spec.ts`.
5. Le lien "QA Courses" est visible dans le menu de navigation principal.

---

## Cas de test

### TC-1.3 — Le sous-menu QA Courses s'affiche au clic

**Objectif :** Vérifier que le clic sur le lien "QA Courses" dans le header déclenche l'affichage du sous-menu de navigation et met à jour l'URL.

**Priorité :** Haute

**Type :** Fonctionnel — Navigation

---

### Tableau des étapes

| N° | Action | Élément cible | Données | Résultat attendu |
|----|--------|--------------|---------|-----------------|
| 1 | Naviguer vers | https://codemify.com | — | La page d'accueil de Codemify est chargée. La barre de navigation est visible avec les liens du menu. |
| 2 | Cliquer sur | Lien "QA Courses" dans la barre de navigation principale | — | Un sous-menu ou une section de navigation dédiée aux cours QA s'affiche à l'écran. |
| 3 | Vérifier | L'affichage du sous-menu | — | Le sous-menu ou la section "QA Courses" est visible et accessible à l'utilisateur. |
| 4 | Vérifier | L'URL dans la barre d'adresse du navigateur | — | L'URL contient le fragment `#submenu:QAcourses` (ex. : `https://codemify.com#submenu:QAcourses`). |

---

### Résultats attendus (récapitulatif)

- Le sous-menu ou la section de navigation "QA Courses" apparaît suite au clic.
- L'URL du navigateur est mise à jour et contient le fragment `#submenu:QAcourses`.
- Aucune erreur JavaScript ou réseau n'est déclenchée lors de l'interaction.

---

## Données de test

| Élément | Valeur |
|---------|--------|
| URL de départ | https://codemify.com |
| Libellé du lien | QA Courses |
| Fragment URL attendu | `#submenu:QAcourses` |

---

## Limitations connues / Hors périmètre

- Ce cas de test ne vérifie pas le contenu détaillé du sous-menu (liste des cours, prix, etc.).
- Les tests de navigation mobile (menu hamburger) sont couverts dans une autre section.
- La validation du comportement sur plusieurs navigateurs est hors périmètre pour cette itération.

---

## Référence fichier

- **Fichier de test Playwright** : `tests/header/qa-courses-submenu.spec.ts`
- **Fichier seed** : `tests/seed.spec.ts`
- **Section du plan de test** : 1.3

---

## Historique des révisions

| Version | Date | Auteur | Modifications |
|---------|------|--------|--------------|
| 1.0 | 2026-03-13 | playwright-documentation agent | Création initiale |
