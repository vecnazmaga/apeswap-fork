import { JungleFarmConfig } from './types'
import tokens from './tokens'

const jungleFarms: JungleFarmConfig[] = [
  {
    jungleId: 0,
    tokenName: 'LC-BNB',
    image: 'LC.svg',
    stakingToken: tokens.lcBnb,
    rewardToken: tokens.lc,
    lpTokens: {
      token: tokens.lc,
      quoteToken: tokens.wbnb,
    },
    contractAddress: {
      97: '0xb1108939748A635C5ed982a17FF5C6E7D79ECF62',
      56: '0x1e7133e05d1b4bdab44cb5503fa4a801000c963a',
    },
    projectLink: 'https://www.luckychip.io/',
    twitter: 'https://twitter.com/luckychip_io',
    harvest: true,
    tokenPerBlock: '2.864583333333333333',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
    lpStaking: true,
    isEarnTokenLp: false,
  },
  {
    jungleId: 1,
    tokenName: 'COC-BNB',
    image: 'COC.svg',
    stakingToken: tokens.cocBnb,
    rewardToken: tokens.coc,
    lpTokens: {
      token: tokens.coc,
      quoteToken: tokens.wbnb,
    },
    contractAddress: {
      97: '0xb1108939748A635C5ed982a17FF5C6E7D79ECF62',
      56: '0xf4195c4ddb10db3df27816bb70dc342d861a7561',
    },
    projectLink: 'https://www.coinofchampions.com/',
    twitter: 'https://twitter.com/coinofchampions',
    harvest: true,
    tokenPerBlock: '62715.1860896991',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
    lpStaking: true,
    isEarnTokenLp: false,
  },
  {
    jungleId: 2,
    tokenName: 'WGICT-USDT',
    image: 'WGICT.svg',
    stakingToken: tokens.wgictUsdt,
    lpTokens: {
      token: tokens.wgict,
      quoteToken: tokens.usdt,
    },
    rewardToken: tokens.wgict,
    contractAddress: {
      97: '0xb1108939748A635C5ed982a17FF5C6E7D79ECF62',
      56: '0xe4417357b022224736ca845856917aaae912c0bd',
    },
    projectLink: 'https://gictrade.io/',
    harvest: true,
    tokenPerBlock: '0.01437847',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 8,
    lpStaking: true,
    isEarnTokenLp: false,
  },
  {
    jungleId: 3,
    tokenName: 'NFT11-BUSD',
    image: 'NFT11.png',
    stakingToken: tokens.nft11Busd,
    rewardToken: tokens.nft11,
    lpTokens: {
      token: tokens.nft11,
      quoteToken: tokens.busd,
    },
    contractAddress: {
      97: '0xb1108939748A635C5ed982a17FF5C6E7D79ECF62',
      56: '0x420B9baD20d43D561377615325E60d5B7CdB1B35',
    },
    projectLink: 'https://nft11.io/',
    twitter: 'https://twitter.com/NFT11_Official',
    harvest: true,
    tokenPerBlock: '0.059799768518518518',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
    lpStaking: true,
    isEarnTokenLp: false,
  },
  {
    jungleId: 4,
    tokenName: 'RUBY-BNB',
    image: 'RUBY.svg',
    stakingToken: tokens.rubyBnb,
    rewardToken: tokens.ruby,
    lpTokens: {
      token: tokens.ruby,
      quoteToken: tokens.wbnb,
    },
    contractAddress: {
      97: '0xb1108939748A635C5ed982a17FF5C6E7D79ECF62',
      56: '0xbc3f5571fc3338d0b9216a2c5c2e6f338531e3f8',
    },
    projectLink: 'https://www.rubyplaynet.com/',
    harvest: true,
    tokenPerBlock: '2.864583333333',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 12,
    lpStaking: true,
    isEarnTokenLp: false,
  },
  {
    jungleId: 5,
    tokenName: 'DRF-BUSD',
    image: 'DRF.svg',
    stakingToken: tokens.drfBusd,
    rewardToken: tokens.drf,
    lpTokens: {
      token: tokens.drf,
      quoteToken: tokens.busd,
    },
    contractAddress: {
      97: '0xb1108939748A635C5ed982a17FF5C6E7D79ECF62',
      56: '0xc8519d981a99c9a56364895c6d37eea686d70540',
    },
    projectLink: 'https://derify.finance/',
    twitter: 'https://twitter.com/DerifyProtocol',
    harvest: true,
    tokenPerBlock: '0.06875',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
    lpStaking: true,
    isEarnTokenLp: false,
  },
]

export default jungleFarms
