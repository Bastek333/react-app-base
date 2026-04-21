import React, { memo, useState } from 'react';

interface ListTestComponentProps {
  listItems: {
    id: number;
    name: string;
  }[]
}

const ListTestComponent: React.FC<ListTestComponentProps> = ({listItems}) => {

  console.log('item render')

  return (
    <ul>
    {listItems.map(item => <li key={item.id}>{`Item: ${item.name}`}</li>)}
    </ul>
  )

}

//const MemoListTestComponent = memo(ListTestComponent);

const Compiler = () => {
  const [listItemsState, setListItemsState] = useState([{id:1, name:'1'}, {id:2, name:'2'}]);
  const [count, setCount] = useState(0);

  const handleChange = () => setCount(count + 1);

  console.log('parent render')

  return (
    <div>
      <h1>Compiler</h1>
      <div onClick={handleChange}>Count {count}</div>
      <ListTestComponent listItems={listItemsState} />
      {/* <MemoListTestComponent listItems={listItemsState} /> */}
    </div>
  );
}

export default Compiler;
