const ipElement = document.getElementById("ip");
const cityElement = document.getElementById("city");
const regionElement = document.getElementById("region");
const countryElement = document.getElementById("country");
const ispElement = document.getElementById("isp");
const latElement = document.getElementById("latitude");
const lonElement = document.getElementById("longitude");

async function fetchLocation() {
  try {
    const response = await fetch("https://ipinfo.io/json?token=ed948c0238598b");
    const data = await response.json();

    const [lat, lon] = data.loc.split(",");

    ipElement.textContent = data.ip;
    cityElement.textContent = data.city;
    regionElement.textContent = data.region;
    countryElement.textContent = data.country;
    ispElement.textContent = data.org;
    latElement.textContent = lat;
    lonElement.textContent = lon;

    initMap(parseFloat(lat), parseFloat(lon));
  } catch (error) {
    console.error("Ошибка:", error);
    ipElement.textContent = "Ошибка загрузки данных";
  }
}

fetchLocation();
