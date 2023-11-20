

const map = L.map('map').setView([33.495511731349886, 130.17471692169053], 15);


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


const circleIcon = L.Icon.extend({
  options: {
    shadowUrl: 'images/ico_shadow.png',
    iconSize: [40, 40],
    shadowSize: [40, 40],
    iconAnchor: [20, 40],
    shadowAnchor: [20, 40],
    popupAnchor: [0, -42]
  }
});

const whiteIcon = new circleIcon({ iconUrl: 'images/ico.png' }),
  pinkIcon = new circleIcon({ iconUrl: 'images/ico_pink.png' });

L.marker([33.495511731349886, 130.17471692169053], { icon: whiteIcon }).addTo(map)
  .bindPopup('A pretty CSS popup.<br> Easily customizable.<br><img src="images/img01.png" alt="img">');


L.marker([33.65958150849491, 130.4440143454105], { icon: pinkIcon }).addTo(map)
  .bindPopup('A pretty CSS popup.<br> Easily customizable.');

L.marker([
  33.502938, 130.173720
  ], { icon: pinkIcon }).addTo(map)
  .bindPopup('A pretty CSS popup.<br> Easily customizable.');

  const circle = L.circle([33.504753, 130.176540], {
    color: 'red', //円の輪郭線の色
    fillColor: '#f03', //円の塗りつぶしの色
    fillOpacity: 0.3, //塗りつぶしの不透明度
    radius: 1000 //半径、メートルで指定
  }).addTo(map);

  circle.bindPopup("半径1kmの範囲");

  const polygon = L.polygon([
    [33.413307, 130.078891],
    [34.341690, 130.552261],
    [33.255433, 130.872394]
  ], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.3
  }).addTo(map);

  // クリック位置の緯度経度表示
const popup = L.popup();

function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent("ここは" + e.latlng.toString() + "です")
    .openOn(map);
}

map.on('click', onMapClick);