let ListaFilmes = [
    { titulo: "Interstellar",
    url:"https://upload.wikimedia.org/wikipedia/pt/3/3a/Interstellar_Filme.png"},

    {titulo: "Clube da Luta",
    url: "https://br.web.img3.acsta.net/medias/nmedia/18/90/95/96/20122166.jpg"},

    {titulo: "DeadPool",
    url: "https://upload.wikimedia.org/wikipedia/pt/3/3b/Deadpool_2016.jpg"},

    {titulo: "Forrest Gump",
    url: "https://upload.wikimedia.org/wikipedia/pt/thumb/c/c0/ForrestGumpPoster.jpg/240px-ForrestGumpPoster.jpg"},

    {titulo: "Jujutsu Kaisen - 1ºS",
    url: "https://m.media-amazon.com/images/I/815Hq6BC0hL._AC_UF1000,1000_QL80_.jpg"},

    {titulo: "Hunter x Hunter - 1ºS",
    url: "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/cbb55a6382682bf71e91f685c6473c5a.jpg"}, ]

    var container = document.querySelector(".filme-container");

    var i = 0;
while (i < ListaFilmes.length) {
  var filme = ListaFilmes[i];

  // Verificar se a URL da imagem termina com ".jpg"
  if (filme.url.endsWith(".jpg")) {
    var div = document.createElement("div"); // Criar um elemento div para envolver o par de h2 e img

    var img = document.createElement("img");
    img.src = filme.url;
    img.alt = filme.titulo;

    var h2 = document.createElement("h2");
    h2.textContent = filme.titulo;

    div.appendChild(h2); // Adicionar o h2 dentro do div
    div.appendChild(img); // Adicionar a img dentro do div

    container.appendChild(div); // Adicionar a div dentro do container
  }

  i++;
}