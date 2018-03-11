module.exports = {
  port: 2018,

  tasks: {
    browsersync: true,
    eslint:      true,
    imagemin:    true,
    sass:        true,
    watch:       true,
    webpack:     true,
    deploy:      true,
  },

  assets: './assets',

  browsersync: {
    browsers: [
      // "Google Chrome Canary",
      // "Google Chrome",
      // "Firefox Nightly",
      // "Firefox Developer Edition",
      // "Firefox",
      // "Safari Technology Preview",
      // "Safari",
      // "Opera",
      // "Opera Developer",
    ],
  },

  eslintLoader: {
    enforce: "pre",
    test: /\.js$/,
    exclude: /node_modules/,
    loader: "eslint-loader",
  },

  imagemin: {
    src:         '_images',
    dest:        'images',
    progressive: true,
    svgoPlugins: [{removeViewBox: false}],
  },

  jekyll: {
    config: {
      default:     '_config.yml',
      development: '_config_development.yml',
      production:  '',
    },
    dest:     '_site', // Used with Deploy also
    includes: '_inclues',
    layouts:  '_layouts',
    posts:    'posts',
  },

  js: {
    src:   '_js',
    dest:  'js',
    entry: [
      'main.js',
    ],
  },

  sass: {
    src:          '_sass',
    dest:         'css',
    outputStyle:  'compressed',
    autoprefixer: {
      browsers: [
        '> 1%',
        'last 2 versions',
        'Firefox ESR',
      ],
    },
  },

  webpack: {
    module: {
      rules: [],
    },
  },

  deploy: {
    remote: 'serverName',
    root: '/var/www/',
    exclude: [
      // Excluding files/folders inside of the _site folder
      '.DS_Store'
    ],
    dryrun: false,
  },
}
