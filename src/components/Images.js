import React, { useState } from "react";
import useFetchImage from "../utils/hooks/useFetchImage";
import Loading from "./Loading";
import Image from "./image";
import InfiniteScroll from "react-infinite-scroll-component";
import useDebounce from "../utils/hooks/useDebounce";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";

export default function Images() {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState(null);
  const [images, setImages, errors, isLoading] = useFetchImage(
    page,
    searchTerm
  );
  const [showPreview, setShowPreview] = useState(false);
  const debounce = useDebounce();

  function handleInput(e) {
    const text = e.target.value;
    debounce(() => setSearchTerm(text));
  }
  return (
    <section>
      <div className="flex justify-center text-center my-10">
        <h1 className="my-10 text-6xl uppercase font-bold tracking-wider">
          Picturesque Shots
        </h1>
      </div>
      <div className="my-5">
        <input
          type="text"
          onChange={handleInput}
          className="w-full p-1 my-5 border border-transparent rounded shadow color-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent "
          placeholder="Search here.............."
        />
      </div>
      {errors.length > 0 && (
        <div className="flex h-screen">
          <p className="m-auto">{errors[0]}</p>
        </div>
      )}
      <AnimateSharedLayout>
        <InfiniteScroll
          dataLength={images.length}
          next={() => setPage(page + 1)}
          hasMore={true}
          className="flex flex-wrap"
        >
          {images.map((img, index) => (
            <motion.div
              className="w-1/5 p-1 border flex justify-center"
              key={index}
              layoutId={img.urls.regular}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <Image
                show={() => setShowPreview(img.urls.regular)}
                image={img.urls.regular}
                index={index}
              />
            </motion.div>
          ))}
        </InfiniteScroll>
        <AnimatePresence>
          {showPreview && (
            <motion.section
              layoutId={showPreview}
              exit={{ opacity: 0, transition: { duration: 0.3 } }}
              className="fixed w-full h-full flex justify-center item-center top-10 left-0 z-10"
              onClick={() => setShowPreview(false)}
            >
              <div>
                <img
                  src={showPreview}
                  className="border rounded"
                  width="400"
                  height="auto"
                  alt=""
                />
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </AnimateSharedLayout>
      {isLoading && <Loading />}
    </section>
  );
}
