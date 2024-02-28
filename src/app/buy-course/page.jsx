import CoursesCard from "@/custom_components/coursescard/page";
import Hero_other_pages from "@/custom_components/hero_section_for_other_page/page";
import Advetisementcard from "@/custom_components/Advetisementcards/page";
export default function BuyCourse() {
  return (
    <>
      <div className="overflow-hidden">
        <Hero_other_pages></Hero_other_pages>
        <div className=" relative -m-2 sm:m-0">
          <div className=" container mx-auto section ">
            <div className=" grid grid-cols-12   justify-items-start   -mt-[24rem] md:-mt-[26rem] mb-24 ">
              <div className="md:col-span-5  col-span-5 justify-self-start  ">
                <CoursesCard></CoursesCard>
              </div>
              <div className="md:col-span-7 col-span-7 lg:justify-self-center justify-self-end hidden md:block mt-3">
                <Advetisementcard></Advetisementcard>
                <Advetisementcard></Advetisementcard>
                <Advetisementcard></Advetisementcard>
              </div>
            </div>

            <div>
              <h1 className="section__heading ">Return & Refund Policy</h1>
              <p className="section__para">
                If you are not happy with your purchase, we will accept a return
                of a unused product within 14 days. Once we receive the returned
                item manishvermaofficial will then give a full refund excluding
                shipping as we are unable to refund the initial shipping cost of
                your order. Our Return & Refund Policy was created by Return
                Refund Policy Template for https://manishvermaofficial.com/
                Please allow 1-2 weeks for your return to be processed.
                Discounted items are not eligible for a return.
                manishvermaofficial will not issue refunds for products
                purchased through other entities, such as distributors or retail
                partners. Returned items must be delivered to us unused, in
                original packaging and in the condition they were received or
                may not be eligible for refund or be subject to a restocking
                fee. We cannot be held responsible for items damaged or lost in
                return shipment, therefore we recommend an insured and trackable
                mail service. We are unable to issue a refund without actual
                receipt of the item or proof of received return delivery. We aim
                to accept all returns. In the unlikely event that an item is
                returned to us in an unsuitable condition, we may have to send
                it back to you. All goods will be inspected on return. If you
                are not happy with your purchase, we will accept a return of a
                unused product within 14 days. Once we receive the returned item
                manishvermaofficial will then give a full refund excluding
                shipping as we are unable to refund the initial shipping cost of
                your order. Our Return & Refund Policy was created by Return
                Refund Policy Template for https://manishvermaofficial.com/
                Please allow 1-2 weeks for your return to be processed.
                Discounted items are not eligible for a return.
                manishvermaofficial will not issue refunds for products
                purchased through other entities, such as distributors or retail
                partners. Returned items must be delivered to us unused, in
                original packaging and in the condition they were received or
                may not be eligible for refund or be subject to a restocking
                fee. We cannot be held responsible for items damaged or lost in
                return shipment, therefore we recommend an insured and trackable
                mail service. We are unable to issue a refund without actual
                receipt of the item or proof of received return delivery. We aim
                to accept all returns. In the unlikely event that an item is
                returned to us in an unsuitable condition, we may have to send
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
