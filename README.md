# WMO-Back

This project is the Backend part of movies rental websites. It consist of create a database users and movies; and connection between users and movies to produce a renting. 

## START PROJECT 
    
- To start the project you have to install Docker in your SO.

- It is required to create a file .env where paste your Mongo Atlas cluster. Otherwise, you can go docker-compose to save the collection in Mongo Local uncommenting 14 and 15 lines, and commenting 12 and 13 lines.

- Then you just have to start the server with the following Docker command `docker-compose up --build`.

- When Docker is started, you can use POSTMAN to write your request.

## STOP PROJECT

- To stop the project and delete it of your computer you have to execute the following file `./stopRemove`.

## TEGNOLOGIES

- JAVASCRIPT 
- DOCKER
- NODE
- EXPRESS
- MONGO
- MONGOOSE
- BCRYPTJS 
- JSONWEBTOKEN
- NODEMON
- POSTMAN

## REQUEST

- ENDPOINTS
    - localhost:3000/user/ Create user POST
        ~~~  
        {
            "name": "ian",
            "email": "ian@gmail.com",
            "password": "1234"
        }
    - localhost:3000/user/all  Users all GET
    - localhost:3000/user/login Login POST
        ~~~~ 
        {
            "email": "ian@gmail.com",
            "password": "124"
        }
    - localhost:3000/user/:id  Update user by id PUT   
        ~~~~ 
        {
            "name": "ian10",
            "email": "ian@gmail.com",
            "password": "1234"
        }
    - localhost:3000/user/delete/:id Delete user by id DELETE

The other methods are in the files of the router folder.