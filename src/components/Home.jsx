import { ethers, Wallet } from "ethers";
import Zmb from "../hardhut/artifacts/contracts/zombieContract.sol/ZombieMint.json";

    const zombieContract = "0x49EBeE592b8c1926d59Ab2973A8B2012E841264D";

    var url = "https://data-seed-prebsc-1-s1.binance.org:8545/";    
    var customHttpProvider = new ethers.providers.JsonRpcProvider(url);
    const wallet = new Wallet("31b40152dda95b196bfd5723636bb001c06554c2709263cdfc43c1a26c86be5e", customHttpProvider);  

    const router = new ethers.Contract(zombieContract, Zmb.abi, wallet);    

    function Oracle() {

        function getRandNum() {
            let x = Math.floor(Math.random() * 100) + 1;
            return x;
        }

        // Minting func
        const doUrThang = async (y) => {
            const x = getRandNum();
            const mint = await router._minting(y, x);
            await mint.wait();
            console.log(x);
    }

        // Event listeners
        router.on("payedFee", (user) => {
            console.log(user);
            doUrThang(user);
    });

    }

    export default Oracle;