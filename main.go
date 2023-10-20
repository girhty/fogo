package main

import (
	"log"

	"github.com/gofiber/fiber/v2"
	// "github.com/gofiber/fiber/v2/middleware/limiter"
)

func main() {
	app := fiber.New()
	// app.Use(limiter.New())
	app.Use("/login", Loger)
	app.Static("/src", "./src", fiber.Static{
		Compress:  true,
		ByteRange: true,
		Index:     "index.js",
		Browse:    false,
	})
	app.Get("/", Serve_Home)
	app.Get("/login", Login)
	app.Get("/transactions", Tran)
	app.Get("/signup", Sign_Up)
	app.Get("/user", User_Page)
	app.Post("/api/login", Api_Login)
	app.Post("/api/register", Api_Sign_Up)
	app.Post("/Check", CheckId)
	log.Fatal(app.Listen(":3000"))
}
