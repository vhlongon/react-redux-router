const INITIAL_STATE_POST = {
  // since it is the initial state for the single post page we can only pass it null
  post: null,
  error: null
};

const SINGLE_POST = {
  categories: "recipes, bacon",
  content: "Bacon ipsum dolor amet brisket tri-tip cupim andouille pork chop. Short ribs sirloin brisket sausage flank pork chop meatloaf cow pastrami capicola ham burgdoggen chuck. Ball tip strip steak frankfurter beef ribs meatball. Cow rump short loin chuck picanha bacon.",
  id: 40141,
  title: "Bacon favourite recipe"
};

const ERROR = {
  status: 404,
  statusText: "Not Found"
};

test('Should return mock object', () => {
  expect({INITIAL_STATE_POST, SINGLE_POST, ERROR}).toBeDefined();
});
export {INITIAL_STATE_POST, SINGLE_POST, ERROR};
