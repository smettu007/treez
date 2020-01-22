# Treez - API

Documentation for the api can be found in `swagger/swagger.yaml` and you can interact with swagger at `http://localhost:3000/docs/v1`

### DB
Currently using mongodb from Mlab

you can run and test api calls there once the api is up and running here `http://localhost:3000/docs/v1`

### Usage

### Local development

1. ### Using Docker
    If you have docker
    
    a. `docker build -t treez .`

    b. `docker run -p 3000:3000 treez`

    access api docs here `http://localhost:3000/docs/v1`

2. ### Running it without Docker
    To run it locally

    a. `npm install`

    b. `npm start`

    access api docs here `http://localhost:3000/docs/v1`

## What could have i done better?
A lot...since i only spent 3 hours on this and my current work is kinda busy.

1. Could have integrated validating requests through swagger
2. Unit tests is one thing i did with TDD but its taing longer than expected so i had to dump em
3. Could have improved Orders `create` and `put` request if i had more context on inventory management
4. A lot more.......
