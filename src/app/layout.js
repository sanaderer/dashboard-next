import { Inter } from "next/font/google";
import "./ui/globals.css";
import Navbar from "./ui/dashboard/navbar/navbar";
import Sidebar from "./ui/dashboard/sidebar/sidebar";
import styles from "./ui/dashboard/dashboard.module.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dashboard",
  description: "Dashboard in Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div  className={styles.container}>
        <div className={styles.menu}>
            <Sidebar />
        </div>
        <div  className={styles.content}>
            <Navbar />
            {children}
        </div>
    </div>
      </body>
    </html>
  );
}
