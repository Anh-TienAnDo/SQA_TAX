package com.sqa.project_sqa.service;

import com.sqa.project_sqa.entities.ThueChuyenNhuongBanQuyen;
import com.sqa.project_sqa.entities.ThueTienLuongCong;

import java.math.BigDecimal;

public interface ThueChuyenNhuongBanQuyenService {
    ThueChuyenNhuongBanQuyen saveThueChuyenNhuongBanQuyem(ThueChuyenNhuongBanQuyen thueChuyenNhuongBanQuyen);
    String Tax_license(BigDecimal assessable_income);
}
