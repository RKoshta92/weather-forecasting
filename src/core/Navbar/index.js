"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import ProfileLogo from "../../../public/profile-logo.png";
import styles from "./styles.module.css";

const Navbar = () => {
  const { push } = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.flex}>
        <div onClick={() => push("/")} className={styles.flex_align}>
          <Image
            src={ProfileLogo}
            style={{ height: "28px", width: "28px" }}
            alt="logo"
          />
          <div className={styles.heading}>ClimaCast</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
