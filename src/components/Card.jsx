import ArrowSvg from "./ArrowSvg";

const Card = ({ coins }) => {
  return (
    <main className="text-center flex flex-wrap justify-center gap-2 overflow-hidden mx-auto md:gap-5 lg:w-5/6 pb-10 2xl:w-9/12">
      {coins
        ? coins.map((e) => (
            <div
              key={e.id}
              className="bg-port-gore-400 w-40 mt-3 flex items-center flex-col text-white text-sm rounded-lg md:w-48"
            >
              <img src={e.image} alt="icon coins" className="w-14 my-5 xl:w-20" />
              <h1 className="text-lg">
                {e.name}
                <span className="ml-1 text-gray-500 text-xs">
                  {e.symbol.toUpperCase()}
                </span>
              </h1>
              <h2>{new Intl.NumberFormat().format(e.current_price)}</h2>
              <div className="py-3">
                <p>{`$${e.market_cap}`}</p>
                <p>{`$${e.total_volume}`}</p>
              </div>
              <div
                className={`w-full py-3 h-full flex items-center justify-center rounded-bl-lg rounded-br-lg ${
                  e.price_change_percentage_24h > 0
                    ? "bg-green-600"
                    : "bg-red-600"
                }`}
              >
                {e.price_change_percentage_24h > 0 ? (
                  <ArrowSvg rotate={"rotate-180"}></ArrowSvg>
                ) : (
                  <ArrowSvg></ArrowSvg>
                )}
                <span>{e.price_change_percentage_24h}</span>
              </div>
            </div>
          ))
        : null}
    </main>
  );
};

export default Card;
