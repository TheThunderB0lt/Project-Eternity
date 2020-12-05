import React, { useState, useEffect } from "react";
import Axios from "axios";

const api = process.env.REACT_APP_UNSPLASH_API;
const secret_key = process.env.REACT_APP_UNSPLASH_KEY;

export default function useFetchImage(page, searchTerm) {
  const [images, setImages] = useState([]);
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function fetchImages() {
    const url =
      searchTerm === null ? "photos?" : `search/photos?query=${searchTerm}&`;
    Axios.get(`${api}/${url}client_id=${secret_key}&page=${page}`)
      .then((res) => {
        searchTerm === null ? randomImages(res) : searchImages(res);
        setIsLoading(false);
      })
      .catch((e) => {
        setErrors(["Unable to fetch images"]);
        setIsLoading(false);
      });
  }

  function searchImages(res) {
    page > 1
      ? setImages([...images, ...res.data.results])
      : setImages([...res.data.results]);
  }

  function randomImages(res) {
    setImages([...images, ...res.data]);
  }

  useEffect(() => {
    setIsLoading(true);
    fetchImages();
  }, [page, searchTerm]);

  return [images, setImages, errors, isLoading];
}
