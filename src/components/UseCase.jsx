import React from 'react'
import { How_Learn_List, Usecase_Data_List } from './Helper';

const UseCase = () => {
  return (
    <div className="pt_45 pb_60 bg_usecase">
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
              <div key={obj} className="lg_col_3 md_col_6 col_12 px_18">
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
      </div>
    </div>
  );
}

export default UseCase