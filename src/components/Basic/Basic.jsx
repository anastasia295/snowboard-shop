import { useState } from "react";
import "./Basic.css";
import "../Cards/Cards";
import "../Flickity/Flickity.css";
import Brands from "../../shopImg/brands/brands1.png";
import Brands2 from "../../shopImg/brands/brands2.png";
import Brands3 from "../../shopImg/brands/brands3.png";
import Brands4 from "../../shopImg/brands/brands4.png";
import Brands5 from "../../shopImg/brands/brands5.png";
import Brands6 from "../../shopImg/brands/brands6.png";
import Brands7 from "../../shopImg/brands/brands7.png";
import Brands8 from "../../shopImg/brands/brands8.png";
import Brands9 from "../../shopImg/brands/brands9.png";
import Brands10 from "../../shopImg/brands/brands10.png";
import Action1 from "../../shopImg/categories/action1.png";
import Action2 from "../../shopImg/categories/action2.png";
import Product1 from "../../shopImg/categories/product1.png";
import Product2 from "../../shopImg/categories/product2.png";
import Product3 from "../../shopImg/categories/product3.png";
import Product4 from "../../shopImg/categories/product4.png";
import jacket from "../../shopImg/categories/jacet.jpg";
import Sneakers from "../../shopImg/categories/sneakers.png";
import Sneakers2 from "../../shopImg/categories/sneakers2.png";
import Brands11 from "../../shopImg/categories/brands11.png";
import Boot from "../../shopImg/categories/boot.png";
import Cards from "../Cards/Cards";

