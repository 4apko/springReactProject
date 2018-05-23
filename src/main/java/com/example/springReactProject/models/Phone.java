package com.example.springReactProject.models;

import lombok.Getter;
import lombok.Setter;

public class Phone {
    public Phone(String name, int code) {
        this.name = name;
        this.code = code;
    }

    @Getter
    @Setter
    private String name;
    @Getter @Setter private int code;

}

