package com.ssafy.maryflower.global.auth.controller;

import com.ssafy.maryflower.global.auth.data.PrincipalDetails;
import com.ssafy.maryflower.member.data.entity.Member;
import com.ssafy.maryflower.member.data.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.time.LocalDateTime;

@Controller
@RequiredArgsConstructor
public class indexController {

  private final MemberRepository memberRepository;
  private final BCryptPasswordEncoder passwordEncoder;

  @ResponseBody
  @GetMapping("/test/oauth/login")
  public String testOAuthLogin(
      Authentication authentication,
      @AuthenticationPrincipal OAuth2User oauth
  ) { //세션 정보 받아오기 (DI 의존성 주입)

    //방법 1
    OAuth2User oAuth2User = (OAuth2User) authentication.getPrincipal();
    System.out.println("authentication: " + oAuth2User.getAttributes());

    //방법 2
    System.out.println("OAuth2User:" + oauth.getAttributes());

    return "OAuth 세션 정보 확인";
  }


  @GetMapping("/")
  public String index() {
    return "index";
  }

  @ResponseBody
  @GetMapping("/user")
  public String user(@AuthenticationPrincipal PrincipalDetails principalDetails) {
    System.out.println("GetMapping(/user) ==========================");
    System.out.println("principalDetails: " + principalDetails );

    return "user";
  }

  @ResponseBody
  @GetMapping("/admin")
  public String admin(){
    return "admin";
  }

  @ResponseBody
  @GetMapping("/manager")
  public String manager(){
    return "manager";
  }

  //스프링 시큐리티가 낚아 챈다(post로 오는것!!)!! -> config 를 통해 해결
  @ResponseBody
  @GetMapping("/login")
  public String login(){
    return "login";
  }

  @GetMapping("/loginForm")
  public String loginForm(){
    return "loginForm";
  }

  @GetMapping("/joinForm")
  public String joinForm(){
    return "joinForm";
  }

}
