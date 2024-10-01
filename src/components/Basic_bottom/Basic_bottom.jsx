import "./Basic_bottom.css";
import Loyalty from "../../shopImg/footer/loyalty.png";
import Loyalty2 from "../../shopImg/footer/loyalty2.png";
import Yellowjacket from "../../shopImg/footer/yellowjacket.png";
import Loyaltyprogram from "../../shopImg/footer/loyaltyprogram.png";
import Letter from "../../shopImg/footer/letter.png";
import React, { useState, useEffect } from "react";
import telegram_black from "../../shopImg/footer/telegram_black.png";
import letter_black from "../../shopImg/footer/letter_black.png";
import play from "../../shopImg/footer/play.png";
import email from "../../shopImg/footer/email.png";

function Header() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 980);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 980);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="">
      <div className="blogs_footer_content">
        <div className="blogs_content">
          <div class="blogs">
            <div className="blogs_left">
              <div class="blogs_jacket">
                <img src={Yellowjacket} alt=""></img>
              </div>
              <div className="play_blogs">
                <img src={play} alt=""></img>
              </div>
            </div>

            <div class="blogs_right">
              <div className="new_articles">Новые статьи </div>
              <div className="play_blogs2">
                <img src={play} alt=""></img>
              </div>
              <div class="blogs_nav">
                <div className="title_blogs">Блоги</div>
                <div className="link_underline">
                  <a href="#">Все блоги</a>
                </div>
              </div>
              <div className="name_blogs_excerption">
                <div className="name_blogs">
                  Очень преочень длинное название блога
                </div>
                <div className="blogs_excerption">
                  <div className="blogs_excerption_aphorism">
                    Меня не спрашивали, а надо было спросить, что означает имя
                    Заратустры именно в моих устах — в устах первого
                    имморалиста: ведь то, в чём состоит неслыханная уникальность
                    этого перса в истории, являет собою противоположность как
                    раз этому.
                  </div>
                  <div className="blogs_excerption_aphorism2">
                    Меня не спрашивали, а надо было спросить, что означает имя
                    Заратустры именно в моих устах — в устах первого
                    имморалиста: ведь то, в чём состоит неслыханная уникальность
                    этого перса в истории, являет собою противоположность как
                    раз этому...
                  </div>
                  <div className="continuation">
                    <div className="border_continuation"></div>
                    <div className="link_underline">
                      <a href="#">Читать продолжение</a>
                    </div>
                  </div>
                  <div className="all_articles">
                    <a href="#">Смотреть все статьи</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="loyalty_program">
        <div className="loyalty_program_left">
          <div className="main_picture_left">
            <img src={Loyalty} alt=""></img>
          </div>
          <div className="loyalty_program_content">
            <div className="loyalty_program_brand">
              <img src={Loyaltyprogram} alt=""></img>
            </div>
            <div className="loyalty_program_title">Программа лояльности</div>
            <div className="loyalty_program_points">
              Зарабатывайте баллы и получайте преимущества
            </div>
            <button className="loyalty_program_button">Вступить в клуб</button>
          </div>
        </div>

        <div className="loyalty_program_right">
          <div className="main_picture_right">
            <img src={Loyalty2} alt=""></img>
          </div>

          {isMobile ? (
            <div className="loyalty_program_content">
              <div className="loyalty_program_title">Скидка -15%</div>
              <div className="loyalty_additionally">Дополнительно</div>
              <div className="loyalty_program_points">
                За подписку на наши новости
              </div>
              <div className="loyalty_program_input">
                <input
                  className="loyalty_input"
                  type="text"
                  placeholder="введите имейл"
                />
                <div class="mail_block">
                  <img src={email} alt=""></img>
                </div>
              </div>
            </div>
          ) : (
            <div className="loyalty_program_content">
              <div className="loyalty_program_letter">
                <img src={Letter} alt=""></img>
              </div>

              <div className="loyalty_program_title">Скидка -10%</div>
              <div className="loyalty_program_points">
                За подписку на наши новости
              </div>
              <div className="loyalty_program_input">
                <input
                  className="loyalty_input"
                  type="text"
                  placeholder="Email"
                />
                <div class="inp_letter">
                  <img src={letter_black} alt=""></img>
                </div>
                <div class="inp_telegram">
                  <img src={telegram_black} alt=""></img>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
