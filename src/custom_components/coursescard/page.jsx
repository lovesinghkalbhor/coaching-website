import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
export default function CoursesCard() {
  return (
    <div>
      <div className="card-hover-effect card card-compact max-w-96 w-[18rem] xs:w-[39rem] sm:w-[19rem]  md:w-[21.5rem] p-4  bg-[#FFFEF7] shadow-xl border-white border-4 ">
        <figure className="rounded w-full">
          <Image
            src={"/images/thumbnail.png"}
            alt="Shoes"
            width={3100}
            height={100}
          ></Image>
        </figure>
        <div
          className="card-body"
          style={{ padding: "1.2rem 0", paddingBottom: "0.4rem" }}
        >
          <p className="text-base  font-medium">
            NIOS CLASS 12TH Hindi (301) Handwritten SOLVED TMA for Direct Upload
            | April 2024 Public Exam
          </p>
          <h2 className="card-title">Min ₹ 100</h2>
          <Link href="/buy-course" className="card-actions justify-end ">
            <Button
              variant="buy"
              className="active:scale-95  transition-all	duration-300"
            >
              Buy Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
