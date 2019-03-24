	<!DOCTYPE html>
	<html>
	<head>
<link rel="stylesheet" type="text/css" href="rekanji.css">
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<title>
		<?php echo $lang['FORGOT_PASSWORD']; ?>
	</title>
		<center>

	

<?php
if (empty($_POST)) {include('showlang.php'); exit();} /* Exit to main page */

$showLang = $_POST['showLang'];
$Email = strtolower($_POST['e-mail']);

$includefile='lang.' . $showLang . '.php';
if (file_exists($includefile))
	{
	include($includefile);
	} 
else {
        include('forgot.php');
	exit('No such language');
	};

if (!preg_match('/^([a-zA-Z0-9])+([a-zA-Z0-9._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9._-]+)+$/', $Email))
{ exit($lang['ENTER_EMAIL']); }

include('dbc.php');
$query_email = "SELECT * FROM members WHERE Email='$Email'";
$result_email = mysqli_query($dbc, $query_email);

if (!$result_email) { exit ($lang['DB_ERROR'] . " " . mysqli_error($dbc)); }
if (mysqli_num_rows($result_email) == 0) {exit ($lang['NO_EMAIL']);}

$nameArray=$result_email->fetch_row();


            $activation = md5(uniqid(rand(), true)); // unique code
            $query_forgot = "UPDATE `members` SET `Activation`='$activation' WHERE(`Email`='$Email')";
			$result_forgot = mysqli_query($dbc, $query_forgot);

            if (!$result_forgot) { echo $lang['QUERY_FAIL']; }
            if (mysqli_affected_rows($dbc) == 1) { // Insert Query successful

                $message = $lang['FORGOT_LINK'] . " ";
				
                $message .= WEBSITE_URL . '/forgot3.php?email=' . urlencode($Email) . "&key=$activation" . "&lang=$showLang";

                mail($Email, "ReKanji.com", $message, "From: noreply@rekanji.com"); // Send mail

                echo $lang['CHECK_FORGOT'] . $Email;

            } else { 
                echo $lang['ERROR'];
        include('forgot.php');
            }

?>



    
    
    