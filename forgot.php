<?php 
$showLang = $_GET['lang'];
$includefile = 'lang.' . $showLang . '.php';
if (file_exists($includefile)) {
 include($includefile);
 } 
else {
 exit('No such language');
 }

?>

	<!DOCTYPE html>
	<html><head><meta charset="utf-8">
<link rel="stylesheet" type="text/css" href="rekanji.css">
	<title>
		<?php echo $lang['FORGOT_PASSWORD']; ?>
	</title>

                <div style="font-size:1.6em;">
		<center>
	<form name="forgot" action="forgot2.php" method="post">
		<div>
		<h2>
			<?php echo $lang['ENTER_EMAIL']; ?>
		</h2>
<input style="width: 70%; font-size: 1.4em;" type="text" id="e-mail" name="e-mail" size="25" />

<br>

                <div class='buttn' id='greenbutton'  align='center'  onclick='document.forgot.submit();'>
        <?php echo $lang['RESET_PASSWORD']; ?>
       </div>
		<input type="hidden" name="showLang" value="<?php echo $showLang; ?>"/>
		</div>
		
	</form>
        </center>
        </div>
</body></html>
    
    