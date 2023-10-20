.PHONY: build run

build:
	go build *.go

run: build
	./handlers
