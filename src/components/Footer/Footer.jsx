import "./Footer.css";

import AppStore from "../../shopImg/footer/AppStore.png";
import GooglePlay from "../../shopImg/footer/GooglePlay.png";
import logo_img from "../../shopImg/footer/logo_img.png";
import logo_title from "../../shopImg/footer/logo_title.png";
import quarcode from "../../shopImg/footer/quarcode.png";
import telephone from "../../shopImg/footer/telephone.png";
import message from "../../shopImg/footer/message.png";
import message_gray from "../../shopImg/footer/message_gray.png";
import telegram from "../../shopImg/footer/telegram.png";

import logo_inst from "../../shopImg/mobile/logo_inst.png";
import logo_vk from "../../shopImg/mobile/logo_vk.png";
import Sport1 from "../../shopImg/mobile/Sport1.png";
import Sport2 from "../../shopImg/mobile/Sport2.png";
import Sport3 from "../../shopImg/mobile/Sport3.png";
import Sport4 from "../../shopImg/mobile/Sport4.png";
import instagram from "../../shopImg/footer/instagram.png";
import facebook from "../../shopImg/footer/facebook.png";
import youtube from "../../shopImg/footer/youtube.png";
import twitter from "../../shopImg/footer/twitter.png";
import twitch from "../../shopImg/footer/twitch.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_black_bottom">
        <div className="footer_black">
          <div className="footer_black_size">
            <div className="subscription_social_networks">
              <div className="sub">Подписывайся на нас </div>
              <div className="name_social_networks">@boardriders</div>
              <div className="logotype_social_networks">
                <img src={logo_inst} alt=""></img>
                <img src={logo_vk} alt=""></img>
              </div>
              <div className="sport_img">
                <img src={Sport1} alt=""></img>
                <img src={Sport3} alt=""></img>
                <img src={Sport2} alt=""></img>
                <img src={Sport4} alt=""></img>
              </div>
            </div>
            <div className="footer_black_left">
              <div className="logo_logo">
                <div className="logo_img">
                  <img src={logo_img} alt=""></img>
                </div>
                <div className="logo_title_img">
                  <img src={logo_title} alt=""></img>
                </div>
              </div>
              <div className="access_contacts">
                <div className="app_title_left">
                  Доступ к ранним релизам в приложении
                  <div className="access_app">
                    <div className="access_app_loading">
                      <div className="app_top">
                        <div className="app_img_apple">
                          <img src={AppStore} alt=""></img>
                        </div>
                        <div className="app_name">
                          <div className="loading">Download on the</div>
                          <div className="social_network">App Store</div>
                        </div>
                      </div>
                      <div className="app_bottom">
                        <div className="app_img">
                          <img src={GooglePlay} alt=""></img>
                        </div>
                        <div className="app_name">
                          <div className="loading">Get it on </div>
                          <div className="social_network">Google Play</div>
                        </div>
                      </div>
                    </div>
                    <div className="quarcode">
                      <img src={quarcode} alt=""></img>
                    </div>
                  </div>
                </div>
                <div className="app_title_right">
                  <div className="contacts_title"> Контакты</div>
                  <div className="contacts">
                    <div className="app_contacts">
                      <div className="app_img">
                        <img src={telephone} alt=""></img>
                      </div>
                      <div className="app_name">
                        <div className="social_network">8 (800) 511-74-68</div>
                        <div className="loading">Бесплатная горячая линия</div>
                        <div className="loading_time">Ежедневно с 9 до 21</div>
                      </div>
                    </div>
                    <div className="app_contacts">
                      <div className="app_img">
                        <img src={message} alt=""></img>
                      </div>
                      <div className="app_name">
                        <div className="social_network">Контактный Email</div>
                        <div className="loading">info@brd.ru</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer_black_right">
              <div className="newsletter">
                <div className="newsletter_left">
                  <div className="message_gray">
                    <img src={message_gray} alt=""></img>
                  </div>
                  <div className="sub_newsletter">
                    Подпишись на рассылку и получи <span> -10%</span> скидку
                  </div>
                </div>
                <div className="newsletter_right">
                  <img src={telegram} alt=""></img>
                </div>
              </div>

              <div className="footer_nav">
                <div className="footer_help">
                  <div className="help"> Помощь</div>
                  <ul className="footer_item">
                    <li className="footer_nav_item">
                      <a className="footer_nav_link" href="#">
                        Доставка
                      </a>
                    </li>
                    <li className="footer_nav_item">
                      <a className="footer_nav_link" href="#">
                        Оплата
                      </a>
                    </li>
                    <li className="footer_nav_item">
                      <a className="footer_nav_link" href="#">
                        Оплата
                      </a>
                    </li>
                    <li className="footer_nav_item">
                      <a className="footer_nav_link" href="#">
                        Возврат
                      </a>
                    </li>
                    <li className="footer_nav_item">
                      <a className="footer_nav_link" href="#">
                        Отзывы (2290)
                      </a>
                    </li>
                    <li className="footer_nav_item">
                      <a className="footer_nav_link" href="#">
                        Акции и скидки
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="footer_company">
                  <div className="company"> </div>
                  Компания
                  <ul className="footer_item">
                    <li className="footer_nav_item">
                      <a className="footer_nav_link" href="#">
                        Контакты
                      </a>
                    </li>
                    <li className="footer_nav_item">
                      <a className="footer_nav_link" href="#">
                        О boardriders
                      </a>
                    </li>
                    <li className="footer_nav_item">
                      <a className="footer_nav_link" href="#">
                        Вакансии
                      </a>
                    </li>
                    <li className="footer_nav_item">
                      <a className="footer_nav_link" href="#">
                        Публичная оферта
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="footer_boardriders">
                  <div className="boardriders"> Boardriders Inc.</div>

                  <ul className="footer_item">
                    <li className="footer_nav_item">
                      <a className="footer_nav_link" href="#">
                        Франчайзинг
                      </a>
                    </li>
                    <li className="footer_nav_item">
                      <a className="footer_nav_link" href="#">
                        Quiksilver
                      </a>
                    </li>
                    <li className="footer_nav_item">
                      <a className="footer_nav_link" href="#">
                        Roxy
                      </a>
                    </li>
                    <li className="footer_nav_item">
                      <a className="footer_nav_link" href="#">
                        DC Shoes
                      </a>
                    </li>
                    <li className="footer_nav_item">
                      <a className="footer_nav_link" href="#">
                        Boardriders Club
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="social_media_footer">
              <div className="social_media">
                <div className="social_media_left">
                  <div className="social_media_img">
                    <img src={twitter} alt=""></img>
                  </div>
                  <div className="social_media_img">
                    <img src={facebook} alt=""></img>
                  </div>
                  <div className="social_media_img">
                    <img src={twitch} alt=""></img>
                  </div>
                  <div className="social_media_img">
                    <img src={youtube} alt=""></img>
                  </div>
                  <div className="social_media_img">
                    <img src={instagram} alt=""></img>
                  </div>
                </div>

                <div className="license_right">
                  © 2020 Brd.ru. Все права защищены
                </div>
              </div>
            </div>
            <div className="border_grey_top"></div>
            <div className="border_grey_bottom"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
