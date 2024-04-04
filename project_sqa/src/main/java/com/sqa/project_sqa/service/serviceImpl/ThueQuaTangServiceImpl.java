package com.sqa.project_sqa.service.serviceImpl;

import com.sqa.project_sqa.entities.ThueQuaTang;
import com.sqa.project_sqa.repositories.ThueQuaTangRepo;
import com.sqa.project_sqa.repositories.ThueTienLuongCongRepository;
import com.sqa.project_sqa.service.ThueQuaTangService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service

public class ThueQuaTangServiceImpl implements ThueQuaTangService {
    @Autowired
    private ThueQuaTangRepo thueQuaTangRepo;
    @Override
    public ThueQuaTang saveThueQuaTang(ThueQuaTang thueQuaTang) {
        return thueQuaTangRepo.save(thueQuaTang);
    }
}
