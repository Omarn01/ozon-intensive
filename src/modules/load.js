import getData from './getData'
import renderGoods from './renderGoods'

const second = () => {
  getData().then(data => {
    renderGoods(data)
  })
}

export default second
