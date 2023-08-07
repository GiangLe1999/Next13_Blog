export const makeBold = (item: string, keyword: string) => {
  let re = new RegExp(keyword, "gi");
  let matchArr = item.match(re);
  let newStr = item;
  if (matchArr?.length) {
    newStr = item.replace(
      re,
      "<span style='font-weight:800; color:#ff0a78'>" + matchArr[0] + "</span>"
    );
  }

  return newStr;
};
