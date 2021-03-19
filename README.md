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
3. [Yarn](https://classic.yarnpkg.com/lang/en/) - a package manager for Node 
4. [Cloudcanon](https://docs.cloudcannon.com/) - Give the client an interface to manage their site with a simple CMS. _**(Suggested for Client editing)**_
5. [rsync](https://rsync.samba.org/) - a very basic understand of rysnc if you choose to to deploy to a remote server. 

> ### Optional Editor settings
>
> Although your editor is a very personal thing - we'd suggest that you'd consider using [Visual Studio Code](https://code.visualstudio.com/) with the [Jekyll Snippets Extension](https://marketplace.visualstudio.com/items?itemName=ginfuru.vscode-jekyll-snippets) - with the power of IntelliSense you'll get snippets to speed up your Jekyll work development as well as syntax highlighting for Liquid.

## Install & Local Development

#### Quick Start

> NOTE: If you'd rather use `npm` over `yarn` – just replace the `yarn` commands with `npm`

To get started quickly, you'll need to follow the steps below:

1. Clone this repo 

   ```shell
   git clone https://github.com/flight-deck/Flightdeck.git YOUR_PROJECT_NAME
   ```

2. Navigate to YOUR_PROJECT_NAME

   ```shell
   cd YOUR_PROJECT_NAME
   yarn install
   ```

3. Start the server

   ```shell
   yarn start
   ```

4. Happy hacking!




## Usage

### Start Development

This will give you file watching, browser synchronisation, auto-rebuild, CSS injecting etc.

```shell
yarn start
```

### Production Build

This will set the `JEKYLL_ENV` to `production` and use the production config file(s) set in `flightdeck.manifest.js` to override default setting.
You can easily deploy your site build with the command.

```shell
yarn build
```

### Deploy

You can set your server deployment options inside of `.liftoffrc` If you wish to deploy after the build process has completed. If you'd like to do a dry-run of what is being deplyed you cans execute `yarn deploy:test`

```shell
yarn deploy
```

## Want more?

To display all available commands just run:

```shell
yarn run
```
OR 

```sheel
npm run
```



There are several options for running the npm scripts that do specific tasks controlled by [Gulp](http://gulpjs.com/) or help you clean things.

```json
  "scripts": {
    "preinstall": "bundle install --path vendor/bundle",
    "start": "bundle exec gulp",
    "imagemin": "bundle exec gulp images",
    "jekyll": "bundle exec gulp jekyll",
    "sass": "bundle exec gulp css",
    "js": "bundle exec gulp js",
    "build": "bundle exec gulp build --jekyllEnv='production'",
    "deploy:test": "./.liftoffrc ready",
    "deploy": "./.liftoffrc ready go",
    "clean": "npm run clean:ruby & npm run clean:node",
    "clean:ruby": "rm -rf vendor/ .bundle/ Gemfile.lock",
    "clean:node": "rm -rf node_modules yarn.lock package-lock.json",
    "clean:site": "rm -rf _site/ .jekyll-cache",
    "purge": "npm run clean:ruby & npm run clean:node & npm run clean:site",
    "fresh": "npm run clean:ruby & npm run clean:node & npm run clean:site && yarn run install"
  },
```

- `preinstall` is triggered while executing `yarn` or `yarn install` – this will install all the Ruby Gems needed to setup Jekyll.
- `yarn start` triggers the default task giving everything you need for local development – file watching, browser synchronisation, css injection, auto rebuild of Jekyll liquid templates/data/config files, etc.
- `yarn imagemin` triggers ONLY the imagemin task for image optimizations and compressions.
  - please note that we have purposely left out `svgo` for a number of reason when using svg sprites.
- `yarn jekyll` triggers ONLY the jekyll task for (re)building Jekyll templates, date, and config files
- `yarn sass` triggers ONLY the css tasks to recompile all Scss, generate inline sourcemaps for CSS debugging, runs PostCSS for Autoprefixer and CSSNano (minification).
- `yarn js` triggers ONLY the js task to concat and minify your Javascript files into a `bundle.js` or `bundle.min.js` for production builds
- `yarn build` triggers the build process and passes the environment variable for Jekyll to produce a production ready site.
- `yarn deploy:test` triggers [Liftoff prelauch check](https://github.com/flight-deck/Flightdeck-liftoff#usage) - which is configrable by editing `.liftoffrc`
- `yarn deploy` triggers [Liftoff deployment](https://github.com/flight-deck/Flightdeck-liftoff#usage) - which is configrable by editing `.liftoffrc`
- `yarn clean` scrubs your project and removes all ruby based files and node based files – so you can do a fresh `yarn install` 
  - This leaves the `_site` directory alone
- `yarn clean:ruby` scrubs your project of all ruby based files – `vendor/ .bundle/ Gemfile.lock`
- `yarn clean:node` scrubs your project of all node based files – `node_modles yarn.lock package-lock.json`
- `yarn clean:site` scrubs your project of all Jekyll generated files – `_site/ .jekyll-cache`
- `yarn purge`  scrubs your project and removes all ruby based files and node based files and also includes all the Jekyll generated files – so you can do a fresh `yarn install`
- `yarn fresh ` does the same as `yarn purge` but includes the `yarn install ` after cleaning out files.



## Configurations and Defaults

You can change the configurations by editing `flightdeck.manifest.js`.

- ### port

  default: `4000`
  options: integer

- ### assets

  The directory to gather all assets.

  default: `"./assets"`
  options: string
  example: `"./"` (directly under the theme direcotry)

  

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

- #### imagemine

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

  - **optimzationLevel**

    default: `2`
