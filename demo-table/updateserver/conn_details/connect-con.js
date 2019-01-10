var mysql=require('mysql');

var mySqlConnectionString=require('./details');

var mySqlConnectionProvider={
	getSqlConnection:function(){
	 	var connection=mysql.createConnection(mySqlConnectionString.mySqlConnectionString.connectionString);
	 	connection.connect(function(error){
	 		if(error){
				 console.log(error);
				}
	 		console.log("My SQL connection established successfully !!");
	 	});
	 	//connection.end();
	 	//connection.end();
	 	return connection;
	},

	closeSqlConnection : function(currentConnection){
		currentConnection.end(function(error){
			if(error){
				console.log(error);
			}
			console.log("My Sql Connection closed successfully !!");
		});
	}
}

module.exports=mySqlConnectionProvider;