// modules =================================================
var express = require('express');
var app     = express();

// configuration ===========================================


var port = process.env.PORT || 3000; // set our port
// mongoose.connect(db.url); // connect to our mongoDB database (commented out after you enter in your own credentials)
var employees = [{
	firstName:"Andrzej", surname : "Borzyszkowski", title : "dr",
	email : "amb@pjwstk.edu.pl", employmentType : "true",
	minimumStaffing : "16"
},
{
	firstName:"Tomasz", surname : "Borzyszkowski", title : "dr",
	email : "t_borzyszkowski@pjwstk.edu.pl", employmentType : "true",
	minimumStaffing : "14"
},
{
	firstName:"Tomasz", surname : "Kowalczyk", title : "mgr",
	email : "tkowalczyk@pjwstk.edu.pl", employmentType : "false",
	minimumStaffing : "14"
},
{
	firstName:"Anna", surname : "Nenca", title : "mgr inż.",
	email : "nenca@pjwstk.edu.pl", employmentType : "true",
	minimumStaffing : "14"
},
{
	firstName:"Jakub", surname : "Neumann", title : "dr",
	email : "jneumann@pjwstk.edu.pl", employmentType : "true",
	minimumStaffing : "14"
},
{
	firstName:"Arkadiusz", surname : "Adolph", title : "mgr inż.",
	email : "aadolph@pjwstk.edu.pl", employmentType : "true",
	minimumStaffing : "14"
},
{
	firstName:"Patrycja", surname : "Orlowska", title : "dr",
	email : "t_borzyszkowski@pjwstk.edu.pl", employmentType : "true",
	minimumStaffing : "14"
},
{
	firstName:"Stanislaw", surname : "Szejko", title : "dr inż.",
	email : "t_borzyszkowski@pjwstk.edu.pl", employmentType : "true",
	minimumStaffing : "14"
},
{
	firstName:"Elzbieta", surname : "Puzniakowska", title : "mgr",
	email : "ela@pjwstk.edu.pl", employmentType : "true",
	minimumStaffing : "24"
},
{
	firstName:"Tadeusz", surname : "Puzniakowski", title : "mgr inż.",
	email : "pantadeusz@pjwstk.edu.pl", employmentType : "true",
	minimumStaffing : "20"
},
{
	firstName:"Jacek", surname : "Swiatowiak", title : "dr",
	email : "jacek_swiatowiak@pjwstk.edu.pl", employmentType : "",
	minimumStaffing : ""
}
];

app.configure(function() {
	app.use(express.static(__dirname + '/public')); 	// set the static files location /public/img will be /img for users
	app.use(express.logger('dev')); 					// log every request to the console
	app.use(express.bodyParser()); 						// pull information from html in POST
	app.use(express.methodOverride()); 					// simulate DELETE and PUT
});


	// server routes ===========================================================
	app.get('/api/getAllEmployees',function(req,res){
		res.send(employees);
		
	});
	app.get('/api/getEmployeeData/:id',function(req,res){
		res.send(employees[req.params.id]);
	});
	app.post('/api/addNewEmployee',function(req,res){
		console.log(req.body.noweImie);
		employees.push({
			firstName : req.body.noweImie,
			surname : req.body.noweNazwisko,
			title : req.body.nowyTytul,
			email : req.body.nowyMail,
			employmentType : req.body.nowyRodzajZatrudnienia,
			minimumStaffing : req.body.noweMinimumEtatowe
		});
		res.send(200);
	});
	app.post('/api/deleteEmployee',function(req,res){
		employees.splice(req.body.id,1);
		res.send(200);
	});
	app.post('/api/updateEmployeeData',function(req,res){
		console.log(req.body.index + " " + req.body.firstName 
		+ " " + req.body.surname + " " + req.body.title 
		+ " " + req.body.email + " " + req.body.minimumStaffing 
		+ " " + req.body.employmentType);
		employees[req.body.index].firstName = req.body.firstName;
		employees[req.body.index].surname = req.body.surname;
		employees[req.body.index].title = req.body.title;
		employees[req.body.index].email = req.body.email;
		employees[req.body.index].employmentType = req.body.employmentType;
		employees[req.body.index].minimumStaffing = req.body.minimumStaffing;
		res.send(200);
	});
	//frontend
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});


// start app ===============================================
app.listen(port);	
console.log('Magic happens on port ' + port); 			// shoutout to the user
exports = module.exports = app; 						// expose app