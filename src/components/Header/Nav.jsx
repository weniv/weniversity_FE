import { Link, useLocation } from "react-router-dom";
import styles from "./Nav.module.scss";

export default function Nav(props) {
  const pathname = useLocation().pathname;

  const { navRef } = props;
  const navItems = [
    { name: "소개", href: "/about" },
    { name: "강의", href: "/courses" },
  ];

  return (
    <nav ref={navRef} {...props}>
      <ul>
        {navItems.map((item, index) => (
          <li key={index}>
            <Link
              className={pathname === item.href ? styles.active : ""}
              to={item.href}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
