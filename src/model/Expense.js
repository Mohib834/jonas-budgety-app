export default class Expense {
	constructor(type,des,val){
		this.type = type;
		this.description = des;
		this.value = parseInt(val);
	}
}