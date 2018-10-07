function supplier(){
	this.createDom();
	this.addListener();
	this.LoadPosHandler();
	this.operate();
}

$.extend(supplier.prototype,{
	createDom(){
		$(".right-nav").addClass("hide");
	},
	addListener() {
		// 添加供应商
		$(".btn-add-supplier").on("click", this.addPosHandler);
		//条件查询
		$(".btn-look").on("click", this.lookPosHandler);
	},
	addPosHandler(){
		const url="/supplier/add",
		data = $(".add-sup-form").serialize();
		$.getJSON(url, data, (data)=>{
			// 将添加成功的数据追加到页面表格最后
			const curr = data.res_body.data;
			const html = `
					<tr>
						<td>${curr._id}</td>
						<td>${curr.supname}</td>
						<td>${curr.people}</td>
						<td>${curr.phone}</td>
						<td>${curr.address}</td>
						<td>${curr.fax}</td>
						<td>${curr.publish_time}</td>
						<td>
							<a href="javascript:;" class="read"><img src="/imgs/proj/read.png"/></a>
							<a href="" data-toggle="modal" data-target="#updatesupplier" class="update"><img src="/imgs/proj/updata.png"/></a>
							<a href="javascript:;" class="delete"><img src="/imgs/proj/delete.png"/></a>
						</td>
					</tr>`;
			$(".table-striped tbody").append(html);
			// 关闭模态框
			$("#addsupplier").modal("hide");
		});
	},
	LoadPosHandler(page){
		var page=page||1;
		const url="/supplier/supplier_manager";
		$.getJSON(url,{page},(data)=>{
			// 加载当前页数据
			const curr = data.res_body.data;
			var html="";
			$.each(curr, function(i) {
				html+=`
					<tr>
						<td>${curr[i]._id}</td>
						<td>${curr[i].supname}</td>
						<td>${curr[i].people}</td>
						<td>${curr[i].phone}</td>
						<td>${curr[i].address}</td>
						<td>${curr[i].fax}</td>
						<td>${curr[i].publish_time}</td>
						<td>
							<a href="javascript:;" class="read"><img src="/imgs/proj/read.png"/></a>
							<a href="" data-toggle="modal" data-target="#updatesupplier" class="update"><img src="/imgs/proj/updata.png"/></a>
							<a href="javascript:;" class="delete"><img src="/imgs/proj/delete.png"/></a>
						</td>
					</tr>`;
			});
			$(".table-striped tbody").html(html);
		});
	},
	lookPosHandler(){
		const url="/supplier/look";
		var data=new Object();
        data.supname=$("#look-name").val();
		$.getJSON(url,data,(data)=>{
			// 将查询到的数据加载到页面
			const curr = data.res_body.data;
			var html="";
			$.each(curr, function(i) {
				html+=`
					<tr>
						<td>${curr[i]._id}</td>
						<td>${curr[i].supname}</td>
						<td>${curr[i].people}</td>
						<td>${curr[i].phone}</td>
						<td>${curr[i].address}</td>
						<td>${curr[i].fax}</td>
						<td>${curr[i].publish_time}</td>
						<td>
							<a href="javascript:;" class="read"><img src="/imgs/proj/read.png"/></a>
							<a href="" data-toggle="modal" data-target="#updatesupplier" class="update"><img src="/imgs/proj/updata.png"/></a>
							<a href="javascript:;" class="delete"><img src="/imgs/proj/delete.png"/></a>
						</td>
					</tr>`;
			});
			$(".table-striped tbody").html(html);		
		});
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
				$("#updatesupname").val($(this).parent().parent().children().eq(1).text());
				$("#updatepeople").val($(this).parent().parent().children().eq(2).text());
				$("#updatephone").val($(this).parent().parent().children().eq(3).text());
				$("#updateaddress").val($(this).parent().parent().children().eq(4).text());
				$("#updatefax").val($(this).parent().parent().children().eq(5).text());
				$(".btn-update-supplier").on("click",function(){
					console.log("dd");
					_this.updaPosHandler(num);
					num="";
				});
			}
			
		});
	},
	DelePosHandler(id){
		var _this=this;
		const url="/supplier/dele";
		$.getJSON(url,{id},(data)=>{
			// 重新加载数据库的数据
			_this.LoadPosHandler();
		});
	},
	updaPosHandler(id){
		var _this=this;
		const url="/supplier/update";
		var data=$(".update-sup-form").serialize()+"&id="+id;
		$.getJSON(url,data,(data)=>{
			// 重新加载数据库的数据
			_this.LoadPosHandler();
			$("#updatesupplier").modal("hide");
		});
	}
});
new supplier();