package com.iamneo.security.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.iamneo.security.entity.Ehr;
import com.iamneo.security.repository.EhrRepo;
@Service
public class EhrService {
	@Autowired
    EhrRepo ehr;
	
	public List<Ehr> getAll(){
		System.out.println(">>>>mthod calling");
		return ehr.findAll();
	}
	public boolean addEmployee(Ehr employee)
	 {
	    return ehr.save(employee)!=null?true:false;
	}

}