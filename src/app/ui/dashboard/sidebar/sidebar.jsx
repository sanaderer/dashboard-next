import React from 'react'
import styles from './sidebar.module.css'
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
      <Link href="/">
        <LogoSvg width={36} />
      </Link>
      </div>
      <hr className={styles.divider}/> 
      <div className={styles.navItem}>
        <UserSvg width={26} />
        <UploadSvg width={26}/>
        <AnalyticsSvg width={26} />
        <ImageSvg width={26} />
        <CalendarSvg width={26} />
        <HotSvg width={26} />
        <DataSvg width={26} />
      </div>
      <div className={styles.navbar}>
        <SettingSvg width={26} />
      </div>
    </div>
  );
};

export default Sidebar;
