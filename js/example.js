 function loadXMLDoc(){
 	var myRequest = new XMLHttpRequest();
 	
 	myRequest.onreadystatechange=function(){
 		if (myRequest.readyState==4 && myRequest.status==200){
 			document.getElementById("myDiv").innerHTML=myRequest.responseText;
 			}
 		}

 	myRequest.open("GET", "ajax_info.txt");
 	myRequest.send();
 }