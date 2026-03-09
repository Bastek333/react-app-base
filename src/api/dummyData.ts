export interface DummyDataInterface {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const dummyData = async (): Promise<DummyDataInterface[]> => {
  return fetch('https://jsonplaceholder.typicode.com/todos')
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error('Network response was not ok.');
    })
    .catch((error) => {
      console.log(error.message);
      return [] as DummyDataInterface[];
    });
};
