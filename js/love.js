function timThinh() {
	let gender = document.getElementById('gender_oc').value;
	let describe = document.getElementById('describe_oc').value;
	let hobby = document.getElementById('hobby_oc').value;
	let social = document.getElementById('social_oc').value;
	if (gender == 'male') {
		gt = 'female';
	} else {
		gt = 'male';
	}
	let xhttp = new XMLHttpRequest();
	xhttp.open("GET", "https://thinh.nguyenduchoang.repl.co/data", false);
	xhttp.send();
	if (xhttp.status === 200) {
		thinhResult(JSON.parse(xhttp.responseText), gt);
	};

	xhttp.open("GET", `https://ca.nguyenduchoang.repl.co/?gender=${gender}&describe=${describe}&hobby=${hobby}&social=${social}`, false);
	xhttp.send();
	localStorage.setItem('submit', [gt, 'ca']);
};

function thaThinh() {
	let gender = document.getElementById('gender_ot').value;
	let thinh = document.getElementById('thinh').value;
	let describe = document.getElementById('describe_ot').value;
	let hobby = document.getElementById('hobby_ot').value;
	let social = document.getElementById('social_ot').value;
	if (gender == 'male') {
		gt = 'female';
	} else {
		gt = 'male';
	}
	let xhttp = new XMLHttpRequest();
	xhttp.open("GET", "https://ca.nguyenduchoang.repl.co/data", false);
	xhttp.send();
	if (xhttp.status === 200) {
		caResult(JSON.parse(xhttp.responseText), gt);
	};

	xhttp.open("GET", `https://thinh.nguyenduchoang.repl.co/?gender=${gender}&thinh=${thinh}&describe=${describe}&hobby=${hobby}&social=${social}`, false);
	xhttp.send();
	localStorage.setItem('submit', [gt, 'thinh']);
};

function thinhResult(data, gt) {
	let html = '<h2 class="page__title">Nè, của bạn tất 🤣</h2>';
	for (let i = 0; i < data.length; i++) {
		if (data[i].includes(gt)) {
			html += `
				<div id="${i}" class="card card--style-inline card--style-inline-bg_love card--style-round-corners">
					<div class="card__icon"><a href="${data[i][4]}"><img src="../../assets/images/icons/messenger.svg"></a></div>
					<div class="card__details">
						<h4 class="card__cap">${data[i][1]}</h4>
						<p class="card__text_love"><b>Giới thiệu</b>: ${data[i][2]}</p>
						<p class="card__text_love"><b>Sở thích</b>: ${data[i][3]}</p>
					</div>
					<div class="card__check"><a href="#" onclick="delItem('${data[i][4]}', '${i}', 'thinh')"><img src="../../assets/images/icons/check.svg"></a></div>
				</div>
			`
		};
	};
	document.getElementById('renderResult').className = 'cards cards_love';
	document.getElementById('renderResult').innerHTML = html + '<button onclick="undo()" class="form__submit button button--main button--full">LÀM LẠI</button>';
};

function caResult(data, gt) {
	let html = '<h2 class="page__title">Nè, của bạn tất 🤣</h2>';
	for (let i = 0; i < data.length; i++) {
		if (data[i].includes(gt)) {
			html += `
				<div id="${i}" class="card card--style-inline card--style-inline-bg_love card--style-round-corners">
					<div class="card__icon"><a href="${data[i][3]}"><img src="../../assets/images/icons/messenger.svg"></a></div>
					<div class="card__details">
						<h4 class="card__cap"><b>Giới thiệu</b>: ${data[i][1]}</h4>
						<p class="card__text_love"><b>Sở thích</b>: ${data[i][2]}</p>
					</div>
					<div class="card__check"><a href="#" onclick="delItem('${data[i][3]}', '${i}', 'ca')"><img src="../../assets/images/icons/check.svg"></a></div>
				</div>
			`
		};
	};
	document.getElementById('renderResult').className = 'cards cards_love';
	document.getElementById('renderResult').innerHTML = html + '<button onclick="undo()" class="form__submit button button--main button--full">LÀM LẠI</button>';
};

function delItem(item, i, ojb) {
	let xhttp = new XMLHttpRequest();
	xhttp.open("GET", `https://${ojb}.nguyenduchoang.repl.co/del?item=${item}`, false);
	xhttp.send();
	document.getElementById(i).remove();
}

function undo() {
	localStorage.removeItem('submit');
	location.reload();
}

