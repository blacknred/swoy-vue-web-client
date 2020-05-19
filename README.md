# Vue web client for instant messaging system

## Stack

Vue, Vuex, ElementUI

## Routing

| Path                 | Access | Result                             |
|----------------------|--------|------------------------------------|
| /start               | user   | landing page                       |
| /start#check         | guest  | login page                         |
| /start#confirm       | guest  | auth code confirmation page        |
| /start#find(free)    | user   | space observation and joining page |
| /create#name         | user   | new space name page                |
| /create#type         | user   | new space type(free|private) page  |
| /create#channelname  | user   | new space channel name page        |
| /create#invites      | user   | new space teammate invitation page |
| /settings#profile    | user   | profile settings page              |
| /settings#app        | user   | app settings page                  |
| /:spaceId/admin      | user   | space administration page          |
| /:spaceId/:threadId? | user   | space page                         |

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

1. Go to `https://localhost:8080`

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
