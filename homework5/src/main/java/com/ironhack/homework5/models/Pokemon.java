package com.ironhack.homework5.models;

import com.ironhack.homework5.enums.Types;

import javax.persistence.*;
import java.util.List;

@Embeddable
public class Pokemon {

    private String name;
    @Enumerated(EnumType.STRING)
    private Types types;
    private int ht;
    private int attack;
    private int defence;
    private int specialAttack;
    private int specialDefence;
    private int speed;


    public Pokemon() {
    }

    public Pokemon(String name, Types types, int ht, int attack, int defence,
                   int specialAttack, int specialDefence, int speed) {
        this.name = name;
        this.types = types;
        this.ht = ht;
        this.attack = attack;
        this.defence = defence;
        this.specialAttack = specialAttack;
        this.specialDefence = specialDefence;
        this.speed = speed;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Types getTypes() {
        return types;
    }

    public void setTypes(Types types) {
        this.types = types;
    }

    public int getHt() {
        return ht;
    }

    public void setHt(int ht) {
        this.ht = ht;
    }

    public int getAttack() {
        return attack;
    }

    public void setAttack(int attack) {
        this.attack = attack;
    }

    public int getDefence() {
        return defence;
    }

    public void setDefence(int defence) {
        this.defence = defence;
    }

    public int getSpecialAttack() {
        return specialAttack;
    }

    public void setSpecialAttack(int specialAttack) {
        this.specialAttack = specialAttack;
    }

    public int getSpecialDefence() {
        return specialDefence;
    }

    public void setSpecialDefence(int specialDefence) {
        this.specialDefence = specialDefence;
    }

    public int getSpeed() {
        return speed;
    }

    public void setSpeed(int speed) {
        this.speed = speed;
    }
}
