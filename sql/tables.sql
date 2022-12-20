CREATE TABLE Aircraft_type (
  ID int AUTO_INCREMENT,
  name varchar(15),
  platinum_seats int,
  Economy_seats int,
  Bussiness_seats int,
  platinum_seats_per_row int,
  economy_seats_per_row int,
  business_seats_per_row int,
  PRIMARY KEY (ID)
);



CREATE TABLE Aircraft (
  ID int AUTO_INCREMENT,
  type_ID int,
  name varchar(10),
  aircraft_state enum("on_ground","in_air"),
  PRIMARY KEY (ID),
  FOREIGN KEY (type_ID) REFERENCES Aircraft_type(ID)
);

CREATE TABLE location (
  location_id int AUTO_INCREMENT,
  parent_id int,
  name varchar(15),
  PRIMARY KEY (location_id),
  FOREIGN KEY (parent_id) REFERENCES location (location_id)
);

CREATE TABLE airport (
  code char(3),
  name varchar(100),
  location_id int,
  PRIMARY KEY (code),
  FOREIGN KEY (location_id) REFERENCES location (location_id)
);


CREATE TABLE Paths (
  ID int AUTO_INCREMENT,
  start_destination char(3),
  end_destination char(3),
  length float,
  PRIMARY KEY (ID),
  FOREIGN KEY (start_destination) REFERENCES airport(code),
  FOREIGN KEY (end_destination) REFERENCES airport(code)
);

CREATE TABLE staff (
  ID int AUTO_INCREMENT,
  name varchar(15),
  age int,
  occupation varchar(15),
  country varchar(15),
  tele_no varchar(15),
  PRIMARY KEY (ID)
);

CREATE TABLE member_category (
  mem_cat_id int AUTO_INCREMENT,
  category_type enum("gold","frequent","general"),
  min_booking int,
  discount_precentage float,
  PRIMARY KEY (mem_cat_id)
);

CREATE TABLE customer (
  ID int AUTO_INCREMENT,
  type enum("guest","member"),
  PRIMARY KEY (ID)
);


CREATE TABLE member (
  ID int,
  firstname varchar(10),
  lastname varchar(10),
  password varchar(10),
  mem_cat_id int,
  dob date,
  country varchar(15),
  tele_no varchar(12),
  PRIMARY KEY (ID),
  FOREIGN KEY (mem_cat_id) REFERENCES member_category(mem_cat_id),
  FOREIGN KEY (ID) REFERENCES customer(ID)
);

CREATE TABLE guest (
  ID int,
  name varchar(15),
  dob date,
  country varchar(15),
  tele_no varchar(15),
  PRIMARY KEY (ID),
  FOREIGN KEY (ID) REFERENCES customer(ID)
);


CREATE TABLE flight (
  ID int AUTO_INCREMENT,
  aircraft_ID int,
  path_iD int,
  departure_time datetime,
  arrival_time datetime,
  status enum("Scheduled", "Departed","Arrived","Cancelled","Delayed"),
  cost float,
  PRIMARY KEY (ID),
  FOREIGN KEY (path_iD) REFERENCES Paths(ID),
  FOREIGN KEY (aircraft_ID) REFERENCES Aircraft(ID)
);

CREATE TABLE flight_history (
  flight_ID int,
  Departure_time datetime,
  Arrival_time datetime,
  PRIMARY KEY (flight_ID),
  FOREIGN KEY (flight_ID) REFERENCES  flight(ID)
);



CREATE TABLE flying_staff (
  staff_ID int,
  flight_ID int,
  PRIMARY KEY (staff_ID, flight_ID),
  FOREIGN KEY (staff_ID) REFERENCES staff(ID),
  FOREIGN KEY (flight_ID) REFERENCES flight(ID) 
);

CREATE TABLE delayed_flights (
  flight_ID INT,
  Reason varchar(500),
  new_arrival datetime,
  new_departure datetime,
  PRIMARY KEY (flight_ID),
  FOREIGN KEY (flight_ID) REFERENCES flight(ID)
);

CREATE TABLE booking (
  ID int AUTO_INCREMENT,
  booked_ID int,
  flight_ID int,
  booked_time datetime,
  status enum("Booked","Completed","Cancelled"),
  PRIMARY KEY (ID),
  FOREIGN KEY (flight_ID) REFERENCES flight(ID)
);

CREATE TABLE Cancelled_Booking (
  Booking_ID int,
  Reason varchar(100),
  time datetime
);


CREATE TABLE Passenger (
  ID int,
  booking_ID int,
  seat_no int,
  flied boolean,
  PRIMARY KEY (ID,booking_ID),
  FOREIGN KEY (ID) REFERENCES customer(ID),
  FOREIGN KEY (ID) REFERENCES booking(ID)
);


CREATE TABLE Transaction (
  booking_ID int,
  time datetime,
  total float,
  payment_method varchar(8),
  PRIMARY KEY (booking_ID),
  FOREIGN KEY (booking_ID) REFERENCES booking(ID)
);


