package com.iamneo.security.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.iamneo.security.entity.Appoint;
import com.iamneo.security.repository.AptRepo;
@Service
public class AptService {
	@Autowired
    AptRepo apt;
	
	public List<Appoint> getAll(){
		System.out.println(">>>>mthod calling");
		return apt.findAll();
	}
	public boolean addApt(Appoint app)
	{
	    return apt.save(app)!=null?true:false;
	}
}
