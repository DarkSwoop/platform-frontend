# Experimental Platform: MANAGEMENT AND FRONTEND

Login proxy and web interface for the experimental platform.

This is a component of the experimental platform. To read more about it please go here:

[https://github.com/experimental-platform/platform-configure-script](https://github.com/experimental-platform/platform-configure-script)

## Local development

First install the bower components:

    cd frontend && bower install && cd ..

Clone the [simple-key-value-storage](https://github.com/experimental-platform/platform-skvs) repository and start the corresponding server. Then execute this here:

    foreman start

The frontend is now available at [http://localhost:8008](http://localhost:8008)

If you wanna do changes to the css make sure the SASS compiler is running:

    sass -w frontend/styles/main.scss:frontend/styles/main.css



## Branch: Development

[![Circle CI](https://circleci.com/gh/experimental-platform/platform-frontend.svg?style=svg&circle-token=e1cc89e8338c8ea6824497725dc4fa8aefdfc238)](https://circleci.com/gh/experimental-platform/platform-frontend)

All development branches stem from and (re-)integrate here.

## Branch: Master

[![Circle CI](https://circleci.com/gh/experimental-platform/platform-frontend/tree/master.svg?style=svg&circle-token=e1cc89e8338c8ea6824497725dc4fa8aefdfc238)](https://circleci.com/gh/experimental-platform/platform-frontend/tree/master)

This is the base for &alpha;-channel releases.