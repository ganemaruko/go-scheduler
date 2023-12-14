package main

import (
	"github.com/ganemaruko/go-scheduler/handlers"
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

func main() {
	e := echo.New()

	//todo: handle the error!
	c, _ := handlers.NewContainer()

	// Middleware
	e.Use(middleware.Logger())
	e.Use(middleware.Recover())


	// GetFollowers - get followers.
	e.GET("/core/follower", c.GetFollowers)

	// GetRoot - Get Root
	e.GET("/", c.GetRoot)


	// Start server
	e.Logger.Fatal(e.Start(":8080"))
}
