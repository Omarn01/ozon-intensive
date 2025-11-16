const postData = () => {
  return fetch('http://localhost:3000/goods', {
    method: 'POST',
    body: JSON.stringify({
      title: 'Ведьмак 3',
      price: 12848,
      sale: true,
      img: 'https://cdn1.ozone.ru/multimedia/c400/1027006299.jpg',
      hoverImg: 'https://cdn1.ozone.ru/multimedia/c400/1027006301.jpg',
      category: 'Периферия для ПК',
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then(res => res.json())
}

export default postData
