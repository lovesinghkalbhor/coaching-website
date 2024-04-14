import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function CoursesCard({ price, title, image, buy_course }) {
  return (
    <div>
      <div className="card-hover-effect card card-compact max-w-96 w-[18rem] xs:w-[39rem] sm:w-[19rem]  md:w-[21.5rem] p-4  bg-[#FFFEF7] shadow-xl border-white border-4 ">
        <figure className="rounded w-full">
          <Image src={image} alt="Thumbnail" width={400} height={100}></Image>
        </figure>
        <div
          className="card-body"
          style={{ padding: "1.2rem 0", paddingBottom: "0.4rem" }}
        >
          <p className="text-base  font-medium">
            {title.substring(0, 80) + "..."}
          </p>
          <h2 className="card-title">Min ₹ {price}</h2>
          <Link
            href={`/store/${buy_course}`}
            className="card-actions justify-end"
          >
            <Button
              variant="buy"
              className="active:scale-95  transition-all duration-300"
            >
              Buy Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
