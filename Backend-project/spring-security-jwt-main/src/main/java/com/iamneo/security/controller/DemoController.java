	package com.iamneo.security.controller;
	
	import java.util.List;

    import org.springframework.beans.factory.annotation.Autowired;
    import org.springframework.http.ResponseEntity;
	import org.springframework.web.bind.annotation.GetMapping;
	import org.springframework.web.bind.annotation.RequestMapping;
	import org.springframework.web.bind.annotation.RestController;
	
	import com.iamneo.security.entity.User;
	import com.iamneo.security.service.AuthenticationService;
	
	
	import lombok.RequiredArgsConstructor;
	
	@RestController
	@RequestMapping("/api/v1/demo")
	@RequiredArgsConstructor
	public class DemoController {
		@Autowired
		AuthenticationService aservice;
		@GetMapping("/getvalues")
		public List<User> findDetails() {

			List<User> all = aservice.getAll();
			return all;
		}
//	    @GetMapping
//	    public ResponseEntity<String> sayHello() {
//	        return ResponseEntity.ok("Hello! Siva Prasanna");
//	    }
	}