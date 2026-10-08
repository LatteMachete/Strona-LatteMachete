# LatteMachete

Osobisty blog zbudowany w Astro. Treść to zwykłe pliki Markdown.

## Jak dodać nowy wpis

1. Utwórz plik w `src/content/posts/`, np. `moj-nowy-wpis.md`. Nazwa pliku staje się adresem: `/wpis/moj-nowy-wpis/`.
2. Na górze wklej nagłówek, pod nim pisz tekst:

```
---
title: "Tytuł wpisu"
date: 2026-10-20
category: Biznes
excerpt: "Dwa zdania, które pojawią się na liście wpisów."
minutes: 5
---
Tutaj treść wpisu. Akapity oddzielaj pustą linią.
```

Kategorie do wyboru: Biznes, Zdrowie, Społeczeństwo, Polityka, Codzienność.
Żeby ukryć wpis (szkic), dodaj w nagłówku `draft: true`.

3. Zapisz zmiany na GitHubie (commit). Cloudflare Pages sam zbuduje i opublikuje stronę w ok. minutę.

## Uruchomienie lokalnie (opcjonalnie)

```
npm install
npm run dev
```

## Ustawienia Cloudflare Pages

- Framework: Astro
- Build command: `npm run build`
- Output directory: `dist`
- Node: 22 lub nowszy
