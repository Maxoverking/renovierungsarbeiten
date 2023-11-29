import { useEffect, useState } from "react";
import css from "./Header.module.css";
import logo from "/logo.png";
import { Link } from "react-router-dom";

export default function Header(): JSX.Element {
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 800) {
        setScrollPosition(window.scrollY);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerHeight = Math.max(160 - scrollPosition * 0.3, 80);

  return (
    <div
      className={css.headerContainer}
      style={{ height: `${headerHeight}px` }}
    >
      <img
        className={css.logo}
        style={{ height: `${headerHeight - 20}px` }}
        src={logo}
        alt="logo"
      />

      <nav>
        <ul className={css.navigate}>
          <li className={css.link}>
            <Link to="#Contacts">Contacts</Link>
          </li>
          <li className={css.link}>
            <Link to="#Feedback">Feedback</Link>
          </li>
          <li className={css.link}>
            <Link to="#Gallery">Gallery</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
