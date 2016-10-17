/* popis slika u galeriji NAPOMENA: tumbnail-ovi u galeriji moraju biti 175x131 px i imati ime mala-(ime slike.ekstenzija slike) */
slike = new Array("grb.gif", "1958.jpg", "1972.jpg", "1977.jpg", "1987.jpg", "1995.jpg", "1995-zvoncac.jpg", "1997-juniori.jpg", "1997.jpg", "1999.jpg", "2004-seniori.jpg", "2004-mladi_juniori.jpg", "finale2lige99.jpg", "primosten1.jpg", "primosten2.jpg", "riva.jpg", "riva2.jpg", "zalazak.jpg", "panorama.jpg");
/* opisi slika u galeriji, imaju isti index ka slike u slike[index] polju	*/
opisi = new Array("Grb vaterpolo kluba Croatia Turanj",
"1958.<br/>stoje: Božidar Santini, Marcelo Santini, --, Božidar Santini (Božokulov), Boro Mandić, Pere Vidas, Ante Pedisić (Kurkutov)",
"1972.<br/>stoje: Neven Santini, --, Ivica Pedišić, Niko Santini, Jordan Bolić, Boško Santini<br/>čuče: Vito Santini, Zorko Pedišić, Nenad Santini, Timotej Santini, --", 
"1977.<br/>stoje: Davor Santini, Ivica Pirović, Damir Santini, - Medić, Jordan Bolić, Zvjezdan Santini, Milan Santini, Joško Mišulić<br/>čuče: Damir Vidas, Ante Santini, Klaudio Jačan, Željko Budanović, Boris Raspović", 
"1987.<br/>stoje: Timotej Santini, Boško Santini, Ante Santini, Ðoni Deković, Damir Santini, Elvis Mandić, Nenad Santini<br/>čuče: Elvis Stepanović, Albino Pedisić, Robert Vidas, Danijel Mandić", 
"1995. - pobjednici na prvom memorijalnom turniru 'Danijel Mandić'<br/>stoje: Zoran Džaferagić, Hrvoje Pedisić, Damir Santini, Vinko Klarić, Ðoni Rota, Stipe Bilaver, Ivan Matulj, Marko Budanović, Krunoslav Santini, Ivan Matković, Milan Santini<br/>čuče: Ivan Putrić, Vid Pedisić, Boris Santini, Martin Mišulić, Nikola Deković, Hrvoje Mišulić, Simeon Bolić, Jurica Butić, Vitomir Santini<br/>sjede: Blaž Budanović, Špiro Mandić, Ivan Mandić",
"Split 1995. na bazenu Zvončac - završni turnir kadetskog prvenstva Hrvatske, plava skupina<br/>stoje: Hrvoje Pedisić, Đoni Rota, Nikola Deković, Ivan Matulj, Zoran Džaferagić, Stipe Bilaver, Marko Budanović<br/>sjede: Marino Mandić, Boris Santini, Josip Santini, Hrvoje Mišulić, Ivan Putrić, Martin Mišulić",
"1997. - juniorski prvaci u skupini Srednji Jadran<br/>sjede: Krunoslav Santini, Josip Santini, Hrvoje Mišulić, Martin Mišulić, Nikola Deković,  Đoni Rota, Marko Budanović<br/>čuče: Marino Mandić, Mladen Bezinović, Simeon Bolić, Marin Santini, Vitomir Santini",
"Osijek 1997. - prvenstvo Hrvatske III. liga, sjever<br/>stoje: Marko Budanović, Nikola Deković, Josip Santini, Đoni Rota, Borna Hrestak, Neven Santini<br/>sjede: Tonči Cvitan, Joško Radnić, Branimir Belamarić, Antonio Jakelić, Marin Vidas<br/>sjede: Simeon Bolić, Krunoslav Santini, Hrvoje Mišulić, Ive Rota, Marino Mandić",
"Biograd 1999. - Prvaci II. hrvatske lige, sjever<br/>Predrag Majica, Marin Vidas, Ðoni Rota, Joško Radnić, Davor Šimičić , Vid Pedisić, Marko Budanović, <br/>Mate Jurčević, Nikola Deković, Željko Kovačić, Dražen Adžić, Boris Santini, Marino Mandić", 
"2004. III. HVL seniori<br/>Đoni Rota, Marko Cvitan, Marin Cvitan, Josip Santini, Nikola Deković, Mario Bezinović, Ante Santini<br/>Mate Santini, Marko Mandić, Elvis Stepanović, Goran Jakov Matulj, Božidar Vidas, Toni Santini", 
"2004. III. HVL juniori<br/>Nikola Deković, Marko Mandić, Elvis Stepanović, Filip Santini, Goran Jakov Matulj, Tome Mandić, Đoni Rota<br/>Ivan Lučić, Mario Santini, Luka Budanović, Ivan Bezinović, Božidar Vidas, Paulo Santini",
"1999. - finalna utakmica doigravanja za prvaka II. hrvatske lige", "III HVL. Croatia Turanj - Primošten", "III HVL. Croatia Turanj - Primošten", "Turanj", "Turanj", "Zalazak sunca u Turnju", "Panorama Turnja");
/* opisi slika u galeriji engleske verzije	*/
en_opisi = new Array("Water polo club Croatia Turanj emblem",
"1958.<br/>Božidar Santini, Marcelo Santini, --, Božidar Santini (Božokulov), Boro Mandić, Pere Vidas, Ante Pedisić (Kurkutov)",
"1972.<br/>Neven Santini, --, Ivica Pedišić, Niko Santini, Jordan Bolić, Boško Santini<br/>Vito Santini, Zorko Pedišić, Nenad Santini, Timotej Santini, --", 
"1977.<br/>Davor Santini, Ivica Pirović, Damir Santini, - Medić, Jordan Bolić, Zvjezdan Santini, Milan Santini, Joško Mišulić<br/>Damir Vidas, Ante Santini, Klaudio Jačan, Željko Budanović, Boris Raspović", 
"1987.<br/>Timotej Santini, Boško Santini, Ante Santini, Ðoni Deković, Damir Santini, Elvis Mandić, Nenad Santini<br/>Elvis Stepanović, Albino Pedisić, Robert Vidas, Danijel Mandić", 
"1995. - winners of first memorial tour 'Danijel Mandić'<br/>Zoran Džaferagić, Hrvoje Pedisić, Damir Santini, Vinko Klarić, Ðoni Rota, Stipe Bilaver, Ivan Matulj, Marko Budanović, Krunoslav Santini, Ivan Matković, Milan Santini<br/>Ivan Putrić, Vid Pedisić, Boris Santini, Martin Mišulić, Nikola Deković, Hrvoje Mišulić, Simeon Bolić, Jurica Butić, Vitomir Santini<br/>Blaž Budanović, Špiro Mandić, Ivan Mandić",
"Split 1995. - final tour of cadet category Croatian championship, blue division<br/>Hrvoje Pedisić, Đoni Rota, Nikola Deković, Ivan Matulj, Zoran Džaferagić, Stipe Bilaver, Marko Budanović<br/>Marino Mandić, Boris Santini, Josip Santini, Hrvoje Mišulić, Ivan Putrić, Martin Mišulić",
"1997. - juniorski prvaci u skupini Srednji Jadran<br/>Krunoslav Santini, Josip Santini, Hrvoje Mišulić, Martin Mišulić, Nikola Deković,  Đoni Rota, Marko Budanović<br/>Marino Mandić, Mladen Bezinović, Simeon Bolić, Marin Santini, Vitomir Santini",
"Osijek 1997. - II. Croatian league (north division) championship<br/>Marko Budanović, Nikola Deković, Josip Santini, Đoni Rota, Borna Hrestak, Neven Santini<br/>Tonči Cvitan, Joško Radnić, Branimir Belamarić, Antonio Jakelić, Marin Vidas<br/>Simeon Bolić, Krunoslav Santini, Hrvoje Mišulić, Ive Rota, Marino Mandić",
"Biograd 1999. - II. Croatian league (north division) champions<br/>Predrag Majica, Marin Vidas, Ðoni Rota, Joško Radnić, Davor Šimičić , Vid Pedisić, Marko Budanović, <br/>Mate Jurčević, Nikola Deković, Željko Kovačić, Dražen Adžić, Boris Santini, Marino Mandić", 
"2004. Final match III. HVL seniors, division Šibenik<br/>Đoni Rota, Marko Cvitan, Marin Cvitan, Josip Santini, Nikola Deković, Mario Bezinović, Ante Santini<br/>Mate Santini, Marko Mandić, Elvis Stepanović, Goran Jakov Matulj, Božidar Vidas, Toni Santini", 
"2004. III. HVL juniors<br/>Nikola Deković, Marko Mandić, Elvis Stepanović, Filip Santini, Goran Jakov Matulj, Tome Mandić, Đoni Rota<br/>Ivan Lučić, Mario Santini, Luka Budanović, Ivan Bezinović, Božidar Vidas, Paulo Santini",
"1999. - final match in play-off for II. Croatian league champion", "III HVL. Croatia Turanj - Primošten", "III HVL. Croatia Turanj - Primošten", "Turanj", "Turanj", "Turanj", "Panoramic view of Turanj");

