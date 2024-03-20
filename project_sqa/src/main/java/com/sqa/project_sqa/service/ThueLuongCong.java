package com.sqa.project_sqa.service;

<<<<<<< Updated upstream
=======
import java.math.BigDecimal;
import java.math.RoundingMode;

// ThueTienLuongCong ttlc = new ThueTienLuongCong();
// ThueLuongCong tlc = new ThueLuongCong();
// String deductible = tlc.Deductible(BigDecimal.valueOf(ttlc.getThuNhapChiuThue()), 
// 					BigDecimal.valueOf(ttlc.getKhauTruNguoiPhuThuoc()), 
// 					BigDecimal.valueOf(ttlc.getKhauTruChoTuThien()));
// String tax = tlc.Tax_type1(BigDecimal.valueOf(ttlc.getThuNhapChiuThue()), BigDecimal.valueOf(deductible));
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
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
=======
	public String Tax_type1(BigDecimal taxable_income, BigDecimal deductible) { // thu nhập chịu thuế:
																							// taxable_income
		BigDecimal tax;
		BigDecimal assessable_income = taxable_income.subtract(deductible); // thu nhập tính thuế: assessable_income
		if (assessable_income.compareTo(new BigDecimal("5000000")) <= 0) {
			tax = assessable_income.multiply(new BigDecimal("0.05"));
		} else if (assessable_income.compareTo(new BigDecimal("10000000")) <= 0) {
			tax = assessable_income.multiply(new BigDecimal("0.1")).subtract(new BigDecimal("250000"));
		} else if (assessable_income.compareTo(new BigDecimal("18000000")) <= 0) {
			tax = assessable_income.multiply(new BigDecimal("0.15")).subtract(new BigDecimal("750000"));
		} else if (assessable_income.compareTo(new BigDecimal("32000000")) <= 0) {
			tax = assessable_income.multiply(new BigDecimal("0.2")).subtract(new BigDecimal("1650000"));
		} else if (assessable_income.compareTo(new BigDecimal("52000000")) <= 0) {
			tax = assessable_income.multiply(new BigDecimal("0.25")).subtract(new BigDecimal("3250000"));
		} else if (assessable_income.compareTo(new BigDecimal("80000000")) <= 0) {
			tax = assessable_income.multiply(new BigDecimal("0.3")).subtract(new BigDecimal("5850000"));
>>>>>>> Stashed changes
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
