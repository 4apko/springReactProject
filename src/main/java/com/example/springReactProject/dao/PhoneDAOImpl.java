package com.example.springReactProject.dao;

import com.example.springReactProject.constants.Regex;
import com.example.springReactProject.constants.Statuses;
import com.example.springReactProject.models.Phone;
import org.springframework.stereotype.Component;

@Component
public class PhoneDAOImpl implements PhoneDAO {
    @Override
    public Phone executeRequest(String phone) {
        return phone.matches(Regex.PHONE_PATTERN) ? new Phone(Statuses.STATUS_OK, 1) : new Phone(Statuses.STATUS_ERROR, 0);
    }
}
