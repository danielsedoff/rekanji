<?php
if (empty($_GET['lang']) || empty($_GET['key']) || empty($_GET['email'])) 
{ include('showlang.php'); exit();} /* Exit to main page */

$showLang = $_GET['lang'];
$langfile = "lang." . $showLang . ".php";

if (file_exists($langfile))
	{
	include ($langfile);
	}
else
	{
	include('showlang.php'); exit();
	}

$email = $_GET['email'];
$key = $_GET['key'];

?>

<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>
	<?php echo $lang['FORGOT_PASSWORD']; ?>
</title>
	<center>
	<div>Email: 
		<?php echo $email; ?>
	</div>
	
	
	
<form action="forgot4.php" method="post">
	<div>
	<input type="hidden" name="showLang" value="<?php echo $showLang; ?>"/>
	<input type="hidden" name="activation" value="<?php echo $key; ?>"/>
	<br><?php echo $lang['NEW_PASS']; ?><input type="text" name="newpass"/>
	</div>
	<input type="submit" value="Ok"/>
</form>

