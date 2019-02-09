from node:8

expose 80

RUN [ "/bin/sh", "-c", "mkdir /var/mate" ]

COPY ./ /var/mate/

WORKDIR /var/mate

CMD [ "/bin/sh", "-c", "npm start"]