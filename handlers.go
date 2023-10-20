package main

import (
	"encoding/base64"
	"fmt"
	"time"

	"github.com/gofiber/fiber/v2"
)

type Req struct {
	body string
}
type New_reg struct {
	Email    string `json:"Email"`
	Password string `json:"Hash"`
	Country  string `json:"countrycode"`
	Phone    string `json:"phone"`
	Name     string `json:"Name"`
}

func OAth(c *fiber.Ctx) error {
	check := c.Cookies("foopay")
	if check == "MTIzNDU2NzhoQGguaA==" {
		return c.Next()
	}
	return c.Redirect("/login")
}

func Loger(c *fiber.Ctx) error {
	check := c.Cookies("foopay")
	if len(check) < 1 {
		return c.Next()
	}
	return c.Redirect("/user")
}

func Login(c *fiber.Ctx) error {
	return c.SendFile("./login/index.html")
}
func Tran(c *fiber.Ctx) error {
	return c.SendFile("./transatcions/index.html")
}
func Sign_Up(c *fiber.Ctx) error {
	return c.SendFile("./signup/index.html")
}

func Serve_Home(c *fiber.Ctx) error {
	return c.SendFile("./src/index.html")
}
func User_Page(c *fiber.Ctx) error {
	return c.SendFile("./user/index.html")
}
func CheckId(c *fiber.Ctx) error {
	id := c.Query("id")
	data := c.Body()
	fmt.Print(string(data))
	if id == "Card" {
		return c.JSON(data)
	}
	return c.SendStatus(400)
}
func Api_Login(c *fiber.Ctx) error {
	email := c.FormValue("username")
	password := c.FormValue("password")
	bytes := []byte(email + password)
	encoded := base64.StdEncoding.EncodeToString(bytes)
	cookie := new(fiber.Cookie)
	cookie.Name = "foopay"
	cookie.Value = encoded
	cookie.Path = "/"
	cookie.Expires = time.Now().Add(1 * time.Hour)
	c.Cookie(cookie)
	return c.Redirect("/user")
}
func Api_Sign_Up(c *fiber.Ctx) error {
	var In New_reg
	In.Email = c.FormValue("email")
	In.Password = c.FormValue("password")
	In.Name = c.FormValue("nameoncard")
	In.Country = c.FormValue("country")
	In.Phone = c.FormValue("phone")
	bytes := []byte(In.Email + In.Password)
	encoded := base64.StdEncoding.EncodeToString(bytes)
	cookie := new(fiber.Cookie)
	cookie.Name = "foopay"
	cookie.Path = "/"
	cookie.Value = encoded
	cookie.Expires = time.Now().Add(1 * time.Hour)
	c.Cookie(cookie)
	return c.Redirect("/user")
}
