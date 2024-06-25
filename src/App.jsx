import React, { useState, useEffect } from 'react';
import Header from '/src/components/Header.jsx';
import Content from '/src/components/Content.jsx';
import '/src/index.css';

export default function App() {
  const [image, setImage] = useState(null);
  const [data, setData] = useState(null);
  const [loadingState, setLoadingState] = useState(null)
  const [error, setError] = useState(null)
  const [search, setSearch] = useState('')
  const [menu, setMenu] = useState(false)
  
  const url = `https://api.jikan.moe/v4/anime?q=${search}&sfw`;

  function handleSubmit(e) {
    e.preventDefault()   
    setSearch('') 
    setLoadingState(true)
    fetch(url)
    .then((res) =>  {
      if (!res.ok) {
        throw new Error('HTTP error status', res.status)
      }
      return res.json()
    })
    .then((data) => {
      if (data && data.data) {
        const imgUrl = data.data.map((img) => img.images.jpg.image_url)
        setData(data)
        setImage(imgUrl)
        setLoadingState(false)
      } else {
        throw new Error('No data available')
      }
    })
    .catch((err) =>  {
      setError('404 Error: Failed fetching... :<')
      setLoadingState(false)
    });
  }
  const handleMenu = () => {
    setMenu(!menu)
  }
  return (
    <>
    <Header 
    handleSubmit={handleSubmit} 
    search={search} 
    setSearch={setSearch}  
    handleMenu={handleMenu} 
    menu={menu}
    
    />
    {loadingState && <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
    <div className="absolute bg-black opacity-50 w-full h-full"></div>
    <div className="modal-container z-50 mx-auto rounded-lg overflow-hidden bg-white shadow-lg max-w-lg">
    <div className="modal-content p-4">
    <h2 className="text-lg font-bold mb-2">Fetching</h2>
    </div>
    </div>
    </div>}
    <Content image={image} data={data}/>
    </>
    );
}
