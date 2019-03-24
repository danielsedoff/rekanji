<?php
 
$szLangs = $_SERVER['HTTP_ACCEPT_LANGUAGE'];
$szLangs = " " . strtolower($szLangs);

/* Without position 0 occupied it won't make difference 
between position 0 and _not_found_ */

$rusPosition = strpos($szLangs, "ru");
$engPosition = strpos($szLangs, "en");

if (!$rusPosition) $rusPosition=9000;
if (!$engPosition) $engPosition=9000;

if ($engPosition <= $rusPosition) $showLang = "en";
else $showLang = "ru";

header("Location: login.php?lang=" . $showLang);
die();
?>
    
