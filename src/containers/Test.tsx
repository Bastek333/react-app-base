import React, { useState, useEffect } from 'react';
import './Test.css';

const Test: React.FC = () => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState();
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      await fetch('https://jsonplaceholder.typicode.com/users').then((res) => {
        if (res.ok) {
          res.json().then((data) => {
            setData(data);
            setFilteredData(data);
          });
        }
      });
    };

    getData();
  }, []);

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  useEffect(() => {
    const filteredData = data.filter((item) => item?.username === input);
    setFilteredData(filteredData);
  }, [input]);

  console.log(input);

  return (
    <>
      <input onChange={handleChange}></input>
      <ul>
        {filteredData.map((item) => (
          <li key={item?.id}>{`${item?.username} ${item.email}`}</li>
        ))}
      </ul>
    </>
  );
};

export default Test;
