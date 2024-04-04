package com.sqa.project_sqa.controller;

import com.sqa.project_sqa.entities.ThueTienLuongCong;
import com.sqa.project_sqa.repositories.NguoiDongThueRepository;
import com.sqa.project_sqa.service.ThueTienLuongCongService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;


@Service
@Controller
@RequestMapping("/api/tk-thue-tien-luong-cong")

public class ThueTienLuongCongController {

    @Autowired
    private ThueTienLuongCongService thueTienLuongCongService;


    @Autowired
    private NguoiDongThueRepository nguoiDongThueRepository;


    // xử lí lưu thông tin tờ khai lương công
    @PostMapping("/submit")
    public ResponseEntity<String> submitTKThueTienLuongCong( @RequestBody ThueTienLuongCong thueTienLuongCong, BindingResult bindingResult) {
//        if (bindingResult.hasErrors()) {
//            // Lấy danh sách lỗi từ BindingResult
//            StringBuilder errorMessage = new StringBuilder();
//            for (FieldError error : bindingResult.getFieldErrors()) {
//                errorMessage.append(error.getDefaultMessage()).append("; ");
//            }
//            return ResponseEntity.badRequest().body("lỗi");
//        }

        String mst = thueTienLuongCong.getMst();
        if(nguoiDongThueRepository.existsByMst(mst)) {
            if (thueTienLuongCong.getThuNhapChiuThue() < 0 || thueTienLuongCong.getThuNhapDuocMienGiam() < 0 || thueTienLuongCong.getKhauTruChoBanThan() < 0 || thueTienLuongCong.getKhauTruNguoiPhuThuoc() < 0 || thueTienLuongCong.getKhauTruChoTuThien() < 0 || thueTienLuongCong.getKhauTruChoBaoHiem() < 0) {
                return ResponseEntity.badRequest().body("Giá trị không hợp lệ");
            }
            thueTienLuongCongService.saveThueTienLuongCong(thueTienLuongCong);
            return ResponseEntity.ok("Đã lưu thông tin thành công!");
        }
        else {
            return ResponseEntity.badRequest().body("MST không tồn tại. Vui lòng kiểm tra và nhập lại.");
        }
    }
}
