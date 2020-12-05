import React, { useState } from "react";
import "@tensorflow/tfjs";
import * as mobilenet from "@tensorflow-models/mobilenet";

export default function TFmodel() {
  const [isLoading, setIsLoading] = useState(false);
  const [predictions, setPredictions] = useState([]);
  function predict(img) {
    setIsLoading(true);
    mobilenet.load().then((model) => {
      model.classify(img).then((predictions) => {
        setPredictions(predictions);
        setIsLoading(false);
      });
    });
  }
  return [predict, predictions, setPredictions, isLoading];
}
