import React from 'react';
import {useState, useEffect} from 'react';

interface DummyDataDrectInterface {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const DummyDataDirect: React.FC = () => {
const [data, setData] = useState<DummyDataDrectInterface>();

useEffect(() => {
  const getData = async () => {
    await fetch('https://jsonplaceholder.typicode.com/todos/1').then(res => {
      if (res.ok) {
        res.json().then(data => setData(data));
      }
      else {
        throw new Error('Network response was not ok.');
      }
    }).catch (error =>  console.log(error.message));
  }

  getData();
}, [])

  return (
    <>
      <div> Dummy data direct</div>
      {data?.userId && <div>User id: {data.userId}</div>}
    </>
  )
};

export default DummyDataDirect;