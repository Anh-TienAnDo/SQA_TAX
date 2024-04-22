package com.sqa.project_sqa.service;

import java.math.BigDecimal;

import com.sqa.project_sqa.entities.ThueQuaTang;

public interface ThueQuaTangService {
    ThueQuaTang saveThueQuaTang(ThueQuaTang thueQuaTang);

    String Tax_present(BigDecimal assessable_income);

}
