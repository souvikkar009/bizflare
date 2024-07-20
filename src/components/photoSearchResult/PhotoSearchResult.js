/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client";

import dummyImgData from "@/data/ImageData";
import { UNSPLASH_API_TOKEN } from "@/secrets/Secrets";
import axios from "axios";
import { useCallback, useEffect, useRef, useState } from "react";

const PhotoSearchResult = () => {
  const searchImgInput = useRef(null);
  const [selectedImg, setSelectedImg] = useState("");
  const [adImage, setAdImage] = useState(null);
  // const [images, setImages] = useState([]);
  // const [totalPages, setTotalPages] = useState(0);
  // const [page, setPage] = useState(1);

  const UNSPLASH_API_URL = `https://api.unsplash.com/search/photos`;
  const IMG_PER_PAGE = 4;
  const UNSPLASH_ACCESS_KEY = UNSPLASH_API_TOKEN;

  // const fetchSearchedImg = useCallback(async () => {
  //   try {
  //     if (searchImgInput.current.value) {
  //       const searchRes = await axios.get(
  //         `${UNSPLASH_API_URL}?query=${searchImgInput.current.value}&page=${page}&per_page=${IMG_PER_PAGE}&client_id=${UNSPLASH_ACCESS_KEY}`
  //       );
  //       const imgData = searchRes.data;
  //       setImages(imgData.results);
  //       setTotalPages(imgData.total_pages);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, [page]);

  // useEffect(() => {
  //   fetchSearchedImg();
  // }, [fetchSearchedImg, page]);

  const handleImgSearch = (e) => {
    e.preventDefault();
    // fetchSearchedImg();
  };

  const handleImgSelect = async () => {
    if (!selectedImg) {
      alert(`select one image`);
      return;
    }

    const finalImg = await axios.post(`http://localhost:3000/api/createAd`, {
      selectedImg,
    });
    setAdImage(finalImg.data.image);
  };

  return (
    <div className="shadow-red-100">
      <form
        className="flex items-center justify-center"
        onSubmit={handleImgSearch}
      >
        <input
          type="search"
          className="w-2/5 p-4 focus:outline-none shadow-3 rounded font-medium text-brand-1"
          placeholder="Search Images for Your Ad"
          ref={searchImgInput}
        />
      </form>
      <div className="mt-12 flex items-start justify-center gap-8">
        {/* {images.map((img) => {
          console.log(img.urls.regular);
          return (
            <div
              key={img.id}
              className="w-72 h-72 bg-white flex items-center justify-center rounded-md shadow-1"
              onClick={() => console.log(img.urls.small)}
            >
              <img
                className="max-w-72 max-h-72 cursor-pointer"
                src={img.urls.small}
                alt={img.alt_description}
              />
            </div>
          );
        })} */}
        {dummyImgData.map((img) => {
          return (
            <div
              key={img.id}
              className="w-72 h-80 bg-white flex items-center justify-center rounded-md shadow-1"
              onClick={() => setSelectedImg(img.img_src)}
            >
              <img
                className="max-w-72 max-h-80 cursor-pointer"
                src={img.img_src}
                alt={`Img : ${img.id}`}
              />
            </div>
          );
        })}
      </div>
      <div className="mt-8 flex items-center justify-center">
        <div
          className="py-2 px-4 rounded bg-brand-3 text-brand-bg1 cursor-pointer"
          onClick={handleImgSelect}
        >
          Use This Image
        </div>
      </div>
      <div className="mt-10">
        {adImage && (
          <div>
            <img src={adImage} alt="ad" />
          </div>
        )}
      </div>
      {/* <div className="flex items-center justify-center mt-8 gap-8">
        {page > 1 && (
          <button
            className="bg-brand-3 text-brand-bg1 py-2 px-6 rounded"
            onClick={() => setPage(page - 1)}
          >
            Previous
          </button>
        )}
        {page < totalPages && (
          <button
            className="bg-brand-3 text-brand-bg1 py-2 px-6 rounded"
            onClick={() => setPage(page + 1)}
          >
            Next
          </button>
        )}
      </div> */}
    </div>
  );
};

export default PhotoSearchResult;
