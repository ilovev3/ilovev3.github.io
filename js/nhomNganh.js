var params = new URLSearchParams(window.location.search)
var id = Number(params.get('id'))
let name = params.get('name')
document.getElementById("title").innerHTML = `Danh sách các trường đào tạo nhóm ngành ${name}`

let data = loadDataNhomNganh().find(res => res.includes(id))[1]
setTimeout(() => {
	renderNhomNganh(data)
}, 37)

function loadDataNhomNganh() {
	let result = [];
	let xhttp = new XMLHttpRequest();
	xhttp.open('GET', '../../js/nhom-nganh.txt', false);
	xhttp.send();
	result = eval(xhttp.responseText);
	return result	
}

function renderNhomNganh(data) {
	let html = '<div class="table__row"><div class="table__section table__section--header">Ngành</div><div class="table__section table__section--header">Điểm (2022)</div><div class="table__section table__section--header">Tổ hợp</div><div class="table__section table__section--header">Trường</div><div class="table__section table__section--header">Xem thêm</div></div>';
	for (let i = 0; i < data.length; i++) {
		html += `<div class="table__row">
					<div class="table__section">${data[i][0]}</div>
					<div class="table__section">${data[i][1]}</div>
					<div class="table__section">${data[i][2].replace(/,/g, '; ')}</div> 
					<div class="table__section">${data[i][3]}</div>				
					<div class="table__section"><a target="_system" href="https://www.google.com/search?q=${data[i][0]} ${data[i][3]}" class="button button--main button--ex-small">xem thêm</a></div>
				</div>`
	}
	document.getElementById('export').innerHTML = html;
}