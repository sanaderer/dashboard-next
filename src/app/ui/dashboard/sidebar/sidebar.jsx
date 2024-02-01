import React from 'react'
import styles from './sidebar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import UserSvg from '/src/svgs/UserSvg'
import UploadSvg from '/src/svgs/UploadSvg'
import AnalyticsSvg from '@/src/svgs/AnalyticsSvg'
import ImageSvg from '@/src/svgs/ImageSvg'
import CalendarSvg from '@/src/svgs/CalendarSvg'
import HotSvg from '@/src/svgs/HotSvg'
import DataSvg from '@/src/svgs/DataSvg'
import SettingSvg from '@/src/svgs/SettingSvg'
import LogoSvg from '@/src/svgs/LogoSvg'

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
      <Link href="/dashboard">
        <LogoSvg width={36} />
      </Link>
      </div>
      <hr className={styles.divider}/>
      <UserSvg width={26} />
      <UploadSvg width={26}/>
      <AnalyticsSvg width={26} />
      <ImageSvg width={26} />
      <CalendarSvg width={26} />
      <HotSvg width={26} />
      <DataSvg width={26} />
      <SettingSvg width={26} className={styles.settings} />
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
