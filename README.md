## About

Tool designed to quantify a user's viewing habits, answering the ever-elusive question: "How much time have I really spent binge-watching TV shows?"

<img width="1723" alt="Screenshot 2023-09-25 at 6 44 39 PM" src="https://github.com/trushmi/tv-shows-time/assets/88466266/0b6f932e-eded-4b41-a516-7ab8ab421afd">


## How it works:

User can input a TV show title directly into the search bar. If unsure, they can also navigate to our dedicated page which showcases 155 curated TV shows.

<img width="1720" alt="Screenshot 2023-09-25 at 6 42 24 PM" src="https://github.com/trushmi/tv-shows-time/assets/88466266/a13d5347-c5a8-4266-80d3-56abd1995d51">

<img width="1726" alt="Screenshot 2023-09-25 at 6 43 17 PM" src="https://github.com/trushmi/tv-shows-time/assets/88466266/69accf4b-dd2e-4250-8efd-006e1b9497cd">

By default when a user clicks on a show, the program counts the total time to watch this TV show completely( includes all episodes and all seasons). If a user doesn't recognise the show in a list, they can click on the IMDb icon on a poster and find out more.

After the user has selected the TV show, they can edit data. For example, how many times they watched TV show completely, or change the number of seasons from TV shows they have seen;

Total time is always on the screen. It updates every time the user adds or removes a show or makes changes to it. If the user wants to start over there is a reset icon for it.

Days are shown in 24 hours format. Total time can differ by 10%;

To calculate the result program uses the number of seasons, how many episodes every season has and average duration of one episode. If the TV show is still running, the program calculates the number of episodes that have been shown as on January 23, 2023;

<img width="1721" alt="Screenshot 2023-09-25 at 6 46 15 PM" src="https://github.com/trushmi/tv-shows-time/assets/88466266/211c74f3-ab61-44a4-b167-5e6f667c9075">


## This website includes:

Font: Maven Pro, Designed by Joe Prince [https://fonts.google.com/?query=Joe+Prince]
Icons: IcoMoon-Free by Keyamoon [https://github.com/Keyamoon/IcoMoon-Free]
Source of data and images: TVmaze.com [https://www.tvmaze.com/]

## Technical stack:

React
SCSS
ESLint and prettier.

## How to develop

To run the development environment you can use the npm start command.
To build the production version you can run npm run build command

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
