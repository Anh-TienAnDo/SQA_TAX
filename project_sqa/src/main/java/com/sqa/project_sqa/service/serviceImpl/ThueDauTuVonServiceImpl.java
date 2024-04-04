package com.sqa.project_sqa.service.serviceImpl;

import com.sqa.project_sqa.entities.ThueDauTuVon;
import com.sqa.project_sqa.repositories.ThueChuyenNhuongBatDongSanRepo;
import com.sqa.project_sqa.repositories.ThueDauTuVonRepo;
import com.sqa.project_sqa.service.ThueDauTuVonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service

public class ThueDauTuVonServiceImpl implements ThueDauTuVonService {
    @Autowired
    private ThueDauTuVonRepo thueDauTuVonRepo;
    @Override
    public ThueDauTuVon saveThueDauTuVon(ThueDauTuVon thueDauTuVon) {
        return thueDauTuVonRepo.save(thueDauTuVon);
    }
}
