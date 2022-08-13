import React from 'react'
import {InfinitySpin} from "react-loader-spinner"

 const Loading = () => (
    <div className="flex justify-center items-center ">
      <InfinitySpin type="Puff" color="#00BFFF" height={550} width={80} />
    </div>
  );

  export default Loading;