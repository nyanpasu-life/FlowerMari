package com.ssafy.maryflower.junitTest;

import jakarta.persistence.PersistenceContext;
import lombok.RequiredArgsConstructor;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
@Transactional
@RequiredArgsConstructor
public class JunitBasicTest {


    @PersistenceContext
    private final PersistenceContext em;



    @Test
    void Test(){
        // given

        // when

        // then
    }
}
