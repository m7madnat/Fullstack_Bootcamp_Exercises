import { useAPI } from './useContext';
import ListItem from './ListItem/ListItem';
import { useState } from 'react';

export default function Display() {
  const { users } = useAPI();

  const [sort, setSort] = useState();
  const sortUsers = () => {
      if (sort === 'asc') {
        setSort('desc');
        users.sort((a, b) => (a.name > b.name ? 1 : -1));
      } else {
        setSort('asc');
        users.sort((a, b) => (a.name < b.name ? 1 : -1));
      }
    };
  return (
    <div>
        <button onClick={sortUsers}>Sort</button>
        {users.map((item) => (
            <ListItem itemData={item}/>
        ))}
    </div>
  );
}