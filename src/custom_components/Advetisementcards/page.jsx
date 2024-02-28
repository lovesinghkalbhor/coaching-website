import { Button } from "@/components/ui/button";
import Image from "next/image";
export default function Advetisementcard() {
  return (
    <>
      <div>
        <div className="card card-side lg:w-[30.5rem] w-[22rem] mb-3  rounded-md lg:p-2 p-1 bg-[#FFFEF7] shadow-xl border-white border-4 card-hover-effect ">
          <figure className="rounded">
            <Image
              src={"/images/thumbnail.png"}
              alt="Shoes"
              width={350}
              height={200}
            ></Image>
          </figure>
          <div className="card-body p-0" style={{ marginLeft: "2rem" }}>
            <p className="lg:text-sm text-xs font-medium">
              NIOS CLASS 12TH Hindi (301) Handwritten SOLVED TMA for Direct
              Upload | April 2024 Public Exam
            </p>
            <h2 className="lg:text-lg text-md font-bold md:font-semibold">
              Min ₹ 100
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
