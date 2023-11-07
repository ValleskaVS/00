var map = L.map('map').setView([-8.0960047,-34.9509717,12], 12);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


var control;

document.getElementById('routeButton1').onclick = function() {
  if (control) {
    map.removeControl(control);
  }

  control = L.Routing.control({
    waypoints: [
      L.latLng(-8.139679, -34.946399), // coordenada usuario- ETE
      L.latLng(-8.1415983,-34.9105037), // destino
    ],
  }).addTo(map);
  
  // Crie um marcador para a coordenada de destino
  var destinoMarker = L.marker([-8.1415983, -34.9105037]).addTo(map);
  
  // Associe um pop-up ao marcador
  destinoMarker.bindPopup("R. João Cardoso Aires, 647 - Boa Viagem, Recife - PE, 51130-300").openPopup();
};

document.getElementById('routeButton2').onclick = function() {
  if (control) {
    map.removeControl(control);
  }

  control = L.Routing.control({
    waypoints: [
      L.latLng(-8.139679, -34.946399), 
      L.latLng(-8.145344, -34.965005), 
    ],
  }).addTo(map);
  
 
  var destinoMarker = L.marker([-8.145344, -34.965005]).addTo(map);
  destinoMarker.bindPopup("Destino 1 - Descrição do local de destino 1").openPopup();
};

document.getElementById('routeButton3').onclick = function() {
  if (control) {
    map.removeControl(control);
  }

  control = L.Routing.control({
    waypoints: [
      L.latLng(-8.139679, -34.946399), 
      L.latLng(-8.0592166,-34.8919221),  
    ],
  }).addTo(map);
  
  
  var destinoMarker = L.marker([-8.0592166,-34.8919221]).addTo(map);
  destinoMarker.bindPopup("Destino 1 - Descrição do local de destino 1").openPopup();
};

document.getElementById('routeButton4').onclick = function() {
  if (control) {
    map.removeControl(control);
  }

  control = L.Routing.control({
    waypoints: [
      L.latLng(-8.139679, -34.946399), 
      L.latLng(-8.0592166,-34.8919221),  
    ],
  }).addTo(map);
  
  
  var destinoMarker = L.marker([-8.0592166,-34.8919221]).addTo(map);
  destinoMarker.bindPopup("Destino 1 - Descrição do local de destino 1").openPopup();
};

document.getElementById('routeButton5').onclick = function() {
  if (control) {
    map.removeControl(control);
  }

  control = L.Routing.control({
    waypoints: [
      L.latLng(-8.139679, -34.946399), 
      L.latLng(-8.0592166,-34.8919221),  
    ],
  }).addTo(map);
  
  
  var destinoMarker = L.marker([-8.0592166,-34.8919221]).addTo(map);
  destinoMarker.bindPopup("Destino 1 - Descrição do local de destino 1").openPopup();
};

