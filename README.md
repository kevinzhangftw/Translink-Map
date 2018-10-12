Translink Map App demonstrating the use of Redux resources and HOCs

## Getting Started

`git clone https://github.com/kevinzhangftw/Translink-Map.git`

`yarn`

yarn will install all the packages

To Run the app locally, the easiest way to deal with the CORS (Allow-Control-Allow-Origin) problem is to install the chrome extension

#### Allow-Control-Allow-Origin

Remember to turn on the extension only when needed, as it does interfere with some sites like youtube.

You will need to set your keys and store it in the .env file in the root directory

`touch .env`

Get your mapbox master key here
https://www.mapbox.com/mapbox-gl-js/api/

Get your translink api key here
https://developer.translink.ca/ServicesRtti

store both keys under the .env file like this

```
REACT_APP_MAPTOKEN=<ur-key>
REACT_APP_TRANSLINK=<ur-key>
```

Now you are ready to start the app!

`yarn start`

