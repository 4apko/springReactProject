package com.example.springReactProject.dao;

import com.example.springReactProject.models.Ip;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

@Component
public class IpDAOImpl implements IpDAO {
    @Override
    public Ip executeRequest() {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject("https://api.ipify.org?format=json", Ip.class);
    }
}
