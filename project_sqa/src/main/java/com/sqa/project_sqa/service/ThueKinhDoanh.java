package com.sqa.project_sqa.service;

//tính theo năm
public class ThueKinhDoanh {

//  Phân phối, cung cấp hàng hóa
	public float Tax_distribution_supply(float assessable_income) {
		float tax;
		float ratio = (float) 0.5;
		tax = assessable_income / 100 * ratio;
		return Math.round(tax);
	}

//  dịch vụ và xây dựng
	public float Tax_building_services(float assessable_income) {
		float tax;
		float ratio = (float) 2.0;
		tax = assessable_income / 100 * ratio;
		return Math.round(tax);
	}

//  Cho thuê tài sản, Làm đại lý xổ số, đại lý bảo hiểm, bán hàng đa cấp, Khoản bồi thường vi phạm hợp đồng
	public float Tax_rental_agent(float assessable_income) {
		float tax;
		float ratio = (float) 5.0;
		tax = assessable_income / 100 * ratio;
		return Math.round(tax);
	}

//  Sản xuất, vận tải, dịch vụ có gắn với hàng hóa, xây dựng có bao thầu nguyên vật liệu
	public float Tax_production_transportation(float assessable_income) {
		float tax;
		float ratio = (float) 1.5;
		tax = assessable_income / 100 * ratio;
		return Math.round(tax);
	}

//  Hoạt động kinh doanh khác 
	public float Tax_other_business(float assessable_income) {
		float tax;
		float ratio = (float) 1.0;
		tax = assessable_income / 100 * ratio;
		return Math.round(tax);
	}

}
