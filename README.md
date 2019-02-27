<div align="center">
<p><img src="https://d.pr/free/i/FDUErn+" alt="Flightdeck Logo"></p>
<h1>Flightdeck</h1>
<h4>An opinionated starter project for <a href="http://jekyllrb.com/">Jekyll</a> that uses modern front-end tooling.</h4>

[![release](https://img.shields.io/github/release/ginfuru/Flightdeck.svg?style=for-the-badge&logo=github&logoColor=white&colorA=101119&colorB=6D57FF)](https://github.com/ginfuru/Flightdeck/releases/latest)  [![jekyll](https://img.shields.io/badge/Jekyll-v3.36+-373277.svg?style=for-the-badge&logo=jekyll&logoColor=white&colorA=101119&colorB=7273D6)](https://github.com/jekyll/jekyll/releases/latest)  [![license](https://img.shields.io/badge/License-MIT-373277.svg?style=for-the-badge&l&logoColor=white&colorA=101119&colorB=42557B)](https://github.com/ginfuru/Flightdeck/blob/master/LICENSE)

</div>




## Prerequisites

To install this project, you'll need the following things installed on your machine.

1. [Jekyll](http://jekyllrb.com/) & [Bundler](https://bundler.io/) - `$ gem install jekyll bundler`
2. [NodeJS](http://nodejs.org) - use the installer, Homebrew, etc.
3. [Yarn](https://yarnpkg.com/en/) - `brew install yarn` _**(Optional)**_
  4. [CloudCanoon](https://docs.cloudcannon.com/) - Give the client an interface to manage their site with a simple CMS. _**(Suggested for Clients)**_

>### Optional Editor settings
>
>Although your editor is a very personal thing - we'd suggest that you'd consider using [Visual Studio Code](https://code.visualstudio.com/) with the [Jekyll Snippets Extension](https://marketplace.visualstudio.com/items?itemName=ginfuru.vscode-jekyll-snippets) - with the power of IntelliSense you'll get snippets to speed up your Jekyll work development as well as syntax highlighting for Liquid.

## Local Development & Installation

1. Clone this repo, or download it into a directory of your choice.

    ```shell
    git clone https://github.com/PortsideIO/flightdeck.git
    ```
2. Inside the directory, run `npm install` -> **FYI** you can use `yarn` in place of `npm`

    ```shell
    cd flightdeck
    npm install
    ```

## Usage

**Note:** you can replace `npm` with `yarn`

### Start Development

This will give you file watching, browser synchronisation, auto-rebuild, CSS injecting etc.

  ```shell
  npm start
  ```

#### Seeing Warnings

If you're seeing JSON warnings ref [issue #1](https://github.com/PortsideIO/flightdeck/issues/1) on what should be done to fix this.


### Production Build

This will set the `JEKYLL_ENV` to `production` and use the production config file(s) set in `flightdeck.manifest.js` to override default setting.
You can easily deploy your site build with the command.

```shell
npm run build
```

### Deploy

You can set your server deployment options inside of `flightdeck.manifest.js` If you wish to deploy after the build process has completed.

```shell
npm run deploy
```

## Want more?

To display all available commands just run:

```shell
npm run
```

### Jekyll

As this is just a Jekyll project, you can use any of the commands listed in their [docs](https://jekyllrb.com/docs/usage/)

## What's inside the Flightdeck

- [gulp](http://gulpjs.com/)
- [Sass](http://sass-lang.com/)
- [PostCSS](http://postcss.org/)
  - [Autoprefixer](https://github.com/postcss/autoprefixer)
- [Webpack](https://webpack.github.io/)
- [imagemin](https://github.com/imagemin/imagemin)
- [Browsersync](https://www.browsersync.io/)

## Configurations and Defaults

You can change the configurations by editing `flightdeck.manifest.js`.

- ### port

    default: `2018`
    options: integer

- ### tasks

    Tasks to run when you exec `yarn start` or `gulp` commands.

    - #### imagemin

        To minify images.

        default: `true`
        options: boolean (`true` / `false`)

    - #### sass

        To compile Sass.

        default: `true`
        options: boolean (`true` / `false`)

    - #### server

        To compile sources via Jekyll and to keep browsers in sync with file changes via Browsersync.

        default: `true`
        options: boolean (`true` / `false`)

    - #### webpack

        To bundle JavaScript files.

        default: `true`
        options: boolean (`true` / `false`)

    - #### deploly

        Deploys using `gulp-rsync` to chosen server.

        default: `flase`
        options: boolean (`true` / `false`)

- ### paths

    Settings about paths.

    - #### dest

        The destination directory for the whole project.

        default: `"_site"`
        options: string

    - #### posts

        The directory of posts source files.

        default: `"_posts"`
        options: string

    - #### assets

        The directory to gather all assets.

        default: `"./assets"`
        options: string
        example: `"./"` (directly under the theme direcotry)

    - #### css

        The CSS destination directory for Sass.

        default: `"css"`
        options: string
        example: `"stylesheets"`

    - #### js

        The JavaScript destination directory for Browserify.

        default: `"js"`
        options: string
        example: `"javascripts"`

    - #### images

        The destination directory of compressed image files for imagemin.

        default: `"images"`
        options: string
        example: `"img"`

    - #### sass

        The directory of Sass files.

        default: `"_sass"`
        options: string
        example: `"src/sass"`

    - #### jsSrc

        The directory of JavaScript source files to bundle up by Browserify.

        default: `"_js"`
        options: string
        example: `"src/js`"

    - #### imagesSrc

        The directory of image source files to compress.

        default: `"_images"`
        options: string
        example: `"src/images"`

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

- ### sass

    Sass settings.

    - #### outputStyle

        The output style of Sass.

        default: `"compressed"`
        options: `"expanded"`, `"nested"`, `"compact"`, `"compressed"`

- ### autoprefixer

    Autoprefixer settings.

    - #### browsers

        List of browsers, which are supported in your theme.

        default: `["> 1%", "last 2 versions", "Firefox ESR"]`
        options: array. See [Browserslist docs](https://github.com/ai/browserslist#queries) for available queries.
        example: `["> 5%", "last 2 versions", "IE 8"]`

- ### js

    JavaScript settings.

    - #### entry

        File name(s) of JavaScript entry points.

        default: `["main.js"]`
        options: array
        example: `["pluginA.js", "pluginB.js", "main.js"]`

- ### deploy

    Deployment settings.

    uses any of the [`gulp-rsync`](https://www.npmjs.com/package/gulp-rsync) parameters
    - #### remote

        server IP or ServerName _(if using ssh agentforwarding)_
    - #### root

        path to web root index of your choosen webserver
    - #### exlude

        excluding files/folder inside of the `_site` folder - this is editable with the Jekyll settings
    - #### dryrun

        does a dryrun to make sure there are no configuration errors - set to `false` to deploy to your production _(remote)_ server.

        default: `true`  options: `true` or `false`
