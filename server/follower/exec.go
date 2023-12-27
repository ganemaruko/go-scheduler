package follower

import (
	"fmt"
	"os"
	"os/exec"
	"runtime"
)

func ExecCommand(command string) {

	// OSによってコマンド実行方法を調整
	var cmd *exec.Cmd
	if runtime.GOOS == "windows" {
		// Windowsの場合はコマンドをCmd.exeで実行
		cmd = exec.Command("cmd", "/C", command)
	} else {
		// それ以外の場合は直接コマンドを実行
		cmd = exec.Command(command)
	}

	// 標準出力をキャプチャ
	cmd.Stdout = os.Stdout

	// コマンド実行
	err := cmd.Run()
	if err != nil {
		fmt.Printf("コマンド実行エラー: %v\n", err)
	}

}
