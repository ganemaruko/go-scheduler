package follower

import (
	"fmt"
	"sync"
	"time"
)

func Chapter_1_2_p11() {
	type value struct {
		mu    sync.Mutex
		value int
	}
	var wg sync.WaitGroup
	printSum := func(v1, v2 *value) {
		defer wg.Done()
		v1.mu.Lock()                // ❶
		defer v1.mu.Unlock()        // ❷
		time.Sleep(2 * time.Second) // ❸
		v2.mu.Lock()
		defer v2.mu.Unlock()
		fmt.Printf("sum=%v\n", v1.value+v2.value)
	}
	var a, b value
	wg.Add(2)
	go printSum(&a, &b)
	go printSum(&b, &a)
	wg.Wait()

}