FROM node:12.16.0 as builder

ARG SSH_PRIVATE_KEY
RUN mkdir /root/.ssh/
RUN echo "${SSH_PRIVATE_KEY}" > /root/.ssh/id_rsa && chmod 400 /root/.ssh/id_rsa
RUN touch /root/.ssh/known_hosts
RUN ssh-keyscan bitbucket.org >> /root/.ssh/known_hosts
RUN git config --global url.git@bitbucket.org:.insteadOf https://bitbucket.org/

COPY . .
RUN rm .env
RUN npm ci
RUN npm run build

EXPOSE 3000

CMD ["node", "dist/src/main"]