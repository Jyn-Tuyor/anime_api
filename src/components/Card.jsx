import React from "react";

export default function Card({ src, data, index }) {
  return (
    <div
      className="flex flex-row gap-4  p-2 border hover:bg-gray-50 "
      key={data.data[index].mal_id}
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
          {data.data[index].title_english || data.data[index].title}

            <a href={data.data[index].url}>
              <small className="text-white bg-slate-800 rounded-sm px-2 py-1.5 ml-2">Open</small>
            </a>
        </p>
        <strong>
          <small className="text-blue-800 font-bold">
            {data.data[index].type}{" "}
            <span>
              {data.data[index].episodes && (
                <>({data.data[index].episodes} eps)</>
              )}
            </span>
          </small>
        </strong>
        <p className="text-gray-500">
          <small>Scored {data.data[index].score}</small>
        </p>

        <p className="text-gray-500">
          <small>{data.data[index].members} members</small>
        </p>
      </div>
    </div>
  );
}
