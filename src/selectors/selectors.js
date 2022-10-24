export const getGoods = (state) => {
  if (state.goods.copyItems) {
    return state.goods.copyItems;
  }
  return state.goods.items;
}
export const getOptions = (state) => {

  return state.goods.options;
}