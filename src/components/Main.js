import React from "react";
import DarkToggle from "./DarkToggle";
import style from "./main.module.scss";

const Main = () => (
  <>
    <div className={style.title}>Holi?</div>
    <DarkToggle />
  </>
);

export default Main;
