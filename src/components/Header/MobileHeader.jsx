"use client";
import { useEffect, useRef, useState } from "react";

import SVGMenu from "../../svg/SVGMenu";
import BtnIcon from "../button/BtnIcon";

import Nav from "./Nav";
import Logo from "./Logo";

import styles from "./MobileHeader.module.scss";
import SVGClose from "../../svg/SVGClose";

export default function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const wrapRef = useRef(null);

  const toggleMenu = () => {
    if (isOpen) {
      navRef.current.classList.add(styles.slideUp);
      navRef.current.classList.remove(styles.slideDown);

      setTimeout(() => {
        setIsOpen(false);
      }, 200);
    } else {
      setIsOpen(true);
      setTimeout(() => {
        navRef.current.classList.remove(styles.slideUp);
        navRef.current.classList.add(styles.slideDown);
      }, 0);
    }
  };

  useEffect(() => {
    // focus
    if (isOpen) {
      const items = navRef.current.querySelectorAll("a");
      const lastItem = items[items.length - 1];
      const firstItem = wrapRef.current.querySelector("button");

      const handleFirstFocus = (e) => {
        if (!e.shiftKey && e.key === "Tab") {
          e.preventDefault();
          firstItem.focus();
        }
      };

      const handleLastFocus = (e) => {
        if (e.shiftKey && e.key === "Tab") {
          e.preventDefault();
          lastItem.focus();
        }
      };

      lastItem.addEventListener("keydown", handleFirstFocus);
      firstItem.addEventListener("keydown", handleLastFocus);

      const handleOutsideClick = (e) => {
        if (!navRef.current.contains(e.target)) {
          toggleMenu();
        }
      };
      const handleESC = (e) => {
        if (e.key === "Escape") {
          toggleMenu();
        }
      };

      setTimeout(() => {
        window.addEventListener("click", handleOutsideClick);
        window.addEventListener("keydown", handleESC);
      });

      return () => {
        window.removeEventListener("keydown", handleESC);
        window.removeEventListener("click", handleOutsideClick);

        lastItem.removeEventListener("keydown", handleFirstFocus);
        firstItem.removeEventListener("keydown", handleLastFocus);
      };
    }
  }, [isOpen]);

  return (
    <>
      <div className={styles.wrap} ref={wrapRef}>
        <Logo />

        <BtnIcon onClick={toggleMenu} className={styles.btn}>
          {isOpen ? (
            <>
              <SVGClose />
              <span className="a11y-hidden">메뉴 닫기</span>
            </>
          ) : (
            <>
              <SVGMenu />
              <span className="a11y-hidden">메뉴 열기</span>
            </>
          )}
        </BtnIcon>
      </div>

      {isOpen && <Nav navRef={navRef} className={styles.nav} />}
    </>
  );
}
