require('dotenv').config();
const TonWeb = require('tonweb');
const tonMnemonic = require('tonweb-mnemonic');

const seedPhrase = process.env.SEED_PHRASE;
if (!seedPhrase) {
    console.error(`
    🚨🚨🚨 [ERROR] SEED_PHRASE Missing! 🚨🚨🚨
    It looks like you forgot to add the SEED_PHRASE to your .env file.
    Please create a .env file in the root directory and add the following line:
    
    SEED_PHRASE="your seed phrase here"
    
    After that, try running the script again. Good luck!
    `);
    process.exit(1);
}

const words = seedPhrase.split(' ');

(async () => {
    try {

        const isValid = tonMnemonic.validateMnemonic(words);
        if (!isValid) {
            throw new Error('Invalid seed phrase');
        }

        const seed = await tonMnemonic.mnemonicToSeed(words);

        const keyPair = TonWeb.utils.keyPairFromSeed(seed);

        const tonweb = new TonWeb(new TonWeb.HttpProvider('https://toncenter.com/api/v2/jsonRPC'));

        const getWalletAddress = async (WalletClass, version) => {
            const wallet = new WalletClass(tonweb.provider, {
                publicKey: keyPair.publicKey,
            });
            const address = await wallet.getAddress();
            let newAddress = address.toString({ bounceable: true });
            newAddress = newAddress.replace(/\+/g, '-').replace(/\//g, '_');
            console.log(`Wallet Address (${version}):`, newAddress);
        };

        console.log('Public Key:', TonWeb.utils.bytesToHex(keyPair.publicKey));
        console.log('Private Key:', TonWeb.utils.bytesToHex(keyPair.secretKey));
        await getWalletAddress(tonweb.wallet.all.v2R1, 'v2R1');
        await getWalletAddress(tonweb.wallet.all.v2R2, 'v2R2');
        await getWalletAddress(tonweb.wallet.all.v3R1, 'v3R1');
        await getWalletAddress(tonweb.wallet.all.v3R2, 'v3R2');
        await getWalletAddress(tonweb.wallet.all.v4R1, 'v4R1');
        await getWalletAddress(tonweb.wallet.all.v4R2, 'v4R2');
    } catch (error) {
        console.error('Error:', error.message);
    }
})();
