import { IBlog } from "./../../../interfaces";

/** Dummy user data. */
export const blogData: IBlog[] = [
  {
    id: 1,
    tag: "Angular App",
    title: "Near Earth Asteroids!",
    date: "Nov 12, 2022",
    internallink: "/projects",
    externallink: "",
    navImage: "/images/blog1.jpg",
    brief: "Discover the universe with the Near Earth Asteroids app. This powerful tool provides you with real-time information on asteroids that come close to Earth. With our app, you can track the orbit and approach of near-Earth asteroids, view detailed information and images of each asteroid, and receive alerts for potential impact events. The app also includes a map view to see the location of asteroids in relation to Earth and a news feed for the latest updates on asteroid research and observations. Whether you're an asteroid enthusiast or just curious about space, the Near Earth Asteroids app is a must-have for anyone interested in the study of asteroids and their potential impact on Earth."
  },
  {
    id: 2,
    tag: "Rest API",
    title: "Latest Finance News",
    date: "Feb 09, 2022",
    internallink: "/projects",
    externallink: "",
    navImage: "/images/blog2.jpg",
    brief: "Time to see some hot finance update for today? Enter name of the company and listed relivant stock market where it is available. Please query below details to check what is latest updates."
  },
  {
    id: 3,
    tag: "Data sanity",
    title: "Essence of Lemmatization",
    date: "Jan 11, 2024",
    internallink: "",
    externallink: "https://www.blogger.com/blog/post/edit/1919190947756687306/3987351518268052206",
    navImage: "/images/blog3.jpg",
    brief: "Language is a dynamic and complex system that constantly evolves. In the realm of natural language processing (NLP), two key techniques play a pivotal role in simplifying and standardizing words: lemmatization and stemming. These methods are employed to reduce words to their base or root forms"
  },
];
