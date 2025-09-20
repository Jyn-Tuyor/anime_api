import React from "react";

export default function Card({ src, data, index }) {
  return (
    <div
      className="flex flex-row gap-4  p-2 border"
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
          {data.data[index].title_english}
        </p>
        <strong>
          Rating:{" "}
          <span
            style={{
              fontWeight: "100",
              fontSize: "14px",
            }}
          >
            {" "}
            {data.data[index].rating}{" "}
          </span>
        </strong>
        <strong>
          Scored:{" "}
          <span
            style={{
              fontWeight: "100",
              fontSize: "14px",
              alignSelf: "flexStart",
            }}
          >
            {" "}
            {data.data[index].score}{" "}
          </span>
        </strong>
        <strong>
          Episodes:{" "}
          <span
            style={{
              fontWeight: "100",
              fontSize: "14px",
              alignSelf: "flexStart",
            }}
          >
            {" "}
            {data.data[index].episodes}{" "}
          </span>
        </strong>
        <strong>
          Rank:{" "}
          <span
            style={{
              fontWeight: "100",
              fontSize: "14px",
              alignSelf: "flexStart",
            }}
          >
            {" "}
            {data.data[index].rank}{" "}
          </span>
        </strong>
      </div>
    </div>
  );
}
