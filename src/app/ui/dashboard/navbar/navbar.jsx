// navbar.jsx
import SearchSvg from "@/src/svgs/SearchSvg";
import styles from "./navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <SearchSvg width={24} />
        <input type="text" placeholder="Search" className={styles.input} />
      </div>
      <div className={styles.addButton}>
        <Link href="/dashboard/blog">
          <button className={styles.addButton}>+</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
