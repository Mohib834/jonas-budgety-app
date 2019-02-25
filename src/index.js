import Income from './model/Income';
import Expense from './model/Expense';
import * as viewTrans from './view/viewTrans';
import {elements} from './view/base';

const state = {};

const controllerAdd = () => {
	//1)Get the Input Val
	const inputs = viewTrans.getInputVal();

	//2)Check if it is income or expense
	if(inputs.type === 'inc'){
		state.income = new Income(inputs.type,inputs.des,inputs.val);

		//Render income on UI
		viewTrans.renderIncome(inputs.type,inputs.des,inputs.val);
	}
	else if(inputs.type === 'exp'){
		state.expense = new Expense(inputs.type,inputs.des,inputs.val);
	
		//Render expense on UI	
		viewTrans.renderExpense(inputs.type,inputs.des,inputs.val);

	}


}

elements.addBtn.addEventListener('click',controllerAdd);
elements.addContainer.addEventListener('keypress',e => {
	if(e.which === 13){
		controllerAdd();
	}
});


