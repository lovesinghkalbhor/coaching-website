import styles from "./hero_section.module.css";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero_other_pages({ children }) {
  return (
    <>
      <div className={styles.other_page_hero}>
        <div
          className={`${styles.other_page_hero__imgcontainer} container  flex-wrap flex content-center  mx-auto`}
        >
          <Image
            className={styles.other_page_hero__planeImage}
            src={"/HeroBackgroundImage/flying_plane.png"}
            width={1000}
            height={1000}
          ></Image>
          <Image
            className={styles.other_page_hero__wave2Image}
            src={"/HeroBackgroundImage/Wave2.png"}
            width={1000}
            height={1000}
          ></Image>
          <Image
            className={styles.other_page_hero__wave1Image}
            src={"/HeroBackgroundImage/Wave2.png"}
            width={1000}
            height={1000}
          ></Image>
          <Image
            className={styles.other_page_hero__bubble2Image}
            src={"/HeroBackgroundImage/bubble2.png"}
            width={200}
            height={200}
          ></Image>
          <Image
            className={styles.other_page_hero__bubble1Image}
            src={"/HeroBackgroundImage/bubble1.png"}
            width={200}
            height={200}
          ></Image>
          <Image
            className={styles.other_page_hero__longgradient}
            src={"/images/longRectangle.png"}
            width={2000}
            height={200}
          ></Image>

          {/* Main content of website */}
          {children}
        </div>
      </div>
    </>
  );
}
