export const combineClasses = (...classes) => {
  return classes.join(" ");
};

export const calculateCartTotal = (cart) => {
  return cart.reduce((acc, curr) => acc + Number(curr.price), 0);
};
