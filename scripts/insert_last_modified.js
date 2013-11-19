window.onload=function () {
	var last_modified = new Date(document.lastModified);
	var last_modified_formatted = last_modified.toLocaleString();
	
	var occurances = document.querySelectorAll('.last_modified');
	
	for (var i = 0; i < occurances.length; i++) {
		occurances[i].textContent=last_modified_formatted;
	}
	
}