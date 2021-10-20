function savasession()
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
	



//previous
	
sessionStorage.setItem("company", company);
console.log(sessionStorage.getItem('company'));
//this is to seed data in console
sessionStorage.setItem("telephone", "telephone");
sessionStorage.setItem("f", "f");
sessionStorage.setItem("mail","mail");
sessionStorage.setItem("point","point");
sessionStorage.setItem("p1", "p1");
sessionStorage.setItem("ml", "ml");
sessionStorage.setItem("website", "website");
sessionStorage.setItem("mail2", "mail2");
sessionStorage.setItem("p2", "p2");

sessionStorage.setItem("gds", "gds");
sessionStorage.setItem("e", "e");
sessionStorage.setItem("location", "location");
sessionStorage.setItem("buisness", "buisness");
sessionStorage.setItem("insured", "insured");
sessionStorage.setItem("li", "li");
sessionStorage.setItem("info", "info");
sessionStorage.setItem("sales", "sales");
sessionStorage.setItem("legal", "legal");
sessionStorage.setItem("registered", "registered");

sessionStorage.setItem("bon", "bon");
sessionStorage.setItem("lnumber", "lnumber");
sessionStorage.setItem("bank1", "bank1");
sessionStorage.setItem("bank2", "bank2");
sessionStorage.setItem("bank3", "bank3");
sessionStorage.setItem("bank4", "bank4");
sessionStorage.setItem("printed", "printed");
sessionStorage.setItem("sig", "sig");
sessionStorage.setItem("T", "T");
sessionStorage.setItem("D", "D");

}
