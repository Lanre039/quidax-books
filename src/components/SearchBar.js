import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import { GrFormClose } from "react-icons/gr";

const Wrapper = styled.div`
  .search {
    width: 100%;
    position: relative;
    display: flex;
  }

  .searchTerm {
    width: 100%;
    border: 1px solid #dddddd;
    border-right: none;
    padding: 12px;
    height: 36px;
    outline: none;
  }

  .searchButton {
    width: 40px;
    height: 36px;
    border: 1px solid #dddddd;
    background: #f9f9fb;
    text-align: center;
    color: #fff;
    cursor: pointer;
    font-size: 20px;
  }

  .wrap {
    width: 30%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const SearchBar = ({ search, setSearch }) => {
  return (
    <Wrapper>
      <div className="search">
        <input
          type="text"
          className="searchTerm"
          placeholder="Search books, genres, authors, etc."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit" className="searchButton">
          {search.length ? (
            <GrFormClose
              color="black"
              size="18px"
              onClick={() => setSearch("")}
            />
          ) : (
            <FiSearch color="black" size="18px" />
          )}
        </button>
      </div>
    </Wrapper>
  );
};

export default SearchBar;
