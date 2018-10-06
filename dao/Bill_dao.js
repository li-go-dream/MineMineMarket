const {Bill}=require('./model.js');

const BillDao={
	save(positionInfo){
		var date= new Date(); 
		var year=date.getFullYear();
		var month=date.getMonth()+1;
		var day=date.getDate();
		positionInfo.publish_time=year+"年"+month+"月"+day+"日";
		return new Bill(positionInfo).save();
	},
	findByPage(page) {
		const pageSize = 10; // 每页显示记录数
		return Bill.find().limit(pageSize).skip((page - 1) * pageSize);
	},
	del(id){
		return Bill.remove(id);
	},
	update(id,values){
		return Bill.update(id,values);
	},
	look(conditions){
		return Bill.find(conditions);
	}
};

module.exports=BillDao;
