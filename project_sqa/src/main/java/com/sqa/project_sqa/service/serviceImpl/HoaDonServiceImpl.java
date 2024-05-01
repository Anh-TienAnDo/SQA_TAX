package com.sqa.project_sqa.service.serviceImpl;

import com.sqa.project_sqa.entities.HoaDon;
import com.sqa.project_sqa.entities.NguoiDongThue;
import com.sqa.project_sqa.service.HoaDonService;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HoaDonServiceImpl implements HoaDonService {
    @Override
    public List<HoaDon> getHoaDonByIdHoaDon(int idHoaDon) {
        return null;
    }

    @Override
    public ResponseEntity<?> getHoaDonByIdTaxPayer(int idNguoiDongThue) {
        return null;
    }
}
