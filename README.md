# tonweb-wallet-generator

Feel free donate to my TON address:

```
UQDMoRyYACfLDJbmvd8XdonsPaPJhALay86KIJ9hd1e-fVFW
```

TonWeb Wallet Generator is a tool to generate wallet addresses for different versions of TON wallets using a seed phrase stored in a `.env` file. This tool uses the `TonWeb` library to interact with the TON blockchain.

## Features

- Validates the seed phrase.
- Converts the seed phrase to a seed.
- Retrieves the key pair (public and private keys) from the seed.
- Generates wallet addresses for various wallet versions (`v2R1`, `v2R2`, `v3R1`, `v3R2`, `v4R2`).

## Requirements

- [Node.js](https://nodejs.org/) (v14 or higher)
- NPM (v6 or higher)

## Steps

### 1. Clone the repository

```
git clone git remote add origin https://github.com/sekuja/tonweb-wallet-generator.git
cd tonweb-wallet-generator
```

### 2. Install dependencies

```
npm install
```

### 3. Create and configure `.env` files

Add your seed phrase to the `.env` file:

```
SEED_PHRASE=your_seed_phrase_here
```

### 4. Run script

Run the script using the following command:

```
npm start
```

OR

```
npm run generate
```

OR

```
node generate.js
```

The script will validate the seed phrase, generate the key pair, and output the public and private keys along with the wallet addresses for different wallet versions.

### Example Output

```
Public Key: <public_key>
Private Key: <private_key>
Wallet Address (v2R1): <address_v2R1>
Wallet Address (v2R2): <address_v2R2>
Wallet Address (v3R1): <address_v3R1>
Wallet Address (v3R2): <address_v3R2>
Wallet Address (v4R2): <address_v4R2>
```

### Error Handling

If the seed phrase is invalid or any other error occurs during execution, an appropriate error message will be displayed in the console.

### By:
- GitHub: [Sekuja](https://github.com/sekuja)
- Twitter: [Sekuja](https://x.com/0xSekuja)
- Telegram: [Sekuja](https://t.me/sekuja)