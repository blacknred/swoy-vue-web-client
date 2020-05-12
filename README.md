# Vue web client for instant messaging system

## Stack

Vue, Vuex, ElementUI

## Routing

| Path                 | Access | Result                             |
|----------------------|--------|------------------------------------|
| /start/#check        | free   | login: enter email                 |
| /start/#confirm      | free   | login: confirm code from email     |
| /start/              | auth   | create ws|observe ws               |
| /start/#find(free)   | auth   | observe ws and join to free        |
| /start/#teamname     | auth   | enter team name                    |
| /start/#mode         | auth   | select mode(free|private)          |
| /start/#channelname  | auth   | enter channel name(skip)           |
| /start/#invites      | auth   | invite teammates(emails|link,skip) |
| /start/#profile      | auth   | profile settings                   |
| /:teamId/admin       | auth   | team admin page next tab           |
| /:teamId/:channelId? | auth   |                                    |
| /                    | auth   | redirection                        |

## Run the project

### Setup

1. Fork/Clone this repo

1. Download [Docker](https://docs.docker.com/docker-for-mac/install/) (if necessary)

### Build and Run the App

1. Build the image:
  
    ```$
    docker build -t swoy_vue-web-client .
    ```

1. Set the Environment variables

    ```sh
    export NODE_ENV=development
    ```

1. Run the container:

    ```$
    docker run -it -v ${PWD}:/usr/src/app -v /usr/src/app/node_modules -p 8081:8080 swoy-vue-web-client
    ```

1. Go to `http://localhost:3000`

### Run tests

1. Set the Environment variable

    ```sh
    export NODE_ENV=test
    ```

1. With the App up, run:

    ```sh
    ...
    ```

### Production

1. Build the image:
  
    ```$
    docker build -f Dockerfile.prod -t swoy-vue-web-client:prod .
    ```

1. Set the Environment variables

    ```sh
    export NODE_ENV=development
    ```

1. Run the container:

    ```$
    docker run -it -p 80:80 --rm swoy-vue-web-client:prod
    ```
