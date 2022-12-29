DELIMITER $$
CREATE FUNCTION insert_member(p_firstname VARCHAR(10), p_lastname VARCHAR(10), p_email VARCHAR(30), p_password VARCHAR(150), p_mem_cat_id INT, p_dob DATE, p_country VARCHAR(15), p_tele_no VARCHAR(12))
RETURNS INT
DETERMINISTIC
BEGIN
  INSERT INTO customer (type) VALUES ("member");
  INSERT INTO member (ID, firstname, lastname, email, password, mem_cat_id, dob, country, tele_no)
  VALUES (LAST_INSERT_ID(), p_firstname, p_lastname, p_email, p_password, p_mem_cat_id, p_dob, p_country, p_tele_no);
  RETURN LAST_INSERT_ID();
END$$
DELIMITER ;
