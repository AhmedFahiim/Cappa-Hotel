import React from "react";
import "./Map.scss";

const Map = () => {
  return (
    <section className="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.055620660264!2d-73.98641558463356!3d40.760801379326544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25856139b3d33%3A0xb2739f33610a08ee!2s1616%20Broadway%2C%20New%20York%2C%20NY%2010019%2C%20USA!5e0!3m2!1sen!2seg!4v1661353052292!5m2!1sen!2seg"
        allowfullscreen="true"
        loading="lazy"
      ></iframe>
    </section>
  );
};

export default Map;
