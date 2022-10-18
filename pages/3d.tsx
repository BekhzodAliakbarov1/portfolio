import MySelfWrapper from "@/components/future-works-templates/my-self/my-self-wrapper";
import Link from "next/link";
import React from "react";

const Hi = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
        gap: "20px",
        color: "white",
        fontSize: "30px",
      }}
    >
      <h1 style={{ color: "white", fontSize: "30px" }}>In progress...</h1>
      <MySelfWrapper />
      <Link style={{ border: "1px solid red" }} href="/">
        Back
      </Link>
    </div>
  );
};

export default Hi;
