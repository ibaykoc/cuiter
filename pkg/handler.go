package handler

import (
	"net/http"
)

// handle "/" request
func MainHandler(w http.ResponseWriter, r *http.Request) {
	http.Handle("/", http.FileServer(http.Dir("client/dist")))
}
