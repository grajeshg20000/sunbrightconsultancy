function insertData1() {
		  
  a= document.getElementById("txtname1").value;
		b = document.getElementById("txtphoneno1").value;
		c= document.getElementById("txtemail1").value;
		 d= document.getElementById("ddltechnology1").value;
		 e = document.getElementById("ddllocation1").value;
		 f = document.getElementById("txtmsg1").value;
		 
   	 jQuery.ajax({
           type: "POST",
           url: 'insertintomysql.php',
			dataType: 'json',
			data: {functionname: 'insertData', arguments: [a, b,c,d,e,f]},
		
	                  success: function (obj, textstatus) {
				
						  if( !('error' in obj) ) {
							  yourVariable = obj.result;
							  alert(" Your Query has been submitted successfully");
						  }
						  else {
							  alert("There was a error in submitting your Query");
							  console.log('error');
						  }
					    },
                        error: function (xhr, ajaxOptions, thrownError) {
                                     alert(xhr);
                                     alert(xhr.responseText);
                                     alert(xhr.status);
                                     alert(thrownError);
                           }
                          
		}); 
	};