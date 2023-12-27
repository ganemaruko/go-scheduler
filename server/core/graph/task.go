/*
The task package provides a simple task graph implementation.
*/

package graph

type Task struct {
	Name     string
	ID       string
	Executor Executor
}
