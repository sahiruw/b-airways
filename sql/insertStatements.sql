INSERT INTO Aircraft_type (name, platinum_seats, Economy_seats, Bussiness_seats, platinum_seats_per_row, economy_seats_per_row, business_seats_per_row) VALUES ('A320', 12, 144, 48, 3, 6, 4);
INSERT INTO Aircraft_type (name, platinum_seats, Economy_seats, Bussiness_seats, platinum_seats_per_row, economy_seats_per_row, business_seats_per_row) VALUES ('B787', 16, 192, 64, 4, 8, 4);
INSERT INTO Aircraft_type (name, platinum_seats, Economy_seats, Bussiness_seats, platinum_seats_per_row, economy_seats_per_row, business_seats_per_row) VALUES ('A350', 20, 240, 80, 5, 10, 4);
INSERT INTO Aircraft_type (name, platinum_seats, Economy_seats, Bussiness_seats, platinum_seats_per_row, economy_seats_per_row, business_seats_per_row) VALUES ('B747', 24, 288, 96, 6, 12, 4);
INSERT INTO Aircraft_type (name, platinum_seats, Economy_seats, Bussiness_seats, platinum_seats_per_row, economy_seats_per_row, business_seats_per_row) VALUES ('B777', 28, 336, 112, 7, 14, 4);
INSERT INTO Aircraft_type (name, platinum_seats, Economy_seats, Bussiness_seats, platinum_seats_per_row, economy_seats_per_row, business_seats_per_row) VALUES ('A380', 32, 384, 128, 8, 16, 4);

INSERT INTO Aircraft (type_ID, name, aircraft_state) VALUES (1, 'Airbus 1', 'on_ground');
INSERT INTO Aircraft (type_ID, name, aircraft_state) VALUES (2, 'Boeing 1', 'on_ground');
INSERT INTO Aircraft (type_ID, name, aircraft_state) VALUES (3, 'Airbus 2', 'on_ground');
INSERT INTO Aircraft (type_ID, name, aircraft_state) VALUES (4, 'Boeing 2', 'on_ground');
INSERT INTO Aircraft (type_ID, name, aircraft_state) VALUES (5, 'Airbus 3', 'on_ground');
INSERT INTO Aircraft (type_ID, name, aircraft_state) VALUES (6, 'Boeing 3', 'on_ground');

INSERT INTO location (parent_id, name) VALUES (NULL, 'Asia');
INSERT INTO location (parent_id, name) VALUES (1, 'China');
INSERT INTO location (parent_id, name) VALUES (2, 'Beijing');
INSERT INTO location (parent_id, name) VALUES (2, 'Shanghai');
INSERT INTO location (parent_id, name) VALUES (2, 'Guangzhou');
INSERT INTO location (parent_id, name) VALUES (1, 'India');
INSERT INTO location (parent_id, name) VALUES (6, 'Mumbai');
INSERT INTO location (parent_id, name) VALUES (6, 'Delhi');
INSERT INTO location (parent_id, name) VALUES (1, 'Indonesia');
INSERT INTO location (parent_id, name) VALUES (9, 'Jakarta');

INSERT INTO airport (code, name, location_id) VALUES ('PEK', 'Beijing Capital International Airport', 3);
INSERT INTO airport (code, name, location_id) VALUES ('SHA', 'Shanghai Pudong International Airport', 4);
INSERT INTO airport (code, name, location_id) VALUES ('CAN', 'Guangzhou Baiyun International Airport', 5);
INSERT INTO airport (code, name, location_id) VALUES ('BOM', 'Chhatrapati Shivaji Maharaj International Airport', 7);
INSERT INTO airport (code, name, location_id) VALUES ('DEL', 'Indira Gandhi International Airport', 8);
INSERT INTO airport (code, name, location_id) VALUES ('CGK', 'Soekarno-Hatta International Airport', 10);

INSERT INTO Paths (start_destination, end_destination, length) VALUES ('PEK', 'SHA', 1250.0);
INSERT INTO Paths (start_destination, end_destination, length) VALUES ('SHA', 'CAN', 860.0);
INSERT INTO Paths (start_destination, end_destination, length) VALUES ('CAN', 'BOM', 3300.0);
INSERT INTO Paths (start_destination, end_destination, length) VALUES ('BOM', 'DEL', 680.0);
INSERT INTO Paths (start_destination, end_destination, length) VALUES ('DEL', 'CGK', 2900.0);
INSERT INTO Paths (start_destination, end_destination, length) VALUES ('PEK', 'BOM', 3600.0);
INSERT INTO Paths (start_destination, end_destination, length) VALUES ('PEK', 'DEL', 4100.0);
INSERT INTO Paths (start_destination, end_destination, length) VALUES ('PEK', 'CGK', 4500.0);
INSERT INTO Paths (start_destination, end_destination, length) VALUES ('SHA', 'BOM', 3200.0);
INSERT INTO Paths (start_destination, end_destination, length) VALUES ('SHA', 'DEL', 3700.0);
INSERT INTO Paths (start_destination, end_destination, length) VALUES ('SHA', 'CGK', 4100.0);
INSERT INTO Paths (start_destination, end_destination, length) VALUES ('CAN', 'DEL', 3600.0);
INSERT INTO Paths (start_destination, end_destination, length) VALUES ('CAN', 'CGK', 4000.0);
INSERT INTO Paths (start_destination, end_destination, length) VALUES ('BOM', 'CGK', 3700.0);

