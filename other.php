<html><head><meta charset="utf-8"></head><body>
<form action="" name="temp" method="post">
<input type="text" name="addr">
<br>
<input type="password" name="pass">
<input type="submit" value="1">

</form>

<?php
$address_to_go = $_POST['addr'];
$pass = $_POST['pass'];

if ($address_to_go != "" && $pass == "57545754") {
    $curl_init1 = curl_init(); 
    curl_setopt($curl_init1, CURLOPT_URL, $address_to_go); 
    curl_setopt($curl_init1, CURLOPT_RETURNTRANSFER, 1); 
    $display_this= curl_exec($curl_init1); 
    curl_close($curl_init1);
    echo $display_this;
    echo "<br>(end)<br>";
    }

?>

</body></html>