FROM golang:alpine
WORKDIR /app
COPY ../ ./app
EXPOSE 3000
RUN cd app && go build *.go
CMD cd app && ./handlers