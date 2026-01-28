# 🏆 Sportak.info

Sportovní web s novinkami z Premier League. **Vytvořil Míša (9 let)** s pomocí Claude AI.

## 🚀 Jak spustit web

### 1. Nainstaluj závislosti
```bash
npm install
```

### 2. Spusť vývojový server
```bash
npm run dev
```

### 3. Otevři v prohlížeči
Jdi na [http://localhost:3000](http://localhost:3000)

---

## 📁 Struktura projektu

```
sportak-info/
├── src/
│   ├── app/                    # Stránky webu
│   │   ├── page.tsx            # Hlavní stránka
│   │   ├── admin/              # Admin rozhraní
│   │   └── tymy/[id]/          # Detail týmu
│   ├── components/             # Komponenty
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── TeamCard.tsx
│   │   ├── PlayerCard.tsx
│   │   └── ...
│   └── data/
│       └── teams.ts            # ⭐ DATA - zde přidáváš novinky a týmy!
```

---

## ✍️ Jak přidat novinku

1. Otevři soubor `src/data/teams.ts`
2. Najdi pole `news`
3. Přidej nový objekt:

```typescript
{
  id: 'novinka-4',              // unikátní ID
  title: 'Tvůj nadpis',         // nadpis novinky
  content: 'Text článku...',    // obsah
  tag: 'NOVINKA',               // štítek (NOVINKA, TRANSFER, ZÁPAS...)
  emoji: '⚽',                  // emoji pro obrázek
  date: 'Dnes',                 // datum
  featured: false,              // true = velká novinka
},
```

4. Ulož soubor - web se automaticky aktualizuje!

---

## ⚽ Jak přidat tým nebo hráče

Stejně jako novinky - uprav soubor `src/data/teams.ts`.

### Přidat hráče do týmu:
```typescript
{
  id: 'novy-hrac',
  name: 'Příjmení',
  fullName: 'Celé Jméno',
  position: 'Útočník',
  photoUrl: 'https://...',
  matches: 10,
  goals: 5,
  assists: 3,
  yellowCards: 1,
  minutes: 900,
},
```

---

## 🌐 Jak nahrát na internet (Vercel)

### Krok 1: Vytvoř GitHub repozitář
1. Jdi na [github.com](https://github.com)
2. Klikni na "New repository"
3. Pojmenuj ho "sportak-info"
4. Klikni "Create repository"

### Krok 2: Nahraj kód na GitHub
```bash
git init
git add .
git commit -m "První verze Sportak.info"
git branch -M main
git remote add origin https://github.com/TVOJE-JMENO/sportak-info.git
git push -u origin main
```

### Krok 3: Propoj s Vercel
1. Jdi na [vercel.com](https://vercel.com)
2. Přihlas se přes GitHub
3. Klikni "Import Project"
4. Vyber repozitář "sportak-info"
5. Klikni "Deploy"

**Hotovo!** Tvůj web bude na adrese typu: `sportak-info.vercel.app`

---

## 🎨 Barvy a design

- **Tmavé pozadí**: `#0f0f1a` až `#16213e`
- **Modrá**: `#00d4ff`
- **Fialová**: `#7c3aed`

---

## 📞 Pomoc

Pokud potřebuješ pomoct, zeptej se Claude AI! 🤖

---

Vytvořeno s ❤️ Míšou a Claude AI
