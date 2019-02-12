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
* `Delete /api/users/:userId`
  * Delete user profile 

### Boards
* `GET /api/boards`
  * boards search
* `POST /api/boards`
  * Create new boards
* `GET /api/boards/:boardId`
  * Get single existing boards
* `GET /api/boards/users/:boardId`
  * Get single existing boards for user 
* `PATCH /api/boards/:boardId`
  * Update boards  
* `DELETE /api/boards/:boardId`
  * Delete boards  

### Pins
* `GET /api/pins`
  * pins index/search
* `POST /api/pins`
  * Creates new pins
* `GET /api/pins/:pinId`
  * Get single existing pins 
* `GET /api/users/board/pins/:pinId`
  * Get pins inside board 
* `PATCH /api/pins/:pinId`
  * Update pins  
* `DELETE /api/pins/:pinId`
  * Delete pins  
