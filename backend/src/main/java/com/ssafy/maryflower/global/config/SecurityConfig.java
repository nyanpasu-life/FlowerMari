package com.ssafy.maryflower.global.config;

import com.ssafy.maryflower.global.service.PrincipalOauthUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.CsrfConfigurer;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity //시큐리티 활성화 -> 기본 스프링 필터 체인에 등록
public class SecurityConfig  {

  @Autowired
  private PrincipalOauthUserService principalOauthUserService;

  @Bean
  public BCryptPasswordEncoder bCryptPasswordEncoder() {
    return new BCryptPasswordEncoder();
  }

  @Bean
  public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    http
        .csrf(CsrfConfigurer::disable)

        .authorizeHttpRequests(request -> request
            .requestMatchers("/user/**").permitAll()
            .requestMatchers("/manager/**").hasRole("MANAGER")
            .requestMatchers("/admin/**").hasRole("ADMIN")
            .anyRequest().authenticated()
        )

//        .and()
//        .formLogin()
//        .loginPage("/loginForm") //미인증자일경우 해당 uri를 호출
//        .loginProcessingUrl("/login") //login 주소가 호출되면 시큐리티가 낚아 채서(post로 오는것) 대신 로그인 진행 -> 컨트롤러를 안만들어도 된다.
//        .defaultSuccessUrl("/")

        .oauth2Login(oauth2 -> oauth2
            .loginPage("/login")
            .defaultSuccessUrl("/")
            .userInfoEndpoint(endpoint -> endpoint.userService(principalOauthUserService))
        );

//        .and()
//        .oauth2Login()
//        .loginPage("/loginForm")
//        .defaultSuccessUrl("/")
//        .userInfoEndpoint()
//        .userService(principalOauthUserService);//구글 로그인이 완료된(구글회원) 뒤의 후처리가 필요함 . Tip.코드x, (엑세스 토큰+사용자 프로필 정보를 받아옴)



    return http.build();
  }
}
