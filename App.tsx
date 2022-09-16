import React from "react";
import { Image, ImageSourcePropType } from "react-native";

export default function App() {
  const imageSource: ImageSourcePropType = [
    {
      scale: 1,
      uri: "https://uploads-ssl.webflow.com/6059f22c9579dde676fed02c/605ca1319825050f10f25e20_benefit3-p-500.png",
    },
    {
      scale: 2,
      uri: "https://uploads-ssl.webflow.com/6059f22c9579dde676fed02c/605ca1319825050f10f25e20_benefit3.png",
    },
  ];

  return <Image source={imageSource} />;
}
