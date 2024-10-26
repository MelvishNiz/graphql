import type { Resolvers } from "../../types/resolvers-types";

const MyResolvers: Resolvers = {
  Query: {
    // books: () => books,
    books: () => [
      {
        title: "Hello Wolrd",
        author: "Muh Gaming"
      }
    ]
  },
};

export default MyResolvers;
