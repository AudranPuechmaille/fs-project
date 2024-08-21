package com.example.demo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.JoinColumn;

@Entity
public class User 
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String firstName;
    private String lastName;

    @ManyToOne
    @JoinColumn(name = "user_type_id")
    private UserType userType;

    // Getters and setters
    public Long getId() 
    { 
    	return id; 
    }
    
    public void setId(Long id) 
    { 
    	this.id = id; 
    }
    
    public String getFirstName() 
    { 
    	return firstName; 
    }
    public void setFirstName(String firstName) 
    { 
    	this.firstName = firstName; 
    }
    
    public String getLastName() 
    { 
    	return lastName; 
    }
    
    public void setLastName(String lastName) 
    { 
    	this.lastName = lastName; 
    }
    
    public UserType getUserType() 
    { 
    	return userType; 
    }
    
    public void setUserType(UserType userType) 
    { 
    	this.userType = userType; 
    }
}
