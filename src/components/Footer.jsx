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
              <a target="_blank" href="http://twitter.com">
                <TwitterIcon />
              </a>
              <a target="_blank" href="http://telegram.com">
                <TelegramIcon />
              </a>
              <a target="_blank" href="http://discord.com">
                <Discord />
              </a>
            </div>
          </div>
          <div className="col_12 md_col_8">
            <div className="row jc_between">
              <div className="lg_col_3 col_6">
                <ul className=" fs_lsm fw_600 leading_150 ff_tomorrow text_white">
                  APIs
                  <a href="#" className="text_white">
                    <li className="fw_300 leading_150 underline text_nowrap footer_links cursor_pointer mt_20">
                      Ethereum API
                    </li>
                  </a>
                  <a href="#" className="text_white">
                    <li className="fw_300 leading_150 underline text_nowrap footer_links cursor_pointer">
                      Polygon API
                    </li>
                  </a>
                  <a href="#" className="text_white">
                    <li className="fw_300 leading_150 underline text_nowrap footer_links cursor_pointer">
                      Arbitrum API
                    </li>
                  </a>
                  <a href="#" className="text_white">
                    <li className="fw_300 leading_150 underline text_nowrap footer_links cursor_pointer">
                      Optimism API
                    </li>
                  </a>
                  <a href="#" className="text_white">
                    <li className="fw_300 leading_150 underline text_nowrap footer_links cursor_pointer">
                      Solana API
                    </li>
                  </a>
                  <a href="#" className="text_white">
                    <li className="fw_300 leading_150 underline text_nowrap footer_links cursor_pointer">
                      NFT API
                    </li>
                  </a>
                  <a href="#" className="text_white">
                    <li className="fw_300 leading_150 underline text_nowrap footer_links cursor_pointer">
                      Transfers API
                    </li>
                  </a>
                  <a href="#" className="text_white">
                    <li className="fw_300 leading_150 underline text_nowrap footer_links cursor_pointer">
                      Token API
                    </li>
                  </a>
                  <a href="#" className="text_white">
                    <li className="fw_300 leading_150 underline text_nowrap footer_links cursor_pointer">
                      View all
                    </li>
                  </a>
                </ul>
              </div>

              <div className="lg_col_3 col_6">
                <ul className=" fs_lsm fw_600 leading_150 ff_tomorrow text_white">
                  Company
                  <a href="#" className="text_white">
                    <li className="fw_300 leading_150 underline text_nowrap footer_links cursor_pointer mt_20">
                      Sign Up
                    </li>
                  </a>
                  <a href="#" className="text_white">
                    <li className="fw_300 leading_150 underline text_nowrap footer_links cursor_pointer">
                      Login
                    </li>
                  </a>
                  <a href="#" className="text_white">
                    <li className="fw_300 leading_150 underline text_nowrap footer_links cursor_pointer">
                      Newsletter
                    </li>
                  </a>
                  <a href="#" className="text_white">
                    <li className="fw_300 leading_150 underline text_nowrap footer_links cursor_pointer">
                      Status
                    </li>
                  </a>
                  <a href="#" className="text_white">
                    <li className="fw_300 leading_150 underline text_nowrap footer_links cursor_pointer">
                      Create Web3 Dapp
                    </li>
                  </a>
                  <a href="#" className="text_white">
                    <li className="fw_300 leading_150 underline text_nowrap footer_links cursor_pointer">
                      Sepolia Faucet
                    </li>
                  </a>
                  <a href="#" className="text_white">
                    <li className="fw_300 leading_150 underline text_nowrap footer_links cursor_pointer">
                      Goerli Faucet{" "}
                    </li>
                  </a>
                  <a href="#" className="text_white">
                    <li className="fw_300 leading_150 underline text_nowrap footer_links cursor_pointer">
                      Mumbai Faucet
                    </li>
                  </a>
                  <a href="#" className="text_white">
                    <li className="fw_300 leading_150 underline text_nowrap footer_links cursor_pointer">
                      Overviews
                    </li>
                  </a>
                  <a href="#" className="text_white">
                    <li className="fw_300 leading_150 underline text_nowrap footer_links cursor_pointer">
                      Gwei Calculator
                    </li>
                  </a>
                  <a href="#" className="text_white">
                    <li className="fw_300 leading_150 underline text_nowrap footer_links cursor_pointer">
                      Chain Connect
                    </li>
                  </a>
                  <a href="#" className="text_white">
                    <li className="fw_300 leading_150 underline text_nowrap footer_links cursor_pointer">
                      Request a Chain
                    </li>
                  </a>
                </ul>
              </div>
              <div className="lg_col_3 col_6">
                <ul className=" fs_lsm fw_600 leading_150 ff_tomorrow text_white">
                  Developers
                  <a href="#" className="text_white">
                    <li className="fw_300 leading_150 underline text_nowrap footer_links cursor_pointer mt_20">
                      About Us
                    </li>
                  </a>
                  <a href="#" className="text_white">
                    <li className="fw_300 leading_150 underline text_nowrap footer_links cursor_pointer">
                      Polygon API
                    </li>
                  </a>
                  <a href="#" className="text_white">
                    <li className="fw_300 leading_150 underline text_nowrap footer_links cursor_pointer">
                      Blog
                    </li>
                  </a>
                  <a href="#" className="text_white">
                    <li className="fw_300 leading_150 underline text_nowrap footer_links cursor_pointer">
                      Optimism API
                    </li>
                  </a>
                  <a href="#" className="text_white">
                    <li className="fw_300 leading_150 underline text_nowrap footer_links cursor_pointer">
                      Careers
                    </li>
                  </a>
                  <a href="#" className="text_white">
                    <li className="fw_300 leading_150 underline text_nowrap footer_links cursor_pointer">
                      Terms Of Service
                    </li>
                  </a>
                  <a href="#" className="text_white">
                    <li className="fw_300 leading_150 underline text_nowrap footer_links cursor_pointer">
                      Transfers API
                    </li>
                  </a>
                  <a href="#" className="text_white">
                    <li className="fw_300 leading_150 underline text_nowrap footer_links cursor_pointer">
                      Press Kit
                    </li>
                  </a>
                  <a href="#" className="text_white">
                    <li className="fw_300 leading_150 underline text_nowrap footer_links cursor_pointer">
                      View all
                    </li>
                  </a>
                </ul>
              </div>
              <div className="lg_col_3 col_6">
                <ul className=" fs_lsm fw_600 leading_150 ff_tomorrow text_white">
                  CONTACT
                  <a href="#" className="text_white">
                    <li className="fw_300 leading_150 underline text_nowrap footer_links cursor_pointer mt_20">
                      General Inquiries
                    </li>
                  </a>
                  <a href="#" className="text_white">
                    <li className="fw_300 leading_150 underline text_nowrap footer_links cursor_pointer">
                      Press
                    </li>
                  </a>
                  <a href="#" className="text_white">
                    <li className="fw_300 leading_150 underline text_nowrap footer_links cursor_pointer">
                      Sales
                    </li>
                  </a>
                  <a href="#" className="text_white">
                    <li className="fw_300 leading_150 underline text_nowrap footer_links cursor_pointer">
                      Discord
                    </li>
                  </a>
                  <a href="#" className="text_white">
                    <li className="fw_300 leading_150 underline text_nowrap footer_links cursor_pointer">
                      Email
                    </li>
                  </a>
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
