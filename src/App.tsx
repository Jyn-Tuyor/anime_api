import React, { useState } from "react";
import Header from "/src/components/Header";
import Content from "/src/pages/Content";
import RandomQoute from "/src/components/RandomQoute";
import Footer from "./components/Footer";
import { PuffLoader } from "react-spinners";
import "/src/App.css";

// interface DataType {

// }

export default function App() {
  const [images, setImages] = useState<string[] | null>(null);
  const [data, setData] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [menu, setMenu] = useState<boolean>(false);
  const [noResult, setNoResult] = useState<boolean>(false)
  const url: string = `https://api.jikan.moe/v4/anime?q=${search}&sfw`;

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSearch("");
    setLoading(true);
    fetch(url)
      .then((res: any) => {
        if (!res.ok) {
          throw new Error("HTTP error status", res.status);
        }
        return res.json();
      })
      .then((data) => {
        console.log(data)
        if (data && data.data && data.data.length != 0) {
          const imgUrl = data.data.map((img: any) => img.images.jpg.image_url);
          setData(data);
          setImages(imgUrl);
          setLoading(false);
        } else {
          setNoResult(true);
          throw new Error("No data available");
        }
      })
      .catch((err: Error) => {
        // setError("404 Error: Failed fetching... :<");
        setLoading(false);
      });
  }
  const handleMenu = () => {
    setMenu(!menu);
  };

  return (<>
    <div className="flex flex-col items-center bg-[#fbf1c7] min-h-[100vh]">
      <div className="p-2 md:w-[768px]  shadow-md bg-white">
        <Header
          handleSubmit={handleSubmit}
          search={search}
          setSearch={setSearch}
          handleMenu={handleMenu}
          menu={menu}
        />

        <RandomQoute />

        {loading && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
            <div className="absolute bg-black opacity-80 w-full h-full"></div>
            <div className="modal-container z-50 mx-auto">
              <div className="modal-content p-4">
                <PuffLoader size={75} color="white" />
              </div>
            </div>
          </div>
        )}
        <Content images={images} data={data} search={search} noResult={noResult}/>
      </div>
    </div>
    <Footer />
  </>
  );
}
