if (!localStorage.getItem('majors')) {
	let data = loadNhomNganh()
	localStorage.setItem('majors', nhomNganh(data))
} else {
	document.getElementById('exportMajors').innerHTML = localStorage.getItem('majors')
}
function loadNhomNganh() {
	let result = [];
	let xhttp = new XMLHttpRequest();
	xhttp.open('GET', '../../js/nganh.txt', false);
	xhttp.send();
	result = eval(xhttp.responseText);
	return result	
}
function nhomNganh(data) {
	let html = '';
	for (let i = 0; i < data.length; i++) {
		html += `<a style="color: #ffaf00" href="/pages/pages/nhom-nganh.html?id=${data[i][0]}&name=${data[i][1]}"><div style="border: 1.2px solid #4352e0" class="table mb-10">
					<center><b>${data[i][1]}</b></center>
				</div></a>`
	}
	document.getElementById('exportMajors').innerHTML = html;
	return html;
}