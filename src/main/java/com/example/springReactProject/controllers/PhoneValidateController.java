package com.example.springReactProject.controllers;

import com.example.springReactProject.dao.PhoneDAO;
import com.example.springReactProject.models.Phone;
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
public class PhoneValidateController {
    @Autowired
    PhoneDAO phoneDAO;

    @RequestMapping(value = "/validate", method = RequestMethod.GET, consumes = MediaType.TEXT_HTML_VALUE)
    public ResponseEntity<Phone> methodAdd(@RequestParam(value="phoneNumber", defaultValue="") String searchingParameter) throws JsonProcessingException {
        return new ResponseEntity<>(phoneDAO.executeRequest(searchingParameter), HttpStatus.OK);
    }
}

