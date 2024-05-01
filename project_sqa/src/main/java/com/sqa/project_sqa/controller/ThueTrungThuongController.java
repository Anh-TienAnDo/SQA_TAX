package com.sqa.project_sqa.controller;

import com.sqa.project_sqa.entities.ThueTrungThuong;
import com.sqa.project_sqa.repositories.NguoiDongThueRepository;
import com.sqa.project_sqa.service.ThueTrungThuongService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import java.math.BigDecimal;
import java.util.HashMap;
import java.util.Map;

@Service
@Controller
@RequestMapping("/api/to-khai-thue-trung-thuong")
public class ThueTrungThuongController {
    @Autowired
    private ThueTrungThuongService thueTrungThuongService;
    @Autowired
    private NguoiDongThueRepository nguoiDongThueRepository;
    @PostMapping("/submit")
    public ResponseEntity<?> submit( @RequestBody ThueTrungThuong thueTrungThuong, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            // Lấy danh sách lỗi từ BindingResult
            StringBuilder errorMessage = new StringBuilder();
            for (FieldError error : bindingResult.getFieldErrors()) {
                errorMessage.append(error.getDefaultMessage()).append("; ");
            }
            return ResponseEntity.badRequest().body("lỗi");
        }

        String mst = thueTrungThuong.getMst();
        if(nguoiDongThueRepository.existsByMst(mst)) {
            String thuNhapChiuThue = String.valueOf(thueTrungThuong.getThuNhapChiuThue());
            String tongThuePhaiNop = thueTrungThuongService.Tax_win_prize(new BigDecimal(thuNhapChiuThue));
            thueTrungThuong.setTongThuePhaiNop(Long.parseLong(tongThuePhaiNop));
            System.out.println(thueTrungThuong.getTongThuePhaiNop());
            ThueTrungThuong a = thueTrungThuongService.saveThueTrungThuong(thueTrungThuong);
            return ResponseEntity.ok(a);
        } else {
            Map<String, String> obj = new HashMap<>();
            obj.put("message", "MST không tồn tại");
            return ResponseEntity.badRequest().body(obj);
        }
    }
}
