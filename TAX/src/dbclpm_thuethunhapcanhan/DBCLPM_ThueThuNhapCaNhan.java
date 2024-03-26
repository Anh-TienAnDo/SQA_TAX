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
        BigDecimal taxable_income = new BigDecimal("50000000");
        int dependent_person = 2;
        BigDecimal benevolent = new BigDecimal("0");
        thue_luong_cong tlc = new thue_luong_cong();
        String deductible = tlc.Deductible(taxable_income, dependent_person, benevolent);
        System.out.println("Tổng khấu trừ: " + deductible);
        System.out.println("thuế TNCN đối với cá nhân cư trú, ký hợp đồng lao động > 03 tháng: "
                    + tlc.Tax_type1(taxable_income, new BigDecimal(deductible)));
        System.out.println("thuế TNCN đối với cá nhân không ký hợp đồng hoặc ký hợp đồng lao động dưới 03 tháng: "
                    + tlc.Tax_type2(taxable_income));
        System.out.println("thuế TNCN đối với cá nhân không cư trú: "
                    + tlc.Tax_type3(taxable_income));

        System.out.println("-----------------------");
        
        thue_kinh_doanh tkd = new thue_kinh_doanh();
        taxable_income = new BigDecimal("120000000");
        System.out.println("Thuế thu nhập cá nhân từ kinh doanh(tính theo năm)");
        if (taxable_income.compareTo(new BigDecimal("100000000")) <= 0) {
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
        
        System.out.println("-----------------------");
        thue_dau_tu_von dtv = new thue_dau_tu_von();
        System.out.println("Thuế TNCN từ dau tu von: "
                    + dtv.Tax_capital_investments(taxable_income));
        
        System.out.println("-----------------------");
        thue_chuyen_nhuong tcn = new thue_chuyen_nhuong();
        System.out.println("Thuế TNCN từ chuyen nhuong von gop: "
                    + tcn.Tax_capital_transfer(taxable_income));
        System.out.println("Thuế TNCN từ chuyen nhuong chung khoan: "
                    + tcn.Tax_securities_transfer(taxable_income));
        
        System.out.println("-----------------------");
        thue_bat_dong_san bds = new thue_bat_dong_san();
        System.out.println("Thuế TNCN từ chuyen nhuong bất động sản: "
                    + bds.Tax_land_transfer(taxable_income));

    }

}
