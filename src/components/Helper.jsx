import {
  BrowserIcon,
  ClockIcon,
  CodeBlock,
  CurrencyEth,
  DiamondFour,
  DollarIcon,
  NftApiIcon,
  NotifyIcon,
  OpenBookIcon,
  SlideShowIcon,
  StudentIcon,
  TokenIcon,
  TraceIcon,
  TransactIcon,
  TransferIcon,
} from "./Icons";
import img1 from "../assets/images/png/ethereum.png";
import img2 from "../assets/images/png/polygon-pos.png";
import img3 from "../assets/images/png/arbitrium.png";
import img4 from "../assets/images/png/polygon-zkvm.png";
import img5 from "../assets/images/png/base-etheium.png";
import img6 from "../assets/images/png/optimigh.png";
import img7 from "../assets/images/png/solana.png";
import img8 from "../assets/images/png/astar.png";
import img9 from "../assets/images/png/starknet.png";

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
      <p className="fs_2md text_white ff_tomorrow">
        {" "}
        Ethereum API <br /> Quickstart
      </p>
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
export const Usecase_Data_List = [
  {
    svg: <NftApiIcon />,
    id: "NFT API",
    para: "Get all the NFT data you need with this suite of endpoints",
  },
  {
    svg: <TransactIcon />,
    id: "Transact",
    para: "Send transactions 7.9x faster",
  },
  {
    svg: <TokenIcon />,
    id: "Token API",
    para: "Get token valuable information to display to users",
  },
  {
    svg: <TransferIcon />,
    id: "Transfers API",
    para: "Get historical transactions for any address or contract",
  },
  {
    svg: <NotifyIcon />,
    id: "Notify API",
    para: "Webhooks for transaction activity",
  },
  {
    svg: <TraceIcon />,
    id: "Trace API",
    para: "Deep insights for transaction processing",
  },
];

export const How_Learn_List = [
  {
    svg: <StudentIcon />,
    id: (
      <p className="fs_2md text_white ff_tomorrow">
        Alchemy <br /> University
      </p>
    ),
    para: "Ethereum Developer Bootcamp and JavaScript Fundamentals Courses, for free.",
  },
  {
    svg: <BrowserIcon />,
    id: (
      <p className="fs_2md text_white ff_tomorrow">
        Create Web3 <br /> Dapp
      </p>
    ),
    para: "Create a full-stack dApp in ~4 mins, right from the command-line.",
  },
  {
    svg: <OpenBookIcon />,
    id: (
      <p className="fs_2md text_white ff_tomorrow">
        View all <br /> tutorials
      </p>
    ),
    para: "Web3 tutorials for all topics: NFTs, Solidity, DeFI, transactions, and more!",
  },
];
export const Reference_Data_List = [
  {
    img: img1,
    id: "Ethereum",
  },
  {
    img: img2,
    id: "Polygon PoS",
  },
  {
    img: img3,
    id: "Arbitrum",
  },
  {
    img: img4,
    id: "Polygon ZKEVM",
  },
  {
    img: img5,
    id: "Base",
  },
  {
    img: img6,
    id: "Optimism",
  },
  {
    img: img7,
    id: "Solana",
  },
  {
    img: img8,
    id: "Astar",
  },
  {
    img: img9,
    id: "Starknet",
  },
];
