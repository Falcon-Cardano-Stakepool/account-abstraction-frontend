import { smartWallet, localWallet, ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";

const activeChain = "mumbai";

function MyApp({ Component, pageProps }) {
 
  return (
    <ThirdwebProvider 
      activeChain={activeChain}
      supportedWallets={[
        smartWallet({
          factoryAddress: "0xb2031D19907Eac16CF208Db17d2475a0A23bd920", // Address of your account factory smart contract
          thirdwebApiKey: "fa97ae2edb3597ae5e51a3f4eab1bd69f7103ca4e8ebc751004727d10db1cb8d82894a12501a9d82fd75b269f81e181790cfe09dc99cb1733444b4e8ffce635d",
          gasless: true,
          // Local wallet as the only option for EOA
          personalWallets: [
            localWallet({
              persist: true,
            }),
          ],
        }),
      ]}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
