import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./components/Card";

const App = () => {
  const [coins, setCoins] = useState(null);
  const [search, setSearch] = useState(null);
  const res = async () => {
    const r = await axios(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    ).then((r) => r.data);
    setCoins(r);
  };
  useEffect(() => {
    res();
  }, []);
  const handleChange = (event) => {
    const filterCoins = coins.filter(
      (value) =>
        value.name.toLowerCase().includes(event.target.value.toLowerCase()) ||
        value.symbol.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setSearch(filterCoins);
  };
  return (
    <div className="bg-port-gore-500 min-h-screen">
      <header className="text-center">
        <input
          type="text"
          onChange={handleChange}
          className="outline-none py-1 px-2 rounded-sm bg-port-gore-300 text-white border-b border-transparent focus:border-white md:w-2/5 lg:py-2 lg:px-3 my-5"
        />
      </header>
      <Card coins={search ?? coins}></Card>
    </div>
  );
};

export default App;
