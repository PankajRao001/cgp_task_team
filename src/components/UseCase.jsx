import {
  How_Learn_List,
  Usecase_Data_List,
  UseCase_Slider_Data_List,
  UseCase_Slider_Data_List2,
} from "./Helper";
import PrimaryButton from "./common/PrimaryButton";
import Marquee from "react-fast-marquee";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const UseCase = () => {
  return (
    <div className="pt_50 pb_65 bg_usecase bg_norepeat bg_size_full bg_pos_center">
      <div className="container">
        <h2 className="text_white text_uppercase ff_bebas mb_33 leading_full text_center fw_400 fs_xl">
          Use case
          <span className="text_bluish leading_full">
            <span className="text_bluish"> API</span>
            <span className="text_white">s</span>
          </span>
        </h2>
        <div className="row">
          {Usecase_Data_List.map((obj) => {
            return (
              <div key={obj} className="lg_col_4 md_col_6 col_12 px_18">
                <div className="popular_box bg_black gap_23">
                  <div className="flex ai_center gap_18">
                    <div className="size_32">{obj.svg}</div>
                    <p className="ff_tomorrow fw_700 text_white fs_2md">
                      {obj.id}
                    </p>
                  </div>
                  <p className="fw_400 fs_sm text_white ff_tomorrow">
                    {obj.para}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="text_center mt">
          <PrimaryButton
            className="btn_view ff_tomorrow text_center mt_42 fw_700"
            text="View all APIs"
          />
        </div>
        <h2 className="text_white text_uppercase ff_bebas mb_50 mt_58 leading_full text_center fw_400 fs_xl">
          Trusted by the best in the industry
        </h2>
        <Marquee
          className="max_w_1040 mx_auto"
          gradient={false} // disables fade effect at edges
          speed={50} // increase or decrease for fast/slow
          pauseOnHover={false}
          direction="left"
          play={true}
          loop={0} // infinite
        >
          <div className="flex slider1 gap_71">
            {UseCase_Slider_Data_List.map((obj, index) => (
              <div key={index}>
                <img src={obj.img} alt={`image-slider-${index}`} height={42} />
              </div>
            ))}
          </div>
        </Marquee>
        <Marquee
          className="max_w_1040 mt_40 mx_auto"
          gradient={false} // disables fade effect at edges
          speed={50} // increase or decrease for fast/slow
          pauseOnHover={false}
          direction="left"
          play={true}
          loop={0}
        >
          <div className="flex gap_108">
            {UseCase_Slider_Data_List2.map((obj, index) => (
              <div key={index}>
                <img src={obj.img} alt={`image-slider-${index}`} height={42} />
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default UseCase;
