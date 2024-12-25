package org.javascanner.service;

import org.javascanner.dto.ClassDetail;
import org.javascanner.util.PackageScanner;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@Service
public class JavaScannerService {
    @Autowired
    private RestTemplate restTemplate;

    public List<ClassDetail> scanAndSendPackage(String path) throws Exception {
        // Scan the package
        List<ClassDetail> classDetails = PackageScanner.scanPackage(path);

        // Send Class detail json to chatgpt bot microservice
//        String chatGptUrl = "";
//        restTemplate.postForObject(chatGptUrl, classDetails, Void.class);

        return classDetails;
    }
}
