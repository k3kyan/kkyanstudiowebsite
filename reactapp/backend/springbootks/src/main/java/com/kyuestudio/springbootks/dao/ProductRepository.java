package com.kyuestudio.springbootks.dao;

import com.kyuestudio.springbootks.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> { //Entity: Product, Primary Key: Long
}
