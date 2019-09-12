var json = [{origem:"brunohtrevisan", destinatario: "flavin@"}, 
			{origem:"Lemos", destinatario: "ALOALO"}];

$(document).ready(function() {
	MontaEmails();	
});

function MontaEmails(){

	var html = "";

	for(var i = 0; i < json.length; i++){

		html += "<tr>";
		html += "<td>" + json[i].origem + "</td>";
		html += "<td>" + json[i].destinatario + "</td>";
		html += "</tr>";

		$("#tCaixaDeEntrada").append(html);
	}
}