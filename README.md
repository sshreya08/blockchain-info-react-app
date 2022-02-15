# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
Added Redux with saga to handle middleware calls.
Added proxy setup to get list of blocks from https://blockchain.info/blocks/1573858800000?format=json. However, there were challenges in configuring correct way for proxy since the server does not whitelists all the domain, and thus creating a backend with Node js would have resolved the problem and dynamic proxy set up would have been achieved.
For the demonstration purpose, I have added Redux, Saga, React routing, React functional components, React hooks, history prop for getting route information, table component, basic css, environment file which is currently not in use to due issues with proxy setup, added loader while data is being fetched from api for better user experience, and error, in case the api fails to load the response.

## Steps to start application

1. npm install
2. npm start

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
