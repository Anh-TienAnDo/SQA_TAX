package com.sqa.project_sqa.service;

import com.sqa.project_sqa.entities.ThueQuaTang;
import com.sqa.project_sqa.entities.ThueTrungThuong;
import java.math.BigDecimal;
public interface ThueTrungThuongService {
    ThueTrungThuong saveThueTrungThuong(ThueTrungThuong thueTrungThuong);
    String Tax_win_prize(BigDecimal assessable_income);

}
