import React, { useRef } from "react";
import TFmodel from "../utils/hooks/TFmodel";

export default function TensorflowModel() {
  const imageRef = useRef();
  const [predict, predictions] = TFmodel();

  return (
    <div className="flex justify-center">
      <div className="w-1/4">
        <h1 className="text-4xl font-bold text-center uppercase my-10">
          Image Predictor
        </h1>
        <img
          src="https://images.unsplash.com/photo-1425082661705-1834bfd09dca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODY4Mzd8MHwxfHNlYXJjaHwxfHx8ZW58MHx8fA&ixlib=rb-1.2.1&q=80&w=1080"
          crossOrigin="anonymous"
          ref={imageRef}
          className="text-center w-100 border rounded"
          alt=""
        />
        <div className="text-center my-5">
          {predictions.length > 0 &&
            predictions.map((prediction) => (
              <div className="flex justify-between text-sm">
                <p>{prediction.className}</p>
                <p>{Math.floor(prediction.probability * 100)} %</p>
              </div>
            ))}
          <button
            className="p-2 rounded bg-gray-900 text-white text-small w-50 uppercase my-5 focus:bg-gray-600"
            onClick={() => predict(imageRef.current)}
          >
            Predict Result
          </button>
        </div>
      </div>
    </div>
  );
}

// {isLoading && "🧐"}
// {!isLoading && "Predict Result"}
