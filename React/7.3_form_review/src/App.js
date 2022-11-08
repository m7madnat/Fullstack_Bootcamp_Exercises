import './App.css';
import React from 'react';
import Select from './components/Select';
import InputText from './components/InputText';
import TextArea from './components/TextArea';

function App()
{
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [age, setAge] = React.useState(0);
    const [freeText, setFreeText] = React.useState('');
    const [showPreview, setShowPreview] = React.useState(false);

    const handleChange = (key, value) => {
        console.log(`key=${key},value=${value}`);
        switch(key){
            case 'firstName':
                setFirstName(value);
                break;
            case 'lastName':
                setLastName(value);
                break;
            case 'age':
                setAge(value);
                break;
            case 'freeText':
                setFreeText(value);
                break;
            default:
                break;
        }
    }

    const handleClick = (event) => {
        event.preventDefault();
        setShowPreview(true);
    }

    if(showPreview) {
        return (
            <div>
                <div>{firstName}</div>
                <div>{lastName}</div>
                <div>Age:{age}</div>
                <div>{freeText}</div>
                <input type="button" value='Back' onClick={() => {setShowPreview(false)}}></input> <input type="button" value='Send Survey' onClick={() => {alert('Survey Sent!'); window.location.reload()}}></input>
            </div>
        )
    }
    else{
        return (
            <form id='myForm'>
                <InputText formID='myForm' askFor='First Name:' objKey='firstName' onChange={handleChange}/>
                <InputText formID='myForm' askFor='Last Name:' objKey='lastName' onChange={handleChange}/>
                <div>
                    Age:<Select formID='myForm' objKey='age' maxAge={100} onChange={handleChange}/>
                </div>
                <TextArea formID='myForm' objKey='freeText' onChange={handleChange}/>
                <input type="Submit" onClick={handleClick}></input>
            </form>
        )
    }
}
export default App;