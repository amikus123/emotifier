import React from "react";
import HeaderSearch from "./HeaderSearch";

interface Props {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
}
const HeaderSearchController = ({ text, setText }: Props) => {
  return (
    <>
      <HeaderSearch text={text} setText={setText} className="showDesktop" />

      <HeaderSearch
        abs={false}
        text={text}
        setText={setText}
        className="hideDesktop"
      />
    </>
  );
};

export default HeaderSearchController;
