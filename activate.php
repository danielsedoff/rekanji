<?php

$langfile = "lang." . $_GET['lang'] . ".php";

if (file_exists($langfile))
	{
	include ($langfile);
	}
	else
	{
	include ("lang.en.php");
	}
?>

<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title><?php echo $lang['ACTIVATION']; ?></title>

</head>
<body>

<?php
include ('dbc.php');

if (isset($_GET['email']) && preg_match('/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/', $_GET['email']))
	{
		$email = $_GET['email'];
	}
if (isset($_GET['key']) && (strlen($_GET['key']) == 32)) // Activation key is 32 chars long as it is an MD5 hash
	{
		$key = $_GET['key'];
	}
	

	
if (isset($email) && isset($key))
	{

	  $query_activate_account = "UPDATE members SET Activation='' WHERE(Activation='$key')"; 
	  
	  $result_activate_account = mysqli_query($dbc, $query_activate_account);
	  
		if (mysqli_affected_rows($dbc) == 1) // update query successfull
			{
			echo $lang['ACCOUNT_READY'] . '<a href="showlang.php"> ' . $lang['LOGIN'] . ' </a>';
			} else  {
			echo $lang['ERROR'];
			}

		mysqli_close($dbc);

	} else {
        echo '<div class="errormsgbox">' . $lang['ERROR'] . '</div>';
	}

?>
</body>
</html>