INSERT INTO staff (name, age, occupation, country, tele_no) VALUES ('John Smith', 32, 'Pilot', 'United States', '123-456-7890');
INSERT INTO staff (name, age, occupation, country, tele_no) VALUES ('Jane Doe', 28, 'Stewardess', 'Canada', '234-567-8901');
INSERT INTO staff (name, age, occupation, country, tele_no) VALUES ('Bob Johnson', 45, 'Mechanic', 'United States', '345-678-9012');
INSERT INTO staff (name, age, occupation, country, tele_no) VALUES ('Alice Williams', 41, 'Stewardess', 'United Kingdom', '456-789-0123');
INSERT INTO staff (name, age, occupation, country, tele_no) VALUES ('Mike Brown', 37, 'Pilot', 'Australia', '567-890-1234');
INSERT INTO staff (name, age, occupation, country, tele_no) VALUES ('David Smith', 35, 'Mechanic', 'United States', '678-901-2345');
INSERT INTO staff (name, age, occupation, country, tele_no) VALUES ('Sarah Johnson', 29, 'Stewardess', 'Canada', '789-012-3456');
INSERT INTO staff (name, age, occupation, country, tele_no) VALUES ('Tom Williams', 42, 'Pilot', 'United Kingdom', '890-123-4567');
INSERT INTO staff (name, age, occupation, country, tele_no) VALUES ('Elizabeth Brown', 39, 'Stewardess', 'Australia', '901-234-5678');
INSERT INTO staff (name, age, occupation, country, tele_no) VALUES ('William Smith', 40, 'Mechanic', 'United States', '012-345-6789');

INSERT INTO member_category (category_type, min_booking, discount_precentage) VALUES ('gold', 10, 0.2);
INSERT INTO member_category (category_type, min_booking, discount_precentage) VALUES ('frequent', 5, 0.15);
INSERT INTO member_category (category_type, min_booking, discount_precentage) VALUES ('general', 0, 0.1);

INSERT INTO customer (type) VALUES
("member"),
("member"),
("member"),
("member"),
("member"),
("member"),
("member"),
("guest"),
("guest"),
("member"),
("member"),
("guest"),
("guest"),
("guest"),
("member");

INSERT INTO member (ID, firstname, lastname, password, mem_cat_id, dob, country, tele_no) VALUES (1, 'Alice', 'Smith', 'password1', 1, '1990-01-01', 'United States', '123-456-7890');
INSERT INTO member (ID, firstname, lastname, password, mem_cat_id, dob, country, tele_no) VALUES (10, 'Bob', 'Johnson', 'password2', 1, '1991-02-01', 'Canada', '234-567-8901');
INSERT INTO member (ID, firstname, lastname, password, mem_cat_id, dob, country, tele_no) VALUES (2, 'Charlie', 'Williams', 'password3', 1, '1992-03-01', 'United Kingdom', '345-678-9012');
INSERT INTO member (ID, firstname, lastname, password, mem_cat_id, dob, country, tele_no) VALUES (3, 'David', 'Jones', 'password4', 1, '1993-04-01', 'Australia', '456-789-0123');
INSERT INTO member (ID, firstname, lastname, password, mem_cat_id, dob, country, tele_no) VALUES (4, 'Emily', 'Brown', 'password5', 1, '1994-05-01', 'United States', '567-890-1234');
INSERT INTO member (ID, firstname, lastname, password, mem_cat_id, dob, country, tele_no) VALUES (11, 'Frank', 'Davis', 'password6', 1, '1995-06-01', 'Canada', '678-901-2345');
INSERT INTO member (ID, firstname, lastname, password, mem_cat_id, dob, country, tele_no) VALUES (5, 'Gary', 'Miller', 'password7', 1, '1996-07-01', 'United Kingdom', '789-012-3456');
INSERT INTO member (ID, firstname, lastname, password, mem_cat_id, dob, country, tele_no) VALUES (15, 'Helen', 'Wilson', 'password8', 1, '1997-08-01', 'Australia', '890-123-4567');
INSERT INTO member (ID, firstname, lastname, password, mem_cat_id, dob, country, tele_no) VALUES (6, 'Ivan', 'Moore', 'password9', 1, '1998-09-01', 'United States', '901-234-5678');
INSERT INTO member (ID, firstname, lastname, password, mem_cat_id, dob, country, tele_no) VALUES (7, 'John', 'Taylor', 'password10', 1, '1999-10-01', 'Canada', '012-345-6789');

