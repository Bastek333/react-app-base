const getJokes = async () => {
  const res = await fetch('https://api.chucknorris.io/jokes/random');
  return res.json();
};

export default getJokes;
