import React, { useState, useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";

function PexelsGallery() {
  const [images, setImages] = useState([]); // stored fetched images
  const [query, setQuery] = useState("nature"); // default topic
  const [loading, setLoading] = useState(false); // control page loading
  const searchRef = useRef(); // control input search
  const API_KEY = "V8QBEoC4HJhVS6WmCGHt2TEuvL1P3OHZrNAX4sFV0sZW80yqkEZJGqlZ";

  //Function wich fetch images
  const fetchImages = async (search) => {
    setLoading(true); // show loading
    try {
      const response = await fetch(
        `https://api.pexels.com/v1/search?query=${search}&per_page=40`,
        {
          headers: {
            Authorization: API_KEY,
          },
        }
      );
      const data = await response.json();
      setImages(data.photos);
    } catch (err) {
      console.log("Error", err);
    }
    setLoading(false); //hide loading
  };

  useEffect(() => {
    fetchImages(query); // show us default images
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const text = searchRef.current.value.trim();
    if (text.length == 0) return;
    setQuery(text);
    fetchImages(text);
  };

  const handleFilter = (category)=>{
    searchRef.current.value ='';
    setQuery(category);
    fetchImages(category)
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl text-center font-bold my-8 text-blue-600">
        PexelsGallery
      </h1>

      <form className="flex justify-center gap-3 mb-6" onSubmit={handleSearch}>
        <input type="text" placeholder="Search here " ref={searchRef} className="p-4"></input>
        <button type="submit" className="bg-blue-600 px-4 py-2 rounded-lg">
          Search
        </button>
      </form>

      <div className="flex justify-center gap-5 mb-10 flex-wrap">
        {['People', 'Fruits', 'City', 'Animals', 'Cars', 'Buildings', 'Food', 'React', 'Python','Germany'].map((cat)=>(<button key={cat} className="px-4 py-2 bg-blue-300 rounded-lg font-semibold hover:bg-blue-500" onClick={() =>handleFilter(cat.toLowerCase())}>{cat}</button>))}
      </div>

      {loading && <p className="text-center mb-6"> Loading</p>}

      <div className="grid grid-cols-4 gap-6">
        {images.map((img) => (
          <div key={img.id} className="bg-white rounded-xl shadow-lg  overflow-hidden ">
            <img
              src={img.src.medium}
              className="w-full h-[300px] object-cover hover:scale-105 transition-transform"
              alt={img.alt}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PexelsGallery;

// {
//   "total_results": 10000,
//   "page": 1,
//   "per_page": 1,
//   "photos": [
//     {
//       "id": 3573351,
//       "width": 3066,
//       "height": 3968,
//       "url": "https://www.pexels.com/photo/trees-during-day-3573351/",
//       "photographer": "Lukas Rodriguez",
//       "photographer_url": "https://www.pexels.com/@lukas-rodriguez-1845331",
//       "photographer_id": 1845331,
//       "avg_color": "#374824",
//       "src": {
//         "original": "https://images.pexels.com/photos/3573351/pexels-photo-3573351.png",
//         "large2x": "https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
//         "large": "https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&h=650&w=940",
//         "medium": "https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&h=350",
//         "small": "https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&h=130",
//         "portrait": "https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
//         "landscape": "https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
//         "tiny": "https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
//       },
//       "liked": false,
//       "alt": "Brown Rocks During Golden Hour"
//     }
//   ],
//   "next_page": "https://api.pexels.com/v1/search/?page=2&per_page=1&query=nature"
// }
