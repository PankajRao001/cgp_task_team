import { Reference_Data_List } from "./Helper";

const ApiReference = () => {
  return (
    <div className="pt_45 pb_40 bg_reference">
      <div className="container">
        <div className="mx_auto max_w_710">
          <h2 className="text_white ff_bebas mt_10 text_center mb_24 fw_400 fs_xl">
            <span className="text_bluish"> API</span> references for all chains
          </h2>
          <p className="fs_lbase ff_tomorrow text_center text_white mb_32 fw_400">
            View API References, guides, and tutorials for Ethereum, Polygon,
            Optimism, Arbitrum, Solana and Astar.
          </p>
          <div className="row sm_jc_center">
            {Reference_Data_List.map((obj, index) => {
              return (
                <div key={index} className="md_w_20 sm_col_3 col_6 py_21">
                      <div className={` ${index === 0 ? 'order_3' : index === 7 ? 'order_4' : ''} flex flex_col ai_center jc_center gap_18`}>
                    <img src={obj.img} width={65} height={65} alt="img-logos" />
                    <p className="ff_segoe text_uppercase text_center w_92 letter_space_2 fw_400 text_white fs_sm">
                      {obj.id}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiReference;
