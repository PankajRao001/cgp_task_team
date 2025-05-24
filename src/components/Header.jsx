import PrimaryButton from "./common/PrimaryButton";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="header bg_norepeat bg_size_full bg_pos_center flex ai_center jc_center flex_col">
      <Navbar />
      <div className="container flex_grow_1 ai_center jc_center flex_col flex">
        <h1 className="fs_xxl fw_400 ff_bebas leading_full text_white text_capitalize">
          The <span className="text_bluish">web3</span> developer hub
        </h1>
        <p className="fs_sm ff_tomorrow text_white mt_27 fw_400">
          View API References, guides, and tutorials for Ethereum, Polygon,
          Optimism, Arbitrum, Solana and Astar.
        </p>
        <PrimaryButton className="btn_view fw_700 mt_52" text="View Docs" />
      </div>
    </div>
  );
};

export default Header;
