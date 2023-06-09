import * as React from "react";
import style from "@/styles/header.module.css";
import { loading_logo } from "@/files/file";
import Clock from "./Clock";
import FullScreen from "./FullScreen";
import Music from "./Music";
import Toggle from "./Toggle";
import { CldImage } from "next-cloudinary";

export interface IHeaderProps {}

export default function Header(props: IHeaderProps) {
  return (
    <div className={style.container}>
      {/* <img src={logo} alt="" className={style.logo} />
       */}
      <CldImage
        src={loading_logo}
        alt="logo-header"
        className={style.logo}
        width="0"
        height="0"
        sizes="100vw"
      />
      <div className={style.control}>
        <Clock />
        <Toggle />
        <Music />
        <FullScreen />
      </div>
    </div>
  );
}
