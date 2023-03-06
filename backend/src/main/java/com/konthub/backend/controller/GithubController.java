package com.konthub.backend.controller;

import com.konthub.backend.model.GithubRepoModel;
import com.konthub.backend.model.GithubUserModel;
import com.konthub.backend.service.GithubService;
import jakarta.validation.constraints.NotNull;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Validated
@RestController
@RequestMapping("/user")
public class GithubController {

    private final GithubService service;

    public GithubController(GithubService service) {
        this.service = service;
    }

    @GetMapping("/{username}")
    public GithubUserModel findUser(@PathVariable @NotNull String username) {
        return service.findUser(username);
    }

    @GetMapping("/repos/{username}")
    public GithubRepoModel[] findRepositories(@PathVariable @NotNull String username) {
        return service.findRepositories(username);
    }
}
