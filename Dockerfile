## Build environment
FROM node:alpine as react-build

WORKDIR /app
COPY . ./

# Install and build react app
RUN ls
RUN npm install
RUN npm run-script build

## Server environment
FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/nginx.templ

ENV PORT 8080
ENV HOST 0.0.0.0

# Substitute ENV VARS in nginx config file
RUN sh -c   "envsubst < /etc/nginx/conf.d/nginx.templ > \
            /etx/nginx/conf.d/nginx.conf"

# Drop react build behind nginx
COPY --from=react-build /app/build /usr/share/nginx/html

EXPOSE $PORT

CMD ["nginx", "-g", "daemon off"]
