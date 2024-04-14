"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

import Image from "next/image";
import styles from "./background.module.css";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { Clock } from "lucide-react";
import ContactUsCard from "@/custom_components/contactUsCard/page";
import Footer from "@/custom_components/footer/Footer";
import { motion } from "framer-motion";
import { card_animation_parent } from "@/lib/utils";

export default function Home() {
  const text_container_animation = {
    hidden: { opacity: 0 },
    show: {
      x: [-410, 0],
      opacity: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        bounce: 0.4,
        ease: "easeInOut",
      },
    },
  };

  const text_container_parent_animation = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <>
      <motion.div
        animate={{
          transition: {
            staggerChildren: 1,
          },
        }}
        className="hero overflow-hidden relative"
      >
        {/* <Image
          className={styles.hero__wave1Image}
          src={"/HeroBackgroundImage/Wave2.png"}
          width={1000}
          height={1000}
          alt="background image"
        ></Image> */}
        {/* <Image
          className={styles.hero__wave2Image}
          src={"/HeroBackgroundImage/Wave2.png"}
          width={500}
          height={500}
          alt="background image"
        ></Image> */}
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
        <div
          className={`${styles.hero__imgcontainer} xs:container  py-4 xs:py-0 flex-wrap flex content-center  mx-auto`}
        >
          <Image
            className={styles.hero__planeImage}
            src={"/HeroBackgroundImage/flying_plane.png"}
            width={1000}
            height={1000}
            alt="background image"
          ></Image>

          <motion.div
            className={styles.hero__bubble1Image}
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
              className={styles.hero__bubble2Image}
              src={"/HeroBackgroundImage/bubble2.png"}
              width={200}
              height={200}
              alt="background image"
            ></Image>
          </motion.div>

          <motion.div
            className={styles.hero__bubble1Image}
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
          <div className="hero__textcontainer grid md:grid-cols-2 justify-items-center   content-center pt-16 ">
            <motion.div
              className={`hero__textcontent`}
              initial="hidden"
              animate="show"
              variants={text_container_parent_animation}
            >
              <motion.h1 variants={text_container_animation}>
                Where Every problem is solved of NIOS
              </motion.h1>
              <motion.p variants={text_container_animation}>
                {" "}
                National Institute of Open Schooling (NIOS) was established in
                November,1989. World largest open schooling system. Our aim is
                This website is not associated with NIOS, For official website
                of NIOS visit - https://www.nios.ac.in/{" "}
              </motion.p>
              <motion.div variants={text_container_animation}>
                <Link href="#contact_us">
                  <Button className="mt-8 active:scale-95  transition-all duration-300">
                    <Phone className="mr-2 h-4 w-4" /> Contact us
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={
                {
                  x: [410, 0],
                  opacity: 1,
                  zIndex: 10,
                  transition: {
                    duration: 0.5,
                    type: "spring",
                    bounce: 0.4,
                    ease: "easeInOut",
                  },
                } // Slide and fade in
              }
            >
              <Image
                className="   w-96 md:w-full mt-8 md:mt-0 z-10"
                src={"/images/heroimg.png"}
                width={530}
                height={530}
                alt="background image"
              ></Image>
            </motion.div>
          </div>
        </div>
        <Image
          className={styles.hero__longgradient}
          src={"/images/longRectangle.png"}
          width={2000}
          height={200}
          alt="background image"
        ></Image>
      </motion.div>
      {/* Cards section for home page */}
      <div className="section container relative overflow-hidden mx-auto ">
        {/* <Image
          className="section__planeImage"
          src={"/HeroBackgroundImage/flying_plane.png"}
          width={1000}
          height={100}
          alt="background image"
        ></Image> */}
        <div className="section__heading__container">
          <span className="section__span">Cources</span>
          <h1 className="section__heading">
            Browse Top Essential <br></br>Career courses
          </h1>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          variants={card_animation_parent}
          viewport={{ amount: 0.2 }}
          className={`grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 justify-items-center sm:justify-items-start `}
        >
          <Link
            className={`${styles.coloredcards__card} ${styles.coloredcards__card1} card-hover-effect`}
            href="/store"
          >
            <Clock
              className={styles.coloredcards__icon}
              color="white"
              strokeWidth={3}
              size={45}
            ></Clock>
            <p className={styles.coloredcards__p}>
              {" "}
              NIOS
              <br></br> Latest Courses
            </p>
          </Link>

          <Link
            className={`${styles.coloredcards__card} ${styles.coloredcards__card2} card-hover-effect`}
            href="/pdf-store"
          >
            <Clock
              className={styles.coloredcards__icon}
              color="white"
              strokeWidth={3}
              size={45}
            ></Clock>
            <p className={styles.coloredcards__p}>
              {" "}
              NIOS
              <br></br> Latest Updates
            </p>
          </Link>

          <div
            className={`${styles.coloredcards__card} ${styles.coloredcards__card3} card-hover-effect`}
          >
            <Clock
              className={styles.coloredcards__icon}
              color="white"
              strokeWidth={3}
              size={45}
            ></Clock>
            <p className={styles.coloredcards__p}>
              {" "}
              NIOS
              <br></br> Latest Updates
            </p>
          </div>

          <div
            className={`${styles.coloredcards__card} ${styles.coloredcards__card4} card-hover-effect`}
          >
            <Clock
              className={styles.coloredcards__icon}
              color="white"
              strokeWidth={3}
              size={45}
            ></Clock>
            <p className={styles.coloredcards__p}>
              {" "}
              NIOS
              <br></br> Latest Updates
            </p>
          </div>

          <div
            className={`${styles.coloredcards__card} ${styles.coloredcards__card2} card-hover-effect`}
          >
            <Clock
              className={styles.coloredcards__icon}
              color="white"
              strokeWidth={3}
              size={45}
            ></Clock>
            <p className={styles.coloredcards__p}>
              {" "}
              NIOS
              <br></br> Latest Updates
            </p>
          </div>

          <div
            className={`${styles.coloredcards__card} ${styles.coloredcards__card3} card-hover-effect`}
          >
            <Clock
              className={styles.coloredcards__icon}
              color="white"
              strokeWidth={3}
              size={45}
            ></Clock>
            <p className={styles.coloredcards__p}>
              {" "}
              NIOS
              <br></br> Latest Updates
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
}
