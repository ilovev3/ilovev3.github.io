var params = new URLSearchParams(window.location.search)
var url = params.get('url')
var name = params.get('name')
var years = '2022'

document.getElementById('title').innerHTML = `Điểm chuẩn ${name}`
document.getElementById('exportTable').innerHTML = 'VUI LÒNG CHỜ TRONG GIÂY LÁT...'

function exportTable(url, years) {
    var xhr = new XMLHttpRequest()
    xhr.open('GET', `https://dh.nguyenduchoang.repl.co/api?url=${url}?y=${years}`, false)
    xhr.send()
    var result = xhr.responseText;
    if ((xhr.status == 200) && (!result.includes('chưa được công bố</p>'))) {
        var table = result.split('<table width="100%" border="0" cellpadding="0" cellspacing="0">')[1].split('</table>')[0]
        var newTable = table.replace(/width="[\d]*%"/g, '').replace(/class=|"bg_white"|"gray"/g, '');
        document.getElementById('exportTable').innerHTML = newTable;
    } else {
        document.getElementById('export').innerHTML = '<center>KHÔNG CÓ KẾT QUẢ</center>'
    }
}

function selectYear(e) {
    var y = e.value;
    exportTable(url, y);
}

setTimeout(() => {
    exportTable(url, years);
}, 333)