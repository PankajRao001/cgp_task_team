import logo from "../assets/images/png/logo-cgp.png";
import { Discord, TelegramIcon, TwitterIcon } from "./Icons";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="bg_black pb_45">
      <div className="w_full footer_span mx_auto bg_dark_grey"></div>
      <div className="container mx_auto pt_38">
        <div className="row mx_-18 pb_40 mt_40 jc_between pt_38">
          <div className="col_12 sm_col_6 md_col_3">
            <a href="/">
              <img src={logo} alt="logo" height={43} width={109} />
            </a>

            <p className="fs_xsm mb_24 leading_166 mt_27 max_w_236 ff_tomorrow fw_300 text_white">
              Powering the future of blockchain technology with enhanced RPC
              solutions. Join us on the journey.
            </p>
            <div className="flex ai_center gap_15">
              <TwitterIcon />
              <TelegramIcon />
              <Discord />
            </div>
          </div>
          <div className="col_12 md_col_8">
            <div className="row jc_between">
              <div className="lg_col_3 col_6">
                <ul className=" fs_lsm fw_600 leading_150 ff_tomorrow text_white">
                  APIs
                  <li className="fw_300 leading_150 underline text_nowrap mt_20">
                    Ethereum API
                  </li>
                  <li className="fw_300 leading_150 underline text_nowrap">
                    Polygon API
                  </li>
                  <li className="fw_300 leading_150 underline text_nowrap">
                    Arbitrum API
                  </li>
                  <li className="fw_300 leading_150 underline text_nowrap">
                    Optimism API
                  </li>
                  <li className="fw_300 leading_150 underline text_nowrap">
                    Solana API
                  </li>
                  <li className="fw_300 leading_150 underline text_nowrap">
                    NFT API
                  </li>
                  <li className="fw_300 leading_150 underline text_nowrap">
                    Transfers API
                  </li>
                  <li className="fw_300 leading_150 underline text_nowrap">
                    Token API
                  </li>
                  <li className="fw_300 leading_150 underline text_nowrap">
                    View all
                  </li>
                </ul>
              </div>

              <div className="lg_col_3 col_6">
                <ul className=" fs_lsm fw_600 leading_150 ff_tomorrow text_white">
                  Company
                  <li className="fw_300 leading_150 underline text_nowrap mt_20">
                    Sign Up
                  </li>
                  <li className="fw_300 leading_150 underline text_nowrap">
                    Login
                  </li>
                  <li className="fw_300 leading_150 underline text_nowrap">
                    Newsletter
                  </li>
                  <li className="fw_300 leading_150 underline text_nowrap">
                    Status
                  </li>
                  <li className="fw_300 leading_150 underline text_nowrap">
                    Create Web3 Dapp
                  </li>
                  <li className="fw_300 leading_150 underline text_nowrap">
                    Sepolia Faucet
                  </li>
                  <li className="fw_300 leading_150 underline text_nowrap">
                    Goerli Faucet{" "}
                  </li>
                  <li className="fw_300 leading_150 underline text_nowrap">
                    Mumbai Faucet
                  </li>
                  <li className="fw_300 leading_150 underline text_nowrap">
                    Overviews
                  </li>
                  <li className="fw_300 leading_150 underline text_nowrap">
                    Gwei Calculator
                  </li>
                  <li className="fw_300 leading_150 underline text_nowrap">
                    Chain Connect
                  </li>
                  <li className="fw_300 leading_150 underline text_nowrap">
                    Request a Chain
                  </li>
                </ul>
              </div>
              <div className="lg_col_3 col_6">
                <ul className=" fs_lsm fw_600 leading_150 ff_tomorrow text_white">
                  Developers
                  <li className="fw_300 leading_150 underline text_nowrap mt_20">
                    About Us
                  </li>
                  <li className="fw_300 leading_150 underline text_nowrap">
                    Polygon API
                  </li>
                  <li className="fw_300 leading_150 underline text_nowrap">
                    Blog
                  </li>
                  <li className="fw_300 leading_150 underline text_nowrap">
                    Optimism API
                  </li>
                  <li className="fw_300 leading_150 underline text_nowrap">
                    Careers
                  </li>
                  <li className="fw_300 leading_150 underline text_nowrap">
                    Terms Of Service
                  </li>
                  <li className="fw_300 leading_150 underline text_nowrap">
                    Transfers API
                  </li>
                  <li className="fw_300 leading_150 underline text_nowrap">
                    Press Kit
                  </li>
                  <li className="fw_300 leading_150 underline text_nowrap">
                    View all
                  </li>
                </ul>
              </div>
              <div className="lg_col_3 col_6">
                <ul className=" fs_lsm fw_600 leading_150 ff_tomorrow text_white">
                  CONTACT
                  <li className="fw_300 leading_150 underline text_nowrap mt_20">
                    General Inquiries
                  </li>
                  <li className="fw_300 leading_150 underline text_nowrap">
                    Press
                  </li>
                  <li className="fw_300 leading_150 underline text_nowrap">
                    Sales
                  </li>
                  <li className="fw_300 leading_150 underline text_nowrap">
                    Discord
                  </li>
                  <li className="fw_300 leading_150 underline text_nowrap">
                    Email
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <p className="text_light_grey text_center leading_150 fw_300 fs_xsm">
          Copyright © <span>{year}</span> Transpose, Inc. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
