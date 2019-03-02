import Income from './model/Income';
import Expense from './model/Expense';
import * as viewTrans from './view/viewTrans';
import {elements,elementsClassName} from './view/base';

const state = {};

const controllerAdd = () => {

	//1)Get the Input Val, check if values are present in field and then clear input on UI.
	const inputs = viewTrans.getInputVal();

	if(inputs.des !== '' && inputs.val !== ''){
		
		viewTrans.clearInputVal();

		//2)Check if it is income or expense
		if(inputs.type === 'inc'){

			state.income = new Income(inputs.type,inputs.des,inputs.val);
			const income = state.income;
			//Render income list on UI

			viewTrans.renderIncomeList(income.type,income.description,income.value);
			//Render income Total on Ui
			viewTrans.renderTotal(income.type,income.value);;
		}
	else if(inputs.type === 'exp'){

			state.expense = new Expense(inputs.type,inputs.des,inputs.val);
			const expense = state.expense;

			//Render expense list on UI	
			viewTrans.renderExpenseList(expense.type,expense.description,expense.value);

			//Render expense Total on Ui
			viewTrans.renderTotal(expense.type,expense.value);;
		}
	}
	
	

	//3)
}

const controllerDel = e => {
	//1)Delete that detail(income/expense) from the app
}


elements.addBtn.addEventListener('click',controllerAdd);
elements.addContainer.addEventListener('keypress',e => {
	if(e.which === 13){
		controllerAdd();
	}return
});

window.addEventListener('click',e => {
	if(e.target.closest(`.${elementsClassName.delBtn}`)){
		controllerDel(e);
	}
})
