import React from 'react'
import styles from './sidebar.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
      <Link href="/dashboard">
        <Image src="/logo.png" alt="logo" width="36" height="36" />
      </Link>
      </div>
      <hr className={styles.divider}/>
      <NavItem icon="/icon-1.png" alt="user" />
      <NavItem icon="/icon-2.png" alt="upload" />
      <NavItem icon="/icon-3.png" alt="analytics" />
      <NavItem icon="/icon-4.png" alt="images" />
      <NavItem icon="/icon-5.png" alt="calendar" />
      <NavItem icon="/icon-8.png" alt="settings" className={styles.settings} />
      <ul>
      </ul>
    </div>
  );
};

const NavItem = ({ icon, alt, className }) => {
  return (
    <div className={`${styles.navItem} ${className}`}>
      <Image src={icon} alt={alt} width="20" height="20" />
    </div>
  );
};

export default Sidebar;
