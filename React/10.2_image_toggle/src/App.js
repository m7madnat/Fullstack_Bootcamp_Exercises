import Image from './components/image';
import first from "./assets/images/first.jpg";
import second from "./assets/images/second.jpg";
import firstbn from "./assets/images/firstbn.jpg";
import secondbn from "./assets/images/secondbn.jpg";

import "./App.css";

function App() {
  const imgArr = {
    color: {
      first,
      second,
    },
    bnw: {
      first: firstbn,
      second: secondbn,
    },
  };
  const images = ["first", "second"].map((name) => (
    <Image
      imgs={{ color: imgArr.color[name], bnw: imgArr.bnw[name] }}
      alt={name}
    />
  ));
  return <div className="App">{images}</div>;
}

export default App;

