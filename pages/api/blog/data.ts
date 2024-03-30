import { IBlog } from "./../../../interfaces";

/** Dummy user data. */
export const blogData: IBlog[] = [
  {
    id: 1,
    tag: "Notice",
    title: "Renovation for fire water pipeline",
    date: "March 13, 2024",
    internallink: "/",
    externallink: "",
    navImage: "/images/blog2big.pdf",
    brief: "Decision was adopted in the meeting of the Managers of Board held on 25.02.2024 in connection with the colouring / renovation of the fire water pipelines and removal of flower tubes places adjacent to those pipes as said above."
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
