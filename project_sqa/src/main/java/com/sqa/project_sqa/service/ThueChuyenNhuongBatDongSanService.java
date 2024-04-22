package com.sqa.project_sqa.service;

import java.math.BigDecimal;

import com.sqa.project_sqa.entities.ThueChuyenNhuongBDS;

public interface ThueChuyenNhuongBatDongSanService {
    ThueChuyenNhuongBDS saveThueChuyenNhuongBDS(ThueChuyenNhuongBDS thueChuyenNhuongBDS);
    //    chuyển nhượng bất động sản
    String Tax_land_transfer(BigDecimal transfer_price)
}
