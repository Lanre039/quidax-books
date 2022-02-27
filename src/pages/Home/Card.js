import { HiOutlineUsers } from "react-icons/hi";
import { AiOutlineHeart, AiFillStar } from "react-icons/ai";
import { GrCart } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/actions/cartActions";
import { formatCurrency } from "../../utils";

const Card = ({ data, toggleSidebar }) => {
  const dispatch = useDispatch();

  return (
    <div className="books-content">
      <div className="image">
        <img
          src={data.image_url}
          width="100%"
          height="100%"
          alt={data.title.trim()}
        />
      </div>
      <div className="details">
        <h5 className="title">
          {data.title.trim().substring(0, 30)}
          {data.title.length > 25 && "..."}
        </h5>
        <p className="author">
          {data.authors[0].name} - {new Date(data.release_date).getFullYear()}
        </p>
        <p className="tag">{`${data.genres[0]?.name ?? ""}${
          data.genres[1]?.name ? `, ${data.genres[1]?.name}` : ""
        }`}</p>
        <div className="info">
          <div className="flex users">
            <div>
              <HiOutlineUsers size="20px" />
              <p className="tag">{data.number_of_purchases}</p>
            </div>
            <div className="heart">
              <AiOutlineHeart size="20px" />
              <p className="tag">{data.likes}</p>
            </div>
          </div>
          <hr />
          <div className="rating">
            <p className="tag">Ratings: {data.rating}</p>
            <span>
              {Array(5)
                .fill({})
                .map((_, idx) => (
                  <AiFillStar
                    key={idx}
                    size="20px"
                    color={
                      idx + 1 <= Math.round(data.rating) ? "#EBA430" : "#aaa"
                    }
                  />
                ))}
            </span>
          </div>
        </div>
        <div className="price">
          <p className="tag">
            {formatCurrency(data.currency, data.price)}
            &emsp;
            {data.available_copies > 0 ? (
              <span className="copy">
                {data.available_copies} Copies Available
              </span>
            ) : (
              <span className="red">Out of Stock</span>
            )}
          </p>
          <p
            id="cart"
            className="tag add-to_cart"
            onClick={() => {
              if (data.available_copies) {
                dispatch(addItemToCart(data));
                toggleSidebar();
              }
            }}
          >
            <span id="cart">
              <GrCart size="15px" id="cart" />
            </span>
            <span className="cart" id="cart">
              {" "}
              Add to Cart
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
