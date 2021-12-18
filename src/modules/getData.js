const getData = () => {
  return fetch(
    "https://ozon-7dd9a-default-rtdb.firebaseio.com/goods.json"
  ).then((response) => {
    return response.json();
  });
};

export default getData;
