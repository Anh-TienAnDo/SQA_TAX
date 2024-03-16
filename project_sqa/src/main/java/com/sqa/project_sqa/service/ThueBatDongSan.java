package com.sqa.project_sqa.service;

public class ThueBatDongSan {

//  chuyển nhượng bất động sản
	public float Tax_land_transfer(float transfer_price) { // transfer_price: giá chuyển nhượng
		float tax;
		float ratio = (float) 2.0;
		tax = transfer_price / 100 * ratio;
		return Math.round(tax);
	}

}
