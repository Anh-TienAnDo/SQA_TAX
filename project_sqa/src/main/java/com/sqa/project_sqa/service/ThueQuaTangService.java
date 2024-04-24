package com.sqa.project_sqa.service;

import com.sqa.project_sqa.entities.ThueNhuongQuyenThuongMai;
import com.sqa.project_sqa.entities.ThueQuaTang;

import java.math.BigDecimal;

public interface ThueQuaTangService {
    ThueQuaTang saveThueQuaTang(ThueQuaTang thueQuaTang);
    String Tax_present(BigDecimal assessable_income);


}
