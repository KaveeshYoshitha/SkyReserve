package com.SkyReserve.SkyReserve.repository;
import com.SkyReserve.SkyReserve.model.FlightBooking;
import org.springframework.data.jpa.repository.JpaRepository;



public interface FlightBookingRepository extends JpaRepository<FlightBooking, Long> {
}
