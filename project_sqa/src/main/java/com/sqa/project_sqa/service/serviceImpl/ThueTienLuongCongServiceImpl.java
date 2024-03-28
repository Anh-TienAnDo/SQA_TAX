package com.sqa.project_sqa.service.serviceImpl;

import com.sqa.project_sqa.entities.ThueTienLuongCong;
import com.sqa.project_sqa.repositories.ThueTienLuongCongRepository;
import com.sqa.project_sqa.service.ThueTienLuongCongService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ThueTienLuongCongServiceImpl implements ThueTienLuongCongService {
    @Autowired
    private ThueTienLuongCongRepository thueTienLuongCongRepository;
    @Override
    public List<ThueTienLuongCong> getAll() {
        return thueTienLuongCongRepository.findAll();
    }

    @Override
    public ThueTienLuongCong saveThueTienLuongCong(ThueTienLuongCong thueTienLuongCong) {
          return  thueTienLuongCongRepository.save(thueTienLuongCong);
    }

    @Override
    public ThueTienLuongCong getThueTienLuongCongById(int id) {
        return null;
    }

    @Override
    public void deleteThueTienLuongCong(int id) {

    }
}
