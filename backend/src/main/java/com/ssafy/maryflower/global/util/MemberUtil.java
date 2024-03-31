package com.ssafy.maryflower.global.util;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;

public class MemberUtil {
    public static String getKakaoId(){
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        System.out.println(principal);
        UserDetails userDetails = (UserDetails) principal;
        return userDetails.getUsername();
    }
}
