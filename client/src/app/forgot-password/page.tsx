"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Props = {};

const ForgetPassword = (props: Props) => {
  let router = useRouter();
  // @ts-ignore
//   let user = JSON.parse(localStorage.getItem("user"));
//   if (user && user._id) {
//     return router?.replace("/");
//   }

  return <p>Lol you forgot pass ?</p>;
};

export default ForgetPassword;
