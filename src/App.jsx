import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import { useEffect, useState } from "react";
import Loading from "./components/Loading";

const images = {
  white: ["white_front.webp", "white_back.webp", "white_side.webp"],
  black: ["black_front.webp", "black_back.webp", "black_side.webp"],
  gray: ["gray_front.webp", "gray_back.webp", "gray_side.webp"],
  bw: ["bw_front.webp", "bw_back.webp", "bw_side.webp"],
};

function App() {
  const [loading, setLoading] = useState(true);
  const [image, setImage] = useState(images.white);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  });

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="h-screen w-full flex flex-col justify-between overflow-hidden">
          <Experience images={images} image={image} setImage={setImage} />
          <Navbar image={image} />
          <Footer image={image} />
        </div>
      )}
    </>
  );
}

export default App;
