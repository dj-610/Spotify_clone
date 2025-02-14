const songs = [
    "song1.mp3",
    "song2.mp3",
    "song3.mp3",
    "song4.mp3",
    "song5.mp3",
    "song6.mp3",
    "song7.mp3",
    "song8.mp3",
    "song9.mp3",
    "song10.mp3",
    "song11.mp3",
    "song12.mp3",
    "song13.mp3",
    "song14.mp3",
    "song15.mp3",
    "song16.mp3",
    "song17.mp3"
  ];
  
async function loadSongs() {
  let songList = document.getElementById("songslist");

  songs.forEach((song) => {
    let div = document.createElement("li");
    div.innerHTML = `
      <a href="./songs/${song}">${song}</a>
      <audio controls>
        <source src="./songs/${song}" type="audio/mp3">
      </audio>
    `;
    songList.appendChild(div);
  });
}

loadSongs();

let btnLogin = document.getElementById("btnlogin")
let card = document.getElementById("cards")
let songslist = document.getElementById("songslist")
let playbar = document.getElementById("playbar")
let mainfooter = document.getElementById("mainfooter")

btnLogin.addEventListener('click', songlists);

function songlists(){
    if (card.style.display == "block") {
        card.style.display = "none";
        songslist.style.display = "block";
        btnLogin.innerHTML = `<li class="Login" id="btnlogin"><a href="#">Log out</a></li>`;
    }else{
        btnLogin.innerHTML = `<li class="Login" id="btnlogin"><a href="#">Log in</a></li>`;
        card.style.display = "block";
        songslist.style.display = "none";
    }
}