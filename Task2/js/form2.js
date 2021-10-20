function saveData()
	{
	
	let company,telephone,f,mail,point,p1,ml,website,mail2,p2,gds,e,location,buisness,insured,li,info,sales,legal,registered,bon,lnumber,bank1,bank2,bank3,bank4,printed,sig,T,D;

	company = document.getElementById('company').value;
	telephone = document.getElementById('telephone').value;
	f = document.getElementById('f').value;
	mail = document.getElementById('mail').value;
	point = document.getElementById('point').value;
	p1 = document.getElementById('p1').value;
	ml = document.getElementById('ml').value;
	website = document.getElementById('website').value;
	mail2 = document.getElementById('mail2').value;
	p2 = document.getElementById('p2').value;
	gds = document.getElementById('gds').value;
	e = document.getElementById('e').value;
	
	//break

	location =document.getElementById('location').value;
	buisness = document.getElementById('buisness').value;
	insured = document.getElementById('insured').value;
	li = document.getElementById('li').value;


	info = document.getElementById('info').value;
	sales = document.getElementById('sales').value;
	legal = document.getElementById('legal').value;
	registered = document.getElementById('registered').value;
	bon = document.getElementById('bon').value;
	lnumber = document.getElementById('lnumber').value;
	bank1 = document.getElementById('bank1').value;


	bank2 = document.getElementById('bank2').value;
	bank3 = document.getElementById('bank3').value;
	bank4 = document.getElementById('bank4').value;

	printed = document.getElementById('printed').value;
	sig = document.getElementById('sig').value;
	T = document.getElementById('T').value;
	D = document.getElementById('D').value;
	


	localStorage.setItem("company",company)
	localStorage.setItem("telephone",telephone)
	localStorage.setItem("f",f)
	localStorage.setItem("mail",mail)
	localStorage.setItem("point",point)
	localStorage.setItem("p1",p1)
	localStorage.setItem("ml",ml)
	localStorage.setItem("website",website)
	localStorage.setItem("mail2",mail2)
	localStorage.setItem("p2",p2)
	localStorage.setItem("gds",gds)
	localStorage.setItem("e",e)

	localStorage.setItem("location",location)
	localStorage.setItem("buisness",buisness)
	localStorage.setItem("insured",insured)
	localStorage.setItem("li",li)
	localStorage.setItem("info",info)
	localStorage.setItem("sales",sales)
	localStorage.setItem("legal",legal)
	localStorage.setItem("registered",registered)


	localStorage.setItem("bon",bon)
	localStorage.setItem("lnumber",lnumber)
	localStorage.setItem("bank1",bank1)
	localStorage.setItem("bank2",bank2)
	localStorage.setItem("bank3",bank3)
	localStorage.setItem("bank4",bank4)
	localStorage.setItem("printed",printed)
	localStorage.setItem("sig",sig)
	localStorage.setItem("T",T)
	localStorage.setItem("D",D)

}
