package com.iamneo.security.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.iamneo.security.entity.Ret;
import com.iamneo.security.repository.RetRepo;
@Service
public class RetService {
	@Autowired
    RetRepo ret;
	public List<Ret> getAll(){
		System.out.println(">>>>mthod calling");
		return ret.findAll();
	}
	public boolean addRept(Ret rep) {
		// TODO Auto-generated method stub
		return ret.save(rep)!=null?true:false;
	}

}
