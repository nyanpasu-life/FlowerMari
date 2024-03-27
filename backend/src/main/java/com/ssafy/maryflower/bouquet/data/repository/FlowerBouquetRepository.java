package com.ssafy.maryflower.bouquet.data.repository;

import com.ssafy.maryflower.bouquet.data.entity.FlowerBouquet;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FlowerBouquetRepository extends JpaRepository<FlowerBouquet, Long> {
}
