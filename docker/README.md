# Docker for Flightdeck-jekyll

One Paragraph of project description goes here...

## Getting Started

....

### Prerequisites

  - docker


### Installing

```
cd docker
make build
make run
cd /var/www/flydeck
yarn install
yarn start
```

### Runing

```
cd docker
make run
cd /var/www/flydeck
yarn start
```

Notes:
  - folder `web/` mounted `/var/www/flydeck`
  - port `4000:4000`
