import CoursesCard from "@/custom_components/coursescard/page";
import Hero_other_pages from "@/custom_components/hero_section_for_other_page/page";
import Image from "next/image";
import styles from "./courses-list.module.css";
export default function BuyCourse() {
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
        <Image
          className="section__planeImage"
          src={"/HeroBackgroundImage/flying_plane.png"}
          width={1000}
          height={1000}
        ></Image>

        <div>
          <span className="section__span">Cources</span>
          <h1 className="section__heading ">
            Browse Top Essential <br></br>Career courses
          </h1>

          <div
            className={`${styles.buycourses} grid lg:grid-cols-3 sm:grid-cols-2   grid-cols-1 gap-12  justify-items-center md:justify-items-start `}
          >
            <CoursesCard></CoursesCard>
            <CoursesCard></CoursesCard>
            <CoursesCard></CoursesCard>
            <CoursesCard></CoursesCard>
            <CoursesCard></CoursesCard>
            <CoursesCard></CoursesCard>
          </div>
        </div>
      </div>
    </div>
  );
}
