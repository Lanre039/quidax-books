import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Wrapper from "./Home.styles";
import Card from "./Card";
import Carousel from "../../components/Carousel";
import { ALL_BOOKS } from "./queries";
import { useQuery } from "@apollo/client";
import { useDispatch } from "react-redux";
import { fetchCollections } from "../../redux/actions/collectionActions";
import useSearch from "../../hooks/useSearch";

const HomeComponent = ({ setOpen, open, search }) => {
  const history = useNavigate();
  const dispatch = useDispatch();
  const [searchResult, setSearchResult] = useState([]);
  const { handleSearch } = useSearch();

  const { data: { books = [] } = {}, error, loading } = useQuery(ALL_BOOKS);

  useEffect(() => {
    if (!loading && !error) {
      dispatch(fetchCollections(books));
    }
  }, [loading, error, books, dispatch]);

  useEffect(() => {
    if (search) {
      const result = handleSearch(books, search);
      setSearchResult(result ?? []);
    } else {
      setSearchResult([]);
    }
    // eslint-disable-next-line
  }, [search]);

  const toggleSidebar = () => {
    setOpen(!open);
  };

  const renderBooks = () => {
    const data = searchResult.length > 0 ? searchResult : books;
    return data.map((book, idx) => (
      <div
        key={idx}
        onClick={(e) => {
          if (e.target.id !== "cart") {
            console.log(e.target.id);
            history(`/product/${idx}`, {
              state: book,
            });
          }
        }}
      >
        <Card data={book} toggleSidebar={toggleSidebar} />
      </div>
    ));
  };

  if (loading) {
    return (
      <Wrapper>
        <p className="loading">Loading......</p>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      {!searchResult.length && (
        <div className="carousel">
          <div className="carousel-header">
            <p className="header">Featured Books</p>
            <hr />
          </div>
          <Carousel data={books} />
        </div>
      )}
      <section className="books">
        {searchResult.length > 0 ? (
          <p className="header">
            {`${searchResult.length} results`}{" "}
            <span className="found"> found for </span> {`'${search}'`}
          </p>
        ) : (
          <p className="header">All Books</p>
        )}

        <hr />
        <div className="books-section">
          {renderBooks()}
          <div className="books-content"></div>
        </div>
      </section>
    </Wrapper>
  );
};

export default HomeComponent;
