import React from "react";
import axios from "axios";
import "./style.css";
import AvatarCards from "./AvatarCards";
import InputFilter from "./InputFilter";

function Avatars(){
    const [avatars, setAvatars] = React.useState([]);
    const [filtered, setFiltered] = React.useState([]);

    const getRandomAvatars = () => {
        setAvatars([]);
        setFiltered([]);
        let random = (Math.random() * 10 + 10 ) | 0;
        getAvatars(random);
    };

    const getAvatars = async (random) => {
        const avatars = await axios.get(
        `https://randomuser.me/api/?results=${random}`
        );
        console.log(avatars);
        getAvatarObjs(avatars.data.results);
    };

    const getAvatarObjs = (objs) => {
        const cardArrOfObjs = objs.map((objData) => {
        return {
            firstName: objData.name.first,
            lastName: objData.name.last,
            picture: objData.picture.large,
            city: objData.location.city,
            country: objData.location.country,
            age: objData.dob.age + "",
        };
        });
        setAvatars(cardArrOfObjs);
        setFiltered(cardArrOfObjs);
    };

    const getInputValue = (value) => {
        const newFiltered = avatars.filter((avatar) => {
        if (
            avatar.firstName.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
            avatar.lastName.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
            avatar.country.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
            avatar.city.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
            avatar.age.toLowerCase().indexOf(value.toLowerCase()) !== -1
        ) {
            return true;
        }
        return false;
        });
        setFiltered(newFiltered);
    };

    React.useEffect(() => {
        getRandomAvatars();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    return (
        <div className="mainContainer">
        <h1>
            Click get avatar to fetch at least 10 random avatars from the API, use input to filter
            info
        </h1>
        <div className="inputDiv">
            <InputFilter getValue={getInputValue} />
            <button onClick={getRandomAvatars}>Get Avatar</button>
        </div>
        {avatars.length === 0 && (
            <div className="loader2"></div>
        )}
        {avatars.length > 0 && (
            <AvatarCards avatars={filtered} />
        )}
        </div>
    );

}

export default Avatars;

