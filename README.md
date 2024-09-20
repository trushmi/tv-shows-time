# In this ReadMe:
- [About this project](#about-this-project)
- [How it works](#how-it-works)
- [Tech stack](#tech-stack)
- [How to run the app](#how-to-run-the-app)


## About this project

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

## Tech stack:

- React
- SCSS
- ESLint and prettier.


## This website includes:

- Font: [Maven Pro, Designed by Joe Prince](https://fonts.google.com/?query=Joe+Prince)
- Icons: [IcoMoon-Free by Keyamoon](https://github.com/Keyamoon/IcoMoon-Free)
- Source of data and images: [TVmaze.com](https://www.tvmaze.com/)



# How to run the app:  

1. ### Clone the repository to your local machine:
  ```
  git clone [https://github.com/trushmi/vocab.git](https://github.com/trushmi/tv-shows-time.git)
  ```
2. ### Navigate to your project directory:
  ```
  cd your-project-directory-name
  ```

3. ### Run the project
  ```
  npm start
  ```
   
4. ### Open your web browser and navigate to the following address:
  ```
  http://localhost:3000/
  ```

