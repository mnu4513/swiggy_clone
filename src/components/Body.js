import { swiggyApi, restuarantList } from "./Constants";
import RestuarantCard from "./RestuarntCard";
import {useEffect, useState} from "react";





function filterData (searchText, restuarants) {
  const filterData = restuarants.filter((restuarant) => 
  restuarant.data.name.includes(searchText));
  return filterData;
};







const Body = () => {
  const [restuarants, setRestuarants] = useState(restuarantList);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getRestuarants();
  }, [restuarants]);

  async function getRestuarants () {
    const data = await fetch(swiggyApi);
    const json = await data.json();
    setRestuarants(json?.data?.cards[2]?.data?.data?.cards);
  };

  console.log(restuarants);

  return (
    <>
      <div className="search-container" >
        <input type="text" 
        className="search-input"
        placeholder="Search"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
        />

        <button 
        className="search-btn"
        onClick={() => {

          const data = filterData(searchText, restuarants);
        }
        }
        >Search</button>
      </div>
      <div className="resturant-list" >
        {
          restuarants?.map((restuarant) => {
            return (
              <RestuarantCard {...restuarant.data} key={restuarant.data?.id} />
            );
          })}
      </div>
    </>
  )

};

export default Body;