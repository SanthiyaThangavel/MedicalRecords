package com.iamneo.security.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.iamneo.security.entity.Ret;
import com.iamneo.security.service.AuthenticationService;
import com.iamneo.security.service.RetService;

import lombok.RequiredArgsConstructor;
@RestController
@RequestMapping("/api/v1/auth")
@CrossOrigin
@RequiredArgsConstructor
public class RetController {
	@Autowired
	RetService rets;
	@GetMapping("/getrep")
	public List<Ret> findDetails(){
		List<Ret> all = rets.getAll();
		return all;
	}

	@PostMapping("/addrep")
	public boolean addRept(@RequestBody Ret rep) {
		return rets.addRept(rep);
	}
}
