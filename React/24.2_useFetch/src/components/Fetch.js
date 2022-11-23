import React, { useState, useEffect } from 'react';
import useFetch from './useFetch';

const Joke = () => {
  
  const { data ,fetchData } = useFetch('https://api.chucknorris.io/jokes/random');
  
  
  useEffect(() => {
      fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <div className="joke">
      <div>
        {data && data.value}        
      </div>
    </div>
  );
  
}
 
export default Joke;