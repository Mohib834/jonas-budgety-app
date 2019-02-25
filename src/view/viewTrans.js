import {elements} from './base';

export const getInputVal = () => {
	return {
		type:elements.addType.value,
		des:elements.addDes.value,
		val:elements.addVal.value
	}
}

export const renderIncome = (type,des,val) => {
	const markup = `
		<div class="item clearfix" id="income-0">
			<div class="item__description">${des}</div>
			<div class="right clearfix">
				<div class="item__value">+ ${val}</div>
				<div class="item__delete">
					<button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
				</div>
			</div>
		</div>
	`;

	elements.incomeList.insertAdjacentHTML('beforeend',markup);
}

export const renderExpense = (type,des,val) => {
	const markup = `
		<div class="item clearfix" id="expense-0">
			<div class="item__description">${des}</div>
			<div class="right clearfix">
				<div class="item__value">- ${val}</div>
				<div class="item__percentage">21%</div>
				<div class="item__delete">
					<button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
				</div>
			</div>
        </div>
	`;
	
	elements.expenseList.insertAdjacentHTML('beforeend',markup);
}
