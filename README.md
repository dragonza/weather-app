
## Introduction
This application shows current 5-day weather forecast every 3 hours.

Deployed version: https://relaxed-pike-65aac4.netlify.com/

## Getting Started

1. `npm i` - Install dependencies. This might take a while.
2. `npm start` - Run development build.

## Advanced Commands
* `npm run build` - Generate a production version under '/build'.

## Notes
* This app only shows some cities to display forecast.
* Users are able to toggle between Celsius and Fahrenheit

## Architecture
* This app has applied React, Redux, Redux Saga and ImmutableJS.
* This app has some basic data-reducer (create, remove, update) to minimize the redundancy of writing many reducers. 
Typical reducers could also be used normally along with this data-reducer. For more information: read [this](https://github.com/dragonza/react-redux-boilerplate)


