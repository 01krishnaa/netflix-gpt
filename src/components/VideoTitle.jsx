import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-40 mt-20 px-24 absolute w-screen aspect-video bg-gradient-to-r from-black">
      <div className="text-5xl font-bold my-4 text-white w-1/3 ">{title}</div>
      <div className="text-md font-medium text-white w-1/3">{overview}</div>
      <div className="text-white">
        <button className="text-black my-3 px-12 py-3 bg-white rounded-md text-lg font-semibold hover:opacity-70">
          Play
        </button>
        <button className="my-3 mx-2 px-12 py-3 bg-gray-400 bg-opacity-30 text-white rounded-md font-semibold text-lg">
          More Info
        </button>{" "}
      </div>
    </div>
  );
};

export default VideoTitle;
