FROM ubuntu:20.04

### SECTION SYSTEM-PRESETS
ENV DEBIAN_FRONTEND noninteractive
RUN echo 'debconf debconf/frontend select Noninteractive' | debconf-set-selections

RUN apt-get update && apt-get install -y \
    cron \
    curl \
    bash \
    nano \
    unzip \
    dirmngr \
    && rm -rf /var/lib/apt/lists/*
### ENDSECTION SYSTEM-PRESETS

### SECTION NGINX-SETUP
# RUN echo "deb http://ppa.launchpad.net/nginx/stable/ubuntu focal main" >> /etc/apt/sources.list.d/nginx.list
# RUN echo "deb-src http://ppa.launchpad.net/nginx/stable/ubuntu focal main" >> /etc/apt/sources.list.d/nginx.list

# RUN apt-key adv --keyserver keyserver.ubuntu.com --recv-keys 8B3981E7A6852F782CC4951600A6F0A3C300EE8C

# RUN apt-get update && apt-get install -y \
#     nginx-extras \
#     && rm -rf /var/lib/apt/lists/*
# ### ENDSECTION NGINX-SETUP

RUN curl -fsSL https://deb.nodesource.com/setup_14.x | bash -

RUN apt-get update && apt-get install -y nodejs \
    && rm -rf /var/lib/apt/lists/*

RUN npm install --global yarn
RUN npm install --global gulp

RUN apt-get update && apt-get install -y git build-essential \
    && rm -rf /var/lib/apt/lists/*

RUN apt-get update && apt-get install -y ruby-full ruby-bundler \
    && rm -rf /var/lib/apt/lists/*

### SECTION ENTRYPOINT
COPY docker/docker-entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/docker-entrypoint.sh

CMD /usr/bin/docker-entrypoint.sh && bash
### ENDSECTION ENTRYPOINT

EXPOSE 80
