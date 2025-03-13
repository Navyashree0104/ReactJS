import React, { useState } from "react";

const LazyImage = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <img
      src={src}
      alt={alt}
      className={`lazy-image ${loaded ? "loaded" : "loading"}`}
      onLoad={() => setLoaded(true)}
    />
  );
};

export default LazyImage;
