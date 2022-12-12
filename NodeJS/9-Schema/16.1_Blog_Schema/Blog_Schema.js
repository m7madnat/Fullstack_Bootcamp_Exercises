const user = () => {
  _id: "@432432432";
  name: "mohamed";
  email: "m7mad@gmail.com";
  blogPosts: [
    {
      _id: "@11111111",
    }   
  ];
};

const blogPosts = () => {
  _id: "@11111111";
  title: "hello world";
  content: "any content yes no go bye";
  user: _id: "@432432432";
  comments: _id: "@22222222";
};

const comments = () => {
  _id: "@22222222";
  content: "any content yes no go bye";
  user: _id: "@432432432";
  blogPosts: _id: "@11111111";
};
