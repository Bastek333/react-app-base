import React, { useState, useEffect } from 'react';

interface DummyComponentProps {
  oneprop: string;
  twoprop: number;
}

interface DataFromFetch {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const DummyComponent: React.FC<DummyComponentProps> = ({oneprop, twoprop}) => {
  const [data, setData] = useState<DataFromFetch>();
  
  useEffect(() => {
    const getData = async () => {
      await fetch('https://jsonplaceholder.typicode.com/todos/1').then(res => {
        if (res.ok) {
          res.json().then(data => setData(data));
        } else {
          throw new Error('Network failure');
        }
      })
      .catch(error => console.log(error.message));
    }

    getData();
  },[]);

  return (
    <>
      <div>Dummy component {oneprop} {twoprop}</div>
      {data?.userId && <div>User id: {data.userId}</div>}
    </>
  )
}

export default DummyComponent;
