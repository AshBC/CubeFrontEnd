import React from "react";
import WhatIsCryto from "../../images/whatIsCrypto.png";
import HowDoIStart from "../../images/howDoIStart.png";
import DownloadWallet from "../../images/downloadWallet.png";
import BuyEth from "../../images/buyEth.png";
import WelcomeToCrypto from "../../images/welcomeToCrypto.png";
import Header from "../../components/Header";

class MakeWallet extends React.Component {
  render() {
    return (
      <div>
        <h2 className="walletDescrip">
          Five steps to setting up your crypto wallet and getting in the
          market...
        </h2>
        <div className="row-one">
          <img className="steps" src={WhatIsCryto} alt="what is crypto" />
          <img className="steps" src={HowDoIStart} alt="how do I start" />
          <img
            className="steps"
            src={DownloadWallet}
            alt="download crypto wallet through this link to meta mask"
          />
        </div>
        <div className="row-two">
          <img className="steps" src={BuyEth} alt="what is crypto" />
          <img className="steps" src={WelcomeToCrypto} alt="what is crypto" />
          <iframe
            className="steps"
            src="https://www.youtube.com/embed/GNPz-Dv5BjM"
          ></iframe>
        </div>
        <Header />
      </div>
    );
  }
}
export default MakeWallet;