INSERT INTO guest (ID, name, dob, country, tele_no) VALUES (8, 'John Smith', '1980-01-01', 'United States', '123-456-7890');
INSERT INTO guest (ID, name, dob, country, tele_no) VALUES (9, 'Jane Doe', '1981-02-01', 'Canada', '234-567-8901');
INSERT INTO guest (ID, name, dob, country, tele_no) VALUES (12, 'Bob Johnson', '1982-03-01', 'United Kingdom', '345-678-9012');
INSERT INTO guest (ID, name, dob, country, tele_no) VALUES (13, 'Alice Williams', '1983-04-01', 'Australia', '456-789-0123');
INSERT INTO guest (ID, name, dob, country, tele_no) VALUES (14, 'Mike Brown', '1984-05-01', 'United States', '567-890-1234');

INSERT INTO flight (aircraft_ID, path_iD, departure_time, arrival_time, status, cost) VALUES (1, 1, '2022-01-01 08:00:00', '2022-01-01 10:00:00', 'Scheduled', 500.0);
INSERT INTO flight (aircraft_ID, path_iD, departure_time, arrival_time, status, cost) VALUES (2, 2, '2022-01-02 09:00:00', '2022-01-02 11:00:00', 'Scheduled', 600.0);
INSERT INTO flight (aircraft_ID, path_iD, departure_time, arrival_time, status, cost) VALUES (3, 3, '2022-01-03 10:00:00', '2022-01-03 12:00:00', 'Scheduled', 700.0);
INSERT INTO flight (aircraft_ID, path_iD, departure_time, arrival_time, status, cost) VALUES (4, 4, '2022-01-04 11:00:00', '2022-01-04 13:00:00', 'Scheduled', 800.0);
INSERT INTO flight (aircraft_ID, path_iD, departure_time, arrival_time, status, cost) VALUES (5, 5, '2022-01-05 12:00:00', '2022-01-05 14:00:00', 'Scheduled', 900.0);
INSERT INTO flight (aircraft_ID, path_iD, departure_time, arrival_time, status, cost) VALUES (6, 6, '2022-01-06 13:00:00', '2022-01-06 15:00:00', 'Scheduled', 1000.0);
INSERT INTO flight (aircraft_ID, path_iD, departure_time, arrival_time, status, cost) VALUES (2, 7, '2022-01-07 14:00:00', '2022-01-07 16:00:00', 'Scheduled', 1100.0);
INSERT INTO flight (aircraft_ID, path_iD, departure_time, arrival_time, status, cost) VALUES (3, 8, '2022-01-08 15:00:00', '2022-01-08 17:00:00', 'Scheduled', 1200.0);
INSERT INTO flight (aircraft_ID, path_iD, departure_time, arrival_time, status, cost) VALUES (1, 9, '2022-01-09 16:00:00', '2022-01-09 18:00:00', 'Scheduled', 1300.0);
INSERT INTO flight (aircraft_ID, path_iD, departure_time, arrival_time, status, cost) VALUES (4, 10, '2022-01-10 17:00:00', '2022-01-10 19:00:00', 'Scheduled', 1400.0);

INSERT INTO flight_history (flight_ID, Departure_time, Arrival_time) VALUES (1, '2022-01-01 08:00:00', '2022-01-01 10:00:00');
INSERT INTO flight_history (flight_ID, Departure_time, Arrival_time) VALUES (2, '2022-01-02 09:00:00', '2022-01-02 11:00:00');
INSERT INTO flight_history (flight_ID, Departure_time, Arrival_time) VALUES (3, '2022-01-03 10:00:00', '2022-01-03 12:00:00');
INSERT INTO flight_history (flight_ID, Departure_time, Arrival_time) VALUES (4, '2022-01-04 11:00:00', '2022-01-04 13:00:00');
INSERT INTO flight_history (flight_ID, Departure_time, Arrival_time) VALUES (5, '2022-01-05 12:00:00', '2022-01-05 14:00:00');

INSERT INTO flying_staff (staff_ID, flight_ID) VALUES (1, 1);
INSERT INTO flying_staff (staff_ID, flight_ID) VALUES (2, 1);
INSERT INTO flying_staff (staff_ID, flight_ID) VALUES (3, 1);
INSERT INTO flying_staff (staff_ID, flight_ID) VALUES (4, 1);
INSERT INTO flying_staff (staff_ID, flight_ID) VALUES (5, 1);

