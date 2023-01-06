CREATE 
    ALGORITHM = UNDEFINED 
    DEFINER = `root`@`localhost` 
    SQL SECURITY DEFINER
VIEW `flights_and_aircrafts` AS
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



CREATE 
    ALGORITHM = UNDEFINED 
    DEFINER = `root`@`localhost` 
    SQL SECURITY DEFINER
VIEW `flight_details4` AS
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