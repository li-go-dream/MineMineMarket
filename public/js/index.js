function Index(){
	this.NewTime();
}

$.extend(Index.prototype,{
	NewTime(){
		setInterval(function(){
			var date=new Date();
			var year=date.getFullYear();
			var month=date.getMonth()+1;
			var day=date.getDate();
			var hours=date.getHours();
			var minute=date.getMinutes();
			var seconds=date.getSeconds();
			var xq=date.getDay();
			switch (xq){
				case 1: xq="一"; break;
				case 2: xq="二"; break;
				case 3: xq="三"; break;
				case 4: xq="四"; break;
				case 5: xq="五"; break;
				case 6: xq="六"; break;
				case 0: xq="天"; break;
				default:
					break;
			}
			$("#times").html(year+"年"+month+"月"+day+"日  "+hours+":"+minute+":"+seconds+"  "+"星期"+xq);
		},1000);	
	}
});

new Index();