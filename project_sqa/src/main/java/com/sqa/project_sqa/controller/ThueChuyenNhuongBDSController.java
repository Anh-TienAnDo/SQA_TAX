package com.sqa.project_sqa.controller;

import com.sqa.project_sqa.entities.TaxPayer;
import com.sqa.project_sqa.entities.ThueChuyenNhuongBDS;
import com.sqa.project_sqa.entities.ThueChuyenNhuongBanQuyen;
import com.sqa.project_sqa.service.TaxPayerService;
import com.sqa.project_sqa.service.ThueChuyenNhuongBanQuyenService;
import com.sqa.project_sqa.service.ThueChuyenNhuongBatDongSanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.Map;

@Service
@Controller
@RequestMapping("/api/thue-chuyen-mhuong-bds")
public class ThueChuyenNhuongBDSController {
    @Autowired
    private ThueChuyenNhuongBatDongSanService thueChuyenNhuongBatDongSanService;
    @Autowired
    private TaxPayerService taxPayerService;
    @PostMapping("/submit")
    public ResponseEntity<?> submit(@Valid @RequestBody ThueChuyenNhuongBDS thueChuyenNhuongBDS, BindingResult bindingResult) {
//        if (bindingResult.hasErrors()) {
//            // Lấy danh sách lỗi từ BindingResult
//            StringBuilder errorMessage = new StringBuilder();
//            for (FieldError error : bindingResult.getFieldErrors()) {
//                errorMessage.append(error.getDefaultMessage()).append("; ");
//            }
//            return ResponseEntity.badRequest().body("lỗi");
//        }

        String mst = thueChuyenNhuongBDS.getMst();
        TaxPayer taxPayer = taxPayerService.getTaxPayerById(mst);
        if (taxPayer != null) {
            ThueChuyenNhuongBDS a = thueChuyenNhuongBatDongSanService.saveThueChuyenNhuongBDS(thueChuyenNhuongBDS);
            return ResponseEntity.ok(a);
        } else {
            Map<String, String> obj = new HashMap<>();
            obj.put("message", "MST không tồn tại");
            return ResponseEntity.badRequest().body(obj);
        }
    }
}
