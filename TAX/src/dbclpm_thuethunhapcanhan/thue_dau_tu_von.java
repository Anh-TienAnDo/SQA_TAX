/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package dbclpm_thuethunhapcanhan;

import java.math.BigDecimal;
import java.math.RoundingMode;

/**
 *
 * @author Admin
 */
// tính theo tháng
public class thue_dau_tu_von {
    
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
