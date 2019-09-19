 import communityFeature from './images/community.png';
 import historyFeature from './images/history.png';
 import foreverFeature from './images/forever.png';

 import tech from './images/tech.png';
 import community from './images/community.png';
 import immutability from './images/immutability.png';

 import MyEtherWallet from './images/MyEtherWallet.png';
 import Interview from './images/interview.png';
 import Etcday from './images/Etcday.png';

 export const data = {
  about: [
    {
      title: 'What is a blockchain?',
      desc: 'Put simply, blockchains provide a way to keep track of digital assets (money, things) without the need for intermediaries, such as banks and other financial institutions.'
    },
    {
      title: 'What is <span>Ethereum</span> Classic?',
      desc: 'Ethereum Classic (ETC) is a smarter blockchain, it is a network, a community, and a cryptocurrency that takes digital assets further. In addition to allowing people to send value to each other, ETC allows for complex contracts that operate autonomously and cannot be modified or censored. <br /><br /> This may be best explained with an analogy, imagine Bitcoin as a landline phone—it does one thing very well. ETC is like a smartphone—it can do everything Bitcoin can and much more.'
    },
    {
      title: 'More than just a blockchain.',
      desc: 'If the Internet was simply a bunch of interconnected computers, and didn’t have any users or creators making websites, it would be largely useless. In much the same way a blockchain needs users and creators. ETC has both and we’re working on solving real world problems of interconnecting people and their devices.'
    },
  ],
  features: [
    {
      img: communityFeature,
      desc: '<span className="white-word">Open</span> and welcoming community'
    },
    {
      img: historyFeature,
      desc: 'Long history of <span className="white-word">reliable operation</span>'
    },
    {
      img: foreverFeature,
      desc: 'Your <span className="about_features--green">ETC</span> is yours forever'
    },
  ],
  resources: {
    title: 'Get started with <span>Ethereum</span> Classic',
    desc: 'Whether you’re looking for wallets, exchanges or even just general information, we have you covered. Check out our resources page to be directed to the right place you’re searching for.'
  },
  community: {
    features: [
      {
        img: tech,
        title: 'Technolodgy',
        desc: 'We are the longest running smart contract blockchain in existence. Blockchains store value. You want your blockchain to last.',
        fullDesc: 'ETC allows highly efficient value transfers (more so than Bitcoin and its variants), has a focus on IoT applications, and runs a mathematically verified Ethereum Virtual Machine, or EVM. What this means is that ETC is great at what it sets out to do: be a highly efficient means of exchange that connects the world’s devices. <br /><br /> Our developer teams are working on the technology and partnerships that will allow for seamless use of the ETC network everywhere blockchain is needed.'
      },
      {
        img: community,
        title: 'Community',
        desc: 'We have a strong and principled community. Many of our members have stuck around since the beginning. We look beyond the hype and keep to the principles that keep blockchains functioning.',
        fullDesc: 'Many blockchain communities have centralized leadership, meaning a few people at the top make the decisions for everyone else. ETC’s community is purposely structured to avoid this. Responsibility for development and discussion are distributed between many parties. This prevents the biased form of “governance” that other blockchains are susceptible to.'
      },
      {
        img: immutability,
        title: 'Immutability',
        desc: 'We take a conservative approach to changes here, and this conservatism avoids splits and protects your money; much like Bitcoin.',
        fullDesc: 'ETC accounts cannot be modified by others. This feature is a philosophy we share with Bitcoin, Litecoin, and other cryptocurrencies. <br /><br /> Some blockchains follow a different philosophy (“governance”) which allows participants to use their social and economic power to vote on the account balances of others. Imagine if all the members of your bank believed you had broken a law. Instead of going to the police, those with the biggest balances and notoriety voted to take away your money. Imagine a system where the wealthy and celebrities have the final say over your money. A fundamental aspect of ETC is that this will never be allowed to happen, and historical precedent has demonstrated this to be the case.'
      },
    ],
  },
  blog: [
    {
      img: MyEtherWallet,
      title: 'Moving From MyEtherWallet to Emerald Wallet',
      date: '2018.11.01 / 2min read.',
      link: 'https://medium.com/@stevan.blog/moving-from-myetherwallet-to-emerald-wallet-6f63465d26a2'
    },
    {
      img: Interview,
      title: '8btc interview: Anthony Lusardi, U.S. Director of the ETC Cooperative',
      date: '2018.11.01 / 5min read.',
      link: 'https://medium.com/ethereum-classic/8btc-interview-anthony-lusardi-u-s-director-of-the-etc-cooperative-26a5cde3d98d'
    },
    {
      img: Etcday,
      title: 'October 2018 | Monthly Dev Update',
      date: '2018.11.01 / 3 min read.',
    },
    {
      img: MyEtherWallet,
      title: 'Moving From MyEtherWallet to Emerald Wallet',
      date: '2018.11.01 / 2min read.',
      link:'https://medium.com/@stevan.blog/october-2018-monthly-dev-update-5b9f732c7389'
    },
    {
      img: Interview,
      title: '8btc interview: Anthony Lusardi, U.S. Director of the ETC Cooperative',
      date: '2018.11.01 / 5min read.',
    },
    {
      img: Etcday,
      title: 'October 2018 | Monthly Dev Update',
      date: '2018.11.01 / 3 min read.',
    },
  ]
 }

 export default data;