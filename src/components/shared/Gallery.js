import React from "react";
import Img1 from "../../images/img1.jpg";
import Img2 from "../../images/img2.jpg";
import Img3 from "../../images/img3.jpg";
import Img4 from "../../images/img4.jpg";
import Img5 from "../../images/img5.jpg";
import Img6 from "../../images/img6.jpg";
import Img7 from "../../images/img7.jpg";
import Img8 from "../../images/img8.jpg";
import Img9 from "../../images/img9.jpg";
import Img10 from "../../images/img10.jpg";

const images = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10];

const Gallery = () => {
  return (
    <>
    <div id="gallery" className="py-8 lg:py-20  flex text-center justify-center">
      <h1 className="mt-10 text-3xl font-semibold">Image Gallery</h1>
    </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 rounded-2xl my-2">
        {images && images.map((imageUrl) => <img className="rounded-2xl" src={imageUrl} />)}
      </div>
      {/* <div
        id="gallery"
        className="py-8 lg:py-24 lg:h-screen flex text-center justify-center"
      >
        Image Gallery
        <div className="grid grid-cols-2 gap-1">
          {images && images.map((imageUrl) => <img src={imageUrl} /> )}
        </div>
      </div> */}
    </>
  );
};

export default Gallery;
