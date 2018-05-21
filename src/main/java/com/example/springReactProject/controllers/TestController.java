package com.example.springReactProject.controllers;

import com.example.springReactProject.dao.AnswerDAO;
import com.example.springReactProject.models.Answer;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {
    @Autowired
    AnswerDAO answerDAO;

    @RequestMapping(value = "/testep", method = RequestMethod.GET, consumes = MediaType.TEXT_HTML_VALUE)
    public ResponseEntity<Answer> methodAdd(@RequestParam(value="phoneNumber", defaultValue="") String searchingParameter) throws JsonProcessingException {
        return new ResponseEntity<>(answerDAO.executeRequest(searchingParameter), HttpStatus.OK);
    }
}

