// navbar.jsx
import styles from './navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <Image src="/search.png" alt="logo" width="24" height="24" />
        <input type="text" placeholder="Search" className={styles.input}/>
      </div>
      <div className={styles.addButton}>
        <Link href="/dashboard/blog">
          <button className={styles.addButton}>+</button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar;
