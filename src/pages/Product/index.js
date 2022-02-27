import { useParams, useLocation, useNavigate } from "react-router-dom";
import Wrapper from "./Product.styles";
import { BsArrowLeftShort } from "react-icons/bs";
import Button from "../../components/Button";
import { HiOutlineUsers } from "react-icons/hi";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { formatCurrency } from "../../utils";
import { format } from "date-fns";
import { addItemToCart } from "../../redux/actions/cartActions";

const ProductDetails = ({ open, setOpen }) => {
  const [data, setData] = useState(null);
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const books = useSelector((state) => state.collections.books);

  useEffect(() => {
    if (location.state) {
      setData(location.state);
    } else {
      const findById = books.find((book) => book.id === params?.id);
      setData(findById ?? {});
    }
  }, [books, location, params?.id]);

  const toggleSidebar = () => {
    setOpen(!open);
  };

  return (
    data && (
      <Wrapper>
        <aside className="content-left">
          <div className="aside-scroll">
            <div onClick={() => navigate(-1)} className="flex align cursor">
              <span>
                <BsArrowLeftShort size="25px" />
              </span>
              <span className="top-text ml">Back</span>
            </div>
            <div>
              <div className="image">
                <img
                  src={data.image_url}
                  alt={data.title.trim()}
                  width="100%"
                  height="100%"
                />
              </div>
              <p className="tag hide">
                {data.available_copies} Copies Available
              </p>
              <h3 className="price hide">
                {formatCurrency(data.currency ?? "USD", data.price)}
              </h3>
              <div className="btn-cart">
                <Button
                  title="Add to Cart"
                  handleClick={() => {
                    if (data.available_copies) {
                      dispatch(addItemToCart(data));
                      toggleSidebar();
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </aside>
        <div className="content-right">
          <h1 className="title">{data.title.trim()}</h1>
          <div className="my-5">
            <p className="genre">{data.authors[0].name}</p>
            <p className="year">{new Date(data.release_date).getFullYear()}</p>
          </div>
          <hr />
          <div className="info-container">
            <div className="info">
              <div>
                <HiOutlineUsers size="20px" />
                <p className="tag">{data.number_of_purchases}</p>
              </div>
              <div className="heart mr-5">
                <AiOutlineHeart size="20px" />
                <p className="tag">{data.likes}</p>
              </div>
              <hr />
              <div className="rating">
                <p className="genre">
                  Ratings: <span className="rate">{data.rating}</span>
                </p>
                <p className="tag">
                  {Array(5)
                    .fill({})
                    .map((_, idx) => (
                      <AiFillStar
                        key={idx}
                        size="20px"
                        color={
                          idx + 1 <= Math.round(data.rating)
                            ? "#EBA430"
                            : "#aaa"
                        }
                      />
                    ))}
                </p>
              </div>
            </div>

            <div className="my-5">
              <p className="genre">Genre</p>
              <p className="year">{`${data.genres[0]?.name ?? ""}${
                data.genres[1]?.name ? `, ${data.genres[1]?.name}` : ""
              }`}</p>
            </div>
            <div className="my-5">
              <p className="genre">Tags</p>
              <p className="year">{`${data.tags[0]?.name ?? ""}${
                data.tags[1]?.name ? `, ${data.tags[1]?.name}` : ""
              }`}</p>
            </div>
            <div className="my-5">
              <p className="genre">Publisher</p>
              <p className="year">{data.publisher}</p>
            </div>
            <div className="my-5">
              <p className="genre">Released</p>
              <p className="year">
                {format(new Date(data.published_at), "dd MMMM, yyyy")}
              </p>
            </div>
          </div>
          <hr />
          <div>
            <h3 className="header">{data.subtitle}</h3>
            <p className="desc">{data.full_description}</p>
          </div>
        </div>
        <div className="btn">
          <Button
            handleClick={() => {
              if (data.available_copies) {
                dispatch(addItemToCart(data));
                toggleSidebar();
              }
            }}
          >
            <div className="btn-content">
              <div>
                <p className="cart">Add to Cart</p>
                <p className="tag">{data.available_copies} Copies Available</p>
              </div>
              <h3 className="price">
                {formatCurrency(data.currency ?? "USD", data.price)}
              </h3>
            </div>
          </Button>
        </div>
      </Wrapper>
    )
  );
};

export default ProductDetails;
