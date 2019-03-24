<?php
if (empty($_POST)) {include('showlang.php'); exit();} /* Exit to main page */
$showLang = $_POST['showLang'];

$includefile='lang.' . $showLang . '.php';
if (file_exists($includefile))
	{
	include($includefile);
	} 
else {
	include("lang.en.php");
	};

$activation = $_POST['activation'];
$newpass = $_POST['newpass'];

if (isset($showLang) && isset($activation) && isset($newpass))
	{
	  include('dbc.php');
	  $query_newpass = "UPDATE `members` SET `Activation`='', `Password`='$newpass' WHERE(`Activation`='$activation')"; 
	  
	  $result_newpass = mysqli_query($dbc, $query_newpass);
	  
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

	<!DOCTYPE html>
	<html>
	<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<title>
		<?php echo $lang['FORGOT_PASSWORD']; ?>
	</title>
	
	</head><body></body></html>
	
	
	

