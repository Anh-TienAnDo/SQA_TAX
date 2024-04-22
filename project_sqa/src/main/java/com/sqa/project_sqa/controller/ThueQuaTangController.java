package com.sqa.project_sqa.controller;

import com.sqa.project_sqa.entities.TaxPayer;
import com.sqa.project_sqa.entities.ThueNhuongQuyenThuongMai;
import com.sqa.project_sqa.entities.ThueQuaTang;
import com.sqa.project_sqa.service.TaxPayerService;
import com.sqa.project_sqa.service.ThueNhuongQuyenThuongMaiService;
import com.sqa.project_sqa.service.ThueQuaTangService;
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
@RequestMapping("/api/thue-qua-tang")
public class ThueQuaTangController {
    @Autowired
    private ThueQuaTangService thueQuaTangService;
    @Autowired
    private TaxPayerService taxPayerService;
    @PostMapping("/submit")
    public ResponseEntity<?> submit(@Valid @RequestBody ThueQuaTang thueQuaTang, BindingResult bindingResult) {
//        if (bindingResult.hasErrors()) {
//            // Lấy danh sách lỗi từ BindingResult
//            StringBuilder errorMessage = new StringBuilder();
//            for (FieldError error : bindingResult.getFieldErrors()) {
//                errorMessage.append(error.getDefaultMessage()).append("; ");
//            }
//            return ResponseEntity.badRequest().body("lỗi");
//        }

        String mst = thueQuaTang.getMst();
        TaxPayer taxPayer = taxPayerService.getTaxPayerById(mst);
        if (taxPayer != null) {
            String thuNhapChiuThue = String.valueOf(thueQuaTang.getThuNhapChiuThue());
            String tongThuePhaiNop = thueQuaTangService.Tax_present(new BigDecimal(thuNhapChiuThue));
            thueQuaTang.setTongThuePhaiNop(Long.parseLong(tongThuePhaiNop));
            System.out.println(thueQuaTang.getTongThuePhaiNop());


            ThueQuaTang a = thueQuaTangService.saveThueQuaTang(thueQuaTang);
            return ResponseEntity.ok(a);
        } else {
            Map<String, String> obj = new HashMap<>();
            obj.put("message", "MST không tồn tại");
            return ResponseEntity.badRequest().body(obj);
        }
    }
}
