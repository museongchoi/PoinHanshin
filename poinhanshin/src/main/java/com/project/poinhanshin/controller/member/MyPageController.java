package com.project.poinhanshin.controller.member;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MyPageController {
    @GetMapping
    public String myPage() {
        return "members/myPage";
    }
}
