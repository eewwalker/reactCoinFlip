import { useState } from "react";
import {sample} from "lodash";
import Coin from "./Coin";



function Interface() {
    const [headsCount, setHeadsCount] = useState(0);
    const [tailsCount, setTailsCount] = useState(0);
    const [coinState, setCoinState] = useState({
        side: "heads",
        imgUrl: "https://www.usmint.gov/wordpress/wp-content/uploads/2024/03/2024-kennedy-half-dollar-uncirculated-obverse-denver-150x150.jpg"
    });

    const total = headsCount + tailsCount;
    const coins = [{
        side: "heads",
        imgUrl: "https://www.usmint.gov/wordpress/wp-content/uploads/2024/03/2024-kennedy-half-dollar-uncirculated-obverse-denver-150x150.jpg"
    },
    {   side: "tails",
        imgUrl:  "https://www.usmint.gov/wordpress/wp-content/uploads/2024/03/2024-kennedy-half-dollar-uncirculated-reverse-150x150.jpg"
    }
]


    function handleClick() {
        const winnerFlip = sample(coins);
        winnerFlip.side === "heads" ? setHeadsCount(headsCount + 1) : setTailsCount(tailsCount + 1);
        setCoinState(winnerFlip);
    }

    return (
        <div className="Interface">
            <h1>Let's flip a coin!</h1>
            <Coin side = {coinState} imgUrl={coinState.imgUrl} />
            <button className="Interface-button" onClick={handleClick}> Flip Me!</button>
            <p>Out of {total} flips, there have been {headsCount} heads and {tailsCount} tails</p>
        </div>
    )
}

export default Interface;