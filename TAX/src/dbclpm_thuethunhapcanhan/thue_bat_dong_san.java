/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package dbclpm_thuethunhapcanhan;

/**
 *
 * @author Admin
 */
public class thue_bat_dong_san {
    
//    chuyển nhượng bất động sản
    public float Tax_land_transfer(float transfer_price){ //transfer_price: giá chuyển nhượng
        float tax;
        float ratio = (float) 2.0;
        tax = transfer_price / 100 * ratio;
        return Math.round(tax);
    }
    
}
