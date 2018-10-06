const BillDao=require("../dao/Bill_dao.js");

const BillService = {
	// 发布职位信息
	publish(req, res, next) {
		// 获取请求中传递的职位数据
		const {name, unit, numb, sum, supplier, payment} = req.query;
		// const {name, company, address, salary} = req.query;
		// 保存到数据库中
		BillDao.save({name, unit, numb, sum, supplier, payment})
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
		BillDao.findByPage(page)
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
		BillDao.del({_id:id})
						.then((data)=>{
							res.json({res_code:1, res_error:"", res_body:{data}});
						})
						.catch((err)=>{
							res.json({res_code:0, res_error:err, res_body:{}});
						});
	},
	updated(req, res, next) {
		const {id, name, unit, numb, sum, supplier, payment} = req.query;
		BillDao.update({_id:id},{name, unit, numb, sum, supplier, payment})
						.then((data)=>{
								res.json({res_code: 1, res_error: "", res_body: {data}});
							})
							.catch((err)=>{
								res.json({res_code: 0, res_error: err, res_body: {}});
							});
	},
	look(req, res, next){
		const conditions =req.query;
		BillDao.look(conditions)
						.then((data)=>{
								res.json({res_code: 1, res_error: "", res_body: {data}});
							})
							.catch((err)=>{
								res.json({res_code: 0, res_error: err, res_body: {}});
							});
	}
}

module.exports = BillService;