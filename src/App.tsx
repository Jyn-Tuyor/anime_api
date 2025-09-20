import React, { useState, useEffect } from "react";
import Header from "/src/components/Header.jsx";
import Content from "/src/pages/Content.jsx";
import RandomQoute from "/src/components/RandomQoute.jsx";
import "/src/App.css";

// interface DataType {

// }

export default function App() {
  const [image, setImage] = useState<HTMLImageElement | null>(null);
  const [data, setData] = useState<any | null>(null);
  const [loadingState, setLoadingState] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [menu, setMenu] = useState<boolean>(false);

  const url: string = `https://api.jikan.moe/v4/anime?q=${search}&sfw`;

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSearch("");
    setLoadingState(true);
    fetch(url)
      .then((res: any) => {
        if (!res.ok) {
          throw new Error("HTTP error status", res.status);
        }
        return res.json();
      })
      .then((data) => {
        if (data && data.data) {
          const imgUrl = data.data.map((img: any) => img.images.jpg.image_url);
          setData(data);
          setImage(imgUrl);
          setLoadingState(false);
        } else {
          throw new Error("No data available");
        }
      })
      .catch((err: Error) => {
        // setError("404 Error: Failed fetching... :<");
        setLoadingState(false);
      });
  }
  const handleMenu = () => {
    setMenu(!menu);
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-[768px] border shadow-sm">
        <Header
          handleSubmit={handleSubmit}
          search={search}
          setSearch={setSearch}
          handleMenu={handleMenu}
          menu={menu}
        />
        <RandomQoute />

        {loadingState && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
            <div className="absolute bg-black opacity-50 w-full h-full"></div>
            <div className="modal-container z-50 mx-auto rounded-lg overflow-hidden bg-white shadow-lg max-w-lg">
              <div className="modal-content p-4">
                <h2 className="mb-2">Loading...</h2>
              </div>
            </div>
          </div>
        )}
        <Content image={image} data={data} />
      </div>
    </div>
  );
}
