# API Endpoints

## HTML API

### Root
* `GET /`
  * loads React web app

## JSON API

### Users
* `GET /api/users`
  * Users index/search
* `POST /api/users`
  * Creates new user
* `GET /api/users/:userId`
  * Get single existing user profile
* `PATCH /api/users/:userId`
  * Update user profile 

### Boards
* `GET /api/board`
  * board search
* `POST /api/board`
  * Create new board
* `GET /api/board/:boardId`
  * Get single existing board
* `PATCH /api/board/:boardId`
  * Update board  
* `DELETE /api/board/:boardId`
  * Delete board  

### Pins
* `GET /api/pin`
  * pin index/search
* `POST /api/pin`
  * Creates new pin
* `GET /api/pin/:pinId`
  * Get single existing pin 
* `PATCH /api/pin/:pinId`
  * Update pin  
* `DELETE /api/pin/:pinId`
  * Delete pin  
