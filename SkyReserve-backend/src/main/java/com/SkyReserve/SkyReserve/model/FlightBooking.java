package com.SkyReserve.SkyReserve.model;

import jakarta.persistence.*;
import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
public class FlightBooking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JsonProperty("User_email")
    @Column(name = "user_email")
    private String userEmail;

    @JsonProperty("From_location")
    @Column(name = "from_location")
    private String fromLocation;

    @JsonProperty("To_location")
    @Column(name = "to_location")
    private String toLocation;

    @JsonProperty("Departing_date")
    @Column(name = "departing_date")
    private LocalDate departingDate;

    @JsonProperty("Returning_date")
    @Column(name = "returning_date")
    private LocalDate returningDate;

    @JsonProperty("Passengers")
    @Column(name = "passengers")
    private Integer passengers;

    @JsonProperty("Flight_class")
    @Column(name = "flight_class")
    private String flightClass;

    @JsonProperty("Trip_type")
    @Column(name = "trip_type")
    private String tripType;

    // Getters and setters


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    public String getFromLocation() {
        return fromLocation;
    }

    public void setFromLocation(String fromLocation) {
        this.fromLocation = fromLocation;
    }

    public String getToLocation() {
        return toLocation;
    }

    public void setToLocation(String toLocation) {
        this.toLocation = toLocation;
    }

    public LocalDate getDepartingDate() {
        return departingDate;
    }

    public void setDepartingDate(LocalDate departingDate) {
        this.departingDate = departingDate;
    }

    public LocalDate getReturningDate() {
        return returningDate;
    }

    public void setReturningDate(LocalDate returningDate) {
        this.returningDate = returningDate;
    }

    public Integer getPassengers() {
        return passengers;
    }

    public void setPassengers(Integer passengers) {
        this.passengers = passengers;
    }

    public String getFlightClass() {
        return flightClass;
    }

    public void setFlightClass(String flightClass) {
        this.flightClass = flightClass;
    }

    public String getTripType() {
        return tripType;
    }

    public void setTripType(String tripType) {
        this.tripType = tripType;
    }
}
