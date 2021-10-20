
function validation()
{
	var company = document.getElementById("company").value;  // fetching all value users types in form
	var telephone = document.getElementById("telephone").value;  //here id from input id
	var f = document.getElementById("f").value;
	var mail = document.getElementById("mail").value;
	var point = document.getElementById("point").value;
	var p1 = document.getElementById("p1").value;
//break here

	 var ml = document.getElementById("ml").value;
	 var website = document.getElementById("website").value;
	 var mail2 = document.getElementById("mail2").value;
	 var p2 = document.getElementById("p2").value;

//break here

	 var gds = document.getElementById("gds").value;  //id from input
	 var e = document.getElementById("e").value;
	 var location = document.getElementById("location").value;
	 var buisness = document.getElementById("buisness").value;
	 var insured = document.getElementById("insured").value;
	 var li = document.getElementById("li").value;
	 var info = document.getElementById("info").value;
	 

//break here
	 var sales = document.getElementById("sales").value;  //id from input
	 var legal = document.getElementById("legal").value;
	 var registered = document.getElementById("registered").value;
	 var bon = document.getElementById("bon").value;
	 var lnumber = document.getElementById("lnumber").value;
	
//break
	 var bank1 = document.getElementById("bank1").value;  //id from input
	 var bank2 = document.getElementById("bank2").value;
	 var bank3 = document.getElementById("bank3").value;
	 var bank4 = document.getElementById("bank4").value;
	
//break
	 var printed = document.getElementById("printed").value;
	 var sig = document.getElementById("sig").value;
	 var T = document.getElementById("T").value;
	 var D = document.getElementById("D").value;



    // this is only to check if fields are empty or not

	if (company=="")   // same as var name
	{
		document.getElementById("companyname").innerHTML="Pleas write company name"; // id from span
		return false; //because we dont want it to send to server
	}

	if((company.length <=2) || (company.length >50))
	{
		document.getElementById("companyname").innerHTML="Pleas write company name between 2 to 50 character"; // id from span
		return false; //because we dont want it to send to server
	}

	if(!isNaN(company))
	{
		document.getElementById("companyname").innerHTML="Only characters are allowed"; // id from span
		return false; //because we dont want it to send to server
	}




//telephone
	if (telephone=="")
	{
		document.getElementById("t").innerHTML="Pleas write telephone number"; // id from span
		return false; //because we dont want it to send to server
	}

	if((telephone.length <=2) || (telephone.length >10))
	{
		document.getElementById("t").innerHTML="Pleas write telephone number"; // id from span
		return false;
	}



	if (f=="")
	{
		document.getElementById("fax").innerHTML="Pleas provide fax information"; // id from span
		return false; //because we dont want it to send to server
	}

	if((f.length <=2) || (f.length >15))
	{
		document.getElementById("fax").innerHTML="Pleas provide currect input"; // id from span
		return false;
	}




	if (mail=="")
	{
		document.getElementById("email").innerHTML="Pleas write email"; // id from span
		return false; //because we dont want it to send to server
	}




	if (point=="")
	{
		document.getElementById("pc").innerHTML="Pleas provide point of contact"; // id from span
		return false; //because we dont want it to send to server
	}




	if (p1=="")
	{
		document.getElementById("cp1").innerHTML="Pleas write phone number"; // id from span
		return false; //because we dont want it to send to server
	}

	if((p1.length <=2) || (p1.length >10))
	{
		document.getElementById("cp1").innerHTML="Pleas write phone number with 10 digits only"; // id from span
		return false;
	}

//break is here

	if (ml=="")
	{
		document.getElementById("ma").innerHTML="Pleas provide mailing address"; // id from span
		return false; //because we dont want it to send to server
	}




	if (website=="")
	{
		document.getElementById("web").innerHTML="Pleas write website url here"; // id from span
		return false; //because we dont want it to send to server
	}



	if (mail2=="")
	{
		document.getElementById("ce").innerHTML="Pleas provide contact email"; // id from span
		return false; //because we dont want it to send to server
	}


	if (p2=="")
	{
		document.getElementById("cp2").innerHTML="Pleas provide contact phone number2 here"; // id from span
		return false; //because we dont want it to send to server
	}

    if((p2.length <=2) || (p2.length >10))
    {
    	document.getElementById("cp2").innerHTML="Mobile number should be 10 integers"; // id from span
		return false;
    }


	//break


	if (gds=="")
	{
		document.getElementById("gd").innerHTML="Pleas provide general details"; // id from span
		return false; //because we dont want it to send to server
	}


	if (e=="")
	{
		document.getElementById("dce").innerHTML="Pleas provide date here"; // id from span
		return false; //because we dont want it to send to server
	}


	if (location=="")
	{
		document.getElementById("gsa").innerHTML="Pleas provide geographic area"; // id from span
		return false; //because we dont want it to send to server
	}


	if (buisness=="")
	{
		document.getElementById("bt").innerHTML="Pleas provide buisness type"; // id from span
		return false; //because we dont want it to send to server
	}


	if (insured=="")
	{
		document.getElementById("i").innerHTML="Pleas answer yes or no"; // id from span
		return false; //because we dont want it to send to server
	}


	if (li=="")
	{
		document.getElementById("l").innerHTML="Pleas answer yes or no"; // id from span
		return false; //because we dont want it to send to server
	}


	if (info=="")
	{
		document.getElementById("ai").innerHTML="Pleas provide addtional information"; // id from span
		return false; //because we dont want it to send to server
	}
  //break


	if (sales=="")
	{
		document.getElementById("gas").innerHTML="Pleas give your gross annual sales"; // id from span
		return false; //because we dont want it to send to server
	}



	if (legal =="")
	{
		document.getElementById("ls").innerHTML="Pleas write your legal structure"; // id from span
		return false; //because we dont want it to send to server
	}


	if (registered =="")
	{
		document.getElementById("year").innerHTML="Pleas provide year here"; // id from span
		return false; //because we dont want it to send to server
	}


	if (bon =="")
	{
		document.getElementById("bonded").innerHTML="Pleas answer yes or no"; // id from span
		return false; //because we dont want it to send to server
	}


	if (lnumber =="")
	{
		document.getElementById("ln").innerHTML="Pleas provide your license number"; // id from span
		return false; //because we dont want it to send to server
	}

//break

if (bank1 =="")
	{
		document.getElementById("bankname").innerHTML="Pleas write your bank name"; // id from span
		return false; //because we dont want it to send to server
	}


	if (bank2 =="")
	{
		document.getElementById("bn").innerHTML="Pleas write benificiary name"; // id from span
		return false; //because we dont want it to send to server
	}


//account 
	if (bank3 =="")
	{
		document.getElementById("ac").innerHTML="Pleas provide account number"; // id from span
		return false; //because we dont want it to send to server
	}

    if((bank3.length <=2)  || (bank3.length >25))
    {

		document.getElementById("ac").innerHTML="Pleas provide account number upto 25 digits"; // id from span
		return false;
    }




	if (bank4 =="")
	{
		document.getElementById("bankaddress").innerHTML="Pleas write bank address"; // id from span
		return false; //because we dont want it to send to server
	}

//break


if (printed =="")
	{
		document.getElementById("typedname").innerHTML="Pleas provide printed typed name"; // id from span
		return false; //because we dont want it to send to server
	}


	if (sig =="")
	{
		document.getElementById("signature").innerHTML="Pleas upload e-signature"; // id from span
		return false; //because we dont want it to send to server
	}



	if (T =="")
	{
		document.getElementById("title").innerHTML="Pleas provide title here"; // id from span
		return false; //because we dont want it to send to server
	}


	if (D =="")
	{
		document.getElementById("dat").innerHTML="Pleas provide date here"; // id from span
		return false; //because we dont want it to send to server
	}


}	

