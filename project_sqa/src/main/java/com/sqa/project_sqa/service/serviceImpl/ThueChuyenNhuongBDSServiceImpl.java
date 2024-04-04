package com.sqa.project_sqa.service.serviceImpl;

import com.sqa.project_sqa.entities.ThueChuyenNhuongBDS;
import com.sqa.project_sqa.repositories.ThueChuyenNhuongBanQuyenRepo;
import com.sqa.project_sqa.repositories.ThueChuyenNhuongBatDongSanRepo;
import com.sqa.project_sqa.service.ThueChuyenNhuongBatDongSanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ThueChuyenNhuongBDSServiceImpl implements ThueChuyenNhuongBatDongSanService {
    @Autowired
    private ThueChuyenNhuongBatDongSanRepo thueChuyenNhuongBatDongSanRepo;
    @Override
    public ThueChuyenNhuongBDS saveThueChuyenNhuongBDS(ThueChuyenNhuongBDS thueChuyenNhuongBDS) {
        return thueChuyenNhuongBatDongSanRepo.save(thueChuyenNhuongBDS);
    }
}
