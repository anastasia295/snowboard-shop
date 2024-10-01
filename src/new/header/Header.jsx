import React from "react";
import "./header.css";

export const Header = () => {
  return (
    <div className="header-container">
      <div className="header layout">
        <div>
          <a className="header-item">Ваш регион доставки: Москва</a>
          <a className="header-item">Магазины</a>
          <a className="header-item">Помощь</a>
          <a className="header-item">Блоги</a>
        </div>
        <div>
          <a className="header-item">Бесплатная доставка *</a>
          <a className="header-item">Оплата при получении</a>
          <a className="header-item">Возврат в течение 14 дней</a>
        </div>
      </div>
    </div>
  );
};
