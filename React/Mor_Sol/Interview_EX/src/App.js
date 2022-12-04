import './App.css';
import { APIContextProvider } from './components/useContext';
import Display from './components/Display';


function App() {
  return (
    <div className="App">
      <APIContextProvider>
        <Display />
      </APIContextProvider>
    </div>
  );
}

export default App;
