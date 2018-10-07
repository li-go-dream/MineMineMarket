const {Supplier}=require('./model.js');

const SupplierDao={
	save(positionInfo){
		var date= new Date(); 
		var year=date.getFullYear();
		var month=date.getMonth()+1;
		var day=date.getDate();
		positionInfo.publish_time=year+"年"+month+"月"+day+"日";
		return new Supplier(positionInfo).save();
	},
	findByPage(page) {
		const pageSize = 10; // 每页显示记录数
		return Supplier.find().limit(pageSize).skip((page - 1) * pageSize);
	},
	del(id){
		return Supplier.remove(id);
	},
	update(id,values){
		return Supplier.update(id,values);
	},
	look(conditions){
		return Supplier.find(conditions);
	},
	count(){
		return Supplier.find().count();
	}
};

module.exports=SupplierDao;