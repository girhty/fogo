FROM alpine:latest
COPY . .
RUN apk add --update --no-cache nginx
EXPOSE 8080
CMD nginx -g "daemon off;"