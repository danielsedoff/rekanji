<?php

if (!isset($_POST['showLang']))
{
include('showlang.php'); exit();
}

	$showLang=$_POST['showLang'];
	include("lang." . $showLang . ".php");


if  (isset($_POST['formsubmitted']))
	{
	include ('dbc.php');


    $error = array();

    if (empty($_POST['e-mail'])) {
        $error[] = $lang['ENTER_EMAIL'];
    } else {

        if (preg_match("/^([a-zA-Z0-9])+([a-zA-Z0-9._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9._-]+)+$/", $_POST['e-mail'])) {
            $Email = strtolower($_POST['e-mail']); /* case-insensitive. */
        } else {
            $error[] = $lang['ENTER_EMAIL']; 
        }
    }

    if (empty($_POST['Password'])) {
        $error[] = $lang['ENTER_PASS'];
    } else {
        $Password = $_POST['Password']; /* case-sensitive. */
    }

    if (empty($error)) // no error
	 
    {
        // Check email/name availability
        $query_email = "SELECT * FROM members WHERE Email='$Email'";
        $result_email = mysqli_query($dbc, $query_email);
       
        if (!$result_email) { 
            echo $lang['DB_ERROR'] . " " . mysqli_error($dbc);
        }

$name="0";

        if (mysqli_num_rows($result_email) == 0) { // email not in use

            $activation = md5(uniqid(rand(), true)); // unique code
            $query_insert_user = "INSERT INTO `members` ( `Username`, `Email`, `Password`, `Activation`, `Progress`) VALUES ( '$name', '$Email', '$Password', '$activation', 'AAAAAAAAAAAAAAA')";
            
/* MySQL doesn't tolerate normal quote marks instead of apostrophy in column names: (') (`) */

			$result_insert_user = mysqli_query($dbc, $query_insert_user);

            if (!$result_insert_user) {
                echo $lang['QUERY_FAIL'];
            }

            if (mysqli_affected_rows($dbc) == 1) { // Insert Query successful

                $message = $lang['ACTIVATION_LINK'];
                $message .= WEBSITE_URL . '/activate.php?email=' . urlencode($Email) . "&key=$activation" . "&lang=$showLang";

                 mail($Email, "ReKanji.com", $message, "From: noreply@rekanji.com"); // Send mail

                echo $lang['CHECK_YOURMAIL'] . $Email;

            } else { 
                echo $lang['ERROR'];
            }

        } else { 
            echo $lang['EMAIL_OR_NAME_USED'];
        }

    } else {
	// If the "error" array contains error msg, display them
			
			foreach ($error as $key => $values) 
				{
				echo '	<li>'.$values.'</li>';
				}
			}
			
    mysqli_close($dbc); // Close the DB Connection

	}

?>
<!DOCTYPE html>
<html>
<head>
<style>
.buttn 
	{
	display: inline-block;
	padding: 10px 10px 10px 10px;
	margin-top: 10px;
	border: 2px solid #404040;
	color: #404040;
	background-color: #ffffff;
	}

#greenbutton:hover
	{
	background-color:#66FF66;
	}
</style>

<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>
<?php echo $lang['GO_REGISTER']; ?>
</title>
</head>

<body>
  <div style="font-size:1.6em;">
  <center>
  <table>
<form name="regform" action="register.php" method="post" class="registration_form">

    <tr><td style="text-align:center;">
    <?php echo $lang['GO_REGISTER']; ?><br>
    </td></tr>


<tr><td>
    
     <input style="width: 100%; font-size: 1.4em;" type="text" id="e-mail" name="e-mail" size="25" 
       
       value="email"
  onblur="if(this.value==''){ this.value='email'; this.style.color='#BBB';}"
  onfocus="if(this.value=='email'){ this.value=''; this.style.color='#000';}"
  style="color:#BBB;">
    </td></tr>

<tr><td>
       <input style="width: 100%; font-size: 1.4em;" type="text" id="Password" name="Password" size="25"
       
       value="<?php echo $lang['LOGIN_YOURPASS']; ?>"
  onblur="if(this.value==''){ this.value='<?php echo $lang['LOGIN_YOURPASS']; ?>'; this.style.color='#BBB';}"
  onfocus="if(this.value=='<?php echo $lang['LOGIN_YOURPASS']; ?>'){ this.value=''; this.type='password'; this.style.color='#000';}"
  style="color:#BBB;">

    </td></tr>

<tr><td>
     <input type="hidden" name="formsubmitted" value="TRUE" />
     <input type="hidden" name="showLang" value="<?php echo $showLang; ?>"/>
     
      <div class="buttn" id="greenbutton" onclick="document.regform.submit();"> <?php echo $lang['GO_REGISTER']; ?> </div>

      <div class="buttn" id="greenbutton" onclick="history.back();"> <?php echo $lang['GO_BACK']; ?> </div>
</td></tr>
</form>

  </table>
  </center>
  </div>
</body>
</html>
