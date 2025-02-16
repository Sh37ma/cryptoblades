const { upgradeProxy } = require("@openzeppelin/truffle-upgrades");

const TokensManager = artifacts.require("TokensManager");

module.exports = async function (deployer, network) {
    if (network === "development"
    || network === "development-fork"
    || network === 'bsctestnet'
    || network === 'bsctestnet-fork'
    || network === 'hecotestnet'
    || network === 'okextestnet'
    || network === 'polygontestnet'
    || network === 'avaxtestnet'
    || network === 'avaxtestnet-fork'
    || network === 'auroratestnet'
    || network === 'kavatestnet'
    || network === 'skaletestnet') {
        const tokensManager = await upgradeProxy(TokensManager.address, TokensManager, { deployer });
    }
};