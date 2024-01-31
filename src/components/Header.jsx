import React from "react";

const Header = () => {
  return (
    <>
      <div className="relative">
        <img className="w-screen h-screen"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_small.jpg"
          alt="bg"
        />
        <img
          className="w-48 absolute top-0 bg-gradient-to-b from-black p-3"
          src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
          alt="logo"
        />
      </div>
    </>
  );
};

export default Header;
