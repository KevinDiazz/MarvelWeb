let publicKey = "55b440e5c1670352268d3916f40c1215";
let privateKey = "db50e87f02758842d55bf340372c08e30b3920ce";
let ts = "1000";
let hash = "4656a1d6e8194d35b988f69d0021473d";
let c = document.getElementsByTagName("img");
let spider = document.getElementsByClassName("spiderman");

async function datosMarvel() {
  const res = await fetch(
    "http://gateway.marvel.com/v1/public/comics?" +
      "ts=" +
      ts +
      "&apikey=" +
      publicKey +
      "&hash=" +
      hash
  );
  const data = await res.json();
  for (i = 0; i < data.data.results.length; i++) {
    if (data.data.results[i].images[0] !== undefined) {
      b = document.createElement("img");
      div = document.createElement("div");
      titulo = document.createElement("h3");
      titulo.innerText = data.data.results[i].title;
      div.setAttribute("class", "container");
      b.setAttribute("src", data.data.results[i].images[0].path + ".jpg");
      spider[0].appendChild(div);
      div.appendChild(b);
      div.appendChild(titulo);

      if (data.data.results[i].prices[0].price !== undefined) {
        c = document.createElement("button");
        c.innerText =
          data.data.results[i].prices[0].price === 0
            ? "Free"
            : data.data.results[i].prices[0].price + "$";
        div.appendChild(c);
      }
    }
  }
}

datosMarvel();

async function datosCaracter() {
  const res2 = await fetch(
    "http://gateway.marvel.com/v1/public/comics?" +
      "ts=" +
      ts +
      "&apikey=" +
      publicKey +
      "&hash=" +
      hash
  );
  const data2 = await res2.json();
  console.log(data2);
  const datos3 = await fetch(
    "http://gateway.marvel.com/v1/public/characters" +
      "?ts=" +
      ts +
      "&apikey=" +
      publicKey +
      "&hash=" +
      hash
  );
  const res3 = await datos3.json();
  
}

