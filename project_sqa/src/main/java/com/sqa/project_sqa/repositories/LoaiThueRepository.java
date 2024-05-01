package com.sqa.project_sqa.repositories;

import com.sqa.project_sqa.entities.District;
import com.sqa.project_sqa.entities.LoaiThue;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LoaiThueRepository extends JpaRepository<LoaiThue,Integer> {
}
