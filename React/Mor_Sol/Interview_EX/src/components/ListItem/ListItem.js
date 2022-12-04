import {useState} from 'react';

export default function ListItem({ itemData }) {
  const [item, setItem] = useState(itemData);
  return <div>{item.name}</div>;
}
