package com.sqa.project_sqa.service;

import java.math.BigDecimal;
import java.math.RoundingMode;

// ThueTienLuongCong ttlc = new ThueTienLuongCong();
// ThueLuongCong tlc = new ThueLuongCong();
// String deductible = tlc.Deductible(BigDecimal.valueOf(ttlc.getThuNhapChiuThue()), 
// 					BigDecimal.valueOf(ttlc.getKhauTruNguoiPhuThuoc()), 
// 					BigDecimal.valueOf(ttlc.getKhauTruChoTuThien()));
// String tax = tlc.Tax_type1(BigDecimal.valueOf(ttlc.getThuNhapChiuThue()), BigDecimal.valueOf(deductible));

//tính theo tháng
public class ThueLuongCong {

	private final BigDecimal myself = new BigDecimal("11000000");
    private final BigDecimal social_insurance = new BigDecimal("0.105");

    public ThueLuongCong() {
		// TODO Auto-generated constructor stub
	}

    public BigDecimal getMyself() {
        return myself;
    }

    public BigDecimal getSocial_insurance() {
        return social_insurance;
    }

    // thuế thu nhập cá nhân đối với cá nhân cư trú, ký hợp đồng lao động > 03 tháng
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
        } else {
            tax = assessable_income.multiply(new BigDecimal("0.35")).subtract(new BigDecimal("9850000"));
        }
        if(tax.compareTo(new BigDecimal("0")) <= 0){
            return "0";
        }
        return tax.setScale(0, RoundingMode.HALF_UP).toString();
    }

    // Thuế thu nhập đối với cá nhân không ký hợp đồng lao động hoặc ký hợp đồng lao
    // động dưới 03 tháng
    public String Tax_type2(BigDecimal taxable_income) {
        BigDecimal tax;
        if (taxable_income.compareTo(new BigDecimal("2000000")) >= 0) {
            tax = taxable_income.multiply(new BigDecimal("0.10"));
        } else {
            tax = BigDecimal.ZERO;
        }
        return tax.setScale(0, RoundingMode.HALF_UP).toString(); // Làm tròn số về dạng số nguyên
    }

    // thuế thu nhập đối với cá nhân không cư trú
    public String Tax_type3(BigDecimal taxable_income) {
        BigDecimal tax;
        if (taxable_income.compareTo(BigDecimal.ZERO) <= 0) {
            tax = BigDecimal.ZERO;
        } else {
            tax = taxable_income.multiply(new BigDecimal("0.10"));
        }
        return tax.setScale(0, RoundingMode.HALF_UP).toString();
    }

    // Khoản giảm trừ
    public String Deductible(BigDecimal taxable_income, int dependent_person, BigDecimal benevolent) {
        BigDecimal deductible = taxable_income.multiply(this.social_insurance)
                .add(new BigDecimal("4400000").multiply(BigDecimal.valueOf(dependent_person)))
                .add(this.myself)
                .add(benevolent);
        return deductible.setScale(0, RoundingMode.HALF_UP).toString(); // Làm tròn số về 2 chữ số sau dấu thập phân
    }

    // Khoản giảm trừ
    public String Deductible(BigDecimal taxable_income, BigDecimal dependent_person, BigDecimal benevolent) {
        BigDecimal deductible = taxable_income.multiply(this.social_insurance)
                .add(dependent_person)
                .add(this.myself)
                .add(benevolent);
        return deductible.setScale(0, RoundingMode.HALF_UP).toString(); // Làm tròn số về 2 chữ số sau dấu thập phân
    }

}
