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
public class ThueBatDongSan {
    
//    chuyển nhượng bất động sản
    public String Tax_land_transfer(BigDecimal transfer_price){ //transfer_price: giá chuyển nhượng
        BigDecimal tax;
        BigDecimal ratio = new BigDecimal("0.02");
        if (transfer_price.compareTo(BigDecimal.ZERO) > 0) {
            tax = transfer_price.multiply(ratio);
        } else {
            tax = BigDecimal.ZERO;
        }
        return tax.setScale(0, RoundingMode.HALF_UP).toString();
    }
    
}
