import React from "react";

interface Props {
  text: string;
}

const Header = ({ text }: Props) => {
  return <h1 className="font-extrabold text-6xl mb-14 text-primary">{text}</h1>;
};

export default Header;
