import Image from "next/image";
import styles from "./background.module.css";
import { Phone } from "lucide-react";

export default function ContactUsCard() {
  return (
    <div id="contact_us" className="section container mx-auto  ">
      <div className={`${styles.contactUsCard} shadow-2xl card-hover-effect`}>
        <Image
          className={styles.contactuscard__wave1Image}
          src={"/HeroBackgroundImage/Wave2.png"}
          width={500}
          height={500}
        ></Image>
        <Image
          className={`${styles.contactuscard__bubble2Image}  `}
          src={"/HeroBackgroundImage/bubble2.png"}
          width={200}
          height={200}
        ></Image>
        <Image
          className={styles.contactuscard__bubble1Image}
          src={"/HeroBackgroundImage/bubble1.png"}
          width={200}
          height={200}
        ></Image>

        <div className={`${styles.contactUsCard__textcontent} `}>
          <div>
            {" "}
            <Phone className="mr-2 h-5 w-5 z-10" />
            <h6> Mobile No. - 8002388088</h6>
          </div>
          <div>
            {" "}
            <Phone className="mr-2 h-5 w-5 z-10" />{" "}
            <h6> Whatsapp - 8002388088</h6>
          </div>
          <div>
            {" "}
            <Phone className="mr-2 h-5 w-5 z-10" />
            <h6> Website - https://arvindkumarnitsurat.com</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
