-- Trigger to update the schedule automatically
DELIMITER $$
 CREATE TRIGGER update_times BEFORE UPDATE ON flight
 FOR EACH ROW
 BEGIN
 	IF NEW.status != "Scheduled" THEN
     SET NEW.departure_time = DATE_ADD(NEW.departure_time, INTERVAL 7 DAY);
     SET NEW.arrival_time = DATE_ADD(NEW.arrival_time, INTERVAL 7 DAY);
     END IF;
 END$$
  DELIMITER ;