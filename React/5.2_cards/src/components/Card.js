import React from "react";

const ImgCard = ({ img, title, description, link1, link2 }) => {
  return (
    <div>
      <img src={img} style={{ width: "200px", marginTop: "10px"  }} alt="" />
      <h2>{title}</h2>
      <div>{description}</div>
      <a href="https://www.google.com/" style={{ marginRight: "10px" }} >
        {link1}
      </a>
      <a href="https://www.google.com/">{link2}</a>          
    </div>
  );
};

const Card = () => {
  return (
    <div>
      <ImgCard
        img="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Morning_at_Spirit_Island.jpg/270px-Morning_at_Spirit_Island.jpg"
        title="spirit island"
        description="spirit island is a great game"
        link1="Share"
        link2="Explore"
      />
      <ImgCard
        img="https://www.cairo24.com/UploadCache/libfiles/79/5/600x338o/928.jpg"
        title="Cairo"
        description=" Cairo is a great city"
        link1="Share"
        link2="Explore"
      />
      <ImgCard
        img="https://i0.wp.com/news.travelerpedia.net/wp-content/uploads/2019/09/Lauterbrunnen.jpg?resize=810%2C540&ssl=1"
        title="Lauterbrunnen"
        description="Lauterbrunnen is a great city"
        link1="Share"
        link2="Explore"
      />
    </div>
  );
};

export default Card;
