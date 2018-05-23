package com.example.springReactProject.models;

import lombok.Getter;
import lombok.Setter;

public class Ip {

    @Getter
    @Setter
    private String ip;

    public Ip(String ip) {
        this.ip = ip;
    }
}
