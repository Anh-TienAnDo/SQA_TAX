package com.sqa.project_sqa.service;

import com.sqa.project_sqa.entities.ThueChuyenNhuongBDS;

import java.math.BigDecimal;

public interface ThueChuyenNhuongBatDongSanService {
    ThueChuyenNhuongBDS saveThueChuyenNhuongBDS(ThueChuyenNhuongBDS thueChuyenNhuongBDS);
    String Tax_land_transfer(BigDecimal transfer_price);
}
