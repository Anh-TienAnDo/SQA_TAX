package com.sqa.project_sqa.service.serviceImpl;

import com.sqa.project_sqa.entities.ThueTrungThuong;
import com.sqa.project_sqa.repositories.ThueQuaTangRepo;
import com.sqa.project_sqa.repositories.ThueTrungThuongRepo;
import com.sqa.project_sqa.service.ThueTrungThuongService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service

public class ThueTrungThuongServiceImpl implements ThueTrungThuongService {
    @Autowired
    private ThueTrungThuongRepo thueTrungThuongRepo;
    @Override
    public ThueTrungThuong saveThueTrungThuong(ThueTrungThuong thueTrungThuong) {
        return thueTrungThuongRepo.save(thueTrungThuong);
    }
}
