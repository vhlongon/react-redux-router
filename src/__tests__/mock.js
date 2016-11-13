const INITIAL_STATE_POST = {
  post: null,
  error: null
};

const INITIAL_STATE_POSTS = {
  all: [],
  error: null
};

const INITIAL_STATE_CREATE_POST = {
  newPostError: null,
  postsCreated: 0,
  newPost: null
};

const INITIAL_STATE_DELETE_POST = {
  deletePostError: null,
  postsDeleted: 0,
  postDeleted: null
};

const SINGLE_POST = {
  categories: "recipes, bacon",
  content: "Bacon ipsum dolor amet brisket tri-tip cupim andouille pork chop. Short ribs sirloin brisket sausage flank pork chop meatloaf cow pastrami capicola ham burgdoggen chuck. Ball tip strip steak frankfurter beef ribs meatball. Cow rump short loin chuck picanha bacon.",
  id: 40141,
  title: "Bacon favourite recipe"
};

const POSTS = [
  {
    categories: "recipes, bacon",
    content: "Bacon ipsum dolor amet brisket tri-tip cupim andouille pork chop. Short ribs sirloin brisket sausage flank pork chop meatloaf cow pastrami capicola ham burgdoggen chuck. Ball tip strip steak frankfurter beef ribs meatball. Cow rump short loin chuck picanha bacon.",
    id: 40141,
    title: "Bacon favourite recipe"
  },
  {
    categories: "Samuel, L. Jackson, badass",
    content: "Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in American crime. Do you believe that shit? It actually says that in the little book that comes with it: the most popular gun in American crime. Like they're actually proud of that shit. ",
    id: 40142,
    title: "A quote from Samuel L. Jackson"
  }
];

const ERROR = {
  status: 404,
  statusText: "Not Found"
};

test('Should return mock object', () => {
  expect({INITIAL_STATE_POST, INITIAL_STATE_POSTS, INITIAL_STATE_CREATE_POST, INITIAL_STATE_DELETE_POST, SINGLE_POST, ERROR, POSTS}).toBeDefined();
});

export {INITIAL_STATE_POST, INITIAL_STATE_POSTS, INITIAL_STATE_CREATE_POST, INITIAL_STATE_DELETE_POST, SINGLE_POST, ERROR, POSTS};
