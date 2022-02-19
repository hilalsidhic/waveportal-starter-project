import * as React from "react";
import { ethers } from "ethers";
import {useEffect,useState} from "react";
import './App.css';

export default function App() {
    const [currentAccount, setcurrentAccount] = useState("") // Account address
    const checkIfWindowIsConnected = async ()=>{
      try {
        const {ethereum} = window;
      if(!ethereum){
        console.log('make sure metamask is connected');
      }
      else{
        console.log('window is connected',ethereum);
      }
    const getaccount = await ethereum.request({method: "eth_accounts"});
    if (getaccount.length !== 0) {
      console.log("Found an authorized account:", account);
      const account = getaccount[0];
      setcurrentAccount(account);
    }
    else {
      console.log("No authorized account found");
    }

    } catch(err){
      console.log(err);
    }
  }
  useEffect(() => {
    checkIfWindowIsConnected();
  }, [])

  
  return (
    <div className="mainContainer">

      <div className="dataContainer">
        <div className="header">
        👋 Hey there!
        </div>

        <div className="bio">
        I am Hilal. Connect your Ethereum wallet and wave at me!
        </div>

        <button className="waveButton" >
          Wave at Me
        </button>
      </div>
    </div>
  );
}
