package com.iamneo.security.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.iamneo.security.entity.Ehr;
import com.iamneo.security.service.AuthenticationService;
import com.iamneo.security.service.EhrService;

import lombok.RequiredArgsConstructor;

@CrossOrigin(origins="*")
@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class EhrController {
	@Autowired
	EhrService ehservice;
	@GetMapping("/tests")
	public List<Ehr> findDetails() {

		List<Ehr> all = ehservice.getAll();
		return all;
	}

	@PostMapping("/newadd")
	public boolean addEmployee(@RequestBody Ehr employee) {
		return ehservice.addEmployee(employee);
	}
}