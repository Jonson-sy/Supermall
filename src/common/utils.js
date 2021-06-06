//★★★★★封装防抖函数★★★★★
export function debounce(func, delay = 100) {
  let timer = null;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
      // console.log('scroll刷新了');
    }, delay);
  };
}

//★★★★★时间格式化函数★★★★★（主要利用正则表达式）
//1：接收Date对象和格式（format:y=year,M=Month,d=day,h=hour,m=minute,s=second）
export function formatDate(date, fmt) {
  //2:（匹配年）利用正则test方法将fmt匹配/(y+)/（正则字面量）
  if (/(y+)/.test(fmt)) {
    //利用正则replace方法将匹配成功后的fmt替换为对应的年
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  //3：（匹配月，日，时，分，秒）利用正则test方法将fmt匹配(${k})
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let k in o) {
    //调用RegExp对象构造函数创建正则
    if (new RegExp(`(${k})`).test(fmt)) {
      //转换为字符串
      let str = o[k] + '';
      //利用正则replace方法将匹配成功后的fmt替换为对应的月，日，时，分，秒：并利用函数自动补齐0
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  return fmt;
};
//★★★★★自动补齐0的函数★★★★★
function padLeftZero(str) {
  return ('00' + str).substr(str.length);
};