window.addEventListener('load', () =>{
	



	// const param = (new URL(document.location)).searchParams;
	// const company = params.get('company');
	// const telephone = params.get('telephone');


   const company = localStorage.getItem('company');
   const telephone = localStorage.getItem('telephone');
   const f = localStorage.getItem('f');
   const mail = localStorage.getItem('mail');
   const point = localStorage.getItem('point');
   const p1 = localStorage.getItem('p1');
   const ml = localStorage.getItem('ml');
   const website = localStorage.getItem('website');
   const mail2 = localStorage.getItem('mail2');
   const p2 = localStorage.getItem('p2');

   const gds = localStorage.getItem('gds');
   const e = localStorage.getItem('e');
   const location = localStorage.getItem('location');
   const buisness = localStorage.getItem('buisness');
   const insured = localStorage.getItem('insured');
   const li = localStorage.getItem('li');
   const info = localStorage.getItem('info');
   const sales = localStorage.getItem('sales');
   const legal = localStorage.getItem('legal');
   const registered = localStorage.getItem('registered');

   const bon = localStorage.getItem('bon');
   const lnumber = localStorage.getItem('lnumber');
   const bank1 = localStorage.getItem('bank1');
   const bank2 = localStorage.getItem('bank2');
   const bank3 = localStorage.getItem('bank3');
   const bank4 = localStorage.getItem('bank4');
   const printed = localStorage.getItem('printed');
   const sig = localStorage.getItem('sig');
   const T = localStorage.getItem('T');
   const D = localStorage.getItem('D');

    
	document.getElementById('company').innerHTML= company;
	document.getElementById('telephone').innerHTML= telephone;
	document.getElementById('f').innerHTML= f;
	document.getElementById('mail').innerHTML= mail;
	document.getElementById('point').innerHTML= point;
	document.getElementById('p1').innerHTML= p1;
	document.getElementById('ml').innerHTML= ml;
	document.getElementById('website').innerHTML= website;
	document.getElementById('mail2').innerHTML= mail2;
	document.getElementById('p2').innerHTML= p2;

	document.getElementById('gds').innerHTML= gds;
	document.getElementById('e').innerHTML= e;
	document.getElementById('location').innerHTML= location;
	document.getElementById('buisness').innerHTML= buisness;
	document.getElementById('insured').innerHTML= insured;
	document.getElementById('li').innerHTML= li;
	document.getElementById('info').innerHTML= info;
	document.getElementById('sales').innerHTML= sales;
	document.getElementById('legal').innerHTML= legal;
	document.getElementById('registered').innerHTML= registered;

	document.getElementById('bon').innerHTML= bon;
	document.getElementById('lnumber').innerHTML= lnumber;
	document.getElementById('bank1').innerHTML= bank1;
	document.getElementById('bank2').innerHTML= bank2;
	document.getElementById('bank3').innerHTML= bank3;
	document.getElementById('bank4').innerHTML= bank4;
	document.getElementById('printed').innerHTML= printed;
	document.getElementById('sig').innerHTML= sig;
	document.getElementById('T').innerHTML= T;
	document.getElementById('D').innerHTML= D;



})


