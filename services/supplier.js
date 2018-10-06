const SupplierDao=require("../dao/Supplier_dao.js");

const SupplierService = {
	// 添加供应商信息
	publish(req, res, next) {
		// 获取请求中传递的供应商数据
		const {supname, people, phone, address, fax} = req.query;
		// const {name, company, address, salary} = req.query;
		// 保存到数据库中
		SupplierDao.save({supname, people, phone, address, fax})
							.then((data)=>{
								res.json({res_code: 1, res_error: "", res_body: {data}});
							})
							.catch((err)=>{
								res.json({res_code: 0, res_error: err, res_body: {}});
							});
	},
	// 加载账单
	find(req, res, next) {
		// 获取查询的页码
		const {page} = req.query;
		// 查询
		SupplierDao.findByPage(page)
							.then((data)=>{
								res.json({res_code:1, res_error:"", res_body:{data}});
							})
							.catch((err)=>{
								res.json({res_code:0, res_error:err, res_body:{}});
							});
	},
	//删除账单信息
	deleted(req, res, next) {
		// 获取删除的id
		const {id} = req.query;
		// 查询
		SupplierDao.del({_id:id})
						.then((data)=>{
							res.json({res_code:1, res_error:"", res_body:{data}});
						})
						.catch((err)=>{
							res.json({res_code:0, res_error:err, res_body:{}});
						});
	},
	updated(req, res, next) {
		const {id, supname, people, phone, address, fax} = req.query;
		SupplierDao.update({_id:id},{supname, people, phone, address, fax})
						.then((data)=>{
								res.json({res_code: 1, res_error: "", res_body: {data}});
							})
							.catch((err)=>{
								res.json({res_code: 0, res_error: err, res_body: {}});
							});
	},
	look(req, res, next){
		const {supname} =req.query;
		SupplierDao.look({supname})
						.then((data)=>{
								res.json({res_code: 1, res_error: "", res_body: {data}});
							})
							.catch((err)=>{
								res.json({res_code: 0, res_error: err, res_body: {}});
							});
	}
}

module.exports = SupplierService;