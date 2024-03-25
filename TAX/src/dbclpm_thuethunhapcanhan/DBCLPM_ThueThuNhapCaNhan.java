/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package dbclpm_thuethunhapcanhan;

import java.math.BigDecimal;

/**
 *
 * @author Admin
 */
public class DBCLPM_ThueThuNhapCaNhan {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
        System.out.println("Thuế thu nhập cá nhân từ tiền công, tiền lương");
        float taxable_income = 50000000;
        int dependent_person = 2;
        float benevolent = 0;
        thue_luong_cong tlc = new thue_luong_cong();
        String deductible = tlc.Deductible(new BigDecimal("50000000"), dependent_person, BigDecimal.ZERO);
        System.out.println(deductible);
        System.out.println(tlc.Tax_type1(new BigDecimal("50000000"), new BigDecimal(deductible)));
//        if (taxable_income < 0 || dependent_person < 0 || benevolent < 0
//                || dependent_person - (int) dependent_person > 0) {
//            System.out.println("Error value");
//        } else {
//            thue_luong_cong tlc = new thue_luong_cong();
//            float d = tlc.Deductible(taxable_income, dependent_person, benevolent);
//            System.out.println("Tổng khấu trừ: " + d);
//            System.out.println("thuế TNCN đối với cá nhân cư trú, ký hợp đồng lao động > 03 tháng: "
//                    + tlc.Tax_type1(taxable_income, d));
//            System.out.println("thuế TNCN đối với cá nhân không ký hợp đồng hoặc ký hợp đồng lao động dưới 03 tháng: "
//                    + tlc.Tax_type2(taxable_income));
//            System.out.println("thuế TNCN đối với cá nhân không cư trú: "
//                    + tlc.Tax_type3(taxable_income));
//        }
        System.out.println("-----------------------");
        thue_kinh_doanh tkd = new thue_kinh_doanh();
        taxable_income = 120000000;
        System.out.println("Thuế thu nhập cá nhân từ kinh doanh(tính theo năm)");
        if (taxable_income <= 100000000) {
            System.out.println("Thuế thu nhập cá nhân từ kinh doanh = 0 VND");
        } else {
            System.out.println("Thuế TNCN từ kinh doanh Phân phối, cung cấp hàng hóa: "
                    + tkd.Tax_distribution_supply(taxable_income));
            System.out.println("Thuế TNCN từ kinh doanh dịch vụ và xây dựng: "
                    + tkd.Tax_building_services(taxable_income));
            System.out.println("Thuế TNCN từ kinh doanh Cho thuê tài sản: "
                    + tkd.Tax_rental_agent(taxable_income));
            System.out.println("Thuế TNCN từ kinh doanh Sản xuất, vận tải: "
                    + tkd.Tax_production_transportation(taxable_income));
            System.out.println("Thuế TNCN từ kinh doanh khác: "
                    + tkd.Tax_other_business(taxable_income));
        }

    }

}
