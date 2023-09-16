let icon = document.getElementById("icon");
let conditionTxt = document.getElementById("condition");
let locationTxt = document.getElementById("location");

async function fetchData(lon = 0, lat = 0) {
  try {
    let response = await fetch(
      `https://weatherapi-com.p.rapidapi.com/current.json?q=${lat},${lon}`,
      {
        headers: {
          "X-RapidAPI-Key":
            "d59e389365msh2bb9b8eea4ca914p1fad86jsn1c9968d8850b",
        },
      }
    ).then((res) => res.json());

    icon.src = response.current?.condition?.icon;
    conditionTxt.innerText = response.current?.condition?.text;
    locationTxt.innerText = `${response.location?.name} , ${response.location?.country} `;
  } catch (error) {
    console.error(error);
  }
}

// Fetch user location
navigator.geolocation.getCurrentPosition((pos) => {
  let lat = pos.coords.latitude,
    lon = pos.coords.longitude;

  fetchData(lon, lat);

  console.log({ lat, lon });
}, () => {
  document.getElementById("container").innerHTML = "<strong>Please allow to access location to be able to work</strong>"
});
