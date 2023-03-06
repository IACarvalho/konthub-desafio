package com.konthub.backend.model;

import jakarta.persistence.Entity;
import lombok.Data;

import java.util.Date;

@Data
@Entity
public class GithubRepoModel {
    private Long id;
    private String name;
    private String html_url;
    private Integer stargazers_count;
    private String created_at;
    private String updated_at;
}
