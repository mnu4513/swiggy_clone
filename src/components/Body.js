import { useEffect, useState } from "react";
import {swiggyApi} from "./Constants";
import RestuarantCard from "./RestuarntCard";

const Body = () => {

    const [list, setList] = useState([]);

    useEffect(() => {
        restaurantsList();
    }, []);

    async function restaurantsList () {
        const josnData = await fetch(swiggyApi);
        const data = await josnData.json();
        console.log(data);
        console.log(data.data.cards[2].data.data.cards);
        setList(data.data.cards[2].data.data.cards);
    };


    return (
        <div className="restuarant-list">
            {
                list?.map((item) => {
                    return <RestuarantCard data={item.data} key={item.data.id}/>
                })
            }
        </div>
    );
};

export default Body;