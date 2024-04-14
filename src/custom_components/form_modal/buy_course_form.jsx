import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { useFormik } from "formik";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { get_config_data, initiate_order } from "@/lib/utils";
import { FormSchema } from "@/lib/utils";
export default function Form_modal({ amount, study_notes_id }) {
  // State to track form submission status
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Use Formik for form handling
  const {
    values, // Form field values
    errors, // Validation errors
    touched, // Tracked field interactions
    handleChange, // Handle input changes
    handleBlur, // Handle field blur events
    handleSubmit, // Handle form submission
  } = useFormik({
    initialValues: {
      email: "",
      phone_no: "",
      name: "",
      study_center_code: "",
      study_center_name: "",
      enrollment_no: "",
      // study_notes_id: study_notes_id,
    }, // Default form values
    validationSchema: FormSchema, // Assign validation schema
    onSubmit: async (values) => {
      let config_data = get_config_data();

      // Function to handle order submission with form data
      const formData = new FormData(); // Create a FormData object to handle multipart/form-data

      // Append form values to the FormData object
      Object.keys(values).forEach((key) => {
        formData.append(key, values[key]);
      });
      formData.append("study_notes_id", study_notes_id);
      console.log("notes id --->: ", study_notes_id);

      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_DOMAIN}orders/place_notes_order.php`,
          {
            method: "POST",
            body: formData, // Pass the FormData object as the request body
          }
        );

        if (!response.ok) {
          throw new Error("Form submission failed"); // Throw an error if the response is not OK
        }

        const data = await response.json(); // Parse the JSON response data
        console.log(data);

        if (data.hasOwnProperty("status")) {
          if (data.status === 1) {
            initiate_order(
              config_data.rzp_key,
              config_data.RAZORPAY_SUCCESS_URL,
              amount,
              data.razorpay_order_id,
              values.name,
              values.email,
              values.phone_no // Assuming a typo here, meant to be 'phone_no'?
            );
          } else {
            alert(data.message);
            unload(); // Assuming this function does something like clearing a form
          }
        } else {
          alert("Internal server error Occured. Please Try again later.");
          unload();
        }

        console.log("Success:", data); // Log the successful response data

        // Handle successful submission (e.g., close modal, show success message)
        console.log("Form submitted successfully!", response);
      } catch (error) {
        console.error("Form submission error:", error); // Log the error for debugging
        // Handle submission errors (e.g., display error message)
      }
    },
  });

  function varify() {
    if (!isSubmitting) {
      alert(
        `Please check your detail before submitting and click submit ${isSubmitting} `
      );
      setIsSubmitting(true);
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="buy"
          className="active:scale-95  transition-all	duration-300"
        >
          Buy
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Your Details</DialogTitle>
          <DialogDescription>
            NIOS CLASS 12TH English (302) SOLVED TMA In English Medium PDF
            SESSION // 2023 - 24{" "}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          {/* Email Input Field */}
          <div>
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input
              type="email"
              id="email"
              name="email"
              className="col-span-3"
              placeholder="name@youremail.com"
              value={values.email} // Access email value from formik destructured values
              onChange={handleChange} // Use destructured handleChange function for updates
              onBlur={handleBlur} // Handle blur event for validation
            />
            {touched.email && errors.email && values.email !== "" ? (
              <span id="emailError" className="text-red-500 text-sm">
                Please enter a valid email address.
              </span>
            ) : null}
          </div>

          {/* Phone Number Input Field */}
          <div>
            <Label htmlFor="phone_no" className="text-right">
              Phone Number
            </Label>
            <Input
              type="text"
              id="phone_no"
              name="phone_no"
              required // Mark phone number as required
              className="col-span-3"
              placeholder="Your contact number"
              value={values.phone_no} // Access phone number value from formik destructured values
              onChange={handleChange} // Use destructured handleChange function for updates
              onBlur={handleBlur} // Handle blur event for validation
            />
            {touched.phone_no && errors.phone_no && values.phone_no !== "" ? (
              <span id="phoneError" className="text-red-500 text-sm">
                Please enter a valid 10-digit phone number or try without zero.
              </span>
            ) : null}
          </div>

          {/* Name Input Field */}
          <div>
            <Label htmlFor="name" className="text-right">
              Name as per NIOS Icard
            </Label>
            <Input
              id="name"
              name="name"
              placeholder="Your name"
              required // Mark name as required
              className="col-span-3"
              value={values.name} // Access name value from formik destructured values
              onChange={handleChange} // Use destructured handleChange function for updates
              onBlur={handleBlur} // Handle blur event for validation
            />
            {touched.name && errors.name && values.name !== "" ? (
              <span id="nameError" className="text-red-500 text-sm">
                Name should contain at least one letter and can include spaces.
              </span>
            ) : null}
          </div>

          {/* Study Center Name Input Field */}
          <div>
            <Label htmlFor="study_center_name" className="text-right">
              Study centre name
            </Label>
            <Input
              type="text"
              id="study_center_name"
              name="study_center_name"
              required // Mark study center name as required
              placeholder="Study center code"
              className="col-span-3"
              value={values.study_center_name} // Access study center name value from formik destructured values
              onChange={handleChange} // Use destructured handleChange function for updates
              onBlur={handleBlur} // Handle blur event for validation
            />
            {touched.study_center_name &&
            errors.study_center_name &&
            values.study_center_name !== "" ? (
              <span id="studyCenterError" className="text-red-500 text-sm">
                Please enter the study center code.
              </span>
            ) : null}
          </div>

          {/* Study Center Code Input Field */}
          <div>
            <Label htmlFor="study_center_code" className="text-right">
              Study centre code
            </Label>
            <Input
              type="text"
              id="study_center_code"
              name="study_center_code"
              required // Mark study center code as required
              placeholder="Study center code"
              className="col-span-3"
              value={values.study_center_code} // Access study center code value from formik destructured values
              onChange={handleChange} // Use destructured handleChange function for updates
              onBlur={handleBlur} // Handle blur event for validation
            />
            {touched.study_center_code &&
            errors.study_center_code &&
            values.study_center_code !== "" ? (
              <span id="studyCenterError" className="text-red-500 text-sm">
                Please enter the study center code.
              </span>
            ) : null}
          </div>

          {/* Enrollment Number Input Field */}
          <div>
            <Label htmlFor="enrollment_no" className="text-right">
              Enrollment number
            </Label>
            <Input
              type="text"
              id="enrollment_no"
              name="enrollment_no"
              required // Mark enrollment number as required
              placeholder="Your Enrollment number"
              className="col-span-3"
              value={values.enrollment_no} // Access enrollment number value from formik destructured values
              onChange={handleChange} // Use destructured handleChange function for updates
              onBlur={handleBlur} // Handle blur event for validation
            />
            {touched.enrollment_no &&
            errors.enrollment_no &&
            values.enrollment_no !== "" ? (
              <span id="enrollmentError" className="text-red-500 text-sm">
                Please enter a valid 12-digit enrollment number.
              </span>
            ) : null}
          </div>
          <p className="text-xl mt-5 font-semibold"> Amount ₹{amount}</p>
          <span
            id="confirm-detail"
            className="text-green-600 hidden font-medium mt-6"
          >
            Please confirm your details before continuing
          </span>
          <DialogFooter>
            {/* <DialogClose asChild> */}
            {/* {!isSubmitting ? (
              <Button onClick={varify} variant="buy">
                Next
              </Button>
            ) : ( */}
            <Button type="submit" variant="buy">
              Submit
            </Button>
            {/* )} */}
            {/* </DialogClose> */}
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
