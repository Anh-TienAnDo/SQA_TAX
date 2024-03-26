package com.sqa.project_sqa.service;

import java.math.BigDecimal;
import java.math.RoundingMode;

public class ThueChuyenNhuong {

//  số thuế khi chuyển nhượng vốn góp
	public String Tax_capital_transfer(BigDecimal assessable_income) {
		BigDecimal tax;
		BigDecimal ratio = new BigDecimal("0.2");
		if (assessable_income.compareTo(BigDecimal.ZERO) > 0) {
			tax = assessable_income.multiply(ratio);
		} else {
			tax = BigDecimal.ZERO;
		}
		return tax.setScale(0, RoundingMode.HALF_UP).toString();
	}

//  chuyển nhượng chứng khoán
	public String Tax_securities_transfer(BigDecimal assessable_income) {
		BigDecimal tax;
		BigDecimal ratio = new BigDecimal("0.001");
		if (assessable_income.compareTo(BigDecimal.ZERO) > 0) {
			tax = assessable_income.multiply(ratio);
		} else {
			tax = BigDecimal.ZERO;
		}
		return tax.setScale(0, RoundingMode.HALF_UP).toString();
	}

}
