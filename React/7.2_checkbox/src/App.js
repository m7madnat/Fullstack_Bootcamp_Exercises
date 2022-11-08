import './App.css';
import React from 'react';
import Checkbox from './components/checkbox'; 

function App(){
    return (
        <div>
            <form>
                <Checkbox
                    text="I read the term of the app"
                    checked={false}
                />
                <Checkbox
                    text="I accept the term of the app"
                    checked={false}
                />
                <Checkbox
                    text="I want to get the weekly news letter"
                    checked={true}
                />
                <Checkbox
                    text="I want to get sales and offers"
                    checked={true}
                />
            </form>
        </div>
    );
}
export default App;