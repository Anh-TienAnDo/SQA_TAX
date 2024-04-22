package com.sqa.project_sqa.service;

import java.math.BigDecimal;

import com.sqa.project_sqa.entities.ThueChuyenNhuongBanQuyen;

public interface ThueChuyenNhuongBanQuyenService {
    ThueChuyenNhuongBanQuyen saveThueChuyenNhuongBanQuyem(ThueChuyenNhuongBanQuyen thueChuyenNhuongBanQuyen);
    String Tax_license(BigDecimal assessable_income);
}
