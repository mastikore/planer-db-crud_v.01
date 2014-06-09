// modules =================================================
var express = require('express');
var app     = express();
var mysql      = require('mysql');
var connection = mysql.createConnection(
	{
	  host     : 'localhost',
	  user     : 'root',
	  password : 'toor',
	}
);
connection.connect(function(err) {
  if (err) {throw err} else {console.log("connected to DB");
	};
});

// DELETE FROM `prz`.`kierunki` WHERE `id`='2';
// DELETE FROM `prz`.`kierunki` WHERE `id`='1';
// DELETE FROM `prz`.`kierunki` WHERE `id`='3';
var queryString5 = 'SELECT * FROM prz.kierunki';
connection.query(queryString5, function(err, rows, fields){
	if (err) throw err;
	for (var i in rows) {
		console.log('Nazwa kierunku: ', rows[i].nazwa)
	}
});

// configuration ===========================================


var port = process.env.PORT || 3000; // set our port
// mongoose.connect(db.url); // connect to our mongoDB database (commented out after you enter in your own credentials)
var employees = [{
	firstName:"Andrzej", surname : "Borzyszkowski", title : "dr", email : "amb@pjwstk.edu.pl", speciality : "RBD",
	minimumStaffing : "16", employmentType : "etatowy", availability : "Mon, Tue, Wed"
},
{
	firstName:"Tomasz", surname : "Borzyszkowski", title : "dr", email : "t_borzyszkowski@pjwstk.edu.pl", speciality : "C#",
	minimumStaffing : "14", employmentType : "etatowy", availability : "Mon, Tue, Wed"
},
{
	firstName:"Elżbieta", surname : "Puźniakowska", title : "mgr", email : "ela@pjwstk.edu.pl", speciality : "AM",
	minimumStaffing : "24", employmentType : "etatowy", availability : "Mon, Tue, Wed"
},
{
	firstName:"Tadeusz", surname : "Puźniakowski", title : "mgr inż.", email : "pantadeusz@pjwstk.edu.pl", speciality : "NAI",
	minimumStaffing : "20", employmentType : "etatowy", availability : "Mon, Tue, Wed"
},
{
	firstName:"Jacek", surname : "Światowiak", title : "dr", email : "jacek_swiatowiak@pjwstk.edu.pl", speciality : "SAL",
	minimumStaffing : "", employmentType : "nieetatowy", availability : "Mon, Tue, Wed"
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
		connection.query('INSERT into prz.kierunki VALUES ("'+ req.body.noweImie +'", "'+ req.body.noweImie +'"), ("2", "'+ req.body.noweNazwisko +'"), ("3", "'+ req.body.nowyTytul +'");');
		employees.push({
			firstName : req.body.noweImie,
			surname : req.body.noweNazwisko,
			title : req.body.nowyTytul,
			email : req.body.nowyMail,
			speciality : req.body.nowyPrzedmiot,
			minimumStaffing : req.body.noweMinimumEtatowe,
			employmentType : req.body.nowyRodzajZatrudnienia,
			availability : req.body.nowaDostepnosc});
		res.send(200);
	});
	app.post('/api/deleteEmployee',function(req,res){
		employees.splice(req.body.id,1);
		res.send(200);
	});
	app.post('/api/updateEmployeeData',function(req,res){
		console.log(req.body.index + " " + req.body.firstName 
		+ " " + req.body.surname + " " + req.body.title 
		+ " " + req.body.email + " " + req.body.speciality 
		+ " " + req.body.minimumStaffing + " " + req.body.employmentType 
		+ " " + req.body.availability);
		employees[req.body.index].firstName = req.body.firstName;
		employees[req.body.index].surname = req.body.surname;
		employees[req.body.index].title = req.body.title;
		employees[req.body.index].email = req.body.email;
		employees[req.body.index].speciality = req.body.speciality;
		employees[req.body.index].minimumStaffing = req.body.minimumStaffing;
		employees[req.body.index].employmentType = req.body.employmentType;
		employees[req.body.index].availability = req.body.availability;
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