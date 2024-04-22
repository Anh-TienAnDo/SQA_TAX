package com.sqa.project_sqa.service;

import java.math.BigDecimal;

import com.sqa.project_sqa.entities.ThueTrungThuong;

public interface ThueTrungThuongService {
    ThueTrungThuong saveThueTrungThuong(ThueTrungThuong thueTrungThuong);
    String Tax_win_prize(BigDecimal assessable_income);

}
