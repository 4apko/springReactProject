package com.example.springReactProject.dao;

import com.example.springReactProject.constants.Regex;
import com.example.springReactProject.constants.Statuses;
import com.example.springReactProject.models.Answer;
import org.springframework.stereotype.Component;

@Component
public class AnswerDAOImpl implements AnswerDAO {
    @Override
    public Answer executeRequest(String phone) {
        return phone.matches(Regex.PHONE_PATTERN) ? new Answer(Statuses.STATUS_OK, 1) : new Answer(Statuses.STATUS_ERROR, 0);
    }
}
