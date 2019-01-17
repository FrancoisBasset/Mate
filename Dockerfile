FROM node:8
EXPOSE 3000
COPY . /home/node/app
CMD  bash -c "cd /home/node/app && npm start"
