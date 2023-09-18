package com.kyuestudio.springbootks.dao;

import com.kyuestudio.springbootks.entity.ProductCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "productCategory", path = "product-category")  //name of JSON entry, path // reference to the /-roduct-category
public interface ProductCategoryRepository extends JpaRepository<ProductCategory, Long> {
}
