import React from 'react'

export default function Card({ image, data }) {
    return (
        <div className='justify-center gap-1.5 p-8 flex flex-col'>
            {image.map((src, index) => (
                <div
                    className='bg-[#282828] flex flex-row gap-4  p-2 rounded-sm hover:shadow-md cursor-pointer'
                    key={data.data[index].mal_id}>
                    <img
                        src={src}
                        alt={`Anime ${index + 1}`}
                    />
                    {/* <hr style={{ height: '1px', marginTop: '1rem'x  , width: '100%' }} /> */}

                    <div className='flex flex-col mt-2 text-white'>
                        <p>{data.data[index].title_english}</p>
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
    )
}
