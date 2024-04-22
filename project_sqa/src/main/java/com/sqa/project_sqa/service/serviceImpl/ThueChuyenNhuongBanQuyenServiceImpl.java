package com.sqa.project_sqa.service.serviceImpl;

import com.sqa.project_sqa.entities.ThueChuyenNhuongBanQuyen;
import com.sqa.project_sqa.repositories.ThueChuyenNhuongBanQuyenRepo;
import com.sqa.project_sqa.repositories.ThueTienLuongCongRepository;
import com.sqa.project_sqa.service.ThueChuyenNhuongBanQuyenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ThueChuyenNhuongBanQuyenServiceImpl implements ThueChuyenNhuongBanQuyenService {
    @Autowired
    private ThueChuyenNhuongBanQuyenRepo thueChuyenNhuongBanQuyenRepo;
    @Override
    public ThueChuyenNhuongBanQuyen saveThueChuyenNhuongBanQuyem(ThueChuyenNhuongBanQuyen thueChuyenNhuongBanQuyen) {
        return thueChuyenNhuongBanQuyenRepo.save(thueChuyenNhuongBanQuyen);
    }
}
