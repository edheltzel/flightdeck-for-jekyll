module.exports = {
  port: 2018,

  tasks: {
    browsersync: true,
    eslint:      true,
    imagemin:    true,
    sass:        true,
    watch:       true,
    webpack:     true,
    deploy:      false,
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
    includes: '_includes',
    layouts:  '_layouts',
    posts:    '_posts',
  },

  js: {
    src:   '_js',
    dest:  'js',
    entry: [
      'bundle.js',
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
    mode: 'production',
    module: {
      rules: [],
    },
  },

  deploy: {
    remote: '', // Server IP ie: root@192.168.0.1 OR ServerName if you use agentforwarding
    root: '', // Path to web root ie: /var/www/html
    exclude: [
      // Excluding files/folders inside of the _site folder
      '.DS_Store',
      '*.lock',
      '.git'
    ],
    dryrun: true, // set to false if you want to deploy to your remote server
  },
}
