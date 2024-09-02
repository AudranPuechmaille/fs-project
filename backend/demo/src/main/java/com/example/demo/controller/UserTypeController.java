package com.example.demo.controller;

import com.example.demo.model.UserType;
import com.example.demo.service.UserTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/user-types")
public class UserTypeController {
    @Autowired
    private UserTypeService userTypeService;

    @GetMapping
    public List<UserType> getAllUserTypes() {
        return userTypeService.getAllUserTypes();
    }

    @GetMapping("/{id}")
    public UserType getUserTypeById(@PathVariable Long id) {
        return userTypeService.getUserTypeById(id);
    }

    @PostMapping
    public UserType createUserType(@RequestBody UserType userType) {
        return userTypeService.createUserType(userType);
    }

    @PutMapping("/{id}")
    public UserType updateUserType(@PathVariable Long id, @RequestBody UserType userType) {
        userType.setId(id);
        return userTypeService.updateUserType(userType);
    }

    @DeleteMapping("/{id}")
    public void deleteUserType(@PathVariable Long id) {
        userTypeService.deleteUserType(id);
    }
}