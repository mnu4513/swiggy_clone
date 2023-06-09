import { useEffect, useState } from "react";
import {swiggyApi} from "./Constants";

const Body = () => {

    const [list, setList] = useState([]);

    useEffect(() => {
        restaurantsList();
    }, []);

    async function restaurantsList () {
        const josnData = await fetch(swiggyApi);
        const data = await josnData.json();
        console.log(data);
    };


    return (
        <>

        </>
    )
};

export default Body;