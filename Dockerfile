FROM nginx:stable-alpine
RUN mkdir /app
WORKDIR /app
COPY ./ .
COPY nginx.conf /etc/nginx/nginx.conf