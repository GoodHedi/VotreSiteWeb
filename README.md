# votresiteweb

Section hero plein écran et responsive (React + TypeScript + Vite + Tailwind CSS v4).

## Démarrer

```bash
npm install
npm run dev      # serveur de développement
npm run build    # build de production dans dist/
npm run preview  # prévisualiser le build
```

## Structure

```
src/
  app/
    App.tsx                     # cadre, vidéo de fond, contenu hero
    components/
      Navbar.tsx                # navbar flottante + menu hamburger mobile
      DashboardPreview.tsx      # aperçu du dashboard (3 cartes)
      Gauge.tsx                 # jauge réutilisable (40 graduations sur 180°)
  styles/
    fonts.css                   # Inter + Instrument Serif (Google Fonts)
    index.css                   # Tailwind
```
