require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy kiwi brand venture stool regret pave purity inside light army genre'; 
let testAccounts = [
"0x67bf6ba9a7127e02e67669e2dc78788d8e670f53a308487bc09d0d190af9a429",
"0x38187017afbed229d12292aa263a61d90aa5f4072a4fb1721358dfad3559a16c",
"0xcfd74721fca5d2a5151c625c5deb5d46b47af6e0ad31a851c3eea8f2da391855",
"0x4bbfdb33d41f60879c5729340756179d3a524b603fbd771f744beba4d90d8297",
"0x707e3c03e529b26fcd82552df214a721d22c0974a30226544d06460ee7f75be6",
"0xb250cc4326bf70e6cb768c6b9df14e84b0fc3cbd4b55bbc9c450b874095658e1",
"0xb48d7abc16c4ea860c4b9200995f6ad134d0e0e1fbb71ae1e9512e3aaca505d6",
"0xf057898e02eccf385b457b1d1cb4d8ad44acbc1b17c45a29224e398017758dda",
"0x1027c16c59ccc3fdbb18a4d1bd8c7adf0237c2bea4eba1d002bfb4e00837d563",
"0x295489f8b7a3cffeb129afadf5510eabe5e7ae1a8862fac53ed7829264afa4cd"
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


