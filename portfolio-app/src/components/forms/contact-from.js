import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";

// const validationSchema = Yup.object().shape({
//   name: Yup.string()
//     .min(2, "Must have atleast two characters")
//     .max(20, "Exceeded character max").required,

//   email: Yup.string()
//     .email("Must be a valid email address")
//     .max(50, "Exceeded 255 characters").required,

//   message: Yup.string().max(50, "Exceeded 255 characters").required,
// });

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  return [
    {
      value,
      onChange: (e) => setValue(e.target.value),
    },
    () => setValue(initialValue),
  ];
}

export default function ContactForm() {
  const [nameProps, resetName] = useInput("");
  const [emailProps, resetEmail] = useInput("");
  const [messageProps, resetMessage] = useInput("");

  const submit = (e) => {
    e.preventDefault();
    resetName();
    resetEmail();
    resetMessage();
  };

  return (
    <form onSubmit={submit}>
      <label htmlFor="form-name">Name</label>
      <input
        {...nameProps}
        type="text"
        name="name"
        id="form-name"
        placeholder="Enter your name"
      />
      <label htmlFor="form-email">Email</label>
      <input
        {...emailProps}
        type="text"
        name="email"
        id="form-email"
        placeholder="Enter your email"
      />
      <label htmlFor="form-message">Message</label>
      <input {...messageProps} type="text" name="message" id="form-message" />
      <button type="submit">Submit</button>
    </form>

    // <Formik
    //   initialValues={{ name: "", email: "", message: "" }}
    //   validationSchema={validationSchema}
    //   onSubmit={(values, { setSubmitting, resetForm }) => {
    //     alert("submitting");
    //     setSubmitting(true);

    //     setTimeout(() => {
    //       alert(JSON.stringify(values, null, 2));
    //       resetForm();
    //       setSubmitting(false);
    //     }, 500);
    //   }}
    // >
    //   {({
    //     values,
    //     errors,
    //     touched,
    //     handleChange,
    //     handleBlur,
    //     handleSubmit,
    //     isSubmitting,
    //   }) => (
    //     <form onSubmit={handleSubmit}>
    //       <div className="input-row">
    //         <label htmlFor="name"> Name </label>
    //         <input
    //           type="text"
    //           name="name"
    //           id="name"
    //           placeholder="Enter your full name"
    //           onChange={handleChange}
    //           onBlur={handleBlur}
    //           value={values.name}
    //           //   className={touched.name && errors.name ? "has-error" : null}
    //         />
    //       </div>
    //       <div className="input-row">
    //         <label htmlFor="email"> Email </label>
    //         <input
    //           type="text"
    //           name="email"
    //           id="email"
    //           placeholder="Enter your email"
    //           onChange={handleChange}
    //           onBlur={handleBlur}
    //           value={values.email}
    //           //   className={touched.email && errors.email ? "has-error" : null}
    //         />
    //       </div>
    //       <div id="input-row">
    //         <label htmlFor="message"> Message </label>
    //         <input
    //           type="text"
    //           name="message"
    //           id="message"
    //           placeholder=""
    //           onChange={handleChange}
    //           onBlur={handleBlur}
    //           value={values.message}
    //         />
    //       </div>
    //       <div id="input-row">
    //         <button type="submit" disabled={isSubmitting}>
    //           Submit
    //         </button>
    //       </div>
    //     </form>
    //   )}
    // </Formik>
  );
}
