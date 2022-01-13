import { v4 as uuidv4 } from 'uuid';
import MixOrMatch from '../images/mix-or-match.png';
import GoogleBooksApi from '../images/google-books-api.png';
import ReactBlog from '../images/react-blog.png';
import BudgetApp from '../images/budget-app.png';

const projects = [
  {
    id: uuidv4(),
    name: 'Mix Or Match Game',
    desc: 'Mix-Or-Match is mind game for all ages. Used technologies:vanillajs, js OOP ',
    githubLink: 'https://github.com/Saidmuhammad2002/matchGame',
    demoLink: 'https://musing-kare-d1294a.netlify.app',
    img: MixOrMatch,
  },
  {
    id: uuidv4(),
    name: 'Google Books Api',
    desc: 'This program find books with sepecial google-books-api  Used technologies:React, AntDesign',
    githubLink: 'https://github.com/Saidmuhammad2002/googleBookApi',
    demoLink: 'https://google-book-api.netlify.app/',
    img: GoogleBooksApi,
  },
  {
    id: uuidv4(),
    name: 'The react blog',
    desc: 'React Blog is a simple blog app with mockapi. Used technologies:React. Good staf:best useOf useEffect with axios and customHook',
    githubLink: 'https://github.com/Saidmuhammad2002/blogs',
    demoLink: 'https://blogs-api.netlify.app/',
    img: ReactBlog,
  },
  {
    id: uuidv4(),
    name: 'Budget App',
    desc: 'Budget App helps you to calculate your budgets. Used technologies:React,React-Bootstrap. Good staf:best useOf localStorage, useContextHook and functionality',
    githubLink: 'https://github.com/Saidmuhammad2002/react-budget-app--wds',
    demoLink: 'https://react-budget-app-123.netlify.app/',
    img: BudgetApp,
  },
];

export default projects;
