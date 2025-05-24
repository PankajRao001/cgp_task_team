import { Popular_Data_List } from "./Helper";

const MostPolular = () => {
  return (
    <div className="pt_45 pb_60 bg_popular">
      <div className="container">
        <h2 className="text_white ff_bebas mt_10 text_center mb_55 fw_400 fs_xl">Most popular</h2>
        <div className="row">
          {Popular_Data_List.map((obj) => {
            return (
              <div key={obj} className="lg_col_3 md_col_6 col_12">
                <div className="popular_box gap_23">
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
    </div>
  );
};

export default MostPolular;
