package com.sqa.project_sqa.service;

//tính theo tháng
public class ThueLuongCong {

	private final float myself = 11000000;
	private final float social_insurance = (float) 10.5;

	public ThueLuongCong() {
	}

	public float getMyself() {
		return myself;
	}

	public float getSocial_insurance() {
		return social_insurance;
	}

	// thuế thu nhập cá nhân đối với cá nhân cư trú, ký hợp đồng lao động > 03 tháng
	public float Tax_type1(float taxable_income, float deductible) { // thu nhập chịu thuế: taxable_income
		float tax;
		float assessable_income = taxable_income - deductible; // thu nhập tính thuế: assessable_income
		if (assessable_income <= 5000000) {
			tax = assessable_income / 100 * 5;
		} else if (assessable_income > 5000000 && assessable_income <= 10000000) {
			tax = (float) (assessable_income / 100 * 10) - (float) (0.25 * 1000000);
		} else if (assessable_income > 10000000 && assessable_income <= 18000000) {
			tax = (float) (assessable_income / 100 * 15) - (float) (0.75 * 1000000);
		} else if (assessable_income > 18000000 && assessable_income <= 32000000) {
			tax = (float) (assessable_income / 100 * 20) - (float) (1.65 * 1000000);
		} else if (assessable_income > 32000000 && assessable_income <= 52000000) {
			tax = (float) (assessable_income / 100 * 25) - (float) (3.25 * 1000000);
		} else if (assessable_income > 52000000 && assessable_income <= 80000000) {
			tax = (float) (assessable_income / 100 * 30) - (float) (5.85 * 1000000);
		} else {
			tax = (float) (assessable_income / 100 * 35) - (float) (9.85 * 1000000);
		}
//        System.out.println(tax);
//        DecimalFormat decimalFormat = new DecimalFormat("#.##");
//        String roundedTax = decimalFormat.format(tax);
		return Math.round(tax);
	}

//    cá nhân không ký hợp đồng lao động hoặc ký hợp đồng lao động dưới 03 tháng
	public float Tax_type2(float taxable_income) {
		float tax;
		if (taxable_income >= 2000000) {
			tax = taxable_income / 100 * 10;
		} else {
			tax = 0;
		}
		return Math.round(tax);
	}

//    thuế thu nhập đối với cá nhân không cư trú
	public float Tax_type3(float taxable_income) {
		float tax;
		tax = taxable_income / 100 * 20;
		return Math.round(tax);
	}

	public float Deductible(float taxable_income, int dependent_person, float benevolent) { // benevolent: khoản giảm
																							// trừ
		float deductible = (taxable_income / 100 * this.social_insurance) + (4400000 * dependent_person) + (this.myself)
				+ benevolent;
		// Định dạng để làm tròn đến 2 chữ số sau dấu thập phân
		return Math.round(deductible);
	}

}
