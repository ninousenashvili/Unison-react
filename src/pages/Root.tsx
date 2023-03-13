import { Link, Outlet } from "react-router-dom";
import styles from "../pageStyles/Header.module.css";

export default function Root() {
  return (
    <>
      <header>
        <nav className={styles.navigation}>
          <ul className={styles.ulList}>
            <li>
              <Link className={styles.navigationList} to="/Main">
                მთავარი
              </Link>
            </li>
            <li>
              <Link className={styles.navigationList} to="/AboutUs">
                ჩვენს შესახებ
              </Link>
            </li>
            <li>
              <Link className={styles.navigationList} to="/News">
                სიახლეები
              </Link>
            </li>
            <li>
              <Link className={styles.navigationList} to="/Contact">
                კონტაქტი
              </Link>
            </li>
            <li>
              <Link className={styles.navigationList} to="/Partners">
                პარტნიორები
              </Link>
            </li>
          </ul>
          <button className={styles.sosButton}>sos</button>
          <div>
            <div>
              <p>ქართული</p>
            </div>
            <p>ცხელი ხაზი</p>
          </div>
        </nav>
      </header>

      <Outlet />
      <footer>Footer </footer>
    </>
  );
}
