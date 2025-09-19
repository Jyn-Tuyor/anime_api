import React from 'react'
import animeImg from '../assets/images/anime.jpg'

export default function DescHeader() {
    const randomQouteEndpoint = "https://quotes.domiadi.com/api";
    const [quote, setQuote] = React.useState();
    
    // const fetch = async () => {
    //     const response = await fetch(randomQouteEndpoint);
    //     const data = await response.json();
    //     setQoute(data)
    //     console.log(data)
    // }
    
    React.useEffect(() => {
        // fetch()
        fetch(`${randomQouteEndpoint}`)
            .then((response) => {
                if (response.ok) {
                    return response.json()
                }
            })
            .then((data) => {
                setQuote(data)
                console.log(data)
            })
            .catch((err) => {
                alert("Something went wrong.")
                console.error(`Error: ${err}`)
            })

    }, [])

    return (
        <div className="flex justify-center mt-4 sm:p-4">
            <div className=" flex flex-col p-2 bg-[#282828] shadow-md rounded-md w-min-[300px]">
                <h1 className='text-md text-[#ebdbb2]'>Heres a random quote for you lol!</h1>
                { quote && <>
                    <span className='text-[#b8bb26]'>
                        {quote.quote}
                    </span>

                    <small className='text-[#fb4934]'>
                        (～￣▽￣)～ {quote.from}
                    </small>
                    </>
                }
                
                {/* <img src={animeImg} alt="" className='w-[200px] rounded' /> */}
            </div>
        </div>

    )
}
