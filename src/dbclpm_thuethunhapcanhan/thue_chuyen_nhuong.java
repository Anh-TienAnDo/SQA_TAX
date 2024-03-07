/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package dbclpm_thuethunhapcanhan;

/**
 *
 * @author Admin
 */
// 
public class thue_chuyen_nhuong {
    
//    số thuế khi chuyển nhượng vốn góp
    public float Tax_capital_transfer(float assessable_income){
        float tax;
        float ratio = (float) 20.0;
        tax = assessable_income / 100 * ratio;
        return Math.round(tax);
    }
    
//    chuyển nhượng chứng khoán
    public float Tax_securities_transfer(float assessable_income){
        float tax;
        float ratio = (float) 0.1;
        tax = assessable_income / 100 * ratio;
        return Math.round(tax);
    }
    
}
