Update the postcode of the hotel named Elder Lake Hotel to L10XYZ

update hotels set postcode='L10XYZ' where id=2;
Update the number of rooms of Cozy Hotel to 25
For the customer named Nadia Sethuraman, update her address to , her city to Glasgow and her postcode to G11ABC in one query
Update all the bookings of customer with ID 1 for the hotel with ID 1 to 5 nights in one query

update hotels set rooms=26 where name='Cozy Hotel';

update customers set address='2 Blue Street' ,city='Glasgow', postcode='G11ABC' where name='Nadia Sethuraman';


/*

DELETE FROM bookings WHERE customer_id = 8 AND checkin_date='2020-01-03';

DELETE FROM bookings WHERE customer_id =6;

DELETE FROM customers WHERE id =6;
From Selina Hussain to Everyone:  01:17 PM
UPDATE hotels SET postcode = 'L10XYZ' WHERE id = 2;

UPDATE hotels SET rooms = 25 WHERE name = 'Cozy Hotel';

UPDATE customers SET address = '2 Blue Street', city ='Glasgow', postcode = 'G11ABC' WHERE name = 'Nadia Sethuraman';

UPDATE bookings SET nights = 5 WHERE customer_id = 1 AND hotel_id = 1;

DELETE FROM bookings WHERE customer_id = 8 AND checkin_date='2020-01-03';

DELETE FROM bookings WHERE customer_id =6;

DELETE FROM customers WHERE id =6;


*/



