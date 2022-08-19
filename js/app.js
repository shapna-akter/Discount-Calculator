document.getElementById('btn-apply').addEventListener('click', function(){
	
	// Selecting Elements
	const bill = Number(document.querySelector('#totalBill').value);
	const discountAmount = document.querySelector('#discountAmount');
	const totalBillAfterDiscount = document.querySelector('#totalBillAfterDiscount');
	const couponName = document.getElementById('coupon-name').value;

	if(couponName === 'dom'){
		const discountValue = bill * (30 / 100);
		const finalBill = bill - discountValue;

		discountAmount.value = discountValue.toFixed(2);
		totalBillAfterDiscount.value = finalBill.toFixed(2);
	}
	else{
		alert('please insert valid coupon name')
	}	
})