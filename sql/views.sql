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



CREATE 
    ALGORITHM = UNDEFINED 
    DEFINER = `root`@`localhost` 
    SQL SECURITY DEFINER
VIEW `revenue` AS
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
from member m inner join passenger p on m.ID = p.ID 
left join booking b on b.ID = p.booking_ID left join 
flight f on b.flight_ID = f.ID left join 
paths pa on pa.ID = f.path_ID left join 
aircraft aft on f.aircraft_ID = aft.ID;

-- View joining the tables passengers,paths,fligh and booking
CREATE 
    ALGORITHM = UNDEFINED 
    DEFINER = `root`@`localhost` 
    SQL SECURITY DEFINER
VIEW `action1` AS
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

    CREATE 
    ALGORITHM = UNDEFINED 
    DEFINER = `root`@`localhost` 
    SQL SECURITY DEFINER
VIEW `past_flights` AS
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
CREATE 
    ALGORITHM = UNDEFINED 
    DEFINER = `root`@`localhost` 
    SQL SECURITY DEFINER
VIEW `flight_members` AS
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

CREATE 
    ALGORITHM = UNDEFINED 
    DEFINER = `root`@`localhost` 
    SQL SECURITY DEFINER
VIEW `flight_guest` AS
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