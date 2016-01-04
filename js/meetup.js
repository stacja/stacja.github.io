function GetMembers() {
        $.ajaxSetup({ cache: false });
        $.getJSON("https://api.meetup.com/2/members?group_urlname=StacjaIT&key=7027be4747735e5467341e684f78&callback=?", drawMembers);
          //  function(data) { 
			 
				
			//}); 

	
}
function drawMembers(data){
			  var row='<div class="row">';
		      $.each(data.results, function (i, item) {
				
				row+=drawMember(item,i);
				if ((i%6==5)||i==data.results.length-1) {
					row+="</div>";
					$("#communiy-list").append(row);
					row='<div class="row">';
				}
			});
		$("#communiy-list").append("</div>"); 
	
}
function drawMember(rowData, i) {
	var member='';
	member += '<div class="col-md-2"><div class="team-member">';
	if (rowData.photo) member += "<img class='img-responsive img-circle' src='"+rowData.photo.photo_link+"'/>" ;
	else member += "<img class='img-responsive img-circle' src='img/avatar.png'/>" ;
	member+="<h4>"+rowData.name+"</h4>";
	member+="</div></div>";
	
	return member;
}

$(document).ready(function() {
        GetMembers();
 });