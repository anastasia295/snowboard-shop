import ImageStar from "../../shopImg/categories/star.png";
import ImageBlackStar from "../../shopImg/categories/blackStar.png";
import "./Cards.css";

const Cards = (props) => {
  return (
    <div className="new-goods">
      <div className="new-goods_block">
        <div className="new_products_img">
          <img src={props.img} alt="" />
        </div>
        <img
          src={props.isFavorite ? ImageBlackStar : ImageStar}
          className="logo"
        ></img>
        {props.discount && (
          <div className="logo-container">
            <div className="logo-sale">-{props.discount}%</div>
            <div className="only_website">
              <div className="only_website_bg-grey">Только на сайте</div>
            </div>
          </div>
        )}
      </div>

      <div className="brand-name">LIB TECH</div>
      <div className="product"> Мужской сноуборд </div>
      <div className="price">
        {props.issmallPrice ? (
          <div>
            <span className="price_line-through">{props.price}</span>
            <span className="price_red">{props.smallPrice}₽</span>
          </div>
        ) : (
          props.price
        )}
      </div>
    </div>
  );
};

export default Cards;
