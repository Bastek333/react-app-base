const getJokes = async () => {
  const res = await fetch('https://api.chucknorris.io/jokes/random');
  return res.json();
};

export default getJokes;

/* 
function api<T>(url: string): Promise<T> {
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      return response.json() as Promise<T>
    })

}

api<{ title: string; message: string }>('v1/posts/1')
  .then(({ title, message }) => {
    console.log(title, message)
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  })


  const newApi = async (): Promise<string> => {
    return fetch('https://api.chucknorris.io/jokes/random').then(res => {
      if (res.ok) {
        return res.json();
      }
    }).catch(error => {
      return error.message;
    });
  }

  type returnedData = Awaited<ReturnType<typeof newApi>>;

  const data: returnedData = await newApi();

  console.log(data); */
