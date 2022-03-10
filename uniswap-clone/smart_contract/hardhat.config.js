require("@nomiclabs/hardhat-waffle");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/MuwrLQshTYLtBeKS0qbFQTjpkVGncX46",
      accounts: [
        "46eff8082d7ea66c1cd651fdbd88b1cdd5dd205563a71ede14e9bc133aa20568", // private key
      ],
    },
  },
};
