import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import * as Yup from "yup";


export const card_animation_parent = {
  hidden: { opacity: 0, translateX: -100 },
  show: {
    opacity: [0, 1],
    translateX: 0,
    transition: {
      duration: 0.6,
      type: "spring",
      // delay: 0.4,
      bounce: 0.3,
    },
  },
};

export const text_container_parent_animation = {
  hidden: { opacity: 0 },
  show: {
    x: [-410, 0],
    opacity: 1,
    transition: {
      duration: 0.5,
      type: "spring",
      bounce: 0.4,
      ease: "easeInOut",
    },
  },
};


// using delay because viewpost is not working
export const store_card_animation_parent = {
  hidden: { opacity: 0, translateX: -100 },
  show: {
    opacity: [0, 1],
    translateX: 0,
    transition: {
      duration: 0.6,
      type: "spring",
      delay: 0.1,
      bounce: 0.3,
    },
  },
};

// Regular expressions for validation
var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
var phoneRegex = /^[6-9]\d{9}$/;
var nameRegex = /^[a-zA-Z]+(\s[a-zA-Z]+)*$/;
var enrollmentRegex = /^.{12}$/;
// Form validation schema using Yup
export const FormSchema = Yup.object().shape({
  email: Yup.string()
    .matches(emailRegex, "Invalid email format") // Validate email format
    .required("Required"), // Ensure email is provided
  phone_no: Yup.string()
    .matches(phoneRegex, "Invalid phone number format") // Validate phone number format
    .required("Required"), // Ensure phone number is provided
  name: Yup.string()
    .matches(nameRegex, "Invalid name format") // Validate name format
    .required("Required"), // Ensure name is provided
  study_center_code: Yup.string().required("Required"), // Ensure study center code is provided
  enrollment_no: Yup.string()
    .matches(enrollmentRegex, "Enrollment number must be 12 characters") // Validate enrollment number length
    .required("Required"), // Ensure enrollment number is provided
});




export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export async function initiate_order(rzp_key, callback_url, amount, order_id, name, email, contact) {

  // const res = await initializeRazorpay();

  // if (!res) {
  //   alert("Razorpay SDK Failed to load");
  //   return;
  // }

  var options = {
    "key": rzp_key, // Enter the Key ID generated from the Dashboard
    "amount": amount * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    "currency": "INR",
    "name": "Arvind Kumar NIT Surat", //your business name

    "image": "https://arvindkumarnitsurat.com/assets/image/logo.webp",
    "order_id": order_id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    "callback_url": callback_url,
    "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
      "name": name, //your customer's name
      "email": email,
      "contact": contact //Provide the customer's phone number for better conversion rates 
    },
    "theme": {
      "color": "#3399cc"
    },
    "modal": {
      "ondismiss": function () {
        // unload();
      }
    }
  };

  var rzp1 = new Razorpay(options);
  rzp1.open();


  //e.preventDefault();

}

export async function get_config_data() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}config.php`,
    );

    // Check for successful response
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    let data = await response.json();

    return data?.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Re-throw the error for further handling
  }
}