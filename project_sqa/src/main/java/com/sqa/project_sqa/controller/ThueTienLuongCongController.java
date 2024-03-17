package com.sqa.project_sqa.controller;

import com.sqa.project_sqa.entities.ThueTienLuongCong;
import com.sqa.project_sqa.repositories.ThueTienLuongCongRepository;
import com.sqa.project_sqa.service.ThueTienLuongCongService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/tk-thue-tien-luong-cong")

public class ThueTienLuongCongController {

    @Autowired
    private ThueTienLuongCongService thueTienLuongCongService;
    @PostMapping("/submit")
    public ResponseEntity<String> submitTKThueTienLuongCong(@RequestBody ThueTienLuongCong thueTienLuongCong) {
        thueTienLuongCongService.saveThueTienLuongCong(thueTienLuongCong);
        return ResponseEntity.ok("Đã lưu thông tin thành công!");
    }
}
