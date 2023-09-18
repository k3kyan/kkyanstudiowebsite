package com.kyuestudio.springbootks.entity;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

//not sure which java library i should import.. ??
import java.math.BigDecimal;
import java.sql.Date;
//import java.util.Date;

@Entity
@Table(name="product")
@Data //automatically generates the getter/setter methods behind the scenes. Reduces boilerplate code.
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "category_id", nullable = false)
    private ProductCategory category;

    @Column(name = "sku")
    private String sku;

    @Column(name = "name")
    private String name;

    @Column(name = "description")
    private String description;

    @Column(name = "unit_price")
    private BigDecimal unitPrice; //not sure what library this goes with

    @Column(name = "image_url")
    private String imageUrl;

    @Column(name = "active")
    private boolean active;

    @Column(name = "units_in_stock")
    private int unitsInStock;

    @Column(name = "order_type_status")
    private String orderTypeStatus; // in stock, preorder, out of stock

    @Column(name = "date_created")
    @CreationTimestamp //Hibernate will automatically manage the timestamps
    private Date dateCreated;

    @Column(name = "last_updated")
    @UpdateTimestamp
    private Date lastUpdated;
}
