package com.sqa.project_sqa.service;

import com.sqa.project_sqa.entities.ThueDauTuVon;
import com.sqa.project_sqa.entities.ThueNhuongQuyenThuongMai;

import java.math.BigDecimal;

public interface ThueNhuongQuyenThuongMaiService {
    ThueNhuongQuyenThuongMai saveThueNhuongQuyenThuongMaiService(ThueNhuongQuyenThuongMai thueNhuongQuyenThuongMai);
    String Tax_ecommerce(BigDecimal assessable_income);

}
