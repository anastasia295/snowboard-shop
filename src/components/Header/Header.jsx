import "./Header.css";
import Avto from "../../shopImg/icons/avto.png";
import Nav from "../../shopImg/icons/nav.png";
import Vect from "../../shopImg/icons/vect.png";
import Vector from "../../shopImg/icons/Vector.png";
import Loupe from "../../shopImg/img/loupe.png";
import Im from "../../shopImg/img/im.png";
import Star from "../../shopImg/img/star.png";
import Person from "../../shopImg/img/person.png";
import Basket from "../../shopImg/img/basket.png";
import Bars from "../../shopImg/media/bars.png";

function Header() {
  return (
    <div className="media_header">
      <div className="header">
        <div className="container">
          <div className="header_left">
            <ul className="nav-bar_menu_left">
              <li className="nav-bar_item">
                <img src={Nav} alt="vector"></img>
                <a className="nav-bar_link" href="#">
                  Ваш регион доставки
                </a>
              </li>
              <li className="nav-bar_item">
                <a className="nav-bar_link" href="#">
                  Магазины
                </a>
              </li>
              <li className="nav-bar_item">
                <a className="nav-bar_link" href="#">
                  Помощь
                </a>
              </li>
              <li className="nav-bar_item">
                <a className="nav-bar_link" href="#">
                  Блоги
                </a>
              </li>
            </ul>
          </div>
          <div className="header_right">
            <ul className="nav-bar_menu_right">
              <li className="nav-bar_item">
                <img src={Avto} alt="avto"></img>
                <a className="nav-bar_link" href="#">
                  Бесплатная доставка
                </a>
              </li>
              <li className="nav-bar_item">
                <img src={Vect} alt="vect"></img>
                <a className="nav-bar_link" href="#">
                  Оплата при получении
                </a>
              </li>
              <li className="nav-bar_item">
                <img src={Vector} alt="vector"></img>
                <a className="nav-bar_link" href="#">
                  Возврат в течение 14 дней
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="media_header_img">
        <div className="bars_search">
          <div className="bars">
            <img src={Bars} alt=""></img>
          </div>
          <div className="search">
            <img src={Loupe} alt=""></img>
          </div>
        </div>
        <div className="basket_favorites">
          <div className="basket">
            <img src={Basket} alt=""></img>
          </div>
          <div className="favorites">
            <img src={Star} alt=""></img>
          </div>
        </div>
      </div>
      <div className="border_app"></div>
      <div className="header_brand-wrapper">
        <div className="header_brand">
          <div className="header_brand_left">
            <ul className="header_brand_gender">
              <li className="nav-bar_item_black">
                <a className="nav-bar_link_underline" href="#">
                  Мужчинам
                </a>
              </li>
              <li className="nav-bar_item_black">
                <a className="nav-bar_link_black" href="#">
                  Женщинам
                </a>
              </li>
              <li className="nav-bar_item_black">
                <a className="nav-bar_link_black" href="#">
                  Детям
                </a>
              </li>
            </ul>
          </div>
          <div className="header_brand_center">
            <img src={Im}></img>
          </div>
          <div className="header_brand_right">
            <ul className="header_brand_nav">
              <li className="nav-bar_item_black">
                <img src={Person}></img>
                <a className="nav-bar_link_black" href="#">
                  Войти
                </a>
              </li>
              <li className="nav-bar_item_black">
                <img src={Star}></img>
                <a className="nav-bar_link_black" href="#">
                  Избранное
                </a>
              </li>
              <li className="nav-bar_item_black">
                <img src={Basket}></img>
                <a className="nav-bar_link_black" href="#">
                  Корзина
                </a>
              </li>
              <li className="nav-bar_item_black">
                <img src={Loupe}></img>
                <a className="nav-bar_link_black" href="#">
                  Поиск
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="header_goods_wrapper">
        <div className="header_goods">
          <ul className="header_goods_item">
            <li className="nav-bar_item">
              <a className="nav-bar_link-goods" href="#">
                Новинки
              </a>
            </li>
            <li className="nav-bar_item">
              <a className="nav-bar_link-goods" href="#">
                Сноуборд
              </a>
            </li>
            <li className="nav-bar_item">
              <a className="nav-bar_link-goods" href="#">
                Лыжи
              </a>
            </li>
            <li className="nav-bar_item">
              <a className="nav-bar_link-goods" href="#">
                Одежда
              </a>
            </li>
            <li className="nav-bar_item">
              <a className="nav-bar_link-goods" href="#">
                Обувь
              </a>
            </li>
            <li className="nav-bar_item">
              <a className="nav-bar_link-goods" href="#">
                Акссесуары
              </a>
            </li>
            <li className="nav-bar_item">
              <a className="nav-bar_link-goods" href="#">
                Бренды
              </a>
            </li>
            <li className="nav-bar_item">
              <a className="nav-bar_link-goods" href="#">
                Распродажа
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
