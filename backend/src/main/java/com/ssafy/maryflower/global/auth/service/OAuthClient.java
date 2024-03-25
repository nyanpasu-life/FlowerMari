package com.ssafy.maryflower.global.auth.service;

import com.ssafy.maryflower.global.auth.dto.KakaoOAuthAccessTokenResponse;
import com.ssafy.maryflower.global.auth.dto.KakaoOAuthMemberInfoResponse;

public interface OAuthClient {
    KakaoOAuthAccessTokenResponse getAccessToken(String code);
    KakaoOAuthMemberInfoResponse getMemberInfo(String accessToken);
}
