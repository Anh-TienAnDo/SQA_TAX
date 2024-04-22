/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.sqa.project_sqa.service;

import java.math.BigDecimal;
import java.math.RoundingMode;

/**
 *
 * @author Admin
 */
// 
public class ThueChuyenNhuong {
    
//    số thuế khi chuyển nhượng vốn góp
    public String Tax_capital_transfer(BigDecimal assessable_income){
        BigDecimal tax;
        BigDecimal ratio = new BigDecimal("0.2");
        if (assessable_income.compareTo(BigDecimal.ZERO) > 0) {
            tax = assessable_income.multiply(ratio);
        } else {
            tax = BigDecimal.ZERO;
        }
        return tax.setScale(0, RoundingMode.HALF_UP).toString();
    }
    
//    chuyển nhượng chứng khoán
    public String Tax_securities_transfer(BigDecimal assessable_income){
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
