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
      ) : (<h1 style={{
          color:'white',
          textAlign: 'center',
          fontSize: '1.2rem',
      }}> Search anime... </h1>)}
  </>

}