package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
)

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = "1234"
		fmt.Println("Port not available in the environment, using default port: " + port)
	}
	http.Handle("/", http.FileServer(http.Dir("client/dist")))
	log.Fatal(http.ListenAndServe(":"+port, nil))
}
