package com.konthub.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

import java.util.Date;

@Data
@Entity
public class GithubUserModel {
    private Long id;
    private String login;
    private String avatar_url;
    private String repos_url;
    private String name;
    private String location;
    private String created_at;
}
