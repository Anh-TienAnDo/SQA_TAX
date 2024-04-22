package com.sqa.project_sqa.service.serviceImpl;

import com.sqa.project_sqa.entities.ThueNhuongQuyenThuongMai;
import com.sqa.project_sqa.repositories.ThueDauTuVonRepo;
import com.sqa.project_sqa.repositories.ThueNhuongQuyenThuongMaiRepo;
import com.sqa.project_sqa.service.ThueNhuongQuyenThuongMaiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ThueNhuongQuyenThuongMaiServiceiMPL implements ThueNhuongQuyenThuongMaiService {
    @Autowired
    private ThueNhuongQuyenThuongMaiRepo thueNhuongQuyenThuongMaiRepo;
    @Override
    public ThueNhuongQuyenThuongMai saveThueNhuongQuyenThuongMaiService(ThueNhuongQuyenThuongMai thueNhuongQuyenThuongMai) {
        return thueNhuongQuyenThuongMaiRepo.save(thueNhuongQuyenThuongMai);
    }
}
