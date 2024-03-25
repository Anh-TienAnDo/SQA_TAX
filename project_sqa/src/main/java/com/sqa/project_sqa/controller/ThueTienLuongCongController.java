package com.sqa.project_sqa.controller;


import com.sqa.project_sqa.entities.ThueTienLuongCong;
import com.sqa.project_sqa.service.NguoiDongThueService;
import com.sqa.project_sqa.service.ThueTienLuongCongService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/tk-thue-tien-luong-cong")
@CrossOrigin
public class ThueTienLuongCongController {

    @Autowired
    private ThueTienLuongCongService thueTienLuongCongService;

    @Autowired
    private NguoiDongThueService nguoiDongThueService;

    @PostMapping("/submit")
    public ResponseEntity<?> submitTKThueTienLuongCong(@RequestBody ThueTienLuongCong thueTienLuongCong) {
        String mst = thueTienLuongCong.getMst();
        TaxPayer taxPayer = taxPayerService.getTaxPayerById(mst);
        if(taxPayer != null) {
            thueTienLuongCongService.saveThueTienLuongCong(thueTienLuongCong);
            return ResponseEntity.ok("Đã lưu thông tin thành công!");
        }
        else {
            return ResponseEntity.badRequest().body("MST không tồn tại. Vui lòng kiểm tra và nhập lại.");
        }
    }
}