function galerija(){		/* prikazuje tumbnail-ove slika u galeriji */
	for(i = 0; i < slike.length; i++){
		document.writeln("<a href='#' onclick='prikaz(", i, ")' ><img src='slike/foto_galerija/mala-", slike[i], "' border='0'/></a>");
	}
	document.close();
}
function prikaz(index){	/* prikazuje odabranu sliku u iston prozoru(brise sadrzaj) */
		window.name = index;
		window.location.href = "foto_galerija_prikaz.html";
}
function nazad(){	/* prikazuje prethodnu sliku u galeriji	*/
	if(window.name == 0) otvori_galeriju();
	else prikaz(--window.name);
}
function naprid(){	/* prikazuje slijedecu sliku u galeriji	*/
	if(window.name == (slike.length - 1)) otvori_galeriju();
	else prikaz(++window.name);
}
function otvori_galeriju(){window.location.href = "foto_galerija.html";}	/* vraca se u galeriju	*/
/* funkcije za englesku verziju stranica (isto ime sa prefikson "en_"	*/
function en_galerija(){
	for(i = 0; i < slike.length; i++){
		document.writeln("<a href='#' onclick='en_prikaz(", i, ")' ><img src='slike/foto_galerija/mala-", slike[i], "' border='0'/></a>");
	}
	document.close();
}
function en_prikaz(index){
	window.name = index;
	window.location.href = "photo_gallery_show.html";
}
function en_nazad(){
	if(window.name == 0) en_otvori_galeriju();
	else en_prikaz(--window.name);
}
function en_naprid(){
	if(window.name == (slike.length - 1)) en_otvori_galeriju();
	else en_prikaz(++window.name);
}
function en_otvori_galeriju(){window.location.href = "photo_gallery.html";}