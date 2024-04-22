package com.sqa.project_sqa.service;

import java.math.BigDecimal;

import com.sqa.project_sqa.entities.ThueNhuongQuyenThuongMai;

public interface ThueNhuongQuyenThuongMaiService {
    ThueNhuongQuyenThuongMai saveThueNhuongQuyenThuongMaiService(ThueNhuongQuyenThuongMai thueNhuongQuyenThuongMai);

    String Tax_ecommerce(BigDecimal assessable_income);
}
