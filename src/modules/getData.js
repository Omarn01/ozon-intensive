const getData = () => {
  return fetch(
    'https://ozon-intensive-9efc1-default-rtdb.firebaseio.com/goods.json'
  ).then(response => {
    return response.json()
  })
}

export default getData
