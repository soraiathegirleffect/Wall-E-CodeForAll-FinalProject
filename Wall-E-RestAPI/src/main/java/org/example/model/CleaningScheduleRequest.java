package org.example.model;

import java.time.Month;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

import org.springframework.lang.NonNull;

public class CleaningScheduleRequest {

    private String clientName;
    private String spaceContact; 
    private String cleaningRange;
    private String cleaningMonth;

    // Constructors, getters, and setters

    public CleaningScheduleRequest() {
    }

    @JsonCreator
    public CleaningScheduleRequest(@JsonProperty("clientName") String clientName, @JsonProperty("spaceContact") String spaceContact, @JsonProperty("cleaningRange") String cleaningRange, @JsonProperty("cleaningMonth") String cleaningMonth) {
        this.clientName = clientName;
        this.spaceContact = spaceContact;
        this.cleaningRange = cleaningRange;
        this.cleaningMonth = cleaningMonth;
    }

    public String getClientName() {
        return clientName;
    }

    public void setClientName(String clientName) {
        this.clientName = clientName;
    }

    public String getSpaceContact() {
        return spaceContact;
    }

    public void setSpaceContact(String spaceContact) {
        this.spaceContact = spaceContact;
    }

    public String getCleaningRange() {
        return cleaningRange;
    }

    public void setCleaningRange(String cleaningRange) {
        this.cleaningRange = cleaningRange;
    }

    public String getCleaningMonth() {
        return cleaningMonth;
    }

    public void setCleaningMonth(String cleaningMonth) {
        this.cleaningMonth = cleaningMonth;
    }
}



