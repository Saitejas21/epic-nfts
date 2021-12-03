require('@nomiclabs/hardhat-waffle');
require('dotenv').config();

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/oCnETFXQ8M7ZETNzC4Q9cqB6VzVlAhPA',
      accounts: ['ed48145e91ce388c82adef0f2643dcc63132c766292281a61c49af05fd6d9dc9'],
    },
  },
};