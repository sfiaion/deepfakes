package com.example.springboot.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.example.springboot.entity.Dectection;

/**
 * @author oy
 */
public interface IDectectionService extends IService<Dectection> {

    void startDetectionForImage(Integer fileId, Integer pid);

    void startDetectionForVideo(Integer fileId, Integer pid);

    void startDetectionForAudioSingle(Integer fileId, Integer pid);

    void startDetectionForAudioDouble(Integer fileId, Integer pid);
}


