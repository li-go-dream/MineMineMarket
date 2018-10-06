function bill(){
	this.createDom();
	this.operate();
	this.addListener();
	this.LoadPosHandler();
}

$.extend(bill.prototype,{
	createDom(){
		$(".right-nav").addClass("hide");
	},
	addListener() {
		// 添加订单
		$(".btn-add-bill").on("click", this.addPosHandler);
		//条件查询
		$(".btn-look").on("click", this.lookPosHandler);
	},
	operate(){
		var _this=this;
		$("table").on("click","a",function(event){
			var num=$(this).parent().parent().children().eq(0).text();
			if($(this).attr("class")=="delete")
			{
				_this.DelePosHandler(num);
			}else if($(this).attr("class")=="update")
			{
				$("#updateBillname").val($(this).parent().parent().children().eq(1).text());
				$("#updateBillunit").val($(this).parent().parent().children().eq(2).text());
				$("#updateBillnumb").val($(this).parent().parent().children().eq(4).text());
				$("#updateBillsum").val($(this).parent().parent().children().eq(5).text());
				$("#updateBillsupplier").val($(this).parent().parent().children().eq(3).text());
				$("#updateBillpayment").val($(this).parent().parent().children().eq(6).text());
				$(".btn-update-bill").on("click",function(){
					_this.updaPosHandler(num);
					num="";
				});
			}
			
		});
	},
	addPosHandler(){
		const url="/bill/add",
		data = $(".add-pos-form").serialize();
		$.getJSON(url, data, (data)=>{
			// 将添加成功的数据追加到页面表格最后
			const curr = data.res_body.data;
			const html = `
					<tr>
						<td>${curr._id}</td>
						<td>${curr.name}</td>
						<td>${curr.unit}</td>
						<td>${curr.supplier}</td>
						<td>${curr.numb}</td>
						<td>${curr.sum}</td>
						<td>${curr.payment}</td>
						<td>${curr.publish_time}</td>
						<td>
							<a href="javascript:;" class="read"><img src="/imgs/proj/read.png"/></a>
							<a href="" data-toggle="modal" data-target="#updateOrder" class="update"><img src="/imgs/proj/updata.png"/></a>
							<a href="javascript:;" class="delete"><img src="/imgs/proj/delete.png"/></a>
						</td>
					</tr>`;
			$(".table-striped tbody").append(html);
			// 关闭模态框
			$("#addOrder").modal("hide");
		});
	},
	LoadPosHandler(page){
		var page=page||1;
		const url="/bill/bill_manager";
		$.getJSON(url,{page},(data)=>{
			// 加载所有数据
			const curr = data.res_body.data;
			var html="";
			$.each(curr, function(i) {
				html+=`
					<tr>
						<td>${curr[i]._id}</td>
						<td>${curr[i].name}</td>
						<td>${curr[i].unit}</td>
						<td>${curr[i].supplier}</td>
						<td>${curr[i].numb}</td>
						<td>${curr[i].sum}</td>
						<td>${curr[i].payment}</td>
						<td>${curr[i].publish_time}</td>
						<td>
							<a href="javascript:;" class="read"><img src="/imgs/proj/read.png"/></a>
							<a href="" data-toggle="modal" data-target="#updateOrder" class="update"><img src="/imgs/proj/updata.png"/></a>
							<a href="javascript:;" class="delete"><img src="/imgs/proj/delete.png"/></a>
						</td>
					</tr>`;
			});
			$(".table-striped tbody").html(html);
		});
	},
	DelePosHandler(id){
		var _this=this;
		const url="/bill/dele";
		$.getJSON(url,{id},(data)=>{
			// 重新加载数据库的数据
			_this.LoadPosHandler();
		});
	},
	updaPosHandler(id){
		var _this=this;
		const url="/bill/update";
		var data=$(".update-pos-form").serialize()+"&id="+id;
		$.getJSON(url,data,(data)=>{
			// 重新加载数据库的数据
			_this.LoadPosHandler();
			$("#updateOrder").modal("hide");
		});
	},
	lookPosHandler(){
		const url="/bill/look";
		var data=new Object();
		if($("#look-name").val()!=""){
			data.name=$("#look-name").val();
		}
		if($("#look-supplier").val()!=""){
			data.supplier=$("#look-supplier").val();
		}
		if($("#look-pay").val()!=""){
			data.payment=$("#look-pay").val();
		}
		$.getJSON(url,data,(data)=>{
			// 将查询到的数据加载到页面
			const curr = data.res_body.data;
			var html="";
			$.each(curr, function(i) {
				html+=`
					<tr>
						<td>${curr[i]._id}</td>
						<td>${curr[i].name}</td>
						<td>${curr[i].unit}</td>
						<td>${curr[i].supplier}</td>
						<td>${curr[i].numb}</td>
						<td>${curr[i].sum}</td>
						<td>${curr[i].payment}</td>
						<td>${curr[i].publish_time}</td>
						<td>
							<a href="javascript:;" class="read"><img src="/imgs/proj/read.png"/></a>
							<a href="" data-toggle="modal" data-target="#updateOrder" class="update"><img src="/imgs/proj/updata.png"/></a>
							<a href="javascript:;" class="delete"><img src="/imgs/proj/delete.png"/></a>
						</td>
					</tr>`;
			});
			$(".table-striped tbody").html(html);		
		});
	}
	
});
new bill();
