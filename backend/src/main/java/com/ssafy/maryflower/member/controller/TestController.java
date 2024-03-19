package com.ssafy.maryflower.member.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/test")
public class TestController {

  @GetMapping("")
  public ResponseEntity<?> test(){
    System.out.println("hello");
    return ResponseEntity.ok().build();
  }
}
