package com.sqa.project_sqa.service;

//tính theo tháng
public class ThueDauTuVon {

	public float Tax_capital_investments(float assessable_income) {
		float tax;
		float ratio = (float) 5.0;
		tax = assessable_income / 100 * ratio;
		return Math.round(tax);
	}

}
