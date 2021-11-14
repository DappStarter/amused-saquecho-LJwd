require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture hill fresh skull drift rifle magic concert grace brave bridge genius'; 
let testAccounts = [
"0x4fed20ea49a777820442fcbd887df3fc316fdfd1960e1d3fc72ae540e7cdccc5",
"0xecc7b8d311d29ecbadf84f7b1a3ed21b4e68e7e8dedfec03b6013909a6c723ee",
"0xda7d98ec550bc12c7827f1dccccda63b4d9aeb788784f4cf801f91e3864286f4",
"0xd7b96ab498df71c5cbeca37b9310bfbee8199bc2183dafb260c5d923f8da9605",
"0x47515e4a25d03809dd3c285a621910b36504d886e18a91bc84142bf0adf475a3",
"0x2fb2bccb7cc32dc0858d9654b17f1b4630757c6a06b44d3cab0615b0f7980cc6",
"0xf8a318cfb0a10472cdc6a8de4699177a4a187d51885a504f37787413d9de63bc",
"0xc25fd6d56e403b7b4c98be9b709c2899d90af705e60125f8fb491451edab0be7",
"0xf43a66736983c8e231b642ba09cccff16a64259218344fe1fa3b89fdf084a7ae",
"0x870e0ef31251665a1e96c5c1bb94a1c99df2956f89c699fb096ed9e23705aa6b"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


