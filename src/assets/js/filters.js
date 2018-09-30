//时间截取前10位
export function strsubstring(str) {
	return str.substring(0,10);
}

// 去除空格
export function trim(val) {
  return val.replace(/\s/g,'');
}
