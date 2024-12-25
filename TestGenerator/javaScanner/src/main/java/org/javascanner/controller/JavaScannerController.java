package org.javascanner.controller;

import org.javascanner.dto.ClassDetail;
import org.javascanner.service.JavaScannerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/scanProject")
public class JavaScannerController {
    @Autowired
    private JavaScannerService javaScannerService;

    @GetMapping
    public List<ClassDetail> scanAndSendJavaFile(@RequestParam String path) throws Exception {
        return javaScannerService.scanAndSendPackage(path);
    }
}
