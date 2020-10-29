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
    createUser('Shen-Jou','sj@hi.com', new Date(2020,9,6,3,1,2,53)),
    createUser('Vincent','v@hi.com',new Date(2020,9,4)),
    createUser('Raymond','ry@hi.com',new Date(2010,0,26)),
    createUser('Joseph','j@hi.com',new Date(2002,2,21)),
    createUser('Jayden','jj@hi.com',new Date(2015,7,22)),
    createUser('Neo Blake','nb@hi.com',new Date(2009,4,11)),
    createUser('Viaan Ferguson','vf@gmail.com',new Date(2003,11,7)),
    createUser('Keeva Powers','kp@hotmail.com',new Date(2008,6,22)),
    createUser('Liya Dawe','ld@yahoo.com',new Date(1998,1,20)),
    createUser('Bernadette Sloan','bs@ufl.edu',new Date(1998,1,20)),
    createUser('Bob Smith','bs@hi.com',new Date(2009,11,22)),
    createUser('Percival Williamson','percw@hi.com',new Date(2012,0,2)),
    createUser('Jason Taylor','jason@hi.com',new Date(2017,2,29)),
    createUser('Ada Jones','ada@hi.com',new Date(2018,3,0)),
    createUser('Tyler Jackson','tyj@hi.com',new Date(2000,2,22)),
    createUser('George Adams','george@hi.com',new Date(2011,10,10)),
    createUser('Isabella Ford','iford@hi.com',new Date(2010,9,9)),
    createUser('Samuel McAdams','samcadams@hi.com',new Date(2012,11,11)),
    createUser('Melvin Fisher','melvin@hi.com',new Date(2019,6,25)),
    createUser('Autumn Hood','autumn@hi.com',new Date(2016,7,17)),
    createUser('Charlie Roth','charlie@hi.com',new Date(2008,7,29)),
    createUser('Chase Hughes','chase@hi.com',new Date(2016,4,5)),
    createUser('Wayne Morrison','wayne@hi.com',new Date(2005,2,15)),
    createUser('Ryan Myers','ryan@hi.com',new Date(2020,2,9)),
    createUser('John Lynn','johnlynn@hi.com',new Date(2013,7,18)),
    createUser('Bianca Howard','bianca@hi.com',new Date(2002,6,1)),
    createUser('Eli Whittaker','eli@hi.com',new Date(2019,2,0)),
    createUser('Stephen Brown','steph@hi.com',new Date(2018,7,18)),
    createUser('Jeff Martin','jeff@hi.com',new Date(2015,4,7)),
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
    createOrder(1,12,new Date(2020,9,26,14,32),new Date(2020,9,26,16,21),'Gideon Waters','4000 SW 23rd ST APT 4-306','4','Paid'),
    createOrder(2,12,new Date(2020,9,22,14,2),new Date(2020,9,22,20,32),'Kareena Head','866 North Grandrose Dr. Harleysville, PA 19438','20','Pending'),
    createOrder(101,1235,new Date(2020,9,26,1,58),new Date(2020,9,26,3,22),'Phoebe McCartney','7 East Amherst Street Defiance, OH 43512','1.2','Pending'),
    createOrder(3,18675,new Date(2020,9,25,23,10),new Date(2020,9,26,3,7),'Issa Spencer','9496 Selby Ave. Deerfield Beach, FL 33442','4.5','Paid'),
    createOrder(23,128,new Date(2020,9,23,23,3),new Date(2020,9,23,23,27),'Sierra Mackenzie','943 Smith Store Lane Brownsburg, IN 46112','15.3','Pending'),
    createOrder(153,123,new Date(2020,9,20,8,40),new Date(2020,9,20,11,23),'Chance Salas','605 Newbridge Dr. Fairborn, OH 45324','20.3','Paid'),
    createOrder(23,5321,new Date(2020,9,23,9,3),new Date(2020,9,23,10,2),'Tiffany Dowling','96 Old Oakland Street Mahwah, NJ 07430','12.3','Paid'),
    createOrder(5,23197,new Date(2020,9,24,4,0),new Date(2020,9,25,0,48),'Edison Dunn','7914 Orchard R. Ft. Mitchell, KY 41017','3','Paid'),
    createOrder(92,2334,new Date(2020,9,22,12,15),new Date(2020,9,22,15,5),'Edison Dunn','35 Euclid Lane Waterloon, IA 50701','1.2','Paid'),
    createOrder(23,23487,new Date(2020,9,14,0,12),new Date(2020,9,14,1,22),'Marian McNeill','6 North Highland Springfield Gardens, NY 11412','12.3','Pending'),
    createOrder(123,23489,new Date(2020,9,23,20,30),new Date(2020,9,23,21,5),'Rayan Bostock','795 Cemetery Street Oak Forest, IL 60452','5.7','Pending'),
    createOrder(89,23478,new Date(2020,9,21,1,59),new Date(2020,9,21,23,50),'Jayden-Lee Jordan','8893 Lakeview Street Lilburn, GA 30047','3.2','Paid'),
    createOrder(10,3243,new Date(2020,9,23,19,3),new Date(2020,9,23,21,26),'Geoffrey Merrill','12 Hillcrest Drive Mooresville, NC 28115','10','Paid'),
    createOrder(17,23487,new Date(2020,9,22,14,21),new Date(2020,9,23,4,2),'Mahir Raymond','8109 St. Paul Ave. Dallas, GA 30132','7','Paid'),
    createOrder(17,23487,new Date(2020,9,28,14,21),new Date(2020,9,28,4,2),'Mahir Raymond','8109 St. Paul Ave. Dallas, GA 30132','7','Paid'),
];

export const subscriptionRows = [
    createSubscription('Shen-Jou','Student Plan',new Date(2020,7,6),new Date(2020,10,27),10,5,'Active'),
    createSubscription('Vincent','Standard Plan',new Date(2020,7,4),new Date(2020,11,30),15,2,'Not'),
    createSubscription('Charles','Standard Plan',new Date(2020,6,4),new Date(2020,10,30),7,5,'Active'),
    createSubscription('Raymond','Plus Plan',new Date(2010,0,26),new Date(2011,5,2),20,15,'Not'),
    createSubscription('Joseph','Family Plan',new Date(2018,2,21),new Date(2019,10,9),10,6,'Active'),
    createSubscription('Jayden','Student Plan',new Date(2015,7,22),new Date(2016,4,9),8,7,'Active'),
    createSubscription('Neo Blake','Family Plan',new Date(2015,4,11),new Date(2015,9,16),9,5,'Active'),
    createSubscription('Viaan Ferguson','Student Plan',new Date(2007,11,7),new Date(2014,1,8),10,5,'Not'),
    createSubscription('Keeva Powers','Family Plan',new Date(2013,6,22),new Date(2017,4,22),12,0,'Active'),
    createSubscription('Liya Dawe','Plus Plan',new Date(2014,1,20),new Date(2016,5,20),25,7,'Not'),
    createSubscription('Bernadette Sloan','Student Plan',new Date(2011,1,20),new Date(2003,9,2),15,10,'Active'),
];