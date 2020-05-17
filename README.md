# Vue web client for instant messaging system

## Stack

Vue, Vuex, ElementUI

## Routing

| Path                  | Access | Result                               |
|-----------------------|--------|--------------------------------------|
| /start/#check         | guest  | login: enter email                   |
| /start/#confirm       | guest  | login: confirm code from email       |
| /start/               | user   | create|observe wspace(s)             |
| /start/#find(free)    | user   | observe wspaces and join to free     |
| /start/#name          | user   | enter new wspace name                |
| /start/#type          | user   | select new wspace type(free|private) |
| /start/#channelname   | user   | enter wspace channel name(skip)      |
| /start/#invites       | user   | invite wspace teammates(emails|link) |
| /profile              | user   | profile settings                     |
| /settings             | user   | app settings                         |
| /:wspaceId/admin      | user   | wspace administration page           |
| /:wspaceId/:threadId? | user   |                                      |
| /                     | user   | redirection to                       |

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
