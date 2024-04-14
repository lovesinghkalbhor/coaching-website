"use client";

import React, { useState, useEffect } from "react";
import Hero_other_pages from "@/custom_components/hero_section_for_other_page/page";
import Advetisementcard from "@/custom_components/Advetisementcards/page";
import axios from "axios";
import Form_modal from "@/custom_components/form_modal/buy_course_form";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function BuyCourse() {
  const [metaData, setmetaData] = useState({});
  const router = useRouter();
  // const { order_id } = router.query; // Destructure order_id from query object

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_DOMAIN}orders/download_content_page.php?order_token=39tr85nyl22e5e505bj2573vss5fdbgdensz92b6
          `
      );
      setmetaData(response.data.course_details);
      console.log(response.data.course_details);
    };

    fetchData();
  }, []);
  function render_html() {
    return { __html: metaData.study_notes_description };
  }
  return (
    <>
      <div className="overflow-x-hidden">
        <Hero_other_pages></Hero_other_pages>
        <div className=" relative -m-2 sm:m-0">
          <div className="ml-4  container sm:mx-auto section">
            <div className=" grid grid-cols-12   justify-items-start   -mt-[24rem] md:-mt-[26rem] mb-24 ">
              <div className="z-20 md:col-span-5  col-span-5 justify-self-start  ">
                <div>
                  <div className="card-hover-effect card card-compact max-w-96 w-[18rem] xs:w-[39rem] sm:w-[19rem]  md:w-[21.5rem] p-4  bg-[#FFFEF7] shadow-xl border-white border-4 ">
                    <figure className="rounded w-full">
                      <Image
                        src={`${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}${metaData?.main_image}`}
                        alt="Thumbnail"
                        width={400}
                        height={50}
                      ></Image>
                    </figure>
                    <div
                      className="card-body"
                      style={{ padding: "1.2rem 0", paddingBottom: "0.4rem" }}
                    >
                      <p className="text-base  font-medium">
                        {metaData.study_notes_title}
                      </p>
                      <h2 className="card-title">
                        Min ₹ {metaData.study_notes_price}
                      </h2>
                      <Form_modal
                        amount={metaData?.study_notes_price}
                        study_notes_id={metaData?.study_notes_id}
                      ></Form_modal>
                    </div>
                  </div>
                </div>
              </div>
              <div className="z-20 md:col-span-7 col-span-7 lg:justify-self-center justify-self-end hidden md:block mt-3">
                {moreCourses.map((item, index) => {
                  if (item >= 3) return;
                  return (
                    <>
                      <Link href={`/store`}>
                        <Advetisementcard></Advetisementcard>
                      </Link>
                    </>
                  );
                })}
              </div>
            </div>

            <div>
              <h1 className="section__heading ">Descreption</h1>
              <p
                className="section__para"
                dangerouslySetInnerHTML={render_html()}
              ></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
