package com.iamneo.security.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.iamneo.security.entity.Appoint;
import com.iamneo.security.service.AptService;

import lombok.RequiredArgsConstructor;

@CrossOrigin(origins="*")
@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AptController {
	@Autowired
	AptService aptservice;
	@GetMapping("/getapt")
	public List<Appoint> findDetails() {

		List<Appoint> all = aptservice.getAll();
		return all;
	}

	@PostMapping("/addapp")
	public boolean addApt(@RequestBody Appoint app) {
		return aptservice.addApt(app);
	}
}
