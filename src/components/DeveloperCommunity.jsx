import React from "react";
import PrimaryButton from "./common/PrimaryButton";
import { Discord, TelegramIcon, TwitterIcon } from "./Icons";

const DeveloperCommunity = () => {
  return (
    <div className="bg_dev_community pt_45 pb_40 bg_norepeat bg_size_full bg_pos_center">
      <div className="container">
        <h2 className="text_white text_uppercase ff_bebas pb_40 text_center leading_full fw_400 fs_xl">
          Join the <span className="text_bluish"> web3</span> developer
          community
        </h2>
        <p className="ff_segoe fw_400 text_white text_center fs_base leading_150 letter_space_sm">
          Get help with your product, meet other developers, and get access to a
          world-class community
        </p>
        <div className="text_center pt_50">
          <PrimaryButton
            className="btn_view ff_tomorrow fw_700"
            text="View Docs"
          />
        </div>
              <div className="mt_42 flex ai_center jc_center gap_15">
                  <TwitterIcon />
                  <TelegramIcon />
                  <Discord/>
        </div>
      </div>
    </div>
  );
};

export default DeveloperCommunity;
