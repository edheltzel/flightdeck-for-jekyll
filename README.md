<div align="center">
<p><img src="https://d.pr/free/i/FDUErn+" alt="Flightdeck Logo"></p>
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



## Prerequisites

To install this project, you'll need the following things installed on your machine.

1. [Jekyll](http://jekyllrb.com/) & [Bundler](https://bundler.io/) - `$ gem install jekyll bundler`
2. [NodeJS](http://nodejs.org) - use the installer, Homebrew, etc.
3. ~~[Yarn](https://classic.yarnpkg.com/lang/en/) - a package manager for Node~~
3. [pnpm](https://pnpm.io/) - Fast, disk space efficient package manager for Node~~
4. [Cloudcannon](https://docs.cloudcannon.com/) - Give the client an interface to manage their site with a simple CMS. _**(Suggested for Client editing)**_
5. [rsync](https://rsync.samba.org/) - a very basic understand of rysnc if you choose to to deploy to a remote server.

> ### Optional Editor settings
>
> Although your editor is a very personal thing - we'd suggest that you'd consider using [Visual Studio Code](https://code.visualstudio.com/) with the [Jekyll Snippets Extension](https://marketplace.visualstudio.com/items?itemName=ginfuru.vscode-jekyll-snippets) - with the power of IntelliSense you'll get snippets to speed up your Jekyll work development as well as syntax highlighting for Liquid.

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
pnpm start
```

### Production Build

This will set the `JEKYLL_ENV` to `production` and use the production config file(s) set in `flightdeck.manifest.js` to override default setting.
You can easily deploy your site build with the command.

```shell
pnpm build
```

### Deploy

You can set your server deployment options inside of `.liftoffrc` If you wish to deploy after the build process has completed. If you'd like to do a dry-run of what is being deplyed you cans execute `pnpm deploy:test`

```shell
pnpm deploy
```

## Want more?

To display all available commands just run:

```shell
pnpm run
```

There are several options for running the npm scripts that do specific tasks controlled by [Gulp](http://gulpjs.com/) or help you clean things.

```shell
Lifecycle scripts included in flightdeck:
  preinstall
    bundle install --path vendor/bundle
  start
    bundle exec gulp

available via `npm run-script`:
  imagemin
    bundle exec gulp images
  jekyll
    bundle exec gulp jekyll
  sass
    bundle exec gulp css
  js
    bundle exec gulp js
  build
    bundle exec gulp build --jekyllEnv='production'
  deploy:test
    ./.liftoffrc ready
  deploy
    ./.liftoffrc ready go
  clean
    npm run clean:ruby && npm run clean:node
  clean:ruby
    rm -rf vendor/ .bundle/ Gemfile.lock
  clean:node
    rm -rf node_modules yarn.lock package-lock.json pnpm-lock.yaml
  clean:site
    rm -rf _site/ .jekyll-cache
  clean:all
    npm run clean:ruby && npm run clean:node && npm run clean:site
  purge
    npm run clean:all && yarn install
```


- `preinstall` is triggered while executing `pnpm` or `pnpm install` – this will install all the Ruby Gems needed to setup Jekyll.
- `pnpm start` triggers the default task giving everything you need for local development – file watching, browser synchronization, css injection, auto rebuild of Jekyll liquid templates/data/config files, etc.
- `pnpm imagemin` triggers ONLY the imagemin task for image optimizations and compressions.
  - please note that we have purposely left out `svgo` for a number of reason when using svg sprites.
- `pnpm jekyll` triggers ONLY the jekyll task for (re)building Jekyll templates, date, and config files
- `pnpm sass` triggers ONLY the css tasks to recompile all Scss, generate inline sourcemaps for CSS debugging, runs PostCSS for Autoprefixer and CSSNano (minification).
- `pnpm js` triggers ONLY the js task to concat and minify your Javascript files into a `bundle.js` or `bundle.min.js` for production builds
- `pnpm build` triggers the build process and passes the environment variable for Jekyll to produce a production ready site.
- `pnpm deploy:test` triggers [Liftoff prelauch check](https://github.com/flight-deck/Flightdeck-liftoff#usage) - which is configurable by editing `.liftoffrc`
- `pnpm deploy` triggers [Liftoff deployment](https://github.com/flight-deck/Flightdeck-liftoff#usage) - which is configurable by editing `.liftoffrc`
- `pnpm clean` scrubs your project and removes all ruby based files and node based files – so you can do a fresh `yarn install`
  - This leaves the `_site` directory alone
- `pnpm clean:ruby` scrubs your project of all ruby based files – `vendor/ .bundle/ Gemfile.lock`
- `pnpm clean:node` scrubs your project of all node based files – `node_modules yarn.lock package-lock.json pnpm-lock.yaml`
- `pnpm clean:site` scrubs your project of all Jekyll generated files – `_site/ .jekyll-cache`
- `pnpm purge`  scrubs your project and removes all ruby based files and node based files and also includes all the Jekyll generated files – so you can do a fresh `pnpm install`
- `yarn fresh ` does the same as `yarn purge` but includes the `yarn install ` after cleaning out files.
  - **PLEASE NOTE** if you use this specific command you will need to edit the `package.json` and change `pnpm install` to `yarn/npm install` if you are NOT using pnpm.


## Configurations and Defaults

You can change the configurations by editing `flightdeck.manifest.js`.

Remember this is just a Jekyll site using the Minima theme, so anything related to Jekyll or Liquid specific you'll need to reference the documentation for these projects:
- [ Jekyll ](https://jekyllrb.com/docs/)
- [ Liquid ](https://shopify.github.io/liquid/)
- [ Minima theme ](https://github.com/jekyll/minima)

- ### port

  default: `4000`
  options: integer

- ### assets

  The directory to gather all assets.

  default: `"./assets"`
  options: string
  example: `"./"` (directly under the theme directory)



- ### jekyll

  Jekyll settings.

  - #### config

    Jekyll config files.

    - ##### default

      The default Jekyll config file(s).

      default: `"_config.yml"`
      options: string (`"FILE1[,FILE2,...]"`)
      example: `"_config1.yml,_config2.yml"`

    - ##### development

      Development mode config file(s) to override default settings.

      default: `""`
      options: string (`"FILE1[,FILE2,...]"`)
      example: `"_config_development"`

    - ##### production

      Production mode config file(s) to override default settings.

      default: `""`
      options: string (`"FILE1[,FILE2,...]"`)
      example: `"_config_production"`

  - **dest**

    default: `_site`
    Note: you'll need to reference [Jekyll Docs](https://jekyllrb.com/docs/configuration/options/)
- ### sass

  Sass settings.

  - **src**

    default: `_sass/**/*.scss`

  - **dest**

    default: `css`

  - #### outputStyle

    The output style of Sass.

    default: `"compressed"`
    options: `"expanded"`, `"nested"`, `"compact"`, `"compressed"`

- ### js

  JavaScript settings.

  - #### src

    default: `js/**/*`

  - **dest**

    default: `js`

- #### imagemin

  - **src**

    default: `images/**/*`

  - **dest**

    default: `images`
    The destination directory of compressed image files for imagemin.

  options: string
  example: `img`

  - **interlaced**

    default: `false`

  - **mozjpeg**

    - **quality**

      default: `75`

    - **progressive**

      default: `true`

  - **optimizationLevel**

    default: `2`
