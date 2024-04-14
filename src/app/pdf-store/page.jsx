"use client";
import React, { useState, useEffect } from "react";
import CoursesCard from "@/custom_components/coursescard/page";
import Hero_other_pages from "@/custom_components/hero_section_for_other_page/page";
import { motion } from "framer-motion";
import axios from "axios";
import { clsx } from "clsx";
import { store_card_animation_parent } from "@/lib/utils";

export default function BuyCourse() {
  const [cardData, setcardData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [language, setlanguage] = useState("english");
  const [fileType, setfileType] = useState("tma");

  const changeLanguage = () => {
    if (language == "english") {
      setlanguage("hindi");
    } else {
      setlanguage("english");
    }
  };
  const changeFile = () => {
    if (fileType == "tma") {
      setfileType("practical_files");
    } else {
      setfileType("tma");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_DOMAIN}courses/get_all_pdf_notes.php?medium=${language}&type=${fileType}`
        ); // Replace with your actual API endpoint
        setcardData(response.data.data);
        console.log(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [language, fileType]);

  return (
    <div>
      {" "}
      <Hero_other_pages>
        <div className=" flex flex-wrap justify-start content-center  ">
          <div className="hero__textcontent">
            <h1 className=" ">
              NIOS CLASS 12TH Handwritten <br></br>SOLVED TMA
            </h1>
            <p className="  ">
              National Institute of Open Schooling (NIOS) was established in
              November,1989. World
            </p>
          </div>
        </div>
      </Hero_other_pages>
      <div className="section container relative overflow-hidden mx-auto ">
        {/* <Image
          className="section__planeImage"
          src={"/HeroBackgroundImage/flying_plane.png"}
          width={1000}
          height={1000}
        ></Image> */}

        <div>
          <div className="flex flex-wrap justify-between mb-10 gap-5">
            <div>
              <span className="section__span">Cources</span>
              <h1 className="section__heading ">
                Browse Top Essential <br></br>Career courses
              </h1>
            </div>
            <div className="flex space-x-6 static">
              <h5
                className={clsx(
                  "hover:text-blue-600 hover:cursor-pointer",
                  language == "hindi" ? "font-semibold underline" : "font-light" // Add "heading--bold" class if isBold is true
                )}
                onClick={changeLanguage}
              >
                Hindi
              </h5>
              <h5
                className={clsx(
                  // Base class
                  "  hover:text-blue-600 hover:cursor-pointer",
                  language == "english"
                    ? "font-semibold underline"
                    : "font-light" // Add "heading--bold" class if isBold is true
                )}
                onClick={changeLanguage}
              >
                English
              </h5>
            </div>
            <div className="flex space-x-6 static">
              <h5
                className={clsx(
                  "hover:text-blue-600 hover:cursor-pointer",
                  fileType == "tma" ? "font-semibold underline" : "font-light" // Add "heading--bold" class if isBold is true
                )}
                onClick={changeFile}
              >
                TMA
              </h5>
              <h5
                className={clsx(
                  // Base class
                  "  hover:text-blue-600 hover:cursor-pointer",
                  fileType == "practical_files"
                    ? "font-semibold underline"
                    : "font-light" // Add "heading--bold" class if isBold is true
                )}
                onClick={changeFile}
              >
                Practile file
              </h5>
            </div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="show"
            variants={store_card_animation_parent}
            // // viewport={{ amount: 0.4 }}
            className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12  justify-items-center md:justify-items-start"
          >
            {cardData.map((item, index) => (
              <CoursesCard
                key={item.study_notes_id}
                price={item.study_notes_price}
                title={item.study_notes_title}
                image={`${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}${item.main_image}`}
                buy_course={item.study_notes_meta}
              ></CoursesCard>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
