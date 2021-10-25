import axios from "axios";
import React from "react";
import styles from "./CoinGeckoEvents.module.css";

interface Props {}
// you can choose annotate the return type so an error is raised if you accidentally return some other type
const CoinGeckoEvents = (props: Props): JSX.Element => {
  const [state, setState] = React.useState<any>(false);

  async function fetchData() {
    // interface apiData {
    //   count: number;
    //   data: {
    //     address: string;
    //     city: string;
    //     country: string;
    //     description: string;
    //     email: string;
    //     end_date: string;
    //     organizer: string;
    //     screenshot: string;
    //     start_date: string;
    //     title: string;
    //     type: string;
    //     venue: string;
    //   };
    // }
    // let response = await axios({
    //   method: "GET",
    //   url: "https://coingecko.p.rapidapi.com/status_updates",
    //   headers: {
    //     "x-rapidapi-host": "coingecko.p.rapidapi.com",
    //     "x-rapidapi-key": "9d6d64d48dmsh56a7cd3df5b315ap180b67jsn5f6aa34f0119",
    //   },
    // });

    // let statusUpdates: {
    //   category: string;
    //   created_at: string;
    //   description: string;
    //   pin: boolean;
    //   project: {
    //     type: string;
    //     id: string;
    //     name: string;
    //     symbol: string;
    //     image: any;
    //   };
    //   user: string;
    //   user_title: string;
    // }[];

    // const data: any = await response.data;
    // statusUpdates = data.status_updates;
    // const formatedData = statusUpdates.map((item) =>
    //   item.description.replaceAll("\n", " ").replaceAll("\r", "")
    // );
    // console.log(formatedData);
    // // const formattedData = data.status_updates.map( statusUpdate => ())
    // setState(formatedData);
    setState([
      "Noda Network (NCN) Token Listed on Tokpie 📈  👉 Benefit from the mass adoption of cryptocurrencies ₿ https://tokpie.io/blog/trade-noda-network-ncn-token/ #NCN #token #NodaNetwork #ERC20 #BEP20 #cryptoadoption\t\t",
      "🏰PAC Protocol at Texas SandFest🏰  We are pleased to announce that #PACProtocol is a proud sponsor of Texas SandFest 2021!🌞  Texas #SandFest is the largest native sand sculpture event and competition in the US!🏅  Read more: bit.ly/PACSandFest  $PAC #Charity #yanDNA ",
      "Noda Network (NCN) Token Listed on Tokpie 📈  👉 Benefit from the mass adoption of cryptocurrencies ₿ https://tokpie.io/blog/trade-noda-network-ncn-token/ #NCN #token #NodaNetwork #ERC20 #BEP20 #cryptoadoption",
      "Updated ADAMANT JavaScript API v1.2.0 allows to get Bitcoin keys for ADAMANT Wallet. Looking forward to BTC in ADAMANT Exchanger https://github.com/Adamant-im/adamant-api-jsclient/releases/tag/v1.2.0 ",
      "September's issue of the Decred Journal is out now!  New software releases, dev progress across all projects, record Politeia turnout of 77%, network stats and ecosystem updates. Bison included.  https://medium.com/decred/decred-journal-september-2021-1c3de363c1df",
      "We will have a new roadmap coming out this month.  An NFT collection will be part of it.  SuperRewards holders & SmartNode operators, as well as active community members will get special early access & a low price.  Proceeds will be used to support $smart & the collection.  https://twitter.com/scashofficial/status/1448726948969058307",
      "Updated yearly yields for SmartRewards and SuperRewards can already be seen at https://explorer.SmartCash.org  Activate your address in just a couple of steps and receive weekly rewards!  https://smartcash.cc/what-are-smartrewards/  https://twitter.com/SemptIy/status/1448438431894413318 ",
      "🗒 New Development Progress Report (15-10-2021) 🗒 ---  A new Particl development progress report has just been published on Particl News. Check it out now to get all the latest updates on the project's development status.  👉 https://particl.news/particl-development-progress-report-15-10-2021",
      "We have partnered with Finstreet as our Official Education Partner for India.  Finstreet is the largest cryptocurrency education platform in India and will be creating educational and awareness content for Firo over the next few months!  Read more here: https://firo.org/2021/10/15/firo-finstreet.html",
      "Scam Inu (SINU) Token Listed on Tokpie 📈  👉 Aims to stop scammers in crypto ✋  https://tokpie.io/blog/scam-inu-token/ #SINU #token #ScamInu #ERC20 #StopScams #cryptocurrency",
      "BANANO Monthly Update #42 (October 2021)  Time's ripe for a fresh Monthly Update from the BANANO ecosystem, summarizing all important happenings in the BANANO ecosphere in September 2021. This also includes a note regarding current network issues related to the upgrade of the BANANO network to V22.  https://bananocurrency.medium.com/banano-monthly-update-42-october-2021-a7e0d6a42cd1  ",
      "X16R mining pool now available. Visit https://bata.io/mining-pools/ for link.",
      "FIT Token (FIT) Listed on Tokpie 📈  👉 Blockchain solution for tokenizing sports centers 🏆 https://tokpie.io/blog/fit-token/ #FIT #token #FITToken #BEP20 #BSC #tokenize #sportcenter",
      "DigiCorp receives assignment from part of LuLu Group International and announced that theyare ready start a POC with the integration of DigiByte blockchain technology to secure and improve business processes for parts of LuLu Group International, a multinational conglomerate company that operates a chain of hypermarkets and retail companies, headquartered in Abu Dhabi, United Arab Emirates. .  https://www.linkedin.com/feed/update/urn:li:activity:6854455014069452800/",
      "We are excited to announce the child of our new smart contracts for farm, stake, buyback, and governance - #iDYP  Read more about the New Contracts and #iDYP token: Snapshot, Airdrop, and Community Allocation👇 https://link.medium.com/ZttUMlANlkb  #DeFi #DYP #Avalanche #BinanceSmartChain",
      "To boost participation on Fuse Lending Network developed in collaboration with Ola Finance, the 3rd edition of the Rainmaker liquidity rewards program is launching today at 6 pm UTC 🚀  Users will share 150,000 FUSE, 70% for borrowers 🤑   Read more 👉 https://bit.ly/30sviIP ",
      "Beamers!!!   Staking is right around the corner, find out how staking $BEAM for $BEAMX rewards are calculated, and what to expect as we prepare for launch!    https://medium.com/beam-mw/beamers-hodlers-beam-staking-is-coming-513bd196af57  Team Beam  ",
      "FIT Token (FIT) Listed on Tokpie 📈  👉 Blockchain solution for tokenizing sports centers 🏆 https://tokpie.io/blog/fit-token/ #FIT #token #FITToken #BEP20 #BSC #tokenize #sportcenter",
      "1,666,500 #Ballswap trading competition on LaToken exchange.  ✅ Minimum trade: 28000 #BSP  💰 All eligible traders will earn tokens ➕ The more you trade, the more you earn! Ends: 28 October 2021.  Trade here: https://latoken.com/exchange/BSP_USDT  More info: https://go.latoken.com/6wj  Next:  1) Bitmart Staking Relaunch. 2) Gaming event Sponsorship. 3) Ballswapper Accelerator Reflection Token #BART.  https://etherscan.io/token/0x21fb4dd8c500be1a9ba27f827217e477217d6225",
      "WEEKLY RECAP!😀  - #Ontology & AP.LLC's anti-falsification program linked to #ZAICO's inventory management system🤝 - #ONTOWallet hosted events w/ #BabylonsNFT #MOBOX #sotaNFTs & more⛏️🎁 - New #Harbinger interviews🗣️  Read more👇 https://link.medium.com/19LSgx5Tjkb",
      "Cancoin (CANNA) Token Listed on Tokpie 📈  👉 E-commerce platform for the cannabis industry 🌿 https://tokpie.io/blog/cancoin-token-canna/ #CANNA #token #CanCoin #BEP20 #BSC #ERC20 #cannabis",
      "Cancoin (CANNA) Token Listed on Tokpie 📈  👉 E-commerce platform for the cannabis industry 🌿 https://tokpie.io/blog/cancoin-token-canna/ #CANNA #token #CanCoin #BEP20 #BSC #ERC20 #cannabisismedicine",
      "Kronobit (KNB) Token Listed on Tokpie 📈  👉 New platform for online classes and farming 📚 https://tokpie.io/blog/kronobit-token-knb/ #KNB #token #Kronobit #BEP20 #BSC #cryptofarming #onlineclasses",
      "Beamers!   Here's everything you need to prepare for Beam Staking!  https://medium.com/@beam_privacy/heres-everything-you-need-to-know-to-prepare-for-beam-staking-108eef344f7d  Team Beam ",
      "Antum acquired by DigiCorp Labs. DigiCorp Labs has bought Antum / Antum-ID / DigiPassword to enable secure authentication in the Metaverse by integration of DigiByte technology in consumer applications & enterprise solutions developed by DigiCorp.",
      "Dear friends, IQN has been added to the list of currencies of the platform for monitoring digital assets Livecoinwatch.   Livecoinwatch is an analytical online platform with 9657 coins and 314 exchanges. The platform contains graphs of changes in the value of currencies, information on capitalization, ratings of the popularity of coins and tokens, a list of exchanges.  Read more https://bit.ly/3AiJdgL",
      "Kronobit (KNB) Token Listed on Tokpie 📈  👉 New platform for online classes and farming 📚 https://tokpie.io/blog/kronobit-token-knb/ #KNB #token #Kronobit #BEP20 #BSC #cryptofarming #onlineclasses",
      "King of the Moon (KOTM) Token Listed on Tokpie 📈  👉 New gameFi token on BSC 🏅 https://tokpie.io/blog/king-moon-kotm-token/ #KOTM #token #KingoftheMoon #BEP20 #BSC #autoyield",
      "Beam 2021 Week #40 - Staking Beam and Beyond  The best-in-class privacy DeFi in Beam DAO and BeamX staking. Updated Roadmap Community call October 21st, 3pm UTC - see newsletter for link  https://beamprivacy.substack.com/p/beam-2021-week-40-staking-beam-and  Team Beam ",
      "Our very own Robert Miller sat down with Staking Rewards to discuss the ins and outs of Fuse's dPOS blockchain and what the future holds for the growing ecosystem that it powers!   Got to blog 👉 https://bit.ly/3DudriT",
      "Check out the latest Qtum Community & Development updates! 👇  https://blog.qtum.org/september-community-development-updates-f313117554a6",
      "King of the Moon (KOTM) Token Listed on Tokpie 📈  👉 New gameFi token on BSC 🏅 https://tokpie.io/blog/king-moon-kotm-token/ #KOTM #token #KingoftheMoon #BEP20 #BSC #autoyield",
      "Calcifer (CALCIFER) Token Listed on Tokpie 📈  👉 Combination of yield farming with gamification features 🎐 https://tokpie.io/blog/calcifer-token/ #CALCIFER #token #yieldfarming #BEP20 #BSC #gamification",
      "RT: SmartCash @scashofficial launches giveaway campaign  https://twitter.com/SemptIy/status/1447206132855021568",
      "Ever heard of time locked coin \"burns\"? Probably not.   It's never been done before in #crypto but we'll do it soon, reducing our active supply while keeping total supply number intact, respecting the max supply count.  https://twitter.com/scashofficial/status/1445527631361810438",
      "One of the best wallets and exchange platforms in the industry, @EdgeWallet, just released an updated SmartRewards guide:  https://support.edge.app/support/solutions/articles/8000096957-smartcash-how-to-activate-smartrewards  Easy to use Edge to swap, safely store your #SmartCash and collect rewards.   https://twitter.com/scashofficial/status/1446815049423724545",
      "Our new block rewards allocation.   SmartCash is secure on-chain DeFi  https://twitter.com/scashofficial/status/1447200962876170246",
      "Calcifer (CALCIFER) Token Listed on Tokpie 📈  👉 Combination of yield farming with gamification features 🎐 https://tokpie.io/blog/calcifer-token/ #CALCIFER #token #yieldfarming #BEP20 #BSC #gamification",
      "Join two new ADM pools: adm_fan_pool: http://45.93.4.185:36667 ru_pool: http://194.190.26.233:36667 Create your own pool and receive 3000 ADM compensation: https://medium.com/adamant-im/3000-adm-for-running-a-forging-pool-5106c11d5c45",
      "SuperAda (Super_ADA) Token Listed on Tokpie 📈  👉 One of the highest ADA on the market ✨ https://tokpie.io/blog/super-ada-token/ #SuperAda #token #Super_ADA #BEP20 #BSC #Autoreward",
      "Exosis soon moving from coin to Multi-Chain Token. For more details visit https://www.exosis.org/",
      "📢#DYP Stats & Recap of the Week👇  💰8877 #ETH, 7641 #BNB & 12568 #AVAX worth $36,003,100 paid to the farmers ⛈KyberDMM Rainmaker Farm on #Avalanche launched, current APY 215% ➡️https://dmm.exchange/#/farms?networkId=43114 🔐Security audits for new contracts started  ➕More",
      "We are delighted to announce our new section- Charity.  First Donation will be going to the Big Green @biggreen by Kimble Musk @kimbal  Charity: https://www.bitball-btb.com/charity  Anyone can suggest & donate for charities here: https://www.bitball-btb.com/donate  Counter: https://www.bitball-btb.com/donation-counter ",
      "Updated Info on Trading acceleration Token for BallSwapper.com  Multi chain launch for better results.  1) Ethereum #Eth- BallSwapper.com & @Uniswap. 2) Binance #BSC- @pancakeswap. 3) Polygon #Matic- @QuickswapDEX.  Fair launch. Approx 80% supply will be pooled across all the #DEXs.  Accelerator token will be self rewarding reflection token, giving holders incentives for holding & trading.  If a #Ballswap holder owns 1 million #BSP, they will recieve the same amount (1 million).",
      "SuperAda (Super_ADA) Token Listed on Tokpie 📈  👉 One of the highest ADA on the market ✨ https://tokpie.io/blog/super-ada-token/ #SuperAda #token #Super_ADA #BEP20 #BSC #Autoreward",
      "DAI Airdrop: Coming on 10th Oct 🎁 👉 Learn how to get stablecoins every month 💲 https://tokpie.io/blog/get-airdrop-cryptocurrencies-from-top-icos-every-week/ #DAI #stablecoin #airdrop #giveaway #passiveincome",
      "The swap between the IMPL and IMPLX coins will start on November 1, 2021. On this date coin holders will be able to start a gradual migration to the new blockchain IMPLX. The procedure for the SWAP to a new blockchain will continue for two months and will end on December 31, 23.59.59 GMT.  https://impleum.com/all-you-need-to-know-about-the-swap-of-the-impl-to-implx-coin/",
      "DAI Airdrop: Coming on 10th Oct 🎁 👉 Learn how to get stablecoins every month 💲 https://tokpie.io/blog/get-airdrop-cryptocurrencies-from-top-icos-every-week/ #DAI #stablecoin #airdrop #giveaway #passiveincome",
      "Bruh (BRUH) Token Listed on Tokpie 📈  👉 Crypto that relies on the people 🗳️ https://tokpie.io/blog/bruh-token/ #BRUH #token #cryptocurrency #ERC20 #Ethereum",
      "🗒 New Development Progress Report (08-10-2021) 🗒 ---  A new Particl development progress report has just been published on Particl News. Check it out now to get all the latest updates on the project's development status.   👉 https://particl.news/particl-development-progress-report-08-10-2021",
    ]);
  }

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{ display: "grid", gridTemplateColumns: "13% 87%" }}>
      <div style={{ fontWeight: 500, padding: "10%" }}>News Feed</div>
      <div className={styles.hwrap}>
        <div className={styles.hmove}>
          {state ? (
            state.map((statusUpdate: any) => (
              <div className={styles.hitem}>{statusUpdate}</div>
            ))
          ) : (
            <div className={styles.hitem}></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CoinGeckoEvents;
