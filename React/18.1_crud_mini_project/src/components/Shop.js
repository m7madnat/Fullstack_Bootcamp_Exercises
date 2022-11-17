import {React,useState,useEffect} from "react";
import CatCard from "./CatCard";
import { API } from "../API";
import Input from "./Input";

const Shop = () => {
    const [catsArr, setCatsArr] = useState([]);
    const [catToAdd, setCatToAdd] = useState({name: "", img: "", color: "", price: "", phone: ""});
    const [isSpinning, setIsSpinning] = useState(true);
    const [addDisabled, setAddDisabled] = useState(false);
    
    useEffect(() => {
        const getCats = async () => {
        try {
            const { data } = await API.get("/users");
            setCatsArr(data);
            setIsSpinning(false);
        } catch (err) {
            console.log(err);
        }
        };
        getCats();
    }, []);
    
    const displayCats = () => {
        return catsArr.map((cat) => {
        return (
            <CatCard
            key={cat.id}
            id={cat.id}
            name={cat.name}
            img={cat.img}
            color={cat.color}
            phone={cat.phone}
            price={cat.price}
            handleDelete={deleteCat}
            getUpdated={getUpdated}
            />
        );
        });
    };
    
    const deleteCat = async (id) => {
        setIsSpinning(true);
        const { statusText } = await API.delete(`/users/${id}`);
        if (statusText === "OK") {
            setCatsArr((prev) => {
                return prev.filter((cat) => cat.id !== id);   // filter all ids and display without the id i want to delete        
        });
            setIsSpinning(false); 
        }
    };
    
    const getInput = (value, key) => {
        setCatToAdd((prev) => {
        return {
            ...prev,
            [key]: value,
        };
        });
    };
    
    const addCat = async (event) => {        
        try {
            setIsSpinning(true);
            setAddDisabled(true);
            event.preventDefault();
            const data = await API.post("/users", catToAdd);
            if (data.statusText === "Created") {
                setCatsArr((prev) => {
                return [...prev, data.data];
                });
                setCatToAdd({name: "", img: "", color: "", price: "", phone: ""});
                setIsSpinning(false);
                setAddDisabled(false);
            }
            } catch (err) {
            console.log(err);
        }  
    };    
    const getUpdated = async (name, color, phone, price, id) => {
        setIsSpinning(true);
        const { statusText } = await API.put(`/users/${id}`,
         {name,color,phone,price});
        if (statusText === "OK") {
            setCatsArr((prev) => {
            return prev.map((cat) => {
                if (cat.id === id) {
                    return {...cat,name,color,phone,price};
                }
                return cat;
            });
            });
            setIsSpinning(false);
        }
    }
    return (
        <>
            <div className="inputHeader">
                <form onSubmit={addCat}>
                    <Input id="name" callBack={getInput} type="text" holder="Name" value={catToAdd.name}/>
                    <Input id="img" callBack={getInput} type="text" holder="Image" value={catToAdd.img}/>
                    <Input id="color" callBack={getInput} type="text" holder="color" value={catToAdd.color}/>
                    <Input id="price" callBack={getInput} type="text" holder="Price" value={catToAdd.price}/>
                    <Input id="phone" callBack={getInput} type="text" holder="Phone" value={catToAdd.phone}/>
                    <button type="submit" disabled={addDisabled}>Add</button>
                </form>
            </div>
            {isSpinning===true ?
            (<div className="loader2"></div>) : // if spin let spin
            (<div className="catCards">{displayCats()}</div>) // if not spin display data
            }              
        </>
    )
};

export default Shop;
