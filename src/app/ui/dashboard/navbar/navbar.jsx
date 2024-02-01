// navbar.jsx
import SearchSvg from "@/src/svgs/SearchSvg";
import styles from "./navbar.module.css";
import ProfileSvg from "@/src/svgs/ProfileSvg";
import AddSvg from "@/src/svgs/AddSvg";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <SearchSvg width={24} />
        <input type="text" placeholder="Search" className={styles.input} />
      </div>
      <div className={styles.addSvg}>
        <ProfileSvg width={40} />
        <ProfileSvg width={40} />
        <ProfileSvg width={40} />
        <AddSvg width={40} />
      </div>
    </div>
  );
};

export default Navbar;
