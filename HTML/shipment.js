var empresas = ["Husqvarna","Pramac","CEMEX","Kipor","Hyundai","BCS","Bosch","Murray","Master Climate","Hitachi","Faraone","Makita","Solter","SIMA","MG","Benza","kaiser", "Swiss Tools", "Perkins", "Cummins"];
var puertos = ["Shanghai","Singapore","Shenzhen","Ningbo-Zhoushan","Hong Kong","Busan","Guangzhou","Qingdao","Dubai","Tianjin","Rotterdam","Port Klang","Kaohsiung","Antwerp","Dalian","Xiamen","Tanjung Pelepas","Hamburg","Yingkou","Ho Chi Minh City","Bremen/Bremerhaven","Tokyo","Valencia","Algeciras","Jawaharlal Nehru","Felixstowe","Manila","Santos","Colon","Marsaxlokk","Vancouver","Genoa","Ambarli"];
var codtracking =[];
var contadorletra=0;
// Math.floor((Math.random() * 10000) + 1000);
	numempresa = Math.floor(Math.random() * (empresas.length)+0);
	empresasel = empresas[numempresa];
	salida = Math.floor(Math.random() * (puertos.length)+0);
	puertosalida = puertos[salida];
	do{
	destino = Math.floor(Math.random() * (puertos.length)+0);
	}
	while(destino==salida);
	puertodestino = puertos[destino];
	numerotracking = Math.floor((Math.random() * 10000) + 1000);
	letratracking = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
	do{
	inicialestracking = Math.floor(Math.random() * (letratracking.length)+0);
	codtracking.push(letratracking[inicialestracking]);
	contadorletra ++;
	}
	while(contadorletra<3);
	var lineaenvio='CAPTURED! CODETRACKING: '+codtracking[0]+codtracking[1]+codtracking[2]+numerotracking+' '+empresasel+' FROM '+puertosalida+' TO '+puertodestino;
	contadorletra=0;
	codtracking=[];
	