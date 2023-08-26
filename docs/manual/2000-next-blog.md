## Reference URL

* https://github.com/timlrx/tailwind-nextjs-starter-blog  
* https://github.com/timlrx/pliny  

## install packages

```bash
npm i pliny
npm i github-slugger
npm i @tailwindcss/typography
```

## switch theme

### install packages

```bash
npm i @tailwindcss/typography
```

*`apps/web/tailwind.config.js`*

* add darkMode
* add theme
* add plugins (@tailwindcss/typography)

*`apps/web/app/[lang]/layout.tsx`*

* add className in body emelent
* add ThemeProviders
* use ThemeSwitch to change theme
