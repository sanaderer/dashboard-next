import styles from './navbar.module.css'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <div className={styles.search}>
          <Image src="/search.png" alt="logo" width="24" height="24" />
          <input type="text" placeholder="Search" className={styles.input}/>
        </div>
      </div>
    </div>
  )
}

export default Navbar;