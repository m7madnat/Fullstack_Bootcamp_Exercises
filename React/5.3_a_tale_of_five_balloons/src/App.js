import React from 'react';
import './App.css';
// const Mother = ({ children }) => {
//   return <div className='mother'>{children}</div>;
// };
const Child = ({ children }) => { // children is an array of 2 elements
  return <div className='child'>{children}</div>; // children[0] is the h3, children[1] is the Balloon component 
};
const Balloon = ({ children }) => { // children is the color string 
  return <div className={children}></div>; // children is the color string 
};
function App() {
  const arrOfColor = [
    { name: 'Ori', color: 'red' },
    { name: 'Ron', color: 'blue' },
    { name: 'Sigalit', color: 'green' },
    { name: 'Ruti', color: 'yellow' },
    { name: 'Alon', color: 'purple' },
  ];
  return ( 
     <div className="mother"> 
        <h1>A Tale of Five Balloons</h1> 
          <div class="mother_c">  {/* mother_c is the class name of the div that wraps the 5 balloons */}
          {arrOfColor.map((kid) => ( 
            <Child> {/* Child is a component that wraps the h3 and the Balloon component */}
              <h3>{kid.name}</h3> {/* h3 is the first element in the children array */}
              <Balloon>{kid.color}</Balloon> {/* Balloon is the second element in the children array */}
            </Child>
          ))}
        </div>
    </div>
  );
}

export default App;