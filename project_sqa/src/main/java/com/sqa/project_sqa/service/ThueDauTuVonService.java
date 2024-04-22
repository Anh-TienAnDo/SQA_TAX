package com.sqa.project_sqa.service;

import java.math.BigDecimal;

import com.sqa.project_sqa.entities.ThueDauTuVon;

public interface ThueDauTuVonService {
    ThueDauTuVon saveThueDauTuVon(ThueDauTuVon thueDauTuVon);

    String Tax_capital_investments(BigDecimal assessable_income);

}
