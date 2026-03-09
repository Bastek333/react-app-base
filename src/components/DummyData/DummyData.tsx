import React, { useEffect, useState } from 'react';
import { dummyData, DummyDataInterface } from '../../api/dummyData';

const DummyData: React.FC = () => {
  const [data, setData] = useState<DummyDataInterface[]>();

  useEffect(() => {
    const loadData = async () => {
      await dummyData().then((res) => {
        setData(res);
      });
    };
    loadData();
  }, []);

  console.log('data', data);

  return (
    <>
      <div>Dummy Data page aaa</div>
      {data?.length &&
        data.map((item) => {
          return (
            <div key={item.id}>
              <div>User Id: {item.userId}</div>
              <div>Id: {item.id}</div>
              <div>Title: {item.title}</div>
              <div>Completed: {item.completed ? 'Yes' : 'No'}</div>
            </div>
          );
        })}
    </>
  );
};

export default DummyData;
