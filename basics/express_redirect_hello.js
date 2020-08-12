/* express_redirect_hello.js */

/* A redirect can be to an internal path or to an external website as well. 
 * In the below example, first we will create an http GET service and do a 
 * redirect to the same. We will also have a redirect to google.com.
 */
var express = require("express");
var app = express();
//GET Method
app.get('/hello',function(req,res){
	res.send("Hello World");
});

//Redirect to /hello
app.get('/redirect',function(req,res){
	res.redirect("./hello");
});

//Redirect to external site.
app.get('/redirect_ext',function(req,res){
	res.redirect("http://www.google.com");
});
app.listen(8080);

/* Run the above code and make a call to http://localhost:8080/redirect
 * and you will see it redirects to http://localhost:8080/hello and returnh
 * the response. Now, make a call to http://localhost:8080/redirect_ext and 
 * it will redirect to google.com. By default the redirect uses http status 
 * code 302. The redirect function also takes an optional parameter to set 
 * the status code like below. In the below code we are setting the redirect 
 * status code to 301.
 */
app.get('/redirect',function(req,res){
	res.redirect(301, "./hello");
});
