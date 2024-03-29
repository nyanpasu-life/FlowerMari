package com.ssafy.maryflower.bouquet.controller;

import com.ssafy.maryflower.bouquet.data.dto.request.DeleteRequestDto;
import com.ssafy.maryflower.bouquet.data.dto.request.DownloadRequestDto;
import com.ssafy.maryflower.bouquet.data.dto.request.UserDataHolder;
import com.ssafy.maryflower.bouquet.service.DownloadService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/bouquet")
@RequiredArgsConstructor
public class DownloadController {

  private final DownloadService downloadService;
  // 부케 다운로드 요청
  @PostMapping("/download")
  public ResponseEntity<Void> downloadBouquet(@RequestBody DownloadRequestDto req) {

    downloadService.downloadBouquetImage(req);
    // 200 응답 반환
    return ResponseEntity.ok().build();
  }

  // 부케 삭제 요청
  @DeleteMapping("/delete")
  public ResponseEntity<String> deleteBouquet(@RequestBody DeleteRequestDto req) {
    // 프로필 사진 등록
    downloadService.deleteBouquet(req);
    return ResponseEntity.ok("success");
  }

}
