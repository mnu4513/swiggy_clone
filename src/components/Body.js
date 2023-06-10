import { useEffect, useState } from "react";
import { swiggyApi } from "./Constants";
import RestuarantCard from "./RestuarntCard";

const Body = () => {

    const [list, setList] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [searchList, setSearchList] = useState(list);

    useEffect(() => {
        restaurantsList();
    }, [searchList]);

    async function restaurantsList() {
        const josnData = await fetch(swiggyApi);
        const data = await josnData.json();
        // console.log(data);
        // console.log(data.data.cards[2].data.data.cards);
        setList(data.data.cards[2].data.data.cards);
    };

    function onChangeInput() {


    };

    console.log(searchList);

    return (
        <>
            <div className="search-container">
                <input type="text" className="search-input" placeholder="Search" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                <button className="search-btn">Search</button>
            </div>
            <div className="restuarant-list">
                {
                    list?.map((item) => {
                        return <RestuarantCard data={item.data} key={item.data.id} />
                    })
                }
            </div>
        </>
    );
};

export default Body;