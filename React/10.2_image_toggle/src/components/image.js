import React, { useRef } from "react";

function Image({ imgs, alt }) {
  const source = imgs.bnw;

  const imgRef = useRef();
  return (
    <div style={{display: "inline-block" , margin :"50px" , paddingTop : "50px"}}>
      <img
        ref={imgRef}
        src={source}
        alt={alt}
        onMouseOver={() => (imgRef.current.src = imgs.color)}
        onMouseOut={() => (imgRef.current.src = imgs.bnw)}
        width={800}
        height={600}
      />
    </div>
  );
}

export default Image;
