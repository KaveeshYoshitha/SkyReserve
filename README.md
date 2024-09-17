![SkyReserve-Home](https://github.com/user-attachments/assets/da8fdb6d-0e61-4ae3-a3cc-ece7c23542ca)
# SkyReserve

This project is a flight booking system designed to provide users with a smooth and efficient experience 
when booking flights. The backend is built using Spring Boot, leveraging its powerful RESTful capabilities 
to manage flight bookings, including booking creation, retrieval, updating, and deletion. The backend 
interacts with a MySQL database to store and manage flight information and user bookings. It supports 
operations such as handling user inputs for flights, validating requests, and sending responses via REST 
APIs. The system is designed to ensure data integrity and provide fast, reliable service with endpoints for 
booking flights and retrieving or updating specific bookings by ID.

# INSTRUCTIONS-->
  # 01.First go to mysql workbench and then execute this code
    CREATE DATABASE SkyReserveDB;
  # 02.Then change the username and password in the application.properties
    GO TO ----> source>main>resources>application.properties
    Change the username and password
    spring.datasource.url=jdbc:mysql://localhost:3306/SkyReserveDB
    spring.datasource.username=root
    spring.datasource.password=root 
# ENDPOINTS -->
  # 01. Create user
    URL -> http://localhost:8080/api/auth/signup
    Method -> POST
    Body -> {
     "firstName": "user",
     "email": "user@gmail.com",
     "password": "1234",
     "phone": "0761234567",
     "language": "sinhala",
     "country": "srilanka"
     }
  # 02. Check user (Login purpose)
    URL -> http://localhost:8080/api/auth/login
    Method -> POST
    Body -> {
    "email": "user123@gmail.com",
    "password": "123"
    }
  # 03. Create Booking
    URL -> http://localhost:8080/api/bookFlight
    Method -> POST
    Body -> {
     "Departing_date": "2024-10-01",
     "Flight_class": "Economy",
     "From_location": "NYC",
     "Passengers": 2,
     "Returning_date": "2024-10-10",
     "To_location": "LAX",
     "Trip_type": "RoundTrip",
     "User_email": "example@example.com"
    }
  # 04.Get all bookings
    URL -> http://localhost:8080/api/bookFlight
    Method -> GET
  # 05.Get Booking by Id 
    URL -> http://localhost:8080/api/bookFlight/{id}
    Method -> GET
  # 06.Update booking by ID 
    URL -> http://localhost:8080/api/bookFlight/{id}
    Method -> PUT
    Body -> {
     "Departing_date": "2024-10-01",
     "Flight_class": "Economy",
     "From_location": "NYC",
     "Passengers": 2,
     "Returning_date": "2024-10-10",
     "To_location": "LAX",
     "Trip_type": "RoundTrip",
     "User_email": "example@example.com"
    }
  # 07. Delete Booking
    URL -> http://localhost:8080/api/bookFlight/{id}
    Method -> DELETE
