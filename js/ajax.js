// store a new instance of the XMLHttpRequest object in a variable
var myRequest = new XMLHttpRequest();

// open to initialize the request. required: (http method, URI of the data to fetch) optional: asynchronous flag, username, password, default is asynchronous
myRequest.open("GET", "http://www.apple.com/");
//provide any optional headers for the request
myRequest.setRequestHeader("Cache-Control", "no-cache");
// handle different states of a request with handler functio nfor onreadystatechange
myRequest.onreadystatechange = myReadyStateChangeHandlerFunction;
// if only state you're concerned about is the loaded state (state 4) try using the onload event instead
myRequest.onload = myOnLoadHandlerFunction;
//when requrest is ready use the send method to send it
myRequest.send();
//if sending content like string or DOM object, pass it in as arguement

//after send request you can abort
myRequest.abort();
//if you provided an onreadystatechange handler, you can query your request to find its current state using the readyState property
var myRequestState = myRequest.readyState;
// readyState value of 4 means the content has loaded, onload is called 
//when a request is finished loading, you can query its http status using status and statusText 
var myRequestStatus = myRequest.status;
var myRequestStatusText = myRequest.statusText;
//fetch the request hhtp response headers using getResponseHeader method
var aResponseHeader = myRequest.getResponseHeader("Content-Type");
// get a list of all response headeres for a request use getAllResponseHeaders
var allResponseHeaders = myRequest.getAllResponseHeaders();
//get request's response XML as a DOM object use responseXML 
var myResponseXML = myRequest.responseXML;
//this object responds to standard DOM methods like getElementsByTagName. If the response is not in a valid XML format, use the responseText property to acces the raw text response
var myResponseText = myRequest.responseText;

