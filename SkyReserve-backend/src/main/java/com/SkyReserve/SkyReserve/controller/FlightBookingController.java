package com.SkyReserve.SkyReserve.controller;

import com.SkyReserve.SkyReserve.model.FlightBooking;
import com.SkyReserve.SkyReserve.repository.FlightBookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class FlightBookingController {

    @Autowired
    private FlightBookingRepository flightBookingRepository;

    @PostMapping("/bookFlight")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<FlightBooking> bookFlight(@RequestBody FlightBooking flightBooking) {
        try {
            FlightBooking savedBooking = flightBookingRepository.save(flightBooking);
            return ResponseEntity.ok(savedBooking);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("/bookFlight")
    public ResponseEntity<List<FlightBooking>> getAllBookings() {
        try {
            List<FlightBooking> bookings = flightBookingRepository.findAll();
            return ResponseEntity.ok(bookings);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("/bookFlight/{id}")
    public ResponseEntity<FlightBooking> getBookingById(@PathVariable Long id) {
        try {
            Optional<FlightBooking> booking = flightBookingRepository.findById(id);
            if (booking.isPresent()) {
                return ResponseEntity.ok(booking.get());
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
            }
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PutMapping("/bookFlight/{id}")
    public ResponseEntity<FlightBooking> updateBooking(@PathVariable Long id, @RequestBody FlightBooking updatedBooking) {
        try {
            // Check if the booking exists
            Optional<FlightBooking> existingBookingOpt = flightBookingRepository.findById(id);
            if (existingBookingOpt.isPresent()) {
                FlightBooking existingBooking = existingBookingOpt.get();

                // Update the existing booking with new values
                existingBooking.setUserEmail(updatedBooking.getUserEmail());
                existingBooking.setFromLocation(updatedBooking.getFromLocation());
                existingBooking.setToLocation(updatedBooking.getToLocation());
                existingBooking.setDepartingDate(updatedBooking.getDepartingDate());
                existingBooking.setReturningDate(updatedBooking.getReturningDate());
                existingBooking.setPassengers(updatedBooking.getPassengers());
                existingBooking.setFlightClass(updatedBooking.getFlightClass());
                existingBooking.setTripType(updatedBooking.getTripType());

                // Save the updated booking
                FlightBooking savedBooking = flightBookingRepository.save(existingBooking);
                return ResponseEntity.ok(savedBooking);
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
            }
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }


    @DeleteMapping("/bookFlight/{id}")
    public ResponseEntity<String> deleteBooking(@PathVariable Long id) {
        Optional<FlightBooking> booking = flightBookingRepository.findById(id);

        if (booking.isPresent()) {
            flightBookingRepository.deleteById(id);
            return ResponseEntity.ok("Booking with ID " + id + " has been deleted.");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Booking with ID " + id + " not found.");
        }
    }

}