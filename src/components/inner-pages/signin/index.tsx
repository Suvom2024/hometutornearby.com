import React from "react";
import Breadcrumb from "@/components/common/Breadcrumb";
import HeaderOne from "@/layouts/headers/HeaderOne";
import FooterOne from "@/layouts/footers/FooterOne";
import SingupArea from "../signup/SingupArea";

const SingIn = () => {
  return (
    <>
      <HeaderOne style_2={true} />
      <SingupArea style={true} />
      <FooterOne />
    </>
  );
};

export default SingIn;
