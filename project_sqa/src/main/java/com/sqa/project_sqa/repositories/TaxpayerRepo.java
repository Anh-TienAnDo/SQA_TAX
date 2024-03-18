package com.sqa.project_sqa.repositories;

import com.sqa.project_sqa.entities.TaxPayer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaxpayerRepo extends JpaRepository<TaxPayer,String> {
}
