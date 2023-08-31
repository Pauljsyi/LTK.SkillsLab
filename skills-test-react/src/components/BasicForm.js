import React from "react";
import { Formik, Field, Form } from "formik";
import { convertLength } from "@mui/material/styles/cssUtils";
import { Button, Box } from "@mui/material";

const BasicForm = () => (
  <div>
    <h1>TODO</h1>
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
      }}
      onSubmit={(values, { resetForm }) => {
        const data = {
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
        };
        console.log("form submitted", data);
        resetForm();
      }}
    >
      <Form>
        <Box>
          <label htmlFor="firstName">First Name </label>
          <Field id="firstName" name="firstName" placeholder="First Name" />
        </Box>
        <Box>
          <label htmlFor="lastName">Last Name </label>
          <Field id="lastName" name="lastName" placeholder="Last Name" />
        </Box>
        <Box>
          <label htmlFor="email">Email </label>
          <Field id="email" name="email" placeholder="Email" />
        </Box>

        <Button type="submit">Submit</Button>
      </Form>
    </Formik>
  </div>
);

export default BasicForm;
