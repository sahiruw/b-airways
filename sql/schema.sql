

/* 
  _        _     _           
 | |      | |   | |          
 | |_ __ _| |__ | | ___  ___ 
 | __/ _` | '_ \| |/ _ \/ __|
 | || (_| | |_) | |  __/\__ \
  \__\__,_|_.__/|_|\___||___/
 */
----------------------------------  TABLE SCHEMA --------------------------------------


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
  category_type enum("gold","frequent"),
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
  email varchar(30),
  password varchar(150),
  mem_cat_id int,
  dob date,
  country varchar(15),
  tele_no varchar(12),
  passport_number varchar(20);
  PRIMARY KEY (ID),
  FOREIGN KEY (mem_cat_id) REFERENCES member_category(mem_cat_id),
  FOREIGN KEY (ID) REFERENCES customer(ID)
);

CREATE TABLE guest (
  ID int,
  firstname varchar(15),
  lastname varchar(15),
  email varchar(25),
  dob date,
  country varchar(15),
  tele_no varchar(15),
  passport_number varchar(20);
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
  platinum_cost float,
  business_cost float,
  economy_cost float,
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
  booking_status enum("Booked","Completed","Cancelled", "TimedOut"),
  seat_type enum("Platinum","Bussiness","Economy"),
  seat_count int;
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
  FOREIGN KEY (booking_ID) REFERENCES booking(ID)
);


CREATE TABLE Transaction (
  booking_ID int,
  time datetime,
  total float,
  payment_method varchar(8),
  PRIMARY KEY (booking_ID),
  FOREIGN KEY (booking_ID) REFERENCES booking(ID)
);

CREATE TABLE admin(
  ID int AUTO_INCREMENT,
  email varchar(255),
  password varchar(12),
  Name varchar(100),
  ContactNo varchar(20),
  Country varchar(20)
);






/* 
   __                  _   _                 
  / _|                | | (_)                
 | |_ _   _ _ __   ___| |_ _  ___  _ __  ___ 
 |  _| | | | '_ \ / __| __| |/ _ \| '_ \/ __|
 | | | |_| | | | | (__| |_| | (_) | | | \__ \
 |_|  \__,_|_| |_|\___|\__|_|\___/|_| |_|___/                              
 */

----------------------------------  Functions SCHEMA --------------------------------------


-- function to insert members
DELIMITER $$
CREATE FUNCTION insert_member(p_firstname VARCHAR(10), p_lastname VARCHAR(10), p_email VARCHAR(30), p_password VARCHAR(150), p_mem_cat_id INT, p_dob DATE, p_country VARCHAR(15), p_tele_no VARCHAR(12), p_passport VARCHAR(10))
RETURNS INT
DETERMINISTIC
BEGIN
  INSERT INTO customer (type) VALUES ("member");
  INSERT INTO member (ID, firstname, lastname, email, password, mem_cat_id, dob, country, tele_no, passport_number)
  VALUES (LAST_INSERT_ID(), p_firstname, p_lastname, p_email, p_password, p_mem_cat_id, p_dob, p_country, p_tele_no, p_passport);
  RETURN LAST_INSERT_ID();
END$$
DELIMITER ;


-- function to insert guest
DELIMITER $$
CREATE FUNCTION insert_guest(p_firstname VARCHAR(10), p_lastname VARCHAR(10), p_email VARCHAR(30), p_dob DATE, p_country VARCHAR(15), p_tele_no VARCHAR(12), p_passport VARCHAR(10))
RETURNS INT
DETERMINISTIC
BEGIN
  INSERT INTO customer (type) VALUES ("guest");
  INSERT INTO guest (ID, firstname, lastname, email, dob, country, tele_no, passport_number)
  VALUES (LAST_INSERT_ID(), p_firstname, p_lastname, p_email, p_dob, p_country, p_tele_no, p_passport);
  RETURN LAST_INSERT_ID();
END$$
DELIMITER ;

-- function to get difference between booked and total platinum seats
DELIMITER $$
CREATE FUNCTION num_remaining_platinum_seats2(flight_ID int)
RETURNS INT
DETERMINISTIC
BEGIN
 
 DECLARE total_platinum_seats INT;
 DECLARE booked_seats INT;
 
 SELECT platinum_seats into total_platinum_seats
 FROM flights_and_aircrafts WHERE ID = flight_ID;
 
 SELECT COUNT(seat_type) into booked_seats
 FROM flight_details4
 WHERE ID = flight_ID AND seat_type = 'Platinum';
	

 RETURN total_platinum_seats - booked_seats;
  
