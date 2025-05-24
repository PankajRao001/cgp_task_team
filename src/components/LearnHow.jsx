import { How_Learn_List } from "./Helper";
import { useRef, useEffect } from "react";
import shalgam from "../assets/images/png/shalgam.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const LearnHow = () => {
  const ellipseRef = useRef(null);
  useEffect(() => {
    gsap.to(ellipseRef.current, {
      y: 200, // move down 150px
      ease: "power1.out",
      scrollTrigger: {
        trigger: ellipseRef.current,
        start: "top bottom", // when ellipse enters viewport
        end: "bottom top", // when it leaves viewport
        scrub: 2.5, // smooth synced movement
      },
    });
  }, []);

  return (
    <div
      className="pt_45 pb_60 bg_learn bg_norepeat bg_size_full bg_pos_center"
      style={{ position: "relative" }}
    >
      <div className="container">
        <h2 className="text_white text_capitalize ff_bebas mb_33 leading_full text_center fw_400 fs_xl">
          Learn how to{" "}
          <span className="text_bluish leading_full"> build in web3</span>
        </h2>
        <div className="row">
          {How_Learn_List.map((obj) => {
            return (
              <div key={obj} className="lg_col_4 md_col_6 col_12">
                <div className="popular_box bg_black gap_23">
                  <div className="flex gap_18">
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
      </div>
      <img alt="image shalgam" src={shalgam}
        ref={ellipseRef}
        style={{
          width: "200px",
          position: "absolute",
          top: "50%",
          height: "200px",
          margin: "0 auto",
        }}
      />
    </div>
  );
};

export default LearnHow;
