package com.ssafy.maryflower.bouquet.data.entity;

import com.ssafy.maryflower.member.data.entity.Member;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.springframework.lang.NonNull;

@Entity
@Getter
@Setter
public class MemberBouquet {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name= "member_id")
    @NonNull
    private Member member;

    @ManyToOne
    @JoinColumn(name= "bouquet_id")
    @NonNull
    private Bouquet bouquet;


}
