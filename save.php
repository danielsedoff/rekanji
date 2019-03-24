<?php

if (empty($_POST)) die();

$showLang = $_POST['showLang'];
$sessionid = $_POST['sessionid'];
$progressCode = $_POST['progressCode'];

include ('dbc.php');
include("lang." . $showLang . ".php");

$query_save = "UPDATE `members` SET `sessionid`='', `Progress`='$progressCode' WHERE `sessionid`='$sessionid'";
$result_save = mysqli_query($dbc, $query_save);
mysqli_close($dbc); // Close the DB Connection

if (!$result_save) { 
  echo $lang['DB_ERROR'] . " " . mysqli_error($dbc);
  }
else {
  echo 'OK!';
  }

?>

