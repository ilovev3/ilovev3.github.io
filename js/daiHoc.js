var data = loadData()
if (!localStorage.getItem('data')) {
	localStorage.setItem('data', search(''))
} else {
	document.getElementById('export').innerHTML = localStorage.getItem('data')
}
function loadData() {
	let result = [];
	let xhttp = new XMLHttpRequest();
	xhttp.open('GET', '../../js/daiHoc.txt', false);
	xhttp.send();
	result = eval(xhttp.responseText);
	return result	
}
function xoa_dau(str) {
	str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
	str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
	str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
	str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
	str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
	str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
	str = str.replace(/đ/g, "d");
	str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "a");
	str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "e");
	str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "i");
	str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "o");
	str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "u");
	str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "y");
	str = str.replace(/Đ/g, "d");
	return str;
}
function find(data, keyWord) {
	let result = data.filter(item => {
		let normalizedkeyWord = xoa_dau(keyWord.toLowerCase());
		let normalizedItemStr = xoa_dau(item.join(' ').toLowerCase());
		return normalizedItemStr.indexOf(normalizedkeyWord) !== -1;
	});
	return result;
}
function search(inputValue) {
	let html = '';
	let result = [];
	result = inputValue ? find(data, inputValue) : data;
	for (let i = 0; i < result.length; i++) {
		html += `<a style="color: #000" href="diem-chuan.html?name=${result[i][1]}&url=${result[i][2]}${result[i][0]}.html">
			<div class="table__row">
				<div class="table__section table__section--nr">${result[i][0]}</div>
				<div class="table__section table__section--grow">${result[i][1]}</div>
			</div></a>
		`
	}
	document.getElementById('export').innerHTML = html
	return html;
}