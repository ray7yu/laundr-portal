function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein};
}
function createUser(username, email, dateCreated) {
    return { username, email, dateCreated};
}
function createOrder(orderNumber, customerID, pickupTime, deliveryTime, driverName, address, weight, status) {
    return { orderNumber, customerID, pickupTime, deliveryTime, driverName, address, weight, status };
}
function createSubscription(customerName, subscriptionType, startDate, renewalDate, maxLbs, currentLbs, isActive) {
    return { customerName, subscriptionType, startDate, renewalDate, maxLbs, currentLbs, isActive };
}
export const userRows = [
    createUser('Shen-Jou','sj@hi.com','10/7/2020'),
    createUser('Vincent','v@hi.com','10/5/2020'),
    createUser('Raymond','ry@hi.com','1/27/2010'),
    createUser('Joseph','j@hi.com','3/22/2002'),
    createUser('Jayden','jj@hi.com','8/23/2015'),
    createUser('Neo Blake','nb@hi.com','5/12/2009'),
    createUser('Viaan Ferguson','vf@gmail.com','12/8/2003'),
    createUser('Keeva Powers','kp@hotmail.com','7/23/2008'),
    createUser('Liya Dawe','ld@yahoo.com','2/21/1998'),
    createUser('Bernadette Sloan','bs@ufl.edu','2/21/1998'),
    createUser('21 Savage','21@hi.com','12/23/2009'),
    createUser('Kodak Black','kb@hi.com','1/3/2012'),
    createUser('Lil Uzi Vert','luv@hi.com','3/30/2017'),
    createUser('Kanye West','kw@hi.com','4/1/2018'),
    createUser('Lil Wayne','lw@hi.com','3/23/2000'),
    createUser('Drake','d@hi.com','11/11/2011'),
    createUser('J Cole','jc@hi.com','10/10/2010'),
    createUser('Kendrick Lamar','kj@hi.com','12/12/2012'),
    createUser('Future','f@hi.com','07/26/2019'),
    createUser('Lebron James','lbj@hi.com','08/18/2016'),
    createUser('Michael Jordan','mj@hi.com','7/30/2008'),
    createUser('Magic Johnson','magj@hi.com','5/6/2016'),
    createUser('Larry Bird','lb@hi.com','3/16/2005'),
    createUser('Kobe Bryant','kobe@hi.com','3/10/2020'),
    createUser('Giannis Antetokounmpo','giannis@hi.com','8/19/2013'),
    createUser('Kevin Durant','kd@hi.com','7/2/2002'),
    createUser('Kyrie Irving','kyrie@hi.com','3/1/2019'),
    createUser('Steph Curry','steph@hi.com','8/19/2018'),
    createUser('Tom Cruise','tom@hi.com','5/8/2015'),
    ];

export const rows = [
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Donut', 452, 25.0, 51, 4.9),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Honeycomb', 408, 3.2, 87, 6.5),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Jelly Bean', 375, 0.0, 94, 0.0),
    createData('KitKat', 518, 26.0, 65, 7.0),
    createData('Lollipop', 392, 0.2, 98, 0.0),
    createData('Marshmallow', 318, 0, 81, 2.0),
    createData('Nougat', 360, 19.0, 9, 37.0),
    createData('Oreo', 437, 18.0, 63, 4.0),
];

export const orderRows = [
    createOrder(1,12,'3pm', '5pm','Gideon Waters','4000 SW 23rd ST APT 4-306','4','Paid'),
    createOrder(2,12,'2pm','6pm','Kareena Head','866 North Grandrose Dr. Harleysville, PA 19438','20','Pending'),
    createOrder(101,1235,'1am','11am','Phoebe McCartney','7 East Amherst Street Defiance, OH 43512','1.2','Pending'),
    createOrder(3,18675,'11pm','3am','Issa Spencer','9496 Selby Ave. Deerfield Beach, FL 33442','4.5','Paid'),
    createOrder(23,128,'2pm','12am','Sierra Mackenzie','943 Smith Store Lane Brownsburg, IN 46112','15.3','Pending'),
    createOrder(153,123,'2pm','5pm','Chance Salas','605 Newbridge Dr. Fairborn, OH 45324','20.3','Paid'),
    createOrder(23,5321,'10am','11am','Tiffany Dowling','96 Old Oakland Street Mahwah, NJ 07430','12.3','Paid'),
    createOrder(5,23197,'9am','2pm','Edison Dunn','7914 Orchard R. Ft. Mitchell, KY 41017','3','Paid'),
    createOrder(92,2334,'12pm','3pm','Edison Dunn','35 Euclid Lane Waterloon, IA 50701','1.2','Paid'),
    createOrder(23,23487,'8am','4pm','Marian McNeill','6 North Highland Springfield Gardens, NY 11412','12.3','Pending'),
    createOrder(123,23489,'7am','3pm','Rayan Bostock','795 Cemetery Street Oak Forest, IL 60452','5.7','Pending'),
    createOrder(89,23478,'6pm','9pm','Jayden-Lee Jordan','8893 Lakeview Street Lilburn, GA 30047','3.2','Paid'),
    createOrder(10,3243,'8pm','10pm','Geoffrey Merrill','12 Hillcrest Drive Mooresville, NC 28115','10','Paid'),
    createOrder(17,23487,'3pm','9pm','Mahir Raymond','8109 St. Paul Ave. Dallas, GA 30132','7','Paid'),
];

export const subscriptionRows = [
    createSubscription('Shen-Jou','Student Plan','10/7/2020','11/28/2020',10,5,'Active'),
    createSubscription('Vincent','Standard Plan','10/5/2020','12/31/2020',15,2,'Not'),
    createSubscription('Raymond','Plus Plan','1/27/2010','6/3/2011',20,15,'Not'),
    createSubscription('Joseph','Family Plan','3/22/2018','11/10/2019',10,6,'Active'),
    createSubscription('Jayden','Student Plan','8/23/2015','5/10/2016',8,7,'Active'),
    createSubscription('Neo Blake','Family Plan','5/12/2009','10/17/2015',9,5,'Active'),
    createSubscription('Viaan Ferguson','Student Plan','12/8/2007','2/9/2014',10,5,'Not'),
    createSubscription('Keeva Powers','Family Plan','7/23/2008','5/23/2017',12,0,'Active'),
    createSubscription('Liya Dawe','Plus Plan','2/21/2004','6/21/2016',25,7,'Not'),
    createSubscription('Bernadette Sloan','Student Plan','2/21/1998','10/3/2003',15,10,'Active'),
];