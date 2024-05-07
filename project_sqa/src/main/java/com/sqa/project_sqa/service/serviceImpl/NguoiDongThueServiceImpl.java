package com.sqa.project_sqa.service.serviceImpl;

import com.sqa.project_sqa.entities.NguoiDongThue;
import com.sqa.project_sqa.entities.User;
import com.sqa.project_sqa.payload.dto.NguoiDongThueDTO;
import com.sqa.project_sqa.repositories.NguoiDongThueRepository;
import com.sqa.project_sqa.service.NguoiDongThueService;
import com.sqa.project_sqa.utils.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Random;
import java.util.regex.Pattern;

@Service
public class NguoiDongThueServiceImpl implements NguoiDongThueService {
    @Autowired
    private NguoiDongThueRepository nguoiDongThueRepository;


    public List<NguoiDongThue> getAll() {
        return nguoiDongThueRepository.findAll();
    }

    @Override
    public NguoiDongThue getNguoiDongThueByMaSoThue(String mst) {
        return nguoiDongThueRepository.findByMst(mst);
    }


}
