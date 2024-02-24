var xhr = new XMLHttpRequest();
var url = "https://restcountries.eu/rest/v2/name/nepal";

xhr.open("GET", url, true);

xhr.onreadystatechange = function () {
  if (xhr.readyState == 4 && xhr.status == 200) {
    var data = JSON.parse(xhr.responseText);
    console.log(data);
  }
};

xhr.send();