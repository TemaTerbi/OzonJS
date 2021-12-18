const postData = () => {
  return fetch("https://ozon-7dd9a-default-rtdb.firebaseio.com/goods.json", {
    method: "POST",
    body: JSON.stringify({
      title: "Cars6",
      price: 5000,
      sale: true,
      img: "https://cdn1.ozone.ru/multimedia/c400/1033180284.jpg",
      category: "Game",
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((res) => res.json());
};

export default postData;
