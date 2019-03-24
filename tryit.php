<?php

if ( isset($_GET['lang']) ) {
  $showLang = $_GET['lang'];
  }

if (!isset($showLang)) {
  $showLang = $_POST['showlang'];
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

  ?>

<script src="readings.<?php echo $showLang; ?>.js" type="text/javascript"></script>
<script src="meanings.<?php echo $showLang; ?>.js" type="text/javascript"></script>
<script src="szji.js" type="text/javascript"></script>

<link rel="stylesheet" type="text/css" href="rekanji.css">

<script>

var nChars=100;
var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".split(''); /* Base 64 */

{

/* Mobile Check taken from 
http://stackoverflow.com/questions/11381673/javascript-solution-to-detect-mobile-browser 
*/

window.mobilecheck = function() {
var check = false;
(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
return check; }

}

function randomize(arrInp) 

{
	for (i = arrInp.length; i > 0; i--)
		{
			j = Math.floor(Math.random() * (i + 1));
			temp = arrInp[i];
			arrInp[i] = arrInp[j];
			arrInp[j] = temp;
		}
	return arrInp;
}

function assignClassName()
{
	for (i = 0; i < nChars; i++)
		{
		var thisdiv=document.getElementById(i);
		thisdiv.className = "a";
		}
}

function h(numdiv)
{	

	 document.getElementById('clickeddiv').innerHTML=numdiv;
	document.body.style.overflow = 'hidden';
	 thisClass=document.getElementById(numdiv).className;
	 if (thisClass=="b") { decideClick(0); return(0); }

	 szChar=document.getElementById(numdiv).innerHTML;
	 jiIndex=szJi.indexOf(szChar);
	 
	 szPop = k[jiIndex];
	 onKun=szPop.split(',');
     transl=meaning[jiIndex];
    
	if (onKun[0] == " ") {onKun[0] = "-";}
	if (onKun[1] == " ") {onKun[1] = "-";}
	
	tableToShow=[
	"<center><table id='tabletoshow'><tr><td style='text-align:right;'><?php echo $lang['THIS_ON']; ?></td><td>:</td><td>",
	onKun[0].toUpperCase(), "</td></tr><tr><td style='text-align:right;'>",
	"<?php echo $lang['THIS_KUN']; ?></td><td>:</td><td>", onKun[1].toUpperCase(), 
	"</td></tr><tr><td style='text-align:right;'><?php echo $lang['TRANSLATES']; ?></td><td>:</td><td>",
	transl.toUpperCase(), "</td></tr></table></center>"].join('');

	buttonLines=[];
	buttonLines[0]="<div class='buttn' id='greenbutton' onclick='decideClick(1)'><?php echo $lang['YESS']; ?></div> ";
	buttonLines[1]="<div class='buttn' id='redbutton' onclick='decideClick(0)'><?php echo $lang['NOPE']; ?></div> ";
	
	twoButtons=randomize(buttonLines).join('');
	
	var confText = 	["<div class='bigkanji'>", szChar, "</div><br/>", tableToShow, twoButtons].join("");
	
	document.getElementById('popup').innerHTML=confText;
	document.getElementById('popupback').style.display='inline-block';
	document.getElementById('popupback').style.top=getPageScroll() + "px";
	
}

function decideClick(yesno)	  

/* Check knowledge and mark with dark background */
{	
	  document.getElementById('popupback').style.display='none';
	  var thisNum=document.getElementById("clickeddiv").innerHTML;
	  var hiddenji=document.getElementById("hiddenji").innerHTML;
	  var thisdiv=document.getElementById(thisNum);
	  
	  if (yesno == 1)
	  { thisdiv.className="b"; 
	  hiddenji = hiddenji + thisdiv.innerHTML;
	  document.getElementById("hiddenji").innerHTML=hiddenji;
	  } 
	  if (yesno == 0)
	   {
	  thisdiv.className="a";
	  /* remove the character from the list */
	  x = hiddenji.indexOf(thisdiv.innerHTML);
	  hiddenji = hiddenji.substring(0, x) + hiddenji.substring (x + 1, hiddenji.length);
	  document.getElementById("hiddenji").innerHTML=hiddenji;
	  
		}
		fSave(hiddenji);
		document.body.style.overflow = '';
}

/* getPageScroll by Javascript.ru */
var getPageScroll = (window.pageYOffset != undefined) ?
  function() {
    return (pageYOffset);
  } :
  function() {
    var html = document.documentElement;
    var body = document.body;
 
    var top = html.scrollTop || body && body.scrollTop || 0;
    top -= html.clientTop;
    return (top);
  };



function changeMode()
{
	modeinfo=document.getElementById("hiddentext").innerHTML;
	
	switch(modeinfo)
	{
		case "1":		
		
			var normList;
	for (i = 0; i < nChars; i += 1) {
	
	 var thisdiv=document.getElementById(i);
	 if (thisdiv.className == "b") {
		thisdiv.style.display = "none";
		}
	 	
	 }
		
		/* Now only unlearned kanji will be visible */
		document.getElementById("hiddentext").innerHTML="2";	
		document.getElementById("modebutton").innerHTML="<?php echo $lang['MODE']; ?>2";
		break;
		
		case "2":	
			for (i = 0; i < nChars; i += 1) {
		 var thisdiv=document.getElementById(i);
		 if (thisdiv.style.display == "none")  
		 {
		 thisdiv.style.display = "inline-block"; 
		 } else { 
		 thisdiv.style.display = "none";
		 }
	}
	
		/* Now only learned kanji will be visible */
		document.getElementById("hiddentext").innerHTML="3";	
		document.getElementById("modebutton").innerHTML="<?php echo $lang['MODE']; ?>3";
		break;
		
		case "3":		allVisible();
		/* Now everything is visible */
		document.getElementById("hiddentext").innerHTML="1";
		document.getElementById("modebutton").innerHTML="<?php echo $lang['MODE']; ?>1";
	}
}

 function about() 
{
	var thisdiv=document.getElementById("aboutDiv");
	if (thisdiv.style.display !== "block") 
	{
		  thisdiv.style.display = "block"; 
	} else {
         thisdiv.style.display = "none"; 
		   }
   }

 function clearEverything()
 {
	 
	if (confirm("<?php echo $lang['YOU_SURE']; ?>"))
	{
		for (i = 0; i < nChars; i += 1)
			{
				var thisdiv=document.getElementById(i);
				thisdiv.style.display = "inline-block";
				thisdiv.className = "a";
			} 
			j=""; for (i=0; i<356; i++) {j=j+"A";};
			document.getElementById("learnedChars").value=j;
	}
}
   
function allVisible()
{
	for (i = 0; i < nChars; i += 1) 
		{
			var thisdiv=document.getElementById(i);
			thisdiv.style.display = "inline-block";
		}

}

function fSave(szLearned) 
{
	var jiMatrix=[];
	var learnedChars=document.getElementById("learnedChars");
	
	if(szLearned=="") 
	{
		szLearned=document.getElementById("hiddenji").innerHTML;
	}
	
	for (i = 0; i < nChars; i += 1) 
	{
		thisJi=szJi.substring(i,i+1);
		if (!(szLearned.indexOf(thisJi) == -1))
		{
		jiMatrix[i]=1;
		} else {
		jiMatrix[i]=0;
		}
	}
	
	learnedChars.value=tob64(jiMatrix.join(''));

}

function fRestore()
{
	var szLearned="";
	codeLearned=document.getElementById("learnedChars").value;
	
	if (codeLearned=="") {
		codeLearned=document.cookie.substring(2,document.cookie.length);
		document.getElementById("learnedChars").value=codeLearned;}
		codeLearned=unb64(codeLearned);
	
	for (i = 0; i < nChars; i += 1) 
	{
		thisBit = codeLearned.substring(i,i+1);
		if (thisBit == 1) 
		{
			szLearned=szLearned+szJi.substring(i,i+1);
		}
	}
	
	/* Now var szLearned contains the list of learned kanji. */
	
	document.getElementById("hiddenji").innerHTML=szLearned;
	
	for (i = 0; i < nChars; i++)
	{
		var thisdiv=document.getElementById(i);
		if (szLearned.indexOf(thisdiv.innerHTML) !== -1) {
		thisdiv.className = "b";
		  } else {
			  thisdiv.className = "a";
		  }
	} 
	
	
}

function tob64(szInput)
{
	szOut="";
	for (i = 0; i < nChars; i += 6)
	{
		sixbits=szInput.substring(i,i+6);
		x=sixbits.split('');
		szNum=32*x[0]+16*x[1]+8*x[2]+4*x[3]+2*x[4]+1*x[5];
		szOut=szOut+alphabet[szNum];
	}
	return(szOut);
}

function unb64(szInput)
{
	szOut="";
	szBit=[];
	for (i = 0; i < szInput.length; i++)
	{
		thisOne=szInput.substring(i,i+1);
		szNum=alphabet.indexOf(thisOne);
		
		szBit[0]=Math.floor(szNum/32); szNum %= 32;
		szBit[1]=Math.floor(szNum/16); szNum %= 16;
		szBit[2]=Math.floor(szNum/8);  szNum %=  8;
		szBit[3]=Math.floor(szNum/4);  szNum %=  4;
		szBit[4]=Math.floor(szNum/2);  szNum %=  2;
		szBit[5]=szNum;
		
		szOut=szOut + szBit.join('');
	}
	return szOut;
}

</script>
</head>

<body>
	
	<!--[if IE]>
    <?php echo $lang['NOIE']; ?>
	<![endif]-->

	
<div id="hiddentext" style="display:none">1</div>
<div id="hiddenProgress" style="display:none">
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
</div>


<div id="hiddenji" style="display:none"></div>
<div id="clickeddiv" style="display:none"></div>


<div id="popupback">
	<div id="popup">
	--the hidden div--
	</div>
</div>

	<form name="theform" action="save.php" method="post">
	<div align="right">
	<input name="progressCode" type="hidden" id="learnedChars" value="<?php echo $progressCode; ?>"/>
	<input name="sessionid" type="hidden" value="<?php echo $sessioncode; ?>"/>
	<input name="showLang" type="hidden" value="<?php echo $showLang; ?>"/>
	</div>
	</form>


	<center>
	<br><br><br>
	
	<div style="text-align:left; margin: 1em 1em 1em 1em;"><?php echo $lang['DESCR']; ?></div> 

	<br/>

	
	
	
	</div>
	
	<br/>
	<br/>
	</center>

	<?php echo $lang['ABOUT_DIV']; ?>

	<div align="right"><img src="mailto.png"/></div>
	</div>

	<center>
	<div id="alldivs">		
	<script>
	
	var charset = randomize(szJi.split(''));
	var chars = charset.join('');

	
	/* retrieve random char set */
	var thedivsA=[];

	for (i=0; i < nChars; i +=1)
		{
		thedivsA.push('<div id="' + i + '" onclick="h(' + i + ');">' + chars[i] + '</div>');
		}
	var thedivs=thedivsA.join(''); /* \n possible here */
	chars="";

	document.write(thedivs);
	toWrite="";
	assignClassName();
	
	
	if (window.mobilecheck())
	{document.getElementById("alldivs").style.fontSize="125px";
	document.getElementById("popup").style.fontSize="64px";
	} else {
	document.getElementById("alldivs").style.fontSize="63px";
	}
		
	fRestore();
</script>
</div>

<center><img src="mailto.png"></center>