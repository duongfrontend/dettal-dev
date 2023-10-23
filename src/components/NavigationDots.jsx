/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */

import React from "react";

const NavigationDots = ({ active }) => (
  <div className="app__navigation">
    {[
      "trang chủ",
      "giới thiệu",
      "dự án",
      "kỹ năng",
      "lời chứng",
      "liên hệ",
    ].map((item, index) => (
      <a
        href={`#${item}`}
        key={item + index}
        className={`app__navigation-dot ${active === item ? "some-class" : ""}`}
      />
    ))}
  </div>
);

export default NavigationDots;
