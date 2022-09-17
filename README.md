<p align="center">
  <img alt="logo" src="./src/images/logo.svg" width="60" />
</p>
<h1 align="center">
  my-site
</h1>

![my-site status](https://img.shields.io/website?down_color=red&down_message=offline&label=my-site&up_message=online&url=https%3A%2F%2Fmanpreetbhatti.com%2F)

![my-site release](https://img.shields.io/github/release/Manpreet-Bhatti/my-site-2.svg?style=popout-square) ![my-site issues](https://img.shields.io/github/issues/Manpreet-Bhatti/my-site-2.svg?style=popout-square) ![my-site top language](https://img.shields.io/github/languages/top/Manpreet-Bhatti/my-site-2.svg?style=popout-square) ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![Gatsby](https://img.shields.io/badge/Gatsby-663399?style=for-the-badge&logo=gatsby&logoColor=white) ![my-site last commit](https://img.shields.io/github/last-commit/Manpreet-Bhatti/my-site-2.svg?style=popout-square) ![my-site license](https://img.shields.io/github/license/Manpreet-Bhatti/my-site-2.svg?style=popout-square) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

### Personal website of Manpreet Bhatti

Check out this [live demo](https://manpreetbhatti.com/) to see my-site in action.

# Getting started

## Let's Install

Install modules

```shell
cd my-site
npm install
```

## Let's Build

Start a development server

```shell
npm run dev
```

or
Create and start a production build

```shell
npm run build
npm run start
```

## Let's Customize

> Fork this project for your customization ideas!
>
> Tip: You should see if these changes work in the development server before building and starting.

### Fonts

To add custom fonts, make sure to import them into `./components/fonts.js` and change `./components/logo.js` and `./lib/theme.js` accordingly.

### Colours

To change colours (or add your own), edit `./lib/theme.js` to your liking. There are many instances where colours weren't used from the theme so keep an eye out (colours will be more centralized in the near future)!

### Skills

To showcase your skills, edit `./src/sections/Skills/data.js` with your own expertise!

### Socials

Let others know where they can find you by editing `./pages/index.js` and add your own contact links near the end.

## Updating

Although during the development server live changes will be done, I recommend stopping the server, running `npm run clean` to clear cache, and rerunning `npm run start`.

Once everything looks fine, once again run `npm run clean` to prepare yourself for a production build.

## Let's Publish

There are many great hosting platforms that will have services to showcase your static websites. I used Next.js for this website which goes perfecty with [Vercel](https://vercel.com/); I advise you use it!

## License

![my-site license](https://img.shields.io/github/license/Manpreet-Bhatti/my-site-2.svg?style=popout-square)
