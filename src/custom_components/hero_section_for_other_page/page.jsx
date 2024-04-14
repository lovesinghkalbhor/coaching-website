import styles from "./hero_section.module.css";
import Image from "next/image";
import { Button } from "@/components/ui/button";

import { motion } from "framer-motion";
import { text_container_parent_animation } from "@/lib/utils";

export default function Hero_other_pages({ children }) {
  return (
    <>
      <div className={styles.other_page_hero}>
        <motion.div
          className={styles.hero__sub_wave_1Image}
          animate={{
            y: [0, 10, 0],
            transition: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          <Image
            className={styles.hero__sub_wave_1Image}
            src={"/HeroBackgroundImage/sub-wave-1.png"}
            width={500}
            height={500}
            alt="background image"
          ></Image>
        </motion.div>
        <motion.div
          className={styles.hero__sub_wave_1Image}
          animate={{
            y: [0, 20, 0],
            transition: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          <Image
            className={styles.hero__sub_wave_2Image}
            src={"/HeroBackgroundImage/sub-wave-2.png"}
            width={500}
            height={500}
            alt="background image"
          ></Image>
        </motion.div>
        <motion.div
          className={styles.hero__sub_wave_1Image}
          animate={{
            y: [0, 30, 0],
            transition: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          <Image
            className={styles.hero__sub_wave_3Image}
            src={"/HeroBackgroundImage/sub-wave-3.png"}
            width={500}
            height={500}
            alt="background image"
          ></Image>
        </motion.div>

        <Image
          className={styles.other_page_hero__longgradient}
          src={"/images/longRectangle.png"}
          width={2000}
          height={200}
        ></Image>
        <div
          className={`${styles.other_page_hero__imgcontainer} container   flex-wrap flex content-center  mx-auto`}
        >
          <Image
            className={styles.other_page_hero__planeImage}
            src={"/HeroBackgroundImage/flying_plane.png"}
            width={1000}
            height={1000}
          ></Image>
          {/* <Image
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
          ></Image> */}

          {/* <Image
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
          ></Image> */}

          <motion.div
            className={styles.other_page_hero__bubble2Image}
            animate={{
              y: [-510, 300],
              transition: {
                duration: 35,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          >
            <Image
              // className={styles.other_page_hero__bubble2Image}
              src={"/HeroBackgroundImage/bubble2.png"}
              width={200}
              height={200}
              alt="background image"
            ></Image>
          </motion.div>

          <motion.div
            className={styles.other_page_hero__bubble1Image}
            animate={{
              // y: ["50px", "-10px"], // Define animation path (up and down)
              y: [-410, 300], // Define animation path (wave-like)
              transition: {
                duration: 30, // Animation duration (1 second)
                repeat: Infinity, // Repeat animation infinitely
                ease: "easeInOut", // Smooth transition (easeInOut)
                // delay: 1,
              },
            }}
          >
            <Image
              // className={styles.hero__bubble1Image}
              src={"/HeroBackgroundImage/bubble1.png"}
              width={200}
              height={200}
              alt="background image"
            ></Image>
          </motion.div>

          {/* Main content of website */}
          <motion.div
            className={`hero__textcontent`}
            initial="hidden"
            animate="show"
            variants={text_container_parent_animation}
          >
            {children}
          </motion.div>
        </div>
      </div>
    </>
  );
}
