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
          <GalleryItems col="col-lg-4" src="images/slider/4.jpg" />
          <GalleryItems col="col-lg-4" src="images/slider/5.jpg" />
          <GalleryItems col="col-lg-4" src="images/slider/7.jpg" />
        </div>
        <div className="row">
          <GalleryItems col="col-lg-6" src="images/slider/1.jpg" />
          <GalleryItems col="col-lg-6" src="images/slider/2.jpg" />
        </div>
        <div className="row">
          <GalleryItems col="col-lg-4" src="images/news/1.jpg" />
          <GalleryItems col="col-lg-4" src="images/slider/6.jpg" />
          <GalleryItems col="col-lg-4" src="images/news/3.jpg" />
        </div>
      </Holder>
      <Holder name="video">
        <LandingHead small="VIDEOS" main="Video Gallery" />
        <div className="row">
          <GalleryItems video={true} col="col-lg-6" src="images/slider/1.jpg" />
          <GalleryItems video={true} col="col-lg-6" src="images/slider/2.jpg" />
        </div>
        <div className="row">
          <GalleryItems video={true} col="col-lg-4" src="images/slider/4.jpg" />
          <GalleryItems video={true} col="col-lg-4" src="images/slider/5.jpg" />
          <GalleryItems video={true} col="col-lg-4" src="images/slider/7.jpg" />
        </div>
      </Holder>
      <Booking />
      <Clients />
      <Footer />
    </main>
  );
};

export default Gallery;