function Basic() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const onClick = () => {
    setIsMenuVisible((prev) => !prev);
  };

  return (
    <div className="content">
      <div className="presentation">
        <div className="popular_categories">Популярные категории</div>
        <div className="categories">
          <ul className="categories_item">
            <li className="categories_nav-bar_item">
              <a className="categories_link" href="#">
                <span className="categories_link_red">Распродажа</span>
              </a>
            </li>
            <li className="categories_nav-bar_item">
              <a className="categories_link" href="#">
                Новинки
              </a>
            </li>
            <li className="categories_nav-bar_item">
              <a className="categories_link" href="#">
                Сноуборд
              </a>
            </li>
            <li className="categories_nav-bar_item">
              <a className="categories_link" href="#">
                Лыжи
              </a>
            </li>

            {isMenuVisible && (
              <div className="categories_hidden">
                <li className="categories_nav-bar_item">
                  <a className="categories_link" href="#">
                    Cкейт
                  </a>
                </li>
                <li className="categories_nav-bar_item">
                  <a className="categories_link" href="#">
                    Обувь
                  </a>
                </li>
                <li className="categories_nav-bar_item">
                  <a className="categories_link" href="#">
                    Акссесуары
                  </a>
                </li>
                <li className="categories_nav-bar_item">
                  <a className="categories_link" href="#">
                    Бренды
                  </a>
                </li>
              </div>
            )}
            <label
              for="pseudoBtn"
              className="categories_button"
              onClick={onClick}
            >
              {isMenuVisible ? "Скрыть" : "Показать еще"}
            </label>
          </ul>
        </div>

        <div className="content">
          <div className="brands">
            <div className="brands_basic">
              <img src={Brands} alt="" />
            </div>
            <div className="brands_basic">
              <img src={Brands2} alt="" />
            </div>
            <div className="brands_basic">
              <img src={Brands3} alt="" />
            </div>
            <div className="brands_basic">
              <img src={Brands4} alt="" />
            </div>
            <div className="brands_basic">
              <img src={Brands5} alt="" />
            </div>
            <div className="brands_basic">
              <img src={Brands6} alt="" />
            </div>
            <div className="brands_hidden">
              <img src={Brands7} alt="" />
            </div>
            <div className="brands_hidden">
              <img src={Brands8} alt="" />
            </div>
            <div className="brands_hidden">
              <img src={Brands9} alt="" />
            </div>
            <div className="brands_hidden">
              <img src={Brands10} alt="" />
            </div>
          </div>
          <div className="special-action">
            <div className="special-action1">
              <img src={Action1} alt=""></img>
              <div className="special-action_block">
                <div className="special-action_name">Название акции №1</div>
                <div className="special-action_name_mob">
                  КУПИ НАС, ПОЖАЛУЙСТА
                </div>
              </div>
            </div>
            <div className="special-action2">
              <img src={Action2} alt=""></img>
              <div className="special-action_block">
                <div className="special-action_name">Название акции №2</div>
              </div>
            </div>
            <div className="special-action3">
              <img src={Sneakers2} alt=""></img>
              <div className="special-action_block">
                <div className="special-action_name_mob">И НАС ТОЖЕ КУПИ</div>
              </div>
            </div>
          </div>
          <div className="new-items_title">Новинки</div>

          <div className="new-items">
            <div className="favorite_card">
              <Cards
                price="34392₽"
                img={Product1}
                isFavorite
                issmallPrice={false}
              ></Cards>
            </div>
            <div className="common_card">
              <Cards
                price="34392₽"
                smallPrice="17392"
                discount="50"
                issmallPrice={true}
                img={Product2}
                isFavorite={false}
              ></Cards>
            </div>
            <div className="common_card">
              <Cards
                price="34392₽"
                img={Product3}
                isFavorite={false}
                issmallPrice={false}
              ></Cards>
            </div>
            <div className="common_card">
              <Cards
                price="34392₽"
                img={Product4}
                isFavorite={false}
                issmallPrice={false}
              ></Cards>
            </div>
            <div className="hidden_card">
              <Cards
                price="34392₽"
                img={jacket}
                smallPrice="17392"
                discount="50"
                issmallPrice={true}
                isFavorite={false}
              ></Cards>
            </div>
          </div>
          <button className="new-items_button">Показать больше</button>

          <div class="sneakers_img_brands_img">
            <div class="sneakers_img">
              <img src={Sneakers} alt=""></img>
            </div>
            <div class="brands_img">
              <img src={Brands11} alt=""></img>
            </div>
          </div>
          <div className="promotion">
            <div className="name_promotion">Название Акции</div>
            <div className="aphorism">
              Меня не спрашивали, а надо было спросить, что означает имя
              Заратустры именно в моих устах — в устах первого имморалиста: ведь
              то, в чём состоит неслыханная уникальность этого перса в истории,
              являет собою противоположность как раз этому.
            </div>
            <div className="DC_Shoes">DC Shoes популярное в коллекции</div>
          </div>
          <div className="new-items">
            <div className="common_card">
              <Cards
                price="34392₽"
                img={Product2}
                isFavorite={false}
                smallPrice="17392"
                discount="50"
                issmallPrice={true}
              />
            </div>
            <div className="common_card">
              <Cards
                price="34392₽"
                img={Boot}
                isFavorite={false}
                smallPrice="17392"
                discount="50"
                issmallPrice={true}
              />
            </div>
            <div className="common_card">
              <Cards
                price="34392₽"
                img={Product3}
                isFavorite={false}
                issmallPrice={false}
              />
            </div>
            <div className="common_card">
              <Cards
                price="34392₽"
                img={Product4}
                isFavorite={false}
                issmallPrice={false}
              />
            </div>
            <div className="hidden_card">
              <Cards
                price="34392₽"
                img={Product1}
                isFavorite={false}
                issmallPrice={false}
              ></Cards>
            </div>
            <div className="hidden_card">
              <Cards
                price="34392₽"
                img={jacket}
                smallPrice="17392"
                discount="50"
                issmallPrice={true}
                isFavorite={false}
              ></Cards>
            </div>
          </div>
          <button className="new-items_button">Показать больше</button>
        </div>
      </div>
    </div>
  );
}

export default Basic;
