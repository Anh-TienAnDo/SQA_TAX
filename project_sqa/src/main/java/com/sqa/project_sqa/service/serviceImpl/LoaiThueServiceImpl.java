package com.sqa.project_sqa.service.serviceImpl;

import com.sqa.project_sqa.entities.LoaiThue;
import com.sqa.project_sqa.entities.Province;
import com.sqa.project_sqa.repositories.LoaiThueRepository;
import com.sqa.project_sqa.service.LoaiThueService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LoaiThueServiceImpl implements LoaiThueService {

    @Autowired
    LoaiThueRepository loaiThueRepository;

    @Override
    public List<LoaiThue> getAll() {
        return loaiThueRepository.findAll();
    }
}
