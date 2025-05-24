import { useState } from "react";
import logo from "../assets/images/png/logo-cgp.png";
import { Nav_List } from "./Helper";
import { Discord, TelegramIcon, TwitterIcon } from "./Icons";
const Navbar = () => {
  return (
    <div className="container min_h_43px w_full">
      <div className="navbar_flex pt_38">
        <a href="/">
          <img
            src={logo}
            alt="logo"
            style={{ cursor: "pointer" }}
            height={43}
            width={109}
          />
        </a>
        <div className="nav_link_div">
          {Nav_List.map((obj) => {
            return (
              <div
                key={obj.id}
                className="text_white cursor_pointer nav_links fs_lsm fw_400 ff_tomorrow"
              >
                {obj.id}
              </div>
            );
          })}
        </div>
        <div className="flex ai_center gap_46">
          <button className="btn_launch fs_sm ff_tomorrow fw_400">
            Launch APP
          </button>
          <div className="flex gap_3 ai_center jc_center">
            <TelegramIcon />
            <TwitterIcon />
            <Discord />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
