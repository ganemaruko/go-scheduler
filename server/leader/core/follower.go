package leader

import (
	"github.com/ganemaruko/go-scheduler/core"
)

func GetFollowers() []core.Follower {
	follower := []core.Follower{{Name: "Follower 1", ID: "1"}, {Name: "Follower 2", ID: "2"}}
	return follower
}
