import animeImg from '../assets/images/anime.jpg'

export default function Content({image, data}) {

  return <>
    {image ? (
        <div
          style={{
            display: 'flex',
            flexFlow: 'row wrap',
            gap: '3rem',
            justifyContent: 'center',
          }}
        >
          {image.map((src, index) => (
            <div 
            style={{
              backgroundColor: 'white',
              width: '250px',
              display: 'flex',
              flexFlow: 'column wrap',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '6px',
              overflow: 'hidden',
              borderRadius: '8px',
            }}
            key={data.data[index].mal_id}>
              <img
                style={{
                  width: '194px',
                  borderRadius: '4px',
                }}
                src={src}
                alt={`Anime ${index + 1}`}
              />
              <hr style={{height: '1px', marginTop: '1rem', width: '100%'}} />

              <p>{data.data[index].title_english}</p>
              <div style={{display: 'flex', flexFlow: 'column wrap'}}>
                <strong>Rating: <span
                style={{
                  fontWeight: '100',
                  fontSize: '14px'
                }}
              > {data.data[index].rating} </span></strong>
               <strong>Scored: <span
                style={{
                  fontWeight: '100',
                  fontSize: '14px',
                  alignSelf: 'flexStart',
                }}
              > {data.data[index].score} </span></strong>
              <strong>Episodes: <span
                style={{
                  fontWeight: '100',
                  fontSize: '14px',
                  alignSelf: 'flexStart',
                }}
              > {data.data[index].episodes} </span></strong>
              <strong>Rank: <span
                style={{
                  fontWeight: '100',
                  fontSize: '14px',
                  alignSelf: 'flexStart',
                }}
              > {data.data[index].rank} </span></strong>
              
              </div>
            </div>
          ))}
        </div>
      ) : (
          <div className="flex justify-center mt-4">
            <div className=" flex flex-col items-center p-4 bg-gray-800 rounded-md shadow-md border border-2 border-gray-500">
              <h1 className='text-2xl  text-white'>Search for any Anime!</h1>
              <img src={animeImg} alt="" className='w-[200px] rounded' />
            </div>
          </div>

)}
  </>

}