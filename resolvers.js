const data = {
  authors: [
    { id: 1, name: "sagarika", bookIds: [102, 103] },
    { id: 2, name: "deepu", bookIds: [101] },
    { id: 3, name: "krishna", bookIds: [104] },
  ],
  books: [
    { id: 101, title: "osome dnfsknfshnfsf", publishedYear: 2023, authorId: 2 },
    { id: 102, title: "kjrfnkd", publishedYear: 2023, authorId: 1 },
    { id: 103, title: "lfmdkff", publishedYear: 2023, authorId: 1 },
    { id: 104, title: "dmnkjsndfsfd", publishedYear: 2023, authorId: 3 },
  ],
};

export const resolvers = {
  Author: {
    books: (parent, args, context, info) => {
      console.log("parent", parent);
      return data.books.filter((book) => parent.bookIds.includes(book.id));
    },
  },
  Book: {
    author: (parent, args, context, info) => {
      // parent --> has book information--> books will be looped and for each book we have author info
      return data.authors.find((author) => author.id == parent.authorId);
    },
  },

  Query: {
    authors: () => {
      return data.authors;
    },
    books: () => {
      return data.books;
    },
  },
  Mutation: {
    addBook: (parent, args, context, info) => {
      // args has all arguments we pass
      const newBook = { ...args, id: data.books.length + 1 };
      data.books.push(newBook);
      return newBook;
    },
  },
};
