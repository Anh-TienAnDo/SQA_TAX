package com.sqa.project_sqa.service;

import com.sqa.project_sqa.entities.ThueDauTuVon;

import java.math.BigDecimal;

public interface ThueDauTuVonService {
    ThueDauTuVon saveThueDauTuVon(ThueDauTuVon thueDauTuVon);
    String Tax_capital_investments(BigDecimal assessable_income);


}
