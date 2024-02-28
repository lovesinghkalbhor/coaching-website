import Hero_other_pages from "@/custom_components/hero_section_for_other_page/page";

import Image from "next/image";
import CoursesCard from "@/custom_components/coursescard/page";

export default function Courses() {
  return (
    <>
      <Hero_other_pages>
        <div className=" flex flex-wrap sm:justify-start justify-center content-center  ">
          <div className="hero__textcontent">
            <h1 className="">Refund policy</h1>
            <p className="">
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
          {/* <span className="cardsSection__span">Cources</span> */}
          <h1 className="section__heading ">Return & Refund Policy</h1>
          <p className="section__para">
            If you are not happy with your purchase, we will accept a return of
            a unused product within 14 days. Once we receive the returned item
            manishvermaofficial will then give a full refund (excluding shipping
            as we are unable to refund the initial shipping cost of your order).
            Our Return & Refund Policy was created by Return Refund Policy
            Template for https://manishvermaofficial.com/ Please allow 1-2 weeks
            for your return to be processed. Discounted items are not eligible
            for a return. manishvermaofficial will not issue refunds for
            products purchased through other entities, such as distributors or
            retail partners. Returned items must be delivered to us unused, in
            original packaging and in the condition they were received or may
            not be eligible for refund or be subject to a restocking fee. We
            cannot be held responsible for items damaged or lost in return
            shipment, therefore we recommend an insured and trackable mail
            service. We are unable to issue a refund without actual receipt of
            the item(s) or proof of received return delivery. We aim to accept
            all returns. In the unlikely event that an item is returned to us in
            an unsuitable condition, we may have to send it back to you. All
            goods will be inspected on return. If you are not happy with your
            purchase, we will accept a return of a unused product within 14
            days. Once we receive the returned item manishvermaofficial will
            then give a full refund (excluding shipping as we are unable to
            refund the initial shipping cost of your order). Our Return & Refund
            Policy was created by Return Refund Policy
            Template for https://manishvermaofficial.com/ Please allow 1-2 weeks
            for your return to be processed. Discounted items are not eligible
            for a return. manishvermaofficial will not issue refunds for
            products purchased through other entities, such as distributors or
            retail partners. Returned items must be delivered to us unused, in
            original packaging and in the condition they were received or may
            not be eligible for refund or be subject to a restocking fee. We
            cannot be held responsible for items damaged or lost in return
            shipment, therefore we recommend an insured and trackable mail
            service. We are unable to issue a refund without actual receipt of
            the item(s) or proof of received return delivery. We aim to accept
            all returns. In the unlikely event that an item is returned to us in
            an unsuitable condition, we may have to send it back to you. All
            goods will be inspected on return.
          </p>
        </div>
      </div>
    </>
  );
}
