import React from "react";
import { Bars, InfinitySpin } from "react-loader-spinner";

type Props = {};

const LoadingSpinner = (props: Props) => {
  return (
    <div className="flex items-center justify-center m-auto">
        <InfinitySpin 
  width='200'
  color="#4fa94d"
/>
    </div>
  );
};

export default LoadingSpinner;
