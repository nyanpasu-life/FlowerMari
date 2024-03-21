package com.ssafy.maryflower.global.auth.data;

import java.util.Map;

public interface OAuth2UserInfo {
  String getProviderId();
  String getProvider();
  String getEmail();
  String getName();
}

