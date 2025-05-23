import {
  ClockIcon,
  CodeBlock,
  CurrencyEth,
  DiamondFour,
  DollarIcon,
  SlideShowIcon,
} from "./Icons";

export const Nav_List = [
  { id: "RPC API" },
  { id: "Pricing" },
  { id: "About" },
  { id: "Docs" },
];
export const Popular_Data_List = [
  {
    svg: <DiamondFour />,
    id: (
      <p className="fs_2md text_white ff_tomorrow">
        NFT API <br /> Quickstart
      </p>
    ),
    para: "Easiestway to get NFT data from ownership to sales to metadata and more.",
  },
  {
    svg: <CurrencyEth />,
    id: (
      <p className="fs_2md text_white ff_tomorrow"> Ethereum API <br /> Quickstart</p>
    ),
    para: "How to get started building on Ethereum and using the JSON-RPC API.",
  },
  {
    svg: <CodeBlock />,
    id: (
      <p className="fs_2md text_white ff_tomorrow">
        {" "}
        SDK <br /> Quickstart
      </p>
    ),
    para: "The easiest way to connect your dApp to the blockchain using JavaScript.",
  },
  {
    svg: <ClockIcon />,
    id: "alchemy_pending Transactions",
    para: "Subscribe to full transaction objects or hashes that are pending based on provided filters.",
  },
  {
    svg: <DollarIcon />,
    id: "What are payable functions in Solidity?",
    para: "Learn how payable functions work in Solidity.",
  },
  {
    svg: <SlideShowIcon />,
    id: "How to get all NFTs owned by an address",
    para: "Query all NFTs owned by a provided address in one line of code.",
  },
];
