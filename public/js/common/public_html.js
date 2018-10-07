function public_html(){
	this.createDom();
	this.addListener();
}

public_html.Newhtml=`<nav class="navbar navbar-default header-color">
		  <div class="container-fluid">
		    <div class="navbar-header nav-header">
		   	 <img src="/imgs/proj/buy.png" class="buy" />
		      <a class="navhead a-color" href="javascript:;">超市账单管理系统</a>
		    </div>
		
		    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
		      <ul class="nav navbar-nav navbar-right">
		      	 <li class="hide"><a href="javascript:;" style="color: white;">你好，hh</a></li>
		      	 <button type="button" class="btn btn-default btn-top hide" style="color: white;background: #8bc93a;">退出</button>
		      	 <button type="button" id="loginbtn" class="btn btn-default btn-top" style="color: white;background: #8bc93a;">登录</button>
		      </ul>
		    </div><!-- /.navbar-collapse -->
		  </div><!-- /.container-fluid -->
		</nav>
		<div class="alert-css" role="alert">
				<div class="time">
					<img src="/imgs/proj/time.png"/>
					<lable id="times"></lable>
				</div>
				<div class="tishi">
					温馨提示：为了能正常浏览，请使用高版本浏览器！(IE10+)
				</div>
		</div>
		<div class="clearfix"></div>
		<div class="left-nav">
			<ul class="nav nav-pills nav-stacked nav-ul">
			  <li role="presentation" class="active"><a href="#">功能列表</a></li>
			  <li role="presentation"><a href="/html/bill_manager.html"><img src="/imgs/proj/zd.png"/>账单管理</a></li>
			  <li role="presentation"><a href="/html/supplier_manager.html"><img src="/imgs/proj/gys.png"/>供应商管理</a></li>
			  <li role="presentation"><a href="/html/user_manager.html"><img src="/imgs/proj/yh.png"/>用户管理</a></li>
			  <li role="presentation"><a href="/html/password_manager.html"><img src="/imgs/proj/mm.png"/>密码修改</a></li>
			  <li role="presentation"><a href="#"><img src="/imgs/proj/tc.png"/>退出系统</a></li>
			</ul>
		</div>
		<div class="right-nav">
			<div class="right-first">
				<img src="/imgs/proj/clock.jpg"/>
				<lable>欢迎来到超市账单管理系统，请登录！</lable>
			</div>
		</div>`;

$.extend(public_html.prototype,{
	createDom(){
		$(public_html.Newhtml).appendTo(".con");
	},
	addListener(){
		$("#loginbtn").on("click",function(){
			window.location.href="/html/login.html";
		});
	}
})
new public_html();
