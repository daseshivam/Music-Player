const music = document.querySelector("audio");
const play = document.getElementById("play");
const img = document.querySelector("img");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const artist = document.getElementById("artist");
const title = document.getElementById("title");

const songs = [
  {
    name: "shiv-1",
    title: "Lotus lane",
    artist: "loyalist",
  },
  {
    name: "shiv-2",
    title: "sappheiros",
    artist: "aurora",
  },
  {
    name: "shiv-3",
    title: "walking firiri",
    artist: "gorkhali takma",
  },
];
let isPlaying = false;

const playMusic = () => {
  isPlaying = true;
  music.play();

  play.classList.replace("fa-play", "fa-pause");
  img.classList.add("anime");
};

const pauseMusic = () => {
  isPlaying = false;
  music.pause();

  play.classList.replace("fa-pause", "fa-play");
  img.classList.remove("anime");
};

play.addEventListener("click", () => {
  //   if (isPlaying) {
  //     pauseMusic();
  //   } else {
  //     playMusic();
  //   }
  isPlaying ? pauseMusic() : playMusic();
});
// changing the music data

const loadSong = (songs) => {
  title.textContent = songs.title;
  artist.textContent = songs.artist;
  music.src = "songs/" + songs.name + ".mp3";
  img.src = "images/" + songs.name + ".jpg";
};
let songIndex = 0;
// loadSong(songs[1]);

const nextSong = () => {
  songIndex = (songIndex + 1) % songs.length;
  loadSong(songs[songIndex]);
  playMusic();
};

const prevSong = () => {
  songIndex = (songIndex - 1 + songs.length) % songs.length;
  loadSong(songs[songIndex]);
  playMusic();
};

next.addEventListener("click", nextSong);
prev.addEventListener("click", prevSong);
