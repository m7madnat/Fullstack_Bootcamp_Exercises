 // import React from 'react';
// import './App.css';
// function App() {
//   // const [toggle, setToggle] = React.useState(false);
//   const [obj, setObj] = React.useState({ name: 'bob' });
//   // const clickHandler = () => {
//   //   //! Bad practice
//   //   setToggle((prevState) => !prevState);
//   // };
//   const objHandler = () => {
//     setObj((prevState) => {
//       return { last: 'va', ...prevState };
//     });
//   };
//   return (
//     <div className='app'>
//       {/* <button onClick={clickHandler}>Show / Hide</button> */}
//       <button onClick={objHandler}>add key val</button>
//       {/* <div className={toggle ? 'box' : ''}></div> */}
//     </div>
//   );
// }
// export default App;
import React from 'react';
const db = [
  { name: 'Bob', age: 15, num: [1, 2, 3, 4, 5, 6, 7, 8, 9] },
  { name: 'Rob', age: 18, num: [1, 2, 3, 4, 5, 6, 7, 8, 9] },
  { name: 'Mob', age: 20, num: [1, 2, 3, 4, 5, 6, 7, 8, 9] },
  { name: 'Oz', age: 25, num: [1, 2, 3, 4, 5, 6, 7, 8, 9] },
];
function App() {
  //[ReactElement,ReactElement,ReactElement,ReactElement ]
  const arrToJsx = db.map((p) => {
    const numToJsx = p.num.map((n) => <h5>{n}</h5>);
    return (
      <div>
        <h2>{p.name}</h2>
        {numToJsx}
      </div>
    );
  });
  return (
    <div>
      App
      {arrToJsx}
    </div>
  );
}
export default App;