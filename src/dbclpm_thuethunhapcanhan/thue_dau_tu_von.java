/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package dbclpm_thuethunhapcanhan;

/**
 *
 * @author Admin
 */
// tính theo tháng
public class thue_dau_tu_von {
    
    public float Tax_capital_investments(float assessable_income){
        float tax;
        float ratio = (float) 5.0;
        tax = assessable_income / 100 * ratio;
        return Math.round(tax);
    }
    
}
