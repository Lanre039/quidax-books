import { useState } from "react";

const useSearch = () => {
  const [listOfAuthors, setListOfAuthors] = useState([]);
  const [listOfGenres, setListOfGenres] = useState([]);

  const getListOfAuthors = (books) => {
    if (listOfAuthors.length) {
      return listOfAuthors;
    }
    let store = [];
    books.forEach(({ authors }, idx) => {
      for (let author of authors) {
        store = [...store, { ...author, bookIndex: idx }];
      }
    });
    setListOfAuthors(store);
    return store;
  };

  const getListOfGenres = (books) => {
    if (listOfGenres.length) {
      return listOfGenres;
    }
    let store = [];
    books.forEach(({ genres }, idx) => {
      for (let author of genres) {
        store = [...store, { ...author, bookIndex: idx }];
      }
    });
    setListOfGenres(store);
    return store;
  };

  const handleSearch = (books, search) => {
    // SEARCH BY TITLE
    const searchByTitle = books.filter(({ title }) => {
      return search
        ? RegExp(`^${search}`, "ig").test(title.trim().toLowerCase())
        : true;
    });

    if (searchByTitle.length) {
      return searchByTitle;
    } else {
      // SEARCH BY AUTHOR
      const authors = getListOfAuthors(books);
      const searchByAuthor = authors.filter(({ name }) => {
        return search
          ? RegExp(`^${search}`, "ig").test(name.trim().toLowerCase())
          : true;
      });
      if (searchByAuthor.length) {
        const filter = searchByAuthor.map(({ bookIndex }) => books[bookIndex]);
        return filter;
      } else {
        //SEARCH BY GENRES
        const genres = getListOfGenres(books);
        const searchByGenres = genres.filter(({ name }) => {
          return search
            ? RegExp(`^${search}`, "ig").test(name.trim().toLowerCase())
            : true;
        });
        const filter = searchByGenres.map(({ bookIndex }) => books[bookIndex]);
        return filter;
      }
    }
  };

  return { handleSearch };
};

export default useSearch;
