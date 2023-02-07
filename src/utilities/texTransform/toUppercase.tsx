// interface propUppercase {
//   itemTxt: () => string;
// }

export const ToUppercase = (itemTxt: string) => {
  const newItemTxt = itemTxt.slice(0, 1).toUpperCase() + itemTxt.slice(1);

  return newItemTxt;
};
