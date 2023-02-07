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

