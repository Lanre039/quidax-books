import React, { useState } from "react";
import styled from "styled-components";
import { GoPrimitiveDot } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import {
  AiFillCaretRight,
  AiFillCaretLeft,
  AiOutlineHeart,
  AiFillStar,
} from "react-icons/ai";
import { HiOutlineUsers } from "react-icons/hi";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  position: relative;
  height: 100%;

  .left-control,
  .right-control {
    background: rgba(256, 256, 256, 0.9);
    position: absolute;
    top: 0;
    height: 350px;
    padding: 15px;
    z-index: 10;
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  .left-control {
    left: 0;
  }
  .right-control {
    right: 0;
  }

  .container {
    margin: 0 10px;
    box-shadow: rgb(0 0 0 / 20%) 0px 20px 30px;
    position: relative;
    cursor: pointer;
    width: 200px;
    height: 300px;
  }
  .container:hover .image {
    opacity: 0.9;
  }

  .container:hover .middle {
    opacity: 1;
  }

  .image {
    width: 100%;
    height: 100%;
  }

  .middle {
    transition: 0.5s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    background: rgb(0, 0, 0);
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.08169205182072825) 0%,
      rgba(0, 0, 0, 0.9836528361344538) 0%,
      rgba(0, 0, 0, 1) 16%,
      rgba(0, 0, 0, 0.6447172619047619) 100%
    );
    width: 100%;
    height: 100%;

    .details {
      width: 100%;
      height: 100%;
      padding: 25px 20px 20px;
      color: #fff;
      text-align: left;

      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .title {
        font-weight: bold;
        font-size: 15px;
        margin-bottom: 5px;
      }
      .author {
        font-size: 13px;
        margin: 1px 0;
      }
      .tag {
        font-size: 13px;
      }

      .copy {
        color: #66c100;
      }

      .info {
        display: flex;
        align-items: flex-end;

        hr {
          border-left: 0.1px solid #aaa;
          opacity: 0.2;
          height: 50px;
        }

        .users {
          padding: 0px 15px 0 0;
          text-align: center;
        }
        .heart {
          margin-left: 10px;
        }

        .rating {
          padding: 0px 0 0 15px;
        }
      }
    }
  }

  .indicator {
    width: 100vw;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
  }
`;

const Carousel = ({ data }) => {
  const navigate = useNavigate();
  const [active, setActive] = useState(data ?? []);
  const [activeDot, setActiveDot] = useState(8);

  // ROTATE ARRAY RIGHT
  const moveRight = () => {
    let store = [...active];
    store.unshift(store.pop());
    setActive(store);
    setActiveDot(activeDot < store.length ? activeDot + 1 : 8);
  };

  // ROTATE ARRAY LEFT
  const moveLeft = () => {
    let store = [...active];
    store.push(store.shift());
    setActive(store);
    setActiveDot(activeDot > 0 ? activeDot - 1 : 8);
  };
  return (
    <Wrapper>
      <p className="left-control" onClick={moveLeft}>
        <AiFillCaretLeft />
      </p>
      <div>
        <div className="flex">
          {active.map((item, idx) => (
            <div
              key={idx}
              className="container"
              onClick={() =>
                navigate(`/product/${idx}`, {
                  state: item,
                })
              }
            >
              <img
                src={item.image_url}
                className="image"
                width="100%"
                height="100%"
                alt={item.title.trim()}
              />
              <div className="middle">
                <div className="details">
                  <p className="tag copy">Available</p>
                  <div>
                    <h5 className="title">{item.title.trim()}</h5>
                    <p className="author">{item.authors[0].name}</p>
                    <p className="tag">
                      {new Date(item.release_date).getFullYear()}
                    </p>
                  </div>
                  <div>
                    <h5 className="title author">Genre</h5>
                    <p className="author">
                      {`${item.genres[0]?.name}${
                        item.genres[1]?.name ? `, ${item.genres[1]?.name}` : ""
                      }`}
                    </p>
                  </div>
                  <div>
                    <h5 className="title author">Tags</h5>
                    <p className="author">
                      {`${item.tags[0]?.name}${
                        item.tags[1]?.name ? `, ${item.tags[1]?.name}` : ""
                      }`}
                    </p>
                  </div>
                  <div className="info">
                    <div className="flex users">
                      <div>
                        <HiOutlineUsers size="20px" />
                        <p className="tag">{item.number_of_purchases}</p>
                      </div>
                      <div className="heart">
                        <AiOutlineHeart size="20px" />
                        <p className="tag">{item.likes}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="rating">
                      <p className="tag">Ratings: {item.rating}</p>
                      <span>
                        {Array(5)
                          .fill({})
                          .map((_, idx) => (
                            <AiFillStar
                              key={idx}
                              size="15px"
                              color={
                                idx + 1 <= Math.round(item.rating)
                                  ? "#EBA430"
                                  : "#aaa"
                              }
                            />
                          ))}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex indicator">
          {active.map((_, idx) => (
            <GoPrimitiveDot
              size="20px"
              key={idx}
              color={activeDot === idx ? "#64c000" : "#ddd"}
            />
          ))}
        </div>
      </div>
      <p className="right-control" onClick={moveRight}>
        <AiFillCaretRight />
      </p>
    </Wrapper>
  );
};
export default Carousel;