window.addEventListener("load", (event) => {
	if (localStorage.getItem('submit')) {
		let xhttp = new XMLHttpRequest();
		var s = localStorage.getItem('submit').split(',');
		if (s[1] == 'ca') {
			xhttp.open("GET", "https://thinh.nguyenduchoang.repl.co/data", false);
			xhttp.send();
			if (xhttp.status === 200) {
				thinhResult(JSON.parse(xhttp.responseText), s[0]);
			};
		} else {
			xhttp.open("GET", "https://ca.nguyenduchoang.repl.co/data", false);
			xhttp.send();
			if (xhttp.status === 200) {
				caResult(JSON.parse(xhttp.responseText), s[0]);
			};
		}
	} else {
		var html = `
				<h2 class="page__title">Thả thính theo phong cách Vinh3</h2>
				<p class="welcome">
					Nghe lạ quá, nhất định phải thử liền mới được nà
				</p>
				
				<h3>Bạn là...</h3>
				<div class="tabs tabs--style2 mb-20">
					<input type="radio" name="tabs2" class="tabs__radio" id="tab1">
					<label class="tabs__label tabs__label--12_love" for="tab1">CÁ</label>	
					<div class="tabs__content">
						<h4 style="text-align: center;padding-bottom: 0;">Cá ơi, càng chuẩn càng tốt nhé 🤣</h4>
						<div class="field_love">
							<div class="form">
								<form>
									<div class="form__row">
										<div class="form__select">
											<select id="gender_oc">
												<option value="female">Nữ</option>
												<option value="male">Nam</option>
											</select>
										</div>
									</div>
									<div class="form__row">
										<textarea id="describe_oc" class="form__textarea" placeholder="Sơ qua về bản thân (cute/ga lăng/hướng ngoại...)"></textarea>
									</div>
									<div class="form__row">
										<textarea id="hobby_oc" class="form__textarea" placeholder="Sở thích của bạn là gì?"></textarea>
									</div>
									<div class="form__row">
										<input id="social_oc" type="url" class="form__input" placeholder="Facebooke Username" required>
									</div>
									<div class="form__row mt-40">
										<a onclick="timThinh()" class="form__submit button button--love button--full">TÌM THÍNH</a>
									</div>
								</form>
							</div>
						</div>
					</div>
		
					<input type="radio" name="tabs2" class="tabs__radio" id="tab2">
					<label class="tabs__label tabs__label--12_love" for="tab2">THÍNH</label>
					<div class="tabs__content">
						<h4 style="text-align: center;padding-bottom: 0;">Rắc vừa thôi kẻo cá ngạt thở 😆</h4>
						<div class="field_love">
							<div class="form">
								<form>
									<div class="form__row">
										<div class="form__select">
											<select id="gender_ot">
												<option value="male">Nam</option>
												<option value="female">Nữ</option>
											</select>
										</div>
									</div>
									<div class="form__row">
										<textarea id="thinh" class="form__textarea" placeholder="Làm một ít thính bỏ vào đây..." required></textarea>
									</div>
									<div class="form__row">
										<textarea id="describe_ot" class="form__textarea" placeholder="Sơ qua về bản thân (cute/ga lăng/hướng ngoại...)"></textarea>
									</div>
									<div class="form__row">
										<textarea id="hobby_ot" class="form__textarea" placeholder="Sở thích của bạn là gì?"></textarea>
									</div>
									<div class="form__row">
										<input id="social_ot" type="url" class="form__input" placeholder="Facebooke Username" required>
									</div>
									<div class="form__row mt-40">
										<button onclick="thaThinh()" class="form__submit button button--love button--full">THẢ THÍNH</button>
									</div>
								</form>
							</div>
						</div>
					</div> 
				</div>

				<div class="entry_love">
					<h2>Bạn cần làm gì?</h2>
					<h3>Cách chọn cá/tìm thính</h3>
					<p>Submit form, bạn sẽ tìm đối tượng ưng ý (hoặc nếu chưa có thì chờ lúc khác)</p>
					<p>Sau đó bấm vào biểu tượng <b><i>Messenger</i></b> để nhắn tin cho nhau</p>
					<ul class="custom-listing custom-listing--checked mb-20">
						<li>Nếu 2 bạn hợp nhau, thì đừng quên quay lại và nhấn vào dấu tick để xác nhận là đã tìm được <i>"nửa kia"</i></li>
						<li>Nếu chưa thì... tiếp tục thuiii</li>
					</ul>
					<h3>Facebook Username</h3>
					<p>Để lấy <b><i>Facebook @Username</i></b> bạn có thể vào <b><i>Messenger</i></b> ➤ <b><i>Tên người dùng</i></b></p>
					<ul class="custom-listing custom-listing--checked mb-20">
						<li>Nếu chưa có @Username, bạn nhấn vào <b><i>Chỉnh sửa tên người dùng</i></b> để tạo, sau đó quay lại và chọn <b><i>Sao chép liên kết</i></b></li>
						<li>Nếu đã đặt tên người dùng, bạn chỉ cần nhấn <b><i>Sao chép liên kết</i></b></li>
					</ul>
				</div>
		`
		document.getElementById('renderResult').innerHTML = html;
	}
});