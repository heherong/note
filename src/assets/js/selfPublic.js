//获取当前年月日
export default {
  methods: {
    getCurrentTime() {
      	let date = new Date();
		let year = date.getFullYear();
		let month = date.getMonth() + 1;
		let day = date.getDate();
		if (month < 10) {
		    month = "0" + month;
		}
		if (day < 10) {
		    day = "0" + day;
		}
		let nowDate = year + "-" + month + "-" + day;
		return nowDate;
    }
    
  }
}


