package com.example.springReactProject.controllers;

import com.example.springReactProject.configurations.React;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.script.ScriptException;
import java.io.IOException;

@Controller
public class MainController {
    private final React react;

    @Autowired
    public MainController(React react) {
        this.react = react;
    }

    @RequestMapping(value = "/", produces = MediaType.TEXT_HTML_VALUE)
    public String mainPage(Model model) throws IOException, ScriptException {

        String renderedHTML = react.renderEntryPoint();

        model.addAttribute("content", renderedHTML);

        return "index";
    }
}
