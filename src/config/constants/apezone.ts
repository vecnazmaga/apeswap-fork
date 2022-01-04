import { Ifo } from './types'

const ApeZone: { ifos: Ifo[] } = {
  ifos: [
    {
      id: 'stz',
      address: '0x0B3A1f44c51eE2B540F60E48E8E802fDe2473455', // Leave empty for "Coming Soon!"
      isActive: true,
      name: '99Starz',
      subTitle: `The World's Biggest NFT Yield Ecosystem`,
      description: `99Starz is creating a results-driven, cross-chain GameFi ecosystem that will allow game studios, gamers, and collectors alike to participate and win in different ways together. Through their unique GameFi guild model and NFT leasing marketplace, 99Starz will cater to all aspects of the most popular blockchain gaming economies, including Axie Infinity, F1 Delta, and Sorare, just to name a few.`,
      launchDate: 'December 11th',
      launchTime: '5:00 UTC',
      saleAmount: '500,000 STZ',
      raiseAmount: '$250,000',
      vestingTime: '3 Months',
      projectSiteUrl: 'https://99starz.io/',
      currency: 'GNANA',
      currencyAddress: '0xdDb3Bd8645775F59496c821E4F55A7eA6A6dc299',
      offeringCurrency: 'STZ',
      tokenDecimals: 18,
      releaseBlockNumber: 22364007, // block to start showing contract details
      vesting: true,
      // burnedTxUrl: '',
    },
    {
      id: 'gan',
      address: '0x11D8aB92837085eA0e410EA96eDd8D751894933d', // Leave empty for "Coming Soon!"
      isActive: false,
      name: 'Galactic Arena',
      subTitle: 'Welcome to the Galactic Arena!',
      description: `Galactic Arena is the battlefield that everyone has been waiting for! It doesn't matter where your NFT comes from, In this NTFverse, you can bring your favorite heroes along with you! Take part in THE CARNIVAL, then make wagers on PvP battles in REAL TIME! Prizes include BNB, BUSD, GAN! Get on top of the Leaderboard and earn extra rewards!`,
      launchDate: 'November 4th',
      launchTime: '16:00 UTC',
      saleAmount: '80,000,000 GAN',
      raiseAmount: '$400,000',
      vestingTime: '3 Months',
      projectSiteUrl: 'http://galacticarena.io/',
      currency: 'GNANA',
      currencyAddress: '0xdDb3Bd8645775F59496c821E4F55A7eA6A6dc299',
      offeringCurrency: 'GAN',
      tokenDecimals: 18,
      releaseBlockNumber: 12364007, // block to start showing contract details
      vesting: true,
      // burnedTxUrl: '',
    },
    {
      id: 'nfty',
      address: '0xF04c0efc1aBF1c98076a8ecEd2a68009ee55A0A9', // Leave empty for "Coming Soon!"
      isActive: false,
      name: 'NFTY Network',
      subTitle: 'Decentralized NFT Gating Ecosystem',
      description: `NFTY Network is a decentralized NFT ecosystem built to facilitate various innovations in the NFT space, unlocking the true potential of NFTs through gated experiences that connect Web2 and Web3 infrastructures like never before!`,
      launchDate: 'September 29th',
      launchTime: '17:00 UTC',
      saleAmount: '30,800,000 NFTY',
      raiseAmount: '$385,000',
      vestingTime: '3 Months',
      projectSiteUrl: 'https://nftynetwork.io/',
      currency: 'GNANA',
      currencyAddress: '0xdDb3Bd8645775F59496c821E4F55A7eA6A6dc299',
      offeringCurrency: 'NFTY',
      tokenDecimals: 18,
      releaseBlockNumber: 11342539, // block to start showing contract details
      vesting: true,
      // burnedTxUrl: '',
    },
    {
      id: 'dragonary',
      address: '0x1D51e7e0cB6f181489c9F24E396e54cb02D1EF0e', // Leave empty for "Coming Soon!"
      isActive: false,
      name: 'Dragonary',
      subTitle: 'Decentralized NFT Gaming',
      description: `Dragonary is a brand new game being developed by CoinaryTV for Desktop, iPhone, and Android, where users can play to earn in-game currency. You can collect, trade, and breed various dragon NFTs and battle against the game or other players to win!`,
      launchDate: 'August 7th',
      launchTime: '16:00 UTC',
      saleAmount: '50,000,000 CYT',
      raiseAmount: '$500,000',
      totalAmountRaised: '$10,018,512',
      bananaToBurn: '$500,000',
      vestingTime: '3 Months',
      projectSiteUrl: 'https://dragonary.com/',
      currency: 'GNANA',
      currencyAddress: '0xdDb3Bd8645775F59496c821E4F55A7eA6A6dc299',
      offeringCurrency: 'CYT',
      tokenDecimals: 18,
      releaseBlockNumber: 9828870, // block to start showing contract details
      vesting: true,
      // burnedTxUrl: '',
    },
    {
      id: 'bitfresh',
      address: '0x0aA255267CBE1cC9366509056A24608385F07617',
      isActive: false,
      name: 'Bitfresh',
      subTitle: 'The first community-driven iGaming platform where everyone wins.',
      description:
        'Bitfresh is a blockchain-based community driven social iGaming experience that pays dividends to players and token holders. The platform is filled with reward systems to give players many ways to win and earn over time.',
      launchDate: 'Apr. 24',
      launchTime: '03:00 UTC',
      saleAmount: '10,000,000 BFT',
      raiseAmount: '$100,000',
      totalAmountRaised: '$369,901',
      bananaToBurn: '$50,000',
      projectSiteUrl: 'https://www.bitfresh.win/public-sale',
      offeringCurrency: 'BFT',
      currency: 'GNANA',
      currencyAddress: '0xdDb3Bd8645775F59496c821E4F55A7eA6A6dc299',
      tokenDecimals: 18,
      releaseBlockNumber: 6565331,
    },
    {
      id: 'aperocket',
      address: '0xF5413C7033ED5dF58b0F6A942BAEA1548a9AD2F4',
      isActive: false,
      name: 'ApeRocket',
      subTitle: 'DeFi yield farming aggregator and optimizer for Binance Smart Chain.',
      description:
        'ApeRocket Finance is a suite of products in Decentralized Finance (DeFi) that provides yield optimization strategies through the Binance Smart Chain, using ApeSwap liquidity.',
      launchDate: 'May. 25',
      launchTime: '03:00 UTC',
      saleAmount: '27,778 SPACE',
      raiseAmount: '$250,000',
      totalAmountRaised: '$1,551,374',
      bananaToBurn: '$250,000',
      projectSiteUrl: 'https://aperocket.finance',
      currency: 'GNANA',
      currencyAddress: '0xddb3bd8645775f59496c821e4f55a7ea6a6dc299',
      offeringCurrency: 'SPACE',
      tokenDecimals: 18,
      releaseBlockNumber: 7378325,
      // burnedTxUrl: 'https://bscscan.com/tx/0x938454e722fdef0a2f34b16f16bed50f6deb692b942331a9a6e2cf96977e116b',
    },
    {
      id: 'hifi',
      // address: '0x0dEFfe964CbCfBDA31251ADaa8DA6dA0961eba3C', // Leave empty for "Coming Soon!"
      address: '0xe3528182889afEAEADE455841b6CFE9AC1e53a03', // IAO Aux contract
      isActive: false,
      name: 'Hifi',
      subTitle: 'Decentralized retro gaming ecosystem.',
      description:
        'HiFi is a decentralized retro gaming ecosystem driven by its community. It uses staking and gameplay mining participation rewards to create a completely new DeFi gaming experience.',
      launchDate: 'June 11',
      launchTime: '03:00 UTC',
      saleAmount: '80,000,000 HIFI',
      raiseAmount: '$400,000',
      totalAmountRaised: '$1,086,246',
      bananaToBurn: '$400,000',
      projectSiteUrl: 'https://hifigamingsociety.com/',
      currency: 'GNANA',
      currencyAddress: '0xddb3bd8645775f59496c821e4f55a7ea6a6dc299',
      offeringCurrency: 'HIFI',
      tokenDecimals: 18,
      releaseBlockNumber: 8135430, // block to start showing contract details
      // burnedTxUrl: '',
    },
    {
      id: 'bishares',
      address: '0xf6718973d21F72845300Ee2ded2e4624CF06b06e', // Leave empty for "Coming Soon!"
      isActive: false,
      name: 'BiShares',
      subTitle: 'Decentralized Index Funds',
      description: `BiShares is BSC's first Index Funds for safely diversifying across crypto assets. Use BNB to purchase a wide basket of assets and gain exposure to the broader crypto market. Never miss out on another moon again!`,
      launchDate: 'July 9th',
      launchTime: '03:00 UTC',
      saleAmount: '71429 BISON',
      raiseAmount: '$250,000',
      totalAmountRaised: '$503,407',
      bananaToBurn: '$250,000',
      projectSiteUrl: 'https://bishares.finance/',
      currency: 'GNANA',
      currencyAddress: '0xddb3bd8645775f59496c821e4f55a7ea6a6dc299',
      offeringCurrency: 'BISON',
      tokenDecimals: 18,
      releaseBlockNumber: 8993971, // block to start showing contract details
      // burnedTxUrl: '',
    },
  ],
}

export default ApeZone
