package com.ssafy.maryflower.global.auth.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
@AllArgsConstructor
public class LoginResponseDto {

    private String kakaoId;
    private String nickname;
    private String profileImage;
    private JwtToken jwtToken;

}
