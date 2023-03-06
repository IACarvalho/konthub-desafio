package com.konthub.backend.service;

import com.konthub.backend.model.GithubRepoModel;
import com.konthub.backend.model.GithubUserModel;
import jakarta.validation.constraints.NotNull;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.client.RestTemplate;

@Validated
@Service
public class GithubService {
    private final String GITHUB_API_URL = "https://api.github.com/users/";
    private final RestTemplate restTemplate;

    public GithubService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public GithubUserModel findUser( @NotNull String username) {
        return restTemplate.getForObject(GITHUB_API_URL+username, GithubUserModel.class);
    }

    public GithubRepoModel[] findRepositories(@PathVariable @NotNull String username) {
        return restTemplate.getForObject(GITHUB_API_URL+username+"/repos", GithubRepoModel[].class);
    }
}
