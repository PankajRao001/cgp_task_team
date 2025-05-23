import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="header flex ai_center jc_center flex_col">
      <Navbar />
      <div className="container flex_grow_1 ai_center jc_center flex_col flex">
        <h1 className="fs_xxl fw_400 ff_bebas leading_full text_white text_capitalize">
          The <span className="text_bluish">web3</span> developer hub
        </h1>
        <p className="fs_sm ff_tomorrow text_white mt_27 fw_400">
          View API References, guides, and tutorials for Ethereum, Polygon,
          Optimism, Arbitrum, Solana and Astar.
        </p>
        <button className="fw_600 ff_tomorrow cursor_pointer btn_view text_center">
          View docs
        </button>
      </div>
    </div>
  );
};

export default Header;
