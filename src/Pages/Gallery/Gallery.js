import React from "react";
import "./Gallery.scss";
import {
  ShortLanding,
  LandingHead,
  Booking,
  Footer,
} from "../../Components/Main Components";
import { Clients } from "../../Components/Sub Components";
import { GalleryItems, Holder } from "../../Components/Gallery Components";

const Gallery = () => {
  return (
    <main className="gallery">
      <ShortLanding img="images/slider/3.jpg">
        <LandingHead
          stars={true}
          small={"IMAGES & VIDEOS"}
          main="Our Gallery"
        />
      </ShortLanding>
      <Holder>
        <LandingHead small="IMAGES" main="Image Gallery" />
        <div className="row">
          <GalleryItems
            type="img"
            col="col-lg-4"
            src="images/slider/4.jpg"
            popSource="images/slider/4.jpg"
          />
          <GalleryItems
            type="img"
            col="col-lg-4"
            src="images/slider/5.jpg"
            popSource="images/slider/5.jpg"
          />
          <GalleryItems
            type="img"
            col="col-lg-4"
            src="images/slider/7.jpg"
            popSource="images/slider/7.jpg"
          />
        </div>
        <div className="row">
          <GalleryItems
            type="img"
            col="col-lg-6"
            src="images/slider/1.jpg"
            popSource="images/slider/1.jpg"
          />
          <GalleryItems
            type="img"
            col="col-lg-6"
            src="images/slider/2.jpg"
            popSource="images/slider/2.jpg"
          />
        </div>
        <div className="row">
          <GalleryItems
            type="img"
            col="col-lg-4"
            src="images/news/1.jpg"
            popSource="images/news/1.jpg"
          />
          <GalleryItems
            type="img"
            col="col-lg-4"
            src="images/slider/6.jpg"
            popSource="images/slider/6.jpg"
          />
          <GalleryItems
            type="img"
            col="col-lg-4"
            src="images/news/3.jpg"
            popSource="images/news/3.jpg"
          />
        </div>
      </Holder>
      <Holder name="video">
        <LandingHead small="VIDEOS" main="Video Gallery" />
        <div className="row">
          <GalleryItems
            type="Video"
            col="col-lg-6"
            src="images/slider/1.jpg"
            popSource="https://www.youtube.com/embed/xh4GnTKFQso"
          />
          <GalleryItems
            type="Video"
            col="col-lg-6"
            src="images/slider/2.jpg"
            popSource="https://www.youtube.com/embed/xh4GnTKFQso"
          />
        </div>
        <div className="row">
          <GalleryItems
            type="Video"
            col="col-lg-4"
            src="images/slider/4.jpg"
            popSource="https://www.youtube.com/embed/xh4GnTKFQso"
          />
          <GalleryItems
            type="Video"
            col="col-lg-4"
            src="images/slider/5.jpg"
            popSource="https://www.youtube.com/embed/xh4GnTKFQso"
          />
          <GalleryItems
            type="Video"
            col="col-lg-4"
            src="images/slider/7.jpg"
            popSource="https://www.youtube.com/embed/xh4GnTKFQso"
          />
        </div>
      </Holder>
      <Booking />
      <Clients />
      <Footer />
    </main>
  );
};

export default Gallery;
