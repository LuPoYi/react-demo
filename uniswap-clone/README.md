### Folder Structure

https://uniswap-transfer-demo.vercel.app/

- client - Next App
- smart_contract - Solidity
- Studio - Sanity

### command

```zsh
yarn create next-app -e with-tailwindcss client
```

```zsh
// studio

npm install -g @sanity/cli
sanity init --coupon cleverprogrammer
```

```zsh
npx hardhat
npx hardhat compile
npx hardhat run scripts/deploy.js --network rinkby
```
