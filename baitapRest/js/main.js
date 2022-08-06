const getElement = (id) => {
  return document.getElementById(id);
};
const tinhDiemTrungBinh = (...param) => {
  var total = 0;
  for (let i = 0; i < param.length; i++) {
    total += param[i];
  }
  return (total / param.length).toFixed(2);
};

getElement("btnKhoi1").onclick = function () {
  const diemToan = Number(getElement("inpToan").value);
  const diemLy = Number(getElement("inpLy").value);
  const diemHoa = Number(getElement("inpHoa").value);
  const ketQua = tinhDiemTrungBinh(diemToan, diemLy, diemHoa);
  getElement("tbKhoi1").innerHTML = ketQua;
};
getElement("btnKhoi2").onclick = function () {
  const diemVan = Number(getElement("inpVan").value);
  const diemSu = Number(getElement("inpSu").value);
  const diemDia = Number(getElement("inpDia").value);
  const diemAnh = Number(getElement("inpEnglish").value);
  const ketQua = tinhDiemTrungBinh(diemVan, diemSu, diemDia, diemAnh);
  getElement("tbKhoi2").innerHTML = ketQua;
};
