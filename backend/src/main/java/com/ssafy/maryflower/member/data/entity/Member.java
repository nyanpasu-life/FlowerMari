package com.ssafy.maryflower.member.data.entity;

import com.ssafy.maryflower.global.auth.UserRole;
import jakarta.persistence.*;
import lombok.*;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
public class Member { // Base Entity extends 필요

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "user_id")
  private Long id;

  private String kakaoId;
  private String password;
  private String nickname;
  private String profileImage;

  @Enumerated(EnumType.STRING)
  private UserRole role; //ADMIN, MANAGER, USER

  @Builder

  public Member(Long id, String kakaoId, String password, String profileImage, UserRole role) {
    this.id = id;
    this.kakaoId = kakaoId;
    this.password = password;
    this.profileImage = profileImage;
    this.role = role;
  }
}
