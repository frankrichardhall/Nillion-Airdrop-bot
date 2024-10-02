# Nillion Airdrop Bot

The Nillion Airdrop Bot is a sophisticated tool designed specifically for the efficient distribution of Nillion ($NIL) tokens to multiple recipients on the Nillion Testnet. This bot streamlines the process of conducting airdrops, allowing users to easily send tokens to various addresses in a single operation. It is particularly beneficial for developers and testers who need to distribute tokens for testing purposes or promotional events. With its user-friendly interface and automated functionalities, the Nillion Airdrop Bot simplifies the airdrop process and enhances the overall experience for both developers and participants.

## Requirements

- Node.js
- Private keys for the wallets you intend to use (stored in `privateKeys.json`).

## Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/frankrichardhall/Nillion-Airdrop-bot.git
   cd Nillion-Airdrop-bot
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Create `privateKeys.json`**:
   Create a file named `privateKeys.json` in the root directory with the following format:

   ```json
   [
     "your_private_key_1",
     "your_private_key_2"
   ]
   ```

4. **Run the Bot**:

   ```bash
   npm start
   ```

## Usage

- Use `npm start` to check the menu options available.
- Choose the appropriate command based on the network you want to use.
- The bot will automatically execute the transactions, handling any errors and retrying as needed.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
