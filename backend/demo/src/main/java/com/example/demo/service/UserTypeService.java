package com.example.demo.service;

import com.example.demo.model.UserType;
import com.example.demo.repository.UserTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserTypeService 
{
    @Autowired
    private UserTypeRepository userTypeRepository;

    public List<UserType> getAllUserTypes() 
    {
        return userTypeRepository.findAll();
    }

    public Optional<UserType> getUserTypeById(Long id) 
    {
        return userTypeRepository.findById(id);
    }

    public UserType saveUserType(UserType userType) 
    {
        return userTypeRepository.save(userType);
    }

    public void deleteUserType(Long id) 
    {
        userTypeRepository.deleteById(id);
    }
}
