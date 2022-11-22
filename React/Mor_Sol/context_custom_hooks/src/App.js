//* React Context
//? Help us to avoid props drilling
import Box1 from './components/Box1';
import TitleProvider from './providers/TitleProvider';

// import { usePoint } from './hooks/usePoint';

//* Custom Hooks?

function App() {
  // const { point, moveRight, moveLeft } = usePoint({ x: 0, y: 0 });
  return (
    <div>
      App
      {/* <h1>
        Point: x = {`${point.x}`} | y = {` ${point.y}`}
      </h1>
      <button onClick={moveRight}>Move Right</button>
      <button onClick={moveLeft}>Move left</button> */}
      <Box1 myState={'fasdf'} />
      <TitleProvider>
        <Box1 />
      </TitleProvider>
    </div>
  );
}
export default App;
