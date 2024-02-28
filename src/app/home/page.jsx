import Link from "next/link";
// "use client";
import Image from "next/image";
import styles from "./background.module.css";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { Clock } from "lucide-react";
import ContactUsCard from "@/custom_components/contactUsCard/page";
import Footer from "@/custom_components/footer/Footer";

export default function Home() {
  return (
    <>
      <div className="hero">
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
          <Image
            className={styles.hero__wave2Image}
            src={"/HeroBackgroundImage/Wave2.png"}
            width={1000}
            height={1000}
            alt="background image"
          ></Image>
          <Image
            className={styles.hero__wave1Image}
            src={"/HeroBackgroundImage/Wave2.png"}
            width={1000}
            height={1000}
            alt="background image"
          ></Image>
          <Image
            className={styles.hero__bubble2Image}
            src={"/HeroBackgroundImage/bubble2.png"}
            width={200}
            height={200}
            alt="background image"
          ></Image>
          <Image
            className={styles.hero__bubble1Image}
            src={"/HeroBackgroundImage/bubble1.png"}
            width={200}
            height={200}
            alt="background image"
          ></Image>
          <Image
            className={styles.hero__longgradient}
            src={"/images/longRectangle.png"}
            width={2000}
            height={200}
            alt="background image"
          ></Image>

          {/* Main content of website */}
          <div className="hero__textcontainer grid md:grid-cols-2 justify-items-center   content-center pt-16 ">
            <div className={`hero__textcontent`}>
              <h1 className=" ">Where Every problem is solved of NIOS</h1>
              <p className="">
                {" "}
                National Institute of Open Schooling (NIOS) was established in
                November,1989. World largest open schooling system. Our aim is
                This website is not associated with NIOS, For official website
                of NIOS visit - https://www.nios.ac.in/{" "}
              </p>
              <Button className="mt-8">
                <Phone className="mr-2 h-4 w-4" /> Contact us
              </Button>
            </div>
            <div>
              <Image
                className="   w-96 md:w-full mt-8 md:mt-0"
                src={"/images/heroimg.png"}
                width={530}
                height={530}
                alt="background image"
              ></Image>
            </div>
          </div>
        </div>
      </div>
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

        <div
          className={`grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 justify-items-center sm:justify-items-start `}
        >
          <Link
            href="/courses-list"
            className={`${styles.coloredcards__card} ${styles.coloredcards__card1} card-hover-effect`}
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
        </div>
      </div>
    </>
  );
}
