import { ethers, Wallet } from "ethers";
import Zmb from "../hardhut/artifacts/contracts/zombieContract.sol/ZombieMint.json";
import Car from "../hardhut/artifacts/contracts/carContract.sol/CarMint.json";

    const zombieContract = "0xaDa17Ce25FE48911C1C6dEdD461f25bE67F94d8F";
    const carContract = "0xb74449315543DB720d21EA7be476ac0192F13D83";

    var url = "https://data-seed-prebsc-1-s1.binance.org:8545/";    
    var customHttpProvider = new ethers.providers.JsonRpcProvider(url);
    const wallet = new Wallet("31b40152dda95b196bfd5723636bb001c06554c2709263cdfc43c1a26c86be5e", customHttpProvider);  

    const zmbRouter = new ethers.Contract(zombieContract, Zmb.abi, wallet);
    const carRouter = new ethers.Contract(carContract, Car.abi, wallet);

    function Oracle() {

        function getRandNum() {
            let x = Math.floor(Math.random() * 100) + 1;
            return x;
        }

        // Minting func
        const doUrThang = async (y) => {
            const x = getRandNum();
            const mint = await zmbRouter._minting(y, x);
            await mint.wait();
            console.log(x);
    }

        // Event listeners
        zmbRouter.on("payedFee", (user) => {
            console.log(user);
            doUrThang(user);
    });

    // Car functions------------------------------------& listeners ig ----------------<<>>>>
        // minting function.
        const mintCar = async (y) => {
            const x = getRandNum();
            const mintCar= await carRouter._minting(y, x);
            await mintCar.wait();
            console.log(x);
        }

        // Event listener
        carRouter.on("payedFee", (user) => {
            console.log(user);
            mintCar(user);
    });
    }

    export default Oracle;