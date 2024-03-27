package com.sqa.project_sqa.service;

import com.sqa.project_sqa.entities.ThueTienLuongCong;

import java.util.List;

public interface ThueTienLuongCongService {
    List<ThueTienLuongCong> getAll();
    void saveThueTienLuongCong(ThueTienLuongCong thueTienLuongCong);
    ThueTienLuongCong getThueTienLuongCongById(int id);
    void deleteThueTienLuongCong(int id);
}
