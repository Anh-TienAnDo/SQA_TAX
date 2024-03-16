package com.sqa.project_sqa.service;

public class ThueChuyenNhuong {

//  số thuế khi chuyển nhượng vốn góp
	public float Tax_capital_transfer(float assessable_income) {
		float tax;
		float ratio = (float) 20.0;
		tax = assessable_income / 100 * ratio;
		return Math.round(tax);
	}

//  chuyển nhượng chứng khoán
	public float Tax_securities_transfer(float assessable_income) {
		float tax;
		float ratio = (float) 0.1;
		tax = assessable_income / 100 * ratio;
		return Math.round(tax);
	}

}
