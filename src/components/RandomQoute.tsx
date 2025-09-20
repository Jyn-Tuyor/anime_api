import React from "react";
import animeImg from "../assets/images/anime.jpg";

interface Quote {
  quote: string;
  from?: string;
}

const RandomQuote: React.FC = () =>  {
  const randomQouteEndpoint: string = "https://quotes.domiadi.com/api";
  const [quote, setQuote] = React.useState<Quote>();
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  // const fetch = async () => {
  //     const response = await fetch(randomQouteEndpoint);
  //     const data = await response.json();
  //     setQoute(data)
  //     console.log(data)
  // }

  React.useEffect(() => {
    // fetch()
    fetch(`${randomQouteEndpoint}`)
      .then((response: any) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data: Quote) => {
        setQuote(data);
        setIsLoading(false);
      })
      .catch((err: Error) => {
        setIsLoading(false);
        setQuote({ quote: "Something went wrong." });
        alert("Something went wrong.");
        console.error(`Error: ${err}`);
      });
  }, []);

  return (
    <div className="flex justify-center  sm:p-2">
      <div className=" flex flex-col p-2 bg-[#282828] shadow-md rounded-sm w-full">
        <h1 className="text-md text-[#ebdbb2]">
          Heres a random quote for you lol!
        </h1>

        {!isLoading ? (
          <>
            {quote && (
              <>
                <span className="text-[#b8bb26] font-bold">{quote.quote}</span>

                <small className="text-[#fb4934]">
                  (～￣▽￣)～ {quote.from && quote.from}
                </small>
              </>
            )}
          </>
        ) : (
          <>
            <span className="text-[#b8bb26]">Loading qoute...</span>
          </>
        )}

        {/* <img src={animeImg} alt="" className='w-[200px] rounded' /> */}
      </div>
    </div>
  );
}

export default RandomQuote;