END$$
DELIMITER 

-- function to get difference between booked and total bussiness seats
DELIMITER $$
CREATE FUNCTION num_remaining_bussiness_seats2(flight_ID int)
RETURNS INT
DETERMINISTIC
BEGIN
 
 DECLARE total_bussiness_seats INT;
 DECLARE booked_seats INT;
 
 SELECT Bussiness_seats into total_bussiness_seats
 FROM flights_and_aircrafts WHERE ID = flight_ID;
 
 SELECT COUNT(seat_type) into booked_seats
 FROM flight_details4
 WHERE ID = flight_ID AND seat_type = 'Bussiness';
	

 RETURN total_bussiness_seats - booked_seats;
  
END$$
DELIMITER 

-- function to get difference between booked and total economy seats
DELIMITER $$
CREATE FUNCTION num_remaining_economy_seats2(flight_ID int)
RETURNS INT
DETERMINISTIC
BEGIN
 
 DECLARE total_economy_seats INT;
 DECLARE booked_seats INT;
 
 SELECT Economy_seats into total_economy_seats
 FROM flights_and_aircrafts WHERE ID = flight_ID;
 
 SELECT COUNT(seat_type) into booked_seats
 FROM flight_details4
 WHERE ID = flight_ID AND seat_type = 'Economy';
	

 RETURN total_economy_seats - booked_seats;
  
END$$
DELIMITER 



DELIMITER $$
CREATE FUNCTION SetFlyingStaff(flight_ID int, staff_member_name varchar(15))
RETURNS INT
DETERMINISTIC
BEGIN
	
    DECLARE staff_member_id INT;
    SELECT ID into staff_member_id
    from staff
    where name = staff_member_name;
    
    INSERT into flying_staff(staff_ID,flight_ID) values (staff_member_id,flight_ID);
    
    return 1;
	
  
END$$
DELIMITER 


DELIMITER $$
CREATE FUNCTION Get_Most_Recent_Flight_ID()
RETURNS INT
DETERMINISTIC
BEGIN
	
    DECLARE most_recent_flight_ID INT;
    select ID into most_recent_flight_ID
    from flight order by departure_time asc limit 1;
    
    return most_recent_flight_ID;
	
  
END$$
DELIMITER 

-- Function to get the number of seats remaining in a flight
CREATE FUNCTION `num_remaining_seats9`(flight_ID int,seat_t varchar(15)) RETURNS int
DETERMINISTIC
BEGIN
  DECLARE num_remaining_seats int;
  IF seat_t = "Bussiness" THEN
    RETURN num_remaining_bussiness_seats2(flight_ID);
    
  ELSEIF seat_t = "Platinum" THEN
    RETURN num_remaining_platinum_seats2(flight_ID);
    
  ELSE
    RETURN num_remaining_economy_seats2(flight_ID);
   
  END IF;
   
  RETURN NULL;


END

-- Flight Scheduling

CREATE FUNCTION `ScheduleFlight2`(aircraft_ID int,start_dest varchar(10),end_dest varchar(10),dep_time varchar(25),arr_time varchar(25),amount float) RETURNS int
DETERMINISTIC
BEGIN
	DECLARE path_ID INT;
    
    SELECT ID into path_ID
    from paths
    where start_destination = start_dest and end_destination = end_dest;
    
    insert into flight(aircraft_ID,path_ID,departure_time,arrival_time,status,cost)
    values (aircraft_ID,path_ID,dep_time,arr_time,"Scheduled",amount);
    
    RETURN LAST_INSERT_ID();
	
  
END




/*
        _                   
       (_)                  
 __   ___  _____      _____ 
 \ \ / / |/ _ \ \ /\ / / __|
  \ V /| |  __/\ V  V /\__ \
   \_/ |_|\___| \_/\_/ |___/ 
*/
-----------------------------------VIEWS SCHEMA ----------------------------------------


