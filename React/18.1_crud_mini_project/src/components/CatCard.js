import React, { useState } from "react";

const CatCard = ({id,name,img,color,phone,price,handleDelete,getUpdated}) => {
  
  const [editing, setEditing] = useState(false);
  const [nameS, setnameS] = useState(name);
  const [colorS, setcolorS] = useState(color);
  const [phoneS, setPhoneS] = useState(phone);
  const [priceS, setPriceS] = useState(price);

  const handleSave = () => {
    setEditing(false);
    getUpdated(nameS,colorS, phoneS, priceS, id);
  };

  return (
    <div className="card">
      <div className="name">
      {editing ? (<input value={nameS} onChange={({ target }) => setnameS(target.value)}/>) :
         (<span>{name}</span>)}
      </div>

      <img src={img} alt={name} />  

      <div>
        <span>Phone: </span>
        {editing ? (<input value={phoneS} onChange={({ target }) => setPhoneS(target.value)}/>) :
         (<span>{phone}</span>)}
      </div>

      <div>
        <span>Price: </span>
        {editing ? (<input type="number" value={priceS} onChange={({ target }) => setPriceS(target.value)}/>) :
         (<span>{price.split(".")[0] + " $"}</span>)}
      </div>

      <div>
        <span>color: </span>
        {editing ? (<input onChange={({ target }) => setcolorS(target.value)} value={colorS}/>) :
         (<span>{color}</span>)}
      </div>

      <div>
        {!editing ?
            (<button onClick={() => setEditing(true)}>Edit</button>) :
            (<button onClick={handleSave}>Save</button>)
        }
        <button onClick={() => handleDelete(id)}>Delete</button>
      </div>
      
    </div>
  );
};

export default CatCard;
