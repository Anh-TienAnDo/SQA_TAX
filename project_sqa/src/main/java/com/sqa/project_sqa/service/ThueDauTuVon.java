package com.sqa.project_sqa.service;

import java.math.BigDecimal;
import java.math.RoundingMode;

//tính theo tháng
public class ThueDauTuVon {

	public String Tax_capital_investments(BigDecimal assessable_income){
        BigDecimal tax;
        BigDecimal ratio = new BigDecimal("0.05");
        if (assessable_income.compareTo(BigDecimal.ZERO) > 0) {
            tax = assessable_income.multiply(ratio);
        } else {
            tax = BigDecimal.ZERO;
        }
        return tax.setScale(0, RoundingMode.HALF_UP).toString();
    }

}