CREATE VIEW `flights_and_aircrafts` AS
    SELECT 
        `f`.`ID` AS `ID`,
        `at`.`platinum_seats` AS `platinum_seats`,
        `at`.`Bussiness_seats` AS `Bussiness_seats`,
        `at`.`Economy_seats` AS `Economy_seats`,
        `at`.`name` AS `aircraft_name`,
        `f`.`path_iD` AS `path_ID`,
        `f`.`status` AS `status`,
        `f`.`departure_time` AS `departure_time`,
        `f`.`arrival_time` AS `arrival_time`
    FROM
        ((`flight` `f`
        JOIN `aircraft` `a` ON ((`f`.`aircraft_ID` = `a`.`ID`)))
        JOIN `aircraft_type` `at` ON ((`a`.`type_ID` = `at`.`ID`)));



CREATE VIEW `flight_details4` AS
    SELECT 
        `f`.`ID` AS `ID`,
        `f`.`departure_time` AS `departure_time`,
        `f`.`arrival_time` AS `arrival_time`,
        `p`.`start_destination` AS `start_destination`,
        `p`.`end_destination` AS `end_destination`,
        `at`.`platinum_seats` AS `platinum_seats`,
        `at`.`Bussiness_seats` AS `Bussiness_seats`,
        `at`.`Economy_seats` AS `Economy_seats`,
        `b`.`seat_type` AS `seat_type`,
        `at`.`name` AS `aircraft_name`,
        `f`.`status` AS `flight_status`
    FROM
        ((((`flight` `f`
        JOIN `paths` `p` ON ((`f`.`path_iD` = `p`.`ID`)))
        JOIN `aircraft` `a` ON ((`f`.`aircraft_ID` = `a`.`ID`)))
        JOIN `aircraft_type` `at` ON ((`a`.`type_ID` = `at`.`ID`)))
        LEFT JOIN `booking` `b` ON ((`f`.`ID` = `b`.`flight_ID`)))



CREATE VIEW `revenue` AS
    SELECT 
        SUM(`t`.`total`) AS `revenue`, `atp`.`name` AS `name`
    FROM
        ((((`transaction` `t`
        JOIN `booking` `b` ON ((`t`.`booking_ID` = `b`.`ID`)))
        LEFT JOIN `flight` `f` ON ((`f`.`ID` = `b`.`flight_ID`)))
        LEFT JOIN `aircraft` `a` ON ((`a`.`ID` = `f`.`aircraft_ID`)))
        LEFT JOIN `aircraft_type` `atp` ON ((`atp`.`ID` = `a`.`type_ID`)))
    GROUP BY `atp`.`name`


-- Flight details in profile view

create view flight_details_in_profile as
select f.ID as flight_ID,aft.name as air_craft,pa.start_destination,pa.end_destination,p.seat_no as seat_no,f.departure_time,f.arrival_time,m.ID as member_ID,m.email as email
from member m inner join passenger p on m.ID = p.ID left join 
booking b on b.ID = p.booking_ID left join 
flight f on b.flight_ID = f.ID left join 
paths pa on pa.ID = f.path_ID left join 
aircraft aft on f.aircraft_ID = aft.ID;

-- View joining the tables passengers,paths,fligh and booking
CREATE VIEW `action1` AS
    SELECT 
        `pa`.`start_destination` AS `start_destination`,
        `pa`.`end_destination` AS `end_destination`,
        `f`.`departure_time` AS `departure_time`,
        `f`.`arrival_time` AS `arrival_time`,
        `p`.`ID` AS `passenger_ID`,
        `f`.`ID` AS `flight_ID`,
        `f`.`status` AS `flight_status`
    FROM
        (`passenger` `p`
        LEFT JOIN ((`paths` `pa`
        LEFT JOIN `flight` `f` ON ((`pa`.`ID` = `f`.`path_iD`)))
        JOIN `booking` `b` ON ((`b`.`flight_ID` = `f`.`ID`))) ON ((`p`.`booking_ID` = `b`.`ID`)))

    
    -- View containing the details of past flights

