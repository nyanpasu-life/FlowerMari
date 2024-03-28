package com.ssafy.maryflower.test;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
@RequestMapping("/junit/test")
@RequiredArgsConstructor
@Slf4j
public class JUnitTestController {

    @GetMapping("")
    public ResponseEntity<String> test1(){
        return ResponseEntity.ok("success");
    }

}
