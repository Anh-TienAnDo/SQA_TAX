package com.sqa.project_sqa.controller;

import com.sqa.project_sqa.entities.TaxPayer;
import com.sqa.project_sqa.entities.ThueDauTuVon;
import com.sqa.project_sqa.entities.ThueNhuongQuyenThuongMai;
import com.sqa.project_sqa.service.TaxPayerService;
import com.sqa.project_sqa.service.ThueDauTuVonService;
import com.sqa.project_sqa.service.ThueNhuongQuyenThuongMaiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.validation.Valid;
import java.math.BigDecimal;
import java.util.HashMap;
import java.util.Map;

@Service
@Controller
@RequestMapping("/api/thue-nhuong-quyen-thuong-mai")
public class ThueNhuongQuyenThuongMaiController {
    @Autowired
    private ThueNhuongQuyenThuongMaiService thueNhuongQuyenThuongMaiService;
    @Autowired
    private TaxPayerService taxPayerService;
    @PostMapping("/submit")
    public ResponseEntity<?> submit(@Valid @RequestBody ThueNhuongQuyenThuongMai thueNhuongQuyenThuongMai, BindingResult bindingResult) {
//        if (bindingResult.hasErrors()) {
//            // Lấy danh sách lỗi từ BindingResult
//            StringBuilder errorMessage = new StringBuilder();
//            for (FieldError error : bindingResult.getFieldErrors()) {
//                errorMessage.append(error.getDefaultMessage()).append("; ");
//            }
//            return ResponseEntity.badRequest().body("lỗi");
//        }

        String mst = thueNhuongQuyenThuongMai.getMst();
        TaxPayer taxPayer = taxPayerService.getTaxPayerById(mst);
        if (taxPayer != null) {
            String thuNhapChiuThue = String.valueOf(thueNhuongQuyenThuongMai.getThuNhapChiuThue());
            String tongThuePhaiNop = thueNhuongQuyenThuongMaiService.Tax_ecommerce(new BigDecimal(thuNhapChiuThue));
            thueNhuongQuyenThuongMai.setTongThuePhaiNop(Long.parseLong(tongThuePhaiNop));
            System.out.println(thueNhuongQuyenThuongMai.getTongThuePhaiNop());
            ThueNhuongQuyenThuongMai a = thueNhuongQuyenThuongMaiService.saveThueNhuongQuyenThuongMaiService(thueNhuongQuyenThuongMai);
            return ResponseEntity.ok(a);
        } else {
            Map<String, String> obj = new HashMap<>();
            obj.put("message", "MST không tồn tại");
            return ResponseEntity.badRequest().body(obj);
        }
    }
}
