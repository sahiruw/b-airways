DELIMITER $$
CREATE FUNCTION confirm_transaction (p_bookingid int, p_finalprice float, p_time date, p_ptype varchar(15))
RETURNS INT
DETERMINISTIC
BEGIN

  INSERT INTO transaction (booking_id, time, total, payment_method)
  VALUES (p_bookingid, p_time, p_finalprice, p_ptype);
  RETURN LAST_INSERT_ID();
END$$
DELIMITER ;

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
