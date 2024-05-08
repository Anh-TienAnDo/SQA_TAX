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


    public boolean testMst(List<String> mstList) {
        Pattern pattern = Pattern.compile("^[0-9]{10}$|^[0-9]{13}$");

        for (String mst : mstList) {
            if (!pattern.matcher(mst).matches()) {
                return false;
            }
            try {
                if (new java.math.BigInteger(mst).compareTo(java.math.BigInteger.ZERO) <= 0) {
                    return false; // Nếu số không lớn hơn 0, trả về false
                }
            } catch (NumberFormatException e) {
                return false;
            }
        }

        return true; // T
    }
}
