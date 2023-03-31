function copyText(fieldId) {
	var copyText = document.getElementById(fieldId);
	copyText.select();
	copyText.setSelectionRange(0, 99999);
	navigator.clipboard.writeText(copyText.value);
}

function genQR(e) {
	let content = e.value;
	let url = `https://qr.nguyenduchoang.repl.co/api?content=${content}`;
	let xhttp = new XMLHttpRequest();
	xhttp.open('GET', url, false);
	xhttp.send();
	if (xhttp.status === 200) {
		let img = xhttp.responseText
		document.getElementById('displayQR').innerHTML = `<li><img src="${img}" id="image"></li>`;
	} else {
		console.log('Lỗi');
	}
}

function downQR() {
	let image = document.getElementById('image');
	let link = document.createElement('a');
	link.href = image.src;
	link.download = 'qr.png';
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
}

function tinhXuoi() {
	document.getElementById('reActive').className = 'popup popup--centered popup--shadow popup--success active';
	var toan = document.getElementById('toan').value;
	var van = document.getElementById('van').value;
	var anh = document.getElementById('anh').value;
	var ly_su = document.getElementById('ly_su').value;
	var hoa_dia = document.getElementById('hoa_dia').value;
	var sinh_cd = document.getElementById('sinh_cd').value;
	var tb12 = document.getElementById('tb12').value;
	var kk = document.getElementById('kk').value;
	var ut = document.getElementById('ut').value;

	if ((Number(toan) <= 1) || (Number(van) <= 1) || (Number(anh) <= 1) || (Number(ly_su) <= 1) || (Number(hoa_dia) <= 1) || (Number(sinh_cd) <= 1)) {
		document.getElementById('popup').style.display = '';
		document.getElementById('react').src = '../../assets/images/icons/sad.svg';
		document.getElementById('tbKq').innerHTML = 'Chúng tôi biết bạn đã rất cố gắng, nhưng vì bạn đã có một môn học bị điểm liệt nên bạn đã trật tốt nghiệp :(';
		document.getElementById('tbKqt').innerHTML = '';
	} else {
		var toan_van_anh = Number(toan) + Number(van) + Number(anh);
		var khtn_khxh = (Number(ly_su) + Number(hoa_dia) + Number(sinh_cd)) / 3;
		var tu_so = ((toan_van_anh + khtn_khxh + Number(kk)) / 4) * 7 + Number(tb12) * 3;
		var kqua = (tu_so / 10) + Number(ut);

		if (Number(kqua.toFixed(2)) <= 4.99) {
			document.getElementById('popup').style.display = '';
			document.getElementById('react').src = '../../assets/images/icons/sad.svg';
			document.getElementById('tbKq').innerHTML = 'Chúng tôi biết bạn đã cố gắng rất nhiều, nhưng bạn đã trật tốt nghiệp :(';
			document.getElementById('tkKqt').innerHTML = `Điểm xét tốt nghiệp của bạn là <b>${Number(kqua.toFixed(2))}</b>đ`
		} else {
			document.getElementById('popup').style.display = '';
			document.getElementById('react').src = '../../assets/images/icons/happy.svg';
			document.getElementById('tbKq').innerHTML = 'Xin chúc mừng!!';
			document.getElementById('tbKqt').innerHTML = `Điểm xét tốt nghiệp của bạn là <b>${Number(kqua.toFixed(2))}</b>đ<br>Bạn đã đủ điều kiện tốt nghiệp THPT`;
		}
	}
}

function tinhNguoc() {
	document.getElementById('reActive').className = 'popup popup--centered popup--shadow popup--success active';
	var tb12_n = document.getElementById('tb12_n').value;
	var kk_n = document.getElementById('kk_n').value;
	var ut_n = document.getElementById('ut_n').value;
	var th = (((((5 - Number(ut_n)) * 10) - (Number(tb12_n) * 3)) * 4) / 7) - Number(kk_n);
	var tb = Number(th) / 4;
	document.getElementById('popup').style.display = '';
	document.getElementById('react').src = '../../assets/images/icons/checked.svg';
	document.getElementById('tbKq').innerHTML = 'Success!!';
	document.getElementById('tbKqt').innerHTML = `Để đủ điều kiện tốt nghiệp THPT thì bạn cần tối thiểu ${tb.toFixed(2)}đ cho mỗi môn thi <br> Và không có môn nào ≤1đ`;
}

function getOTP(e) {
	let secret = e.value;
	let url = `https://otp.nguyenduchoang.repl.co/api?secret=${secret}`;
	let xhttp = new XMLHttpRequest();
	xhttp.open('GET', url, false);
	xhttp.send();
	if (xhttp.status === 200) {
		document.getElementById('otp').value = xhttp.responseText;
	}
}