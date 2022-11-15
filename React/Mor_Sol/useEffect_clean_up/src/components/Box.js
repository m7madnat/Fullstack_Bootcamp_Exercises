import { useEffect, useState } from 'react';
import axios from 'axios';
//https://jservice.io/api/random

function Box() {
  const [q1, setQ1] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get('https://jservice.io/api/random');
      setQ1(data[0].question);
    };
    fetchData();
    //   .then((data) => {
    //     setQ1(data.data[0].question);
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });
  }, []);

  return (
    <div>
      <h1>Trivia</h1>
      {q1 && <h3>{q1}</h3>}
      {!q1 && <h3>My spinner</h3>}
    </div>
  );
}

export default Box;
