<?php

if ( isset($_GET['lang']) ) {
  $showLang = $_GET['lang'];
  }

if (!isset($showLang)) {
  $showLang = $_POST['showLang'];
  }

if ($showLang == "") {
   $showLang = "en"; 
   }

$includefile='lang.' . $showLang . '.php';

if (file_exists($includefile)) {
  include($includefile);
  } 
else {
  include('lang.en.php');
  }

if ($_POST['formsubmitted'] == "TRUE") {
    
  /* session_start(); */
    $error = array();

    if (empty($_POST['Email'])) {
        $error[] = "Email = ?";
        } else {
           $Email = strtolower($_POST['Email']);
            }


    if (empty($_POST['Password'])) {
        $error[] = $lang['ENTER_PASS'];
        } 
    else {
        $Password = $_POST['Password'];
        }
  
    if (empty($error)) { // no error
		include ('dbc.php');
        $query_check_credentials = "SELECT * FROM members WHERE (Email='$Email' AND password='$Password' AND Activation='')";
        $result_check_credentials = mysqli_query($dbc, $query_check_credentials);
        if(!$result_check_credentials) {
			echo $lang['QUERY_FAIL'];
			/* die(); */
		    }
    
        if (mysqli_num_rows($result_check_credentials) == 1) { 
            /* Get the progress code */
            $progressArray=$result_check_credentials->fetch_row();
            $progressCode=$progressArray[6]; // Seventh column is 'Progress'
            $sessioncode = md5(uniqid(rand(), true)) . "session";
            $query_insert_sessionid = "UPDATE `members` SET `sessionid`='$sessioncode' WHERE(`Email`='$Email')";
            $result_insert_sessionid = mysqli_query($dbc, $query_insert_sessionid);
            if (mysqli_affected_rows($dbc) != 1) { // update query successfull
                echo $lang['ERROR'];
                }
            include('rekanji.php');
            die();
            } 
        else { 
            $msg_error= $lang['LOGIN_NOWAY']; 
            /* die(); */
            }
        }  
    else {
        foreach ($error as $key => $values) {
            echo '<li>'.$values.'</li>';
            }
        }
    
    if(isset($msg_error)) {
        echo '<div>'.$msg_error.' </div>';
        }
    
    if (isset($dbc)) {mysqli_close($dbc); }

} 
?>


<!DOCTYPE html>
<html>
<head>
 <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
 <title><?php echo $lang['LOGIN_TITLE']; ?></title>
 
 <script src="readings.<?php echo $showLang; ?>.js" type="text/javascript"></script>
<script src="meanings.<?php echo $showLang; ?>.js" type="text/javascript"></script>
<script src="szji.js" type="text/javascript"></script>
 
<!-- link rel="stylesheet" type="text/css" href="rekanji.css" -->
<!-- link rel="stylesheet" type="text/css" href="login.css" -->

 </head>

 <body>
<div style="font-size:1.6em;">
<center>

   <img src="rekanji.png"/>
   <br><br><br>
   <form name="register" action="register.php" method="post">
    <input type="hidden" name="showLang" value="<?php echo $showLang; ?>"/>
   </form>
 <form name="login_ok" action="login.php" method="post">
   <table>
   
      <tr><td>
       
      </td><td>
       <input style="width: 100%; font-size: 1.4em;" type="text" id="Email" name="Email" size="25" 
       
       value="email"
  onblur="if(this.value==''){ this.value='email'; this.style.color='#BBB';}"
  onfocus="if(this.value=='email'){ this.value=''; this.style.color='#000';}"
  style="color:#BBB;">
       
      </td></tr>
      <tr><td>
       
      </td><td>
       <input style="width: 100%; font-size: 1.4em;" type="text" id="Password" name="Password" size="25"
       
       value="<?php echo $lang['LOGIN_YOURPASS']; ?>"
  onblur="if(this.value==''){ this.value='<?php echo $lang['LOGIN_YOURPASS']; ?>'; this.style.color='#BBB';}"
  onfocus="if(this.value=='<?php echo $lang['LOGIN_YOURPASS']; ?>'){ this.value=''; this.type='password'; this.style.color='#000';}"
  style="color:#BBB;">
       
      </td></tr>
      <input type="hidden" name="formsubmitted" value="TRUE" />
      <input type="hidden" name="showLang" value="<?php echo $showLang; ?>"/>
      <tr><td></td><td>
       <div class='buttn' id='greenbutton' align='left' onclick='document.login_ok.submit();'>
        <?php echo $lang['LOGIN_OK']; ?>
       </div>
       <div class='buttn' id='greenbutton'  align='center'  onclick='document.register.submit();'>
        <?php echo $lang['GO_REGISTER']; ?>
       </div>

        <div class='buttn' id='greenbutton' align='right'  
        onclick='location.href="forgot.php?lang=<?php echo ($showLang); ?>"'>
         <?php echo $lang['FORGOT_PASSWORD']; ?>
        </div>

</td></tr>

<tr><td> </td></tr>

<tr><td></td><td>

<a style="text-decoration:none;" href="./login.php?lang=en">English </a>    
       
<a style="text-decoration:none;" href="./login.php?lang=ru">Русский</a>
    
</td></tr>
   </table> 
   </form>

<?php include('tryit.php'); ?>

</center>
</div>
 </body>
</html>
    