package com.sqa.project_sqa.service;
import java.math.BigDecimal;
import java.math.RoundingMode;

//tính theo năm
public class ThueKinhDoanh {

//    Phân phối, cung cấp hàng hóa
    public String Tax_distribution_supply(BigDecimal assessable_income) {
        BigDecimal tax;
        BigDecimal ratio = new BigDecimal("0.005") ;
        tax = assessable_income.multiply(ratio);
        return tax.setScale(0, RoundingMode.HALF_UP).toString();
    }

//    dịch vụ và xây dựng
    public String Tax_building_services(BigDecimal assessable_income) {
        BigDecimal tax;
        BigDecimal ratio = new BigDecimal("0.02");
        tax = assessable_income.multiply(ratio);
        return tax.setScale(0, RoundingMode.HALF_UP).toString();
    }

//    Cho thuê tài sản, Làm đại lý xổ số, đại lý bảo hiểm, bán hàng đa cấp, Khoản bồi thường vi phạm hợp đồng
    public String Tax_rental_agent(BigDecimal assessable_income) {
        BigDecimal tax;
        BigDecimal ratio = new BigDecimal("0.05");
        tax = assessable_income.multiply(ratio);
        return tax.setScale(0, RoundingMode.HALF_UP).toString();
    }
    
//    Sản xuất, vận tải, dịch vụ có gắn với hàng hóa, xây dựng có bao thầu nguyên vật liệu
    public String Tax_production_transportation(BigDecimal assessable_income) {
        BigDecimal tax;
        BigDecimal ratio = new BigDecimal("0.015");
        tax = assessable_income.multiply(ratio);
        return tax.setScale(0, RoundingMode.HALF_UP).toString();
    }
    
//    Hoạt động kinh doanh khác 
    public String Tax_other_business(BigDecimal assessable_income) {
        BigDecimal tax;
        BigDecimal ratio = new BigDecimal("0.01");
        tax = assessable_income.multiply(ratio);
        return tax.setScale(0, RoundingMode.HALF_UP).toString();
    }

}
