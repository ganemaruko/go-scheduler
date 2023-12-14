package handlers
import (
	"github.com/ganemaruko/go-scheduler/models"
	"github.com/labstack/echo/v4"
	"net/http"
)

// GetRoot - Get Root
func (c *Container) GetRoot(ctx echo.Context) error {
	return ctx.JSON(http.StatusOK, models.HelloWorld {
		Message: "Hello World",
	})
}

