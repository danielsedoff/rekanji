<?php

/* Constants for DB connection. For everything here, thanks to ismakeel@gmail.com */
DEFINE('EMAIL', 'admin@rekanji.com'); // From
DEFINE('WEBSITE_URL', 'http://rekanji.com/'); // Script folder

/* The example from PHP man follows */
/* $link = mysqli_connect("myhost","myuser","mypassw","mybd") or die("Error " . mysqli_error($link)); */
 
$dbc = mysqli_connect("localhost","rekanjic_xs2xl2","xi1x2xi1","rekanjic_xs2xl2") or die("Error " . mysqli_error($link));

?>
