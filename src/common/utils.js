//封装防抖函数
export function debounce(func, delay) {
  let timer = null;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
      // console.log('scroll刷新了');
    }, delay);
  };
}