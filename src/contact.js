import React from "react";
import Contactinfo from "./components/Contactinfo";
import Form from "./components/Form";
function contact() {
  return (
    <div className="container contact">
      <h1
        style={{
          fontSize: "3.4rem",
          color: "#E92569",
          fontFamily: "Playfair Display",
          marginTop: "4rem",
          marginLeft: "",
        }}
      >
        Submit your details
      </h1>
      <div className="flex">
        <Contactinfo></Contactinfo>
        <Form></Form>
      </div>
    </div>
  );
}

export default contact;
