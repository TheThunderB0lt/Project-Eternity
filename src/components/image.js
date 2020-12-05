import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import TFmodel from "../utils/hooks/TFmodel";

function Image({ image, index, show }) {
  const [isHovering, setIsHovering] = useState(false);
  const [predict, predictions, setPredictions, isLoading] = TFmodel();
  const imageRef = useRef();
  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {(predictions.length > 0 || isLoading) && (
        <span
          className="absolute bg-gray-800 text-white rounded-lg shadow px-2 left-0 ml-5"
          onClick={() => setPredictions([])}
        >
          {isLoading && <p>Fetching results...</p>}
          {predictions.map((prediction) => (
            <div className="flex justify-between text-sm">
              <p>{prediction.className}</p>
              <p>{Math.floor(prediction.probability * 100)} %</p>
            </div>
          ))}
        </span>
      )}
      <i
        className={`fas fa-search absolute left-0 cursor-pointer opacity-25 hover:opacity-100 ${
          isHovering ? "" : "hidden"
        }`}
        onClick={() => predict(imageRef.current)}
      ></i>

      <img
        ref={imageRef}
        onClick={show}
        whileHover={{ scale: 2 }}
        src={image}
        width="100%"
        height="auto"
        crossOrigin="anonymous"
        alt=""
      />
    </div>
  );
}

Image.propTypes = {
  show: PropTypes.func,
  index: PropTypes.number,
  image: PropTypes.string,
};
export default Image;
