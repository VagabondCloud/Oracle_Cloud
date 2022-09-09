import { ethers, Wallet } from "ethers";

const zombieContract = "";

    var url = "https://data-seed-prebsc-1-s1.binance.org:8545/";    
    var customHttpProvider = new ethers.providers.JsonRpcProvider(url);
    const wallet = new Wallet("31b40152dda95b196bfd5723636bb001c06554c2709263cdfc43c1a26c86be5e", customHttpProvider);  

    const router = new ethers.Contract(zombieContract, Zmb.abi, wallet);    