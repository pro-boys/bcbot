FROM alpine:3.10.2

# install ca-certificates so that HTTPS works consistently
RUN apk add --no-cache ca-certificates

RUN apk add --no-cache --update \
      git \
      bash \
      nodejs \
      npm \
      aria2

# To handle not get uid/gid error while installing a npm package
RUN npm config set unsafe-perm true

RUN npm install -g typescript

RUN mkdir /systembot
RUN chmod 777 /systembot
WORKDIR /systembot

RUN git clone -b master https://github.com/ParveenBhadooOfficial/bcbot.git /systembot

RUN chmod -R 777 /systembot

CMD ["bash","start.sh"]