CREATE VIEW `past_flights` AS
    SELECT 
        `fa`.`ID` AS `ID`,
        `fa`.`platinum_seats` AS `platinum_seats`,
        `fa`.`Bussiness_seats` AS `Bussiness_seats`,
        `fa`.`Economy_seats` AS `Economy_seats`,
        `fa`.`aircraft_name` AS `aircraft_name`,
        `fa`.`path_ID` AS `path_ID`,
        `fa`.`status` AS `status`,
        `fa`.`departure_time` AS `departure_time`,
        `fa`.`arrival_time` AS `arrival_time`,
        `fp`.`flight_ID` AS `flight_ID`,
        `fp`.`flight_status` AS `flight_status`,
        `fp`.`passenger_ID` AS `passenger_ID`,
        `fp`.`booking_ID` AS `booking_ID`,
        `fp`.`flied` AS `flied`,
        `fp`.`start_destination` AS `start_destination`,
        `fp`.`end_destination` AS `end_destination`
    FROM
        (`flight_and_passengers` `fp`
        LEFT JOIN `flights_and_aircrafts` `fa` ON ((`fa`.`ID` = `fp`.`flight_ID`)))



-- View joining the flights,bookings,passengers,members to simply retrieve details of
-- flights and passengers
CREATE VIEW `flight_members` AS
    SELECT 
        `f`.`ID` AS `flight_ID`,
        `b`.`booked_ID` AS `booked_ID`,
        `b`.`seat_type` AS `seat_type`,
        `b`.`seat_count` AS `seat_count`,
        `m`.`ID` AS `member_ID`,
        `m`.`dob` AS `member_bday`,
        `m`.`firstname` AS `fname`
    FROM
        (((`flight` `f`
        LEFT JOIN `booking` `b` ON ((`b`.`flight_ID` = `f`.`ID`)))
        LEFT JOIN `passenger` `p` ON ((`p`.`booking_ID` = `b`.`ID`)))
        LEFT JOIN `member` `m` ON ((`p`.`ID` = `m`.`ID`)))


-- View joining the flights,bookings,passengers,guests to simply retrieve details of
-- flights and guests

CREATE VIEW `flight_guest` AS
    SELECT 
        `f`.`ID` AS `flight_ID`,
        `b`.`booked_ID` AS `booked_ID`,
        `b`.`seat_type` AS `seat_type`,
        `b`.`seat_count` AS `seat_count`,
        `g`.`ID` AS `guest_ID`,
        `g`.`dob` AS `guest_bday`,
        `g`.`name` AS `fname`
    FROM
        (((`flight` `f`
        LEFT JOIN `booking` `b` ON ((`b`.`flight_ID` = `f`.`ID`)))
        LEFT JOIN `passenger` `p` ON ((`p`.`booking_ID` = `b`.`ID`)))
        LEFT JOIN `guest` `g` ON ((`p`.`ID` = `g`.`ID`)))





/*
  _        _                           
 | |      (_)                          
 | |_ _ __ _  __ _  __ _  ___ _ __ ___ 
 | __| '__| |/ _` |/ _` |/ _ \ '__/ __|
 | |_| |  | | (_| | (_| |  __/ |  \__ \
  \__|_|  |_|\__, |\__, |\___|_|  |___/
              __/ | __/ |              
             |___/ |___/               
*/
--------------------------------------   TRIGGERS  SCEHMA ------------------------------------------------------------------------------------



-- Trigger to update the schedule automatically
DELIMITER $$
 CREATE TRIGGER update_times_2 BEFORE UPDATE ON flight
 FOR EACH ROW
 BEGIN
 	IF NEW.status != "Scheduled" THEN
     SET NEW.departure_time = DATE_ADD(NEW.departure_time, INTERVAL 7 DAY);
     SET NEW.arrival_time = DATE_ADD(NEW.arrival_time, INTERVAL 7 DAY);
     SET NEW.status = "Scheduled";
     END IF;
 END$$
DELIMITER ;







/*
                               _                     
                              | |                    
  _ __  _ __ ___   ___ ___  __| |_   _ _ __ ___  ___ 
 | '_ \| '__/ _ \ / __/ _ \/ _` | | | | '__/ _ \/ __|
 | |_) | | | (_) | (_|  __/ (_| | |_| | | |  __/\__ \
 | .__/|_|  \___/ \___\___|\__,_|\__,_|_|  \___||___/
 | |                                                 
 |_|                                                 
*/
--------------------------------------- PROCEDURES SCHEMA---------------------------------------------------------------------------------------










