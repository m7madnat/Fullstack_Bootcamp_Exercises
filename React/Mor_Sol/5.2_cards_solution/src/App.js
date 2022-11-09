import './App.css';
import Card from './Card';

function App() {
  return (
    <div className='App'>
      <Card
        img='https://images.immediate.co.uk/production/volatile/sites/22/2018/09/Snowdonia-National-Park-dd41020.jpg?quality=90&fit=700,466'
        title='Britain'
        desc='The United Kingdom of Great Britain and Northern Ireland, commonly known as the United Kingdom (UK) or Britain, is a country in Europe, off the north-western...'
        link='https://en.wikipedia.org/wiki/United_Kingdom'
      />
      <Card
        img='https://cdn.britannica.com/07/152307-050-6FD0D3EE/Iceberg-waters-Antarctica.jpg'
        title='Antarctica'
        desc="Antarctica is Earth's southernmost and least-populated continent. Situated almost entirely south of the Antarctic Circle and surrounded by the Southern..."
        link='https://en.wikipedia.org/wiki/Antarctica'
      />
      <Card
        img='https://images.immediate.co.uk/production/volatile/sites/22/2018/09/Snowdonia-National-Park-dd41020.jpg?quality=90&fit=700,466'
        title='Britain'
        desc='The United Kingdom of Great Britain and Northern Ireland, commonly known as the United Kingdom (UK) or Britain, is a country in Europe, off the north-western...'
        link='https://en.wikipedia.org/wiki/United_Kingdom'
      />
      <Card
        img='https://cdn.britannica.com/07/152307-050-6FD0D3EE/Iceberg-waters-Antarctica.jpg'
        title='Antarctica'
        desc="Antarctica is Earth's southernmost and least-populated continent. Situated almost entirely south of the Antarctic Circle and surrounded by the Southern..."
        link='https://en.wikipedia.org/wiki/Antarctica'
      />
    </div>
  );
}

export default App;
