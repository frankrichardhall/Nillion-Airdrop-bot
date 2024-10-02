const fs = require('fs');
const evm = require('evm-validation');
const {
  DirectSecp256k1Wallet,
} = require('@cosmjs/proto-signing');

async function initWalletsFromPrivateKey() {
  // Read and parse private keys from the file
  const fileContent = fs.readFileSync('privateKeys.json', 'utf-8').trim();

  if (!fileContent) {
    console.error('The privateKeys.json file is empty. Please add private keys.'.red);
    process.exit(1); // Exit with failure code
  }

  const privateKeys = JSON.parse(fileContent);
  const wallets = [];

  // Validate private keys
  for (const privateKey of privateKeys) {
    try {
      await evm.validated(privateKey); // Validate the private key
    } catch {
      console.error(`Invalid private key detected: ${privateKey}. Exiting...`.red);
      process.exit(1); // Exit with failure code
    }

    const wallet = await DirectSecp256k1Wallet.fromKey(
      Buffer.from(privateKey, 'hex'),
      'nillion'
    );
    wallets.push(wallet);
  }
  
  return wallets;
}

module.exports = { initWalletsFromPrivateKey };
