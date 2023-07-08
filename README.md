<div align="center">
<p><img src="https://rdm.sfo2.digitaloceanspaces.com/flightdeck/v3-flightdeck__logo--purple-haze-600x528.png" alt="Flightdeck Logo"></p>
<h1>Flightdeck</h1>
<h4>An opinionated Jamstack starter project for <a href="http://jekyllrb.com/">Jekyll</a> with <a href="https://parceljs.org/">ParcelJS v2</a>.</h4>

[![release](https://img.shields.io/github/release/edheltzel/Flightdeck-for-Jekyll.svg?style=for-the-badge&logo=github&logoColor=white&colorA=101119&colorB=6D57FF)](https://github.com/edheltzel/Flightdeck-for-Jekyll/releases/latest) [![jekyll](https://img.shields.io/badge/Jekyll-v3.36+-373277.svg?style=for-the-badge&logo=jekyll&logoColor=white&colorA=101119&colorB=7273D6)](https://github.com/jekyll/jekyll/releases/latest) [![license](https://img.shields.io/badge/License-MIT-373277.svg?style=for-the-badge&l&logoColor=white&colorA=101119&colorB=42557B)](https://github.com/edheltzel/Flightdeck-for-Jekyll/blob/master/LICENSE)

</div>

> **Note:** This is an **updated version** of the legacy workflow for [Flightdeck for Jekyll](https://github.com/edheltzel/Flightdeck-for-Jekyll-with-Gulp). The Parcel version is the recommended workflow going forward, unless you want to use [Eleveny](https://www.11ty.dev/) as your static site generator, then check out [Flightdeck](https://edheltzel/flightdeck) instead.
## Prerequisites

To install this project, you'll need the following things installed on your machine.

1. [Jekyll](http://jekyllrb.com/) & [Bundler](https://bundler.io/) - `$ gem install jekyll bundler` (We assume that you have Ruby installed already)
2. [NodeJS](http://nodejs.org) & [PNPM](https://pnpm.io/) - use the installer, Homebrew, etc.


> ### Optional Editor settings
>
> Although your editor is a very personal thing - we'd suggest that you'd consider using [Visual Studio Code](https://code.visualstudio.com/) with the [Jekyll Snippets Extension](https://marketplace.visualstudio.com/items?itemName=edheltzel.vscode-jekyll-snippets) - with the power of IntelliSense you'll get snippets to speed up your Jekyll development as well as syntax highlighting for Liquid.

## Local Development & Installation

1. Clone this repo, or download it into a directory of your choice.

   ```shell
   git clone https://github.com/edheltzel/Flightdeck-for-Jekyll.git flightdeck
   ```

2. Inside the directory, run `pnpm install` -> **FYI** you can use `yarn` or `npm` in place of `pnpm`

```shell
cd flightdeck
pnpm install
```
## Usage

**Note:** you can replace `pnpm` with `yarn` or `npm` in the following commands.

### Start Development

This will give you file watching, browser synchronisation, auto-rebuild, CSS injecting etc.

```shell
pnpm start
```

### Production Build

This will set the `JEKYLL_ENV` to `production` and use the production config file(s) set in `flightdeck.manifest.js` to override default setting.
You can easily deploy your site build with the command.

```shell
pnpm run build
```

## Want more?

To display all available commands just run:

```shell
pnpm run
```

### Jekyll

As this is just a Jekyll project, you can use any of the commands listed in their [docs](https://jekyllrb.com/docs/usage/)

## What's inside the Flightdeck

- [ParcelJS v2](https://pnpm.io/)
  - [Sass](http://sass-lang.com/)
- [Jampack](https://jampack.divriots.com/)
