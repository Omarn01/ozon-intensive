export const searchFilter = (goods, value) => {
  return goods.filter(good => {
    return good.title.toLowerCase().includes(value.toLowerCase())
  })
}

export const categoryFilter = (goods, value) => {
  return goods.filter(good => {
    return good.category === value
  })
}
