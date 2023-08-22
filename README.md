<div align="center">
<p><img src="https://rdm.sfo2.digitaloceanspaces.com/flightdeck/v3-flightdeck__logo--purple-haze-600x528.png" alt="Flightdeck Logo"></p>
<h1>Flightdeck</h1>
<h4>An opinionated starter project for <a href="http://jekyllrb.com/">Jekyll</a> that uses modern front-end tooling.</h4>

[![release](https://img.shields.io/github/release/ginfuru/Flightdeck.svg?style=for-the-badge&logo=github&logoColor=white&colorA=101119&colorB=6D57FF)](https://github.com/ginfuru/Flightdeck/releases/latest) [![jekyll](https://img.shields.io/badge/Jekyll-v3.36+-373277.svg?style=for-the-badge&logo=jekyll&logoColor=white&colorA=101119&colorB=7273D6)](https://github.com/jekyll/jekyll/releases/latest) [![license](https://img.shields.io/badge/License-MIT-373277.svg?style=for-the-badge&l&logoColor=white&colorA=101119&colorB=42557B)](https://github.com/ginfuru/Flightdeck/blob/master/LICENSE)

</div>

## What's inside the Flightdeck

- [Jekyll](https://jekyllrb.com)
- [Gulp](http://gulpjs.com/)
- [Sass](http://sass-lang.com/)
- [PostCSS](http://postcss.org/)
  - [Autoprefixer](https://github.com/postcss/autoprefixer)
  - [CSSNano](https://github.com/cssnano/cssnano)
- [Imagemin](https://github.com/imagemin/imagemin)
- [Browsersync](https://www.browsersync.io/)
- [Flightdeck Liftoff](https://github.com/flight-deck/Flightdeck-Liftoff) for deployments
  - includes support for `.env` (see: env_example)



## Prerequisites

To install this project, you'll need the following things installed on your machine.

1. [Jekyll](http://jekyllrb.com/) & [Bundler](https://bundler.io/) - `$ gem install jekyll bundler`
2. [NodeJS](http://nodejs.org) - use the installer, Homebrew, etc.
3. [pnpm](https://pnpm.io/) - Fast, disk space efficient package manager for Node

### Visual Studio Code Extensions (optional)

If you use [Visual Studio Code](https://code.visualstudio.com/) as your editor its highly recommended to includes these extensions to your mix:

- [Rome](https://marketplace.visualstudio.com/items?itemName=rome.rome)
- [Jekyll Snippets](https://marketplace.visualstudio.com/items?itemName=ginfuru.vscode-jekyll-snippets)
- [Liquid](https://marketplace.visualstudio.com/items?itemName=sissel.shopify-liquid)

## Install & Local Development

#### Quick Start

> NOTE: If you'd rather use `npm` or `yarn` – just replace the `pnpm` command and all should work.

To get started quickly, you'll need to follow the steps below:

1. Clone this repo

   ```shell
   git clone https://github.com/flight-deck/Flightdeck.git newFlightdeckProject
   ```

2. Navigate to newFlightdeckProject

   ```shell
   cd newFlightdeckProject
   pnpm install
   ```

3. Start the server

   ```shell
   pnpm start
   ```

4. Happy hacking!

## Usage

### Start Development

This will give you file watching, browser synchronization, auto-rebuild (hot reloading), CSS injection etc.

```shell
pnpm run start
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

There are several options for running the npm scripts that do specific tasks controlled by [Gulp](http://gulpjs.com/) or help you clean things.

```shell
Lifecycle scripts:
  preinstall
    bundle install --path vendor/bundle
  start
    bundle exec gulp

Commands available via "pnpm run":
  build
    bundle exec gulp build --jekyllEnv='production'
  format
    rome format .
  format:fix
    rome format . --write
  lint
    rome check .
  lint:fix
    rome check . --apply
  lint:fix:suggested
    rome check . --apply-suggested
  clean
    ./.scrub.sh site
  purge
    ./.scrub.sh purge
```


- `preinstall` is triggered while executing `pnpm` or `pnpm install` – this will install all the Ruby Gems needed to setup Jekyll.
- `pnpm start` triggers the default task giving everything you need for local development – file watching, browser synchronization, css injection, auto rebuild of Jekyll liquid templates/data/config files, etc.
- `pnpm build` triggers the build process and passes the environment variable for Jekyll to produce a production ready site.
- `pnpm clean` scrubs all `_site` specific files (see `.scrub.sh` >> `DEVFILES`)
- `pnpm purge`  scrubs all gems and node packages ( see `.scrub.sh` >> `NODEFILES & RUBYFILES`  )
  - note: you will need to re-run `pnpm install`.

## Configurations and Defaults

Remember this is just a Jekyll site using the Minima theme, so anything related to Jekyll or Liquid specific you'll need to reference the documentation for these projects:
- [ Jekyll ](https://jekyllrb.com/docs/)
- [ Liquid ](https://shopify.github.io/liquid/)
- [ Minima theme ](https://github.com/jekyll/minima)

### Flightdeck Manifest
You can change the any of the configuration options in `flightdeck.manifest.js` which affects the `gulpfile.js`.