INSERT INTO delayed_flights (flight_ID, Reason, new_arrival, new_departure) VALUES (1, 'Mechanical issue', '2022-01-01 10:30:00', '2022-01-01 08:30:00');
INSERT INTO delayed_flights (flight_ID, Reason, new_arrival, new_departure) VALUES (2, 'Weather conditions', '2022-01-02 11:30:00', '2022-01-02 09:30:00');
INSERT INTO delayed_flights (flight_ID, Reason, new_arrival, new_departure) VALUES (3, 'Air traffic control delay', '2022-01-03 12:30:00', '2022-01-03 10:30:00');
INSERT INTO delayed_flights (flight_ID, Reason, new_arrival, new_departure) VALUES (4, 'Crew availability', '2022-01-04 13:30:00', '2022-01-04 11:30:00');
INSERT INTO delayed_flights (flight_ID, Reason, new_arrival, new_departure) VALUES (5, 'Aircraft maintenance', '2022-01-05 14:30:00', '2022-01-05 15:30:00');

INSERT INTO booking (booked_ID, flight_ID, booked_time, booking_status, seat_type) VALUES (2, 2, '2022-01-02 08:00:00', 'Booked','Platinum');
INSERT INTO booking (booked_ID, flight_ID, booked_time, booking_status, seat_type) VALUES (3, 3, '2022-01-03 09:00:00', 'Booked','Business');
INSERT INTO booking (booked_ID, flight_ID, booked_time, booking_status, seat_type) VALUES (4, 4, '2022-01-04 10:00:00', 'Booked','Economy');
INSERT INTO booking (booked_ID, flight_ID, booked_time, booking_status, seat_type) VALUES (5, 5, '2022-01-05 11:00:00', 'Booked','Platinum');
INSERT INTO booking (booked_ID, flight_ID, booked_time, booking_status, seat_type) VALUES (6, 6, '2022-01-06 12:00:00', 'Booked','Platinum');
INSERT INTO booking (booked_ID, flight_ID, booked_time, booking_status, seat_type) VALUES (7, 7, '2022-01-07 13:00:00', 'Booked','Business');
INSERT INTO booking (booked_ID, flight_ID, booked_time, booking_status, seat_type) VALUES (8, 8, '2022-01-08 14:00:00', 'Booked','Business');
INSERT INTO booking (booked_ID, flight_ID, booked_time, booking_status, seat_type) VALUES (9, 9, '2022-01-09 15:00:00', 'Booked','Economy');
INSERT INTO booking (booked_ID, flight_ID, booked_time, booking_status, seat_type) VALUES (10, 10, '2022-01-10 16:00:00', 'Booked','Economy');

INSERT INTO Cancelled_Booking (Booking_ID, Reason, time) VALUES (1, 'Customer request', '2022-01-01 07:30:00');
INSERT INTO Cancelled_Booking (Booking_ID, Reason, time) VALUES (2, 'Flight cancelled', '2022-01-02 08:30:00');
INSERT INTO Cancelled_Booking (Booking_ID, Reason, time) VALUES (3, 'Customer request', '2022-01-03 09:30:00');
INSERT INTO Cancelled_Booking (Booking_ID, Reason, time) VALUES (4, 'Flight cancelled', '2022-01-04 10:30:00');
INSERT INTO Cancelled_Booking (Booking_ID, Reason, time) VALUES (5, 'Customer request', '2022-01-05 11:30:00');

INSERT INTO Passenger (ID, booking_ID, seat_no, flied) VALUES (1, 1, 1, 1);
INSERT INTO Passenger (ID, booking_ID, seat_no, flied) VALUES (2, 1, 2, 1);
INSERT INTO Passenger (ID, booking_ID, seat_no, flied) VALUES (3, 2, 3, 1);
INSERT INTO Passenger (ID, booking_ID, seat_no, flied) VALUES (4, 2, 4, 1);
INSERT INTO Passenger (ID, booking_ID, seat_no, flied) VALUES (5, 3, 5, 1);

INSERT INTO Transaction (booking_ID, time, total, payment_method) VALUES (1, '2022-01-01 07:00:00', 100.0, 'credit');
INSERT INTO Transaction (booking_ID, time, total, payment_method) VALUES (2, '2022-01-02 08:00:00', 200.0, 'debit');
INSERT INTO Transaction (booking_ID, time, total, payment_method) VALUES (3, '2022-01-03 09:00:00', 300.0, 'credit');
INSERT INTO Transaction (booking_ID, time, total, payment_method) VALUES (4, '2022-01-04 10:00:00', 400.0, 'debit');
INSERT INTO Transaction (booking_ID, time, total, payment_method) VALUES (5, '2022-01-05 11:00:00', 500.0, 'credit');
