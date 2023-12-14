package handlers
import (
	"github.com/ganemaruko/go-scheduler/models"
	"github.com/labstack/echo/v4"
	"net/http"
)

// GetFollowers - get followers.
func (c *Container) GetFollowers(ctx echo.Context) error {
	return ctx.JSON(http.StatusOK, models.HelloWorld {
		Message: "Hello World",
	})
}

