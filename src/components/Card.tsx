import React from "react";


interface Anime {
  mal_id: number;
  title_english?: string;
  title: string;
  url: string;
  type: string;
  episodes?: number;
  score: number;
  members: number;
}

interface AnimeData {
  data: Anime[]
}

interface AnimeProps {
  src: string;
  data: AnimeData;
  index: number;
}


const Card: React.FC<AnimeProps> = ({ src, data, index }) => {
  const anime = data.data[index];
  console.log(anime)
  return (
    <div
      className="flex flex-row gap-4  p-2 border hover:bg-gray-50 "
    >
      <img
        src={src}
        className="w-[100px]"
        style={{ objectFit: "contain" }}
        alt={`Anime ${index + 1}`}
      />
      {/* <hr style={{ height: '1px', marginTop: '1rem'x  , width: '100%' }} /> */}

      <div className="flex flex-col mt-2 text-black">
        <p className="text-blue-800 font-bold">
          {anime.title_english || anime.title}

            <a href={anime.url}>
              <small className="text-white bg-slate-800 rounded-sm px-2 py-1.5 ml-2">Open</small>
            </a>
        </p>
        <strong>
          <small className="text-blue-800 font-bold">
            {anime.type}{" "}
            <span>
              {data.data[index].episodes && (
                <>({anime.episodes} eps)</>
              )}
            </span>
          </small>
        </strong>
        <p className="text-gray-500">
          <small>Scored {anime.score}</small>
        </p>

        <p className="text-gray-500">
          <small>{anime.members} members</small>
        </p>
      </div>
    </div>
  );
}

export default Card;