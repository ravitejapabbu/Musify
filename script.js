// playlist elements
const songsContainer = document.querySelector(".songsContainer");
let songs;
let songPlay;
let songPause;
let songProgress;
let isPlaylistChanged = false;

// player elements
const playerCover = document.querySelector(".playerCover");
const playname = document.querySelector(".name");
const singer = document.querySelector(".singer");
// player controls
const playerPlay = document.querySelector(".playerPlay");
const playerPause = document.querySelector(".playerPause");
const playerProgressBar = document.querySelector("#playerProgressBar");

// search
const searchBox = document.querySelector("#searchbox");
const searchButton = document.querySelector("#searchbutton");

const allAvailableSongs = [
  {
    name: "Neeli Neeli Aakasam",
    path: "songs/1.Neeli_Neeli_Aakasam.mp3",
    cover: "covers/1.Neeli_Neeli_Aakasam.png",
    singer: "Sid Sriram",
  },
  {
    name: "Choosale Kallaraa",
    path: "songs/2.Choosale_Kallaraa.mp3",
    cover: "covers/2.Choosale_Kallaraa.png",
    singer: "Sid Sriram",
  },
  {
    name: "Emo Emo",
    path: "songs/3.Emo_Emo.mp3",
    cover: "covers/3.Emo_Emo.png",
    singer: "Sid Sriram",
  },
  {
    name: "Amma",
    path: "songs/4.Amma.mp3",
    cover: "covers/4.Amma.png",
    singer: "Sid Sriram",
  },
  {
    name: "Idhi Chala Baagundhile",
    path: "songs/5.Idhi_iChala_Baagundhile.mp3",
    cover: "covers/5.Idhi_iChala_Baagundhile.png",
    singer: "Sid Sriram",
  },
  {
    name: "Leharaayi",
    path: "songs/6.Leharaayi.mp3",
    cover: "covers/6.Leharaayi.png",
    singer: "Sid Sriram",
  },
  {
    name: "Priyathama",
    path: "songs/7.Priyathama.mp3",
    cover: "covers/7.Priyathama.png",
    singer: "Sid Sriram",
  },
  {
    name: "Srivalli",
    path: "songs/8.Srivalli.mp3",
    cover: "covers/8.Srivalli.png",
    singer: "Sid Sriram",
  },
  {
    name: "Aagave Nuvvagave",
    path: "songs/9.Aagave_Nuvvagave.mp3",
    cover: "covers/9.Aagave_Nuvvagave.png",
    singer: "Sid Sriram",
  },
  {
    name: "Adiga Adiga",
    path: "songs/10.Adiga_Adiga.mp3",
    cover: "covers/10.Adiga_Adiga.png",
    singer: "Sid Sriram",
  },
  {
    name: "Oh My Lilly",
    path: "songs/Oh_My_Lilly.mp3",
    cover: "covers/tillusquare.png",
    singer: "Ram Miryala",
  },
  {
    name: "Ninnu Chuse Anandamlo",
    path: "songs/Ninnu_Chuse_Anandamlo.mp3",
    cover: "covers/gang_leader.png",
    singer: "Sid Sriram",
    movie: "Gang Leader",
    lang: "telugu",
  },
  {
    name: "Gangu Leader",
    path: "songs/GanguLeader.mp3",
    cover: "covers/gang_leader.png",
    singer: "Anirudh",
    movie: "Gang Leader",
    lang: "telugu",
  },
  {
    name: "Hoyna Hoyna",
    path: "songs/HoynaHoyna.mp3",
    cover: "covers/gang_leader.png",
    singer: "Anirudh",
    movie: "Gang Leader",
    lang: "telugu",
  },
  {
    name: "Roar of the Revengers",
    path: "songs/RoaroftheRevengers.mp3",
    cover: "covers/gang_leader.png",
    singer: "Anirudh",
    movie: "Gang Leader",
    lang: "telugu",
  },
  {
    name: "Katharaayadam",
    path: "songs/Katharaayadam.mp3",
    cover: "covers/gang_leader.png",
    singer: "Anirudh",
    movie: "Gang Leader",
    lang: "telugu",
  },
  {
    name: "Paagal",
    path: "songs/Paagal.mp3",
    cover: "covers/paagal.png",
    singer: "",
    movie: "Paagal",
    lang: "telugu",
  },
  {
    name: "Saradaga Kasepaina",
    path: "songs/SaradagaKasepaina.mp3",
    cover: "covers/paagal.png",
    singer: "",
    movie: "Paagal",
    lang: "telugu",
  },
  {
    name: "Ee Single Chinnode",
    path: "songs/EeSingleChinnode.mp3",
    cover: "covers/paagal.png",
    singer: "",
    movie: "Paagal",
    lang: "telugu",
  },
  {
    name: "Amma Amma Neevennela",
    path: "songs/AmmaAmmaNeevennela.mp3",
    cover: "covers/paagal.png",
    singer: "",
    movie: "Paagal",
    lang: "telugu",
  },
  {
    name: "Kanapadava",
    path: "songs/Kanapadava.mp3",
    cover: "covers/paagal.png",
    singer: "",
    movie: "Paagal",
    lang: "telugu",
  },
  {
    name: "Chiru Chiru Chiru",
    path: "songs/ChiruChiruChiru.mp3",
    cover: "covers/awaara.png",
    singer: "",
    movie: "awaara",
    lang: "telugu",
  },
  {
    name: "Mandaara Poovalle",
    path: "songs/MandaaraPoovalle.mp3",
    cover: "covers/awaara.png",
    singer: "",
    movie: "awaara",
    lang: "telugu",
  },
  {
    name: "Arere Vaanaa",
    path: "songs/ArereVaanaa.mp3",
    cover: "covers/awaara.png",
    singer: "",
    movie: "awaara",
    lang: "telugu",
  },
  {
    name: "Chuttesai",
    path: "songs/Chuttesai.mp3",
    cover: "covers/awaara.png",
    singer: "",
    movie: "awaara",
    lang: "telugu",
  },
  {
    name: "Nee Yadalo Naaku",
    path: "songs/NeeYadaloNaaku.mp3",
    cover: "covers/awaara.png",
    singer: "",
    movie: "awaara",
    lang: "telugu",
  },
  {
    name: "Yedho",
    path: "songs/Yedho.mp3",
    cover: "covers/awaara.png",
    singer: "",
    movie: "awaara",
    lang: "telugu",
  },
  {
    name: "Silaka Silaka",
    path: "songs/SilakaSilaka.mp3",
    cover: "covers/uppena.png",
    singer: "",
    movie: "uppena",
    lang: "telugu",
  },
  {
    name: "NinneNaaNinne",
    path: "songs/NinneNaaNinne.mp3",
    cover: "covers/uppena.png",
    singer: "",
    movie: "uppena",
    lang: "telugu",
  },
  {
    name: "Sandram Lona Neerantha",
    path: "songs/SandramLonaNeerantha.mp3",
    cover: "covers/uppena.png",
    singer: "",
    movie: "uppena",
    lang: "telugu",
  },
  {
    name: "Eswara",
    path: "songs/Eswara.mp3",
    cover: "covers/uppena.png",
    singer: "",
    movie: "uppena",
    lang: "telugu",
  },
  {
    name: "Jala Jala Jalapaatham Nuvvu",
    path: "songs/JalaJalaJalapaathamNuvvu.mp3",
    cover: "covers/uppena.png",
    singer: "",
    movie: "uppena",
    lang: "telugu",
  },
  {
    name: "Ranguladdhukunna",
    path: "songs/Ranguladdhukunna.mp3",
    cover: "covers/uppena.png",
    singer: "",
    movie: "uppena",
    lang: "telugu",
  },
  {
    name: "Dhak Dhak Dhak",
    path: "songs/.DhakDhakDhakmp3",
    cover: "covers/uppena.png",
    singer: "",
    movie: "uppena",
    lang: "telugu",
  },
  {
    name: "Nee Kannu Neeli Samudram",
    path: "songs/NeeKannuNeeliSamudram.mp3",
    cover: "covers/uppena.png",
    singer: "",
    movie: "uppena",
    lang: "telugu",
  },
  {
    name: "Papa Meri Jaa",
    path: "songs/Papa-Meri-Jaan.mp3",
    cover: "covers/animal.png",
    singer: "",
    movie: "Animal",
    lang: "hindi",
  },
  {
    name: "Pehle Bhi Main",
    path: "songs/Pehle-Bhi-Main.mp3",
    cover: "covers/animal.png",
    singer: "",
    movie: "Animal",
    lang: "hindi",
  },
  {
    name: "Satranga",
    path: "songs/Satranga.mp3",
    cover: "covers/animal.png",
    singer: "",
    movie: "Animal",
    lang: "hindi",
  },
  {
    name: "Yetu Pone",
    path: "songs/YetuPone.mp3",
    cover: "covers/dearcomrade.png",
    singer: "",
    movie: "Dear Comrade",
    lang: "telugu",
  },
  {
    name: "OKalala Kathala",
    path: "songs/OKalalaKathala.mp3",
    cover: "covers/dearcomrade.png",
    singer: "",
    movie: "Dear Comrade",
    lang: "telugu",
  },
  {
    name: "Comrade Anthem",
    path: "songs/ComradeAnthem.mp3",
    cover: "covers/dearcomrade.png",
    singer: "",
    movie: "Dear Comrade",
    lang: "telugu",
  },
  {
    name: "The Canteen",
    path: "songs/TheCanteen.mp3",
    cover: "covers/dearcomrade.png",
    singer: "",
    movie: "Dear Comrade",
    lang: "telugu",
  },
  {
    name: "Gira Gira Gira",
    path: "songs/GiraGiraGira.mp3",
    cover: "covers/dearcomrade.png",
    singer: "",
    movie: "Dear Comrade",
    lang: "telugu",
  },
  {
    name: "Kadalalle",
    path: "songs/Kadalalle.mp3",
    cover: "covers/dearcomrade.png",
    singer: "",
    movie: "Dear Comrade",
    lang: "telugu",
  },
  {
    name: "Nee Neeli Kannullona",
    path: "songs/NeeNeeliKannullona.mp3",
    cover: "covers/dearcomrade.png",
    singer: "",
    movie: "Dear Comrade",
    lang: "telugu",
  },
  {
    name: "Aarambhame Le",
    path: "songs/AarambhameLe.mp3",
    cover: "covers/jersey.png",
    singer: "",
    movie: "Jersey",
    lang: "telugu",
  },
  {
    name: "Needa Padadhani",
    path: "songs/NeedaPadadhani.mp3",
    cover: "covers/jersey.png",
    singer: "",
    movie: "Jersey",
    lang: "telugu",
  },
  {
    name: "Prapanchame Alaa",
    path: "songs/PrapanchameAlaa.mp3",
    cover: "covers/jersey.png",
    singer: "",
    movie: "Jersey",
    lang: "telugu",
  },
  {
    name: "Padhe Padhe",
    path: "songs/PadhePadhe.mp3",
    cover: "covers/jersey.png",
    singer: "",
    movie: "Jersey",
    lang: "telugu",
  },
  {
    name: "Adhento Gaani Vunnapaatuga",
    path: "songs/AdhentoGaaniVunnapaatuga.mp3",
    cover: "covers/jersey.png",
    singer: "",
    movie: "Jersey",
    lang: "telugu",
  },
  {
    name: "Spirit Of Jersey",
    path: "songs/SpiritOfJersey.mp3",
    cover: "covers/jersey.png",
    singer: "",
    movie: "Jersey",
    lang: "telugu",
  },
  {
    name: "Vennante.",
    path: "songs/Vennante.mp3",
    cover: "covers/andala_rakshasi.png",
    singer: "",
    movie: "Andala Rakshasi",
    lang: "telugu",
  },
  {
    name: "Manasa Marchipo",
    path: "songs/ManasaMarchipo.mp3",
    cover: "covers/andala_rakshasi.png",
    singer: "",
    movie: "Andala Rakshasi",
    lang: "telugu",
  },
  {
    name: "Ye Mantramo",
    path: "songs/YeMantramo.mp3",
    cover: "covers/andala_rakshasi.png",
    singer: "",
    movie: "Andala Rakshasi",
    lang: "telugu",
  },
  {
    name: "Ne Ninnu Chera",
    path: "songs/NeNinnuChera.mp3",
    cover: "covers/andala_rakshasi.png",
    singer: "",
    movie: "Andala Rakshasi",
    lang: "telugu",
  },
  {
    name: "Manasu Palike",
    path: "songs/ManasuPalike.mp3",
    cover: "covers/andala_rakshasi.png",
    singer: "",
    movie: "Andala Rakshasi",
    lang: "telugu",
  },
  {
    name: "Yemito",
    path: "songs/Yemito.mp3",
    cover: "covers/andala_rakshasi.png",
    singer: "",
    movie: "Andala Rakshasi",
    lang: "telugu",
  },
  {
    name: "Tum Miley Ho",
    path: "songs/TumMileyHo.mp3",
    cover: "covers/falaknuma_das.png",
    singer: "",
    movie: "Falaknuma Das",
    lang: "telugu",
  },
  {
    name: "Falaknuma Mama",
    path: "songs/FalaknumaMama.mp3",
    cover: "covers/falaknuma_das.png",
    singer: "",
    movie: "Falaknuma Das",
    lang: "telugu",
  },
  {
    name: "Dasu Bindasu",
    path: "songs/DasuBindasu.mp3",
    cover: "covers/falaknuma_das.png",
    singer: "",
    movie: "Falaknuma Das",
    lang: "telugu",
  },
  {
    name: "Paye Paye",
    path: "songs/PayePaye.mp3",
    cover: "covers/falaknuma_das.png",
    singer: "",
    movie: "Falaknuma Das",
    lang: "telugu",
  },
  {
    name: "Alasina Aashalaku",
    path: "songs/AlasinaAashalaku.mp3",
    cover: "covers/kgf1.png",
    singer: "",
    movie: "KGF Chapter-1",
    lang: "telugu",
  },
  {
    name: "Dheera Dheera",
    path: "songs/DheeraDheera.mp3",
    cover: "covers/kgf1.png",
    singer: "",
    movie: "KGF Chapter-1",
    lang: "telugu",
  },
  {
    name: "Dochai",
    path: "songs/Dochai.mp3",
    cover: "covers/kgf1.png",
    singer: "",
    movie: "KGF Chapter-1",
    lang: "telugu",
  },
  {
    name: "Evvadikevvadu Banisa",
    path: "songs/EvvadikevvaduBanisa.mp3",
    cover: "covers/kgf1.png",
    singer: "",
    movie: "KGF Chapter-1",
    lang: "telugu",
  },
  {
    name: "Tharagani Baruvaina",
    path: "songs/TharaganiBaruvaina.mp3",
    cover: "covers/kgf1.png",
    singer: "",
    movie: "KGF Chapter-1",
    lang: "telugu",
  },
  {
    name: "Salaam Rocky Bhai",
    path: "songs/SalaamRockyBhai.mp3",
    cover: "covers/kgf1.png",
    singer: "",
    movie: "KGF Chapter-1",
    lang: "telugu",
  },
  {
    name: "Theme Of 3",
    path: "songs/ThemeOf3.mp3",
    cover: "covers/3.png",
    singer: "",
    movie: "Three",
    lang: "telugu",
  },
  {
    name: "Why This Kolaveri Di",
    path: "songs/WhyThisKolaveriDi.mp3",
    cover: "covers/3.png",
    singer: "",
    movie: "Three",
    lang: "telugu",
  },
  {
    name: "Po Ve Po",
    path: "songs/PoVePo.mp3",
    cover: "covers/3.png",
    singer: "",
    movie: "Three",
    lang: "telugu",
  },
  {
    name: "Nee Paata Madhuram",
    path: "songs/NeePaataMadhuram.mp3",
    cover: "covers/3.png",
    singer: "",
    movie: "Three",
    lang: "telugu",
  },
  {
    name: "Kannuladha",
    path: "songs/Kannuladha.mp3",
    cover: "covers/3.png",
    singer: "",
    movie: "Three",
    lang: "telugu",
  },
  {
    name: "Ramuloo Ramula",
    path: "songs/RamulooRamula.mp3",
    cover: "covers/avpl.png",
    singer: "",
    movie: "Ala Vaikunta Puram Lo",
    lang: "telugu",
  },
  {
    name: "Samajavaragamana",
    path: "songs/Samajavaragamana.mp3",
    cover: "covers/avpl.png",
    singer: "",
    movie: "Ala Vaikunta Puram Lo",
    lang: "telugu",
  },
  {
    name: "Samajavaragamana Female",
    path: "songs/SamajavaragamanaFemale.mp3",
    cover: "covers/avpl.png",
    singer: "",
    movie: "Ala Vaikunta Puram Lo",
    lang: "telugu",
  },
  {
    name: "OMG Daddy",
    path: "songs/OMGDaddy.mp3",
    cover: "covers/avpl.png",
    singer: "",
    movie: "Ala Vaikunta Puram Lo",
    lang: "telugu",
  },
  {
    name: "Dj Tillu",
    path: "songs/DjTillu.mp3",
    cover: "covers/tillusquare.png",
    singer: "",
    movie: "Tillu Square",
    lang: "telugu",
  },
  {
    name: "Radhika",
    path: "songs/Radhika.mp3",
    cover: "covers/tillusquare.png",
    singer: "",
    movie: "Tillu Square",
    lang: "telugu",
  },
  {
    name: "Ticket Eh Konakunda",
    path: "songs/TicketEhKonakunda.mp3",
    cover: "covers/tillusquare.png",
    singer: "",
    movie: "Tillu Square",
    lang: "telugu",
  },
  {
    name: "The Monster",
    path: "songs/TheMonster.mp3",
    cover: "covers/kgf2.png",
    singer: "",
    movie: "KGF Chapter-2",
    lang: "telugu",
  },
  {
    name: "Mehabooba",
    path: "songs/Mehabooba.mp3",
    cover: "covers/kgf2.png",
    singer: "",
    movie: "KGF Chapter-2",
    lang: "telugu",
  },
  {
    name: "Sulthana",
    path: "songs/Sulthana.mp3",
    cover: "covers/kgf2.png",
    singer: "",
    movie: "KGF Chapter-2",
    lang: "telugu",
  },
  {
    name: "Yadagara Yadagara",
    path: "songs/YadagaraYadagara.mp3",
    cover: "covers/kgf2.png",
    singer: "",
    movie: "KGF Chapter-2",
    lang: "telugu",
  },
  {
    name: "Toofan",
    path: "songs/Toofan.mp3",
    cover: "covers/kgf2.png",
    singer: "",
    movie: "KGF Chapter-2",
    lang: "telugu",
  },
  {
    name: "Poolane Kunukeyamantaa",
    path: "songs/PoolaneKunukeyamantaa.mp3",
    cover: "covers/i.png",
    singer: "",
    movie: "I Manoharudu",
    lang: "telugu",
  },
  {
    name: "Nuvvunte NaaJathagaa",
    path: "songs/NuvvunteNaaJathagaa.mp3",
    cover: "covers/i.png",
    singer: "",
    movie: "I Manoharudu",
    lang: "telugu",
  },
  {
    name: "Vasthunnaa Vachestunna",
    path: "songs/VasthunnaaVachestunna.mp3",
    cover: "covers/v.png",
    singer: "",
    movie: "V",
    lang: "telugu",
  },
  {
    name: "Manasu Maree",
    path: "songs/ManasuMaree.mp3",
    cover: "covers/v.png",
    singer: "",
    movie: "V",
    lang: "telugu",
  },
  {
    name: "Pushpa Intro",
    path: "songs/PushpaIntro.mp3",
    cover: "covers/pushpa.png",
    singer: "",
    movie: "Pushpa",
    lang: "telugu",
  },
  {
    name: "Oo Antava OoOo Antava",
    path: "songs/OoAntavaOoOoAntava.mp3",
    cover: "covers/pushpa.png",
    singer: "",
    movie: "Pushpa",
    lang: "telugu",
  },
  {
    name: "Saami Saami",
    path: "songs/SaamiSaami.mp3",
    cover: "covers/pushpa.png",
    singer: "",
    movie: "Pushpa",
    lang: "telugu",
  },
  {
    name: "Eyy Bidda Idhi Naa Adda",
    path: "songs/EyyBiddaIdhiNaaAdaa.mp3",
    cover: "covers/pushpa.png",
    singer: "",
    movie: "Pushpa",
    lang: "telugu",
  },
  {
    name: "Control Chhichhore",
    path: "songs/ControlChhichhore.mp3",
    cover: "covers/chhichhore.png",
    singer: "",
    movie: "Chhichhore",
    lang: "telugu",
  },
  {
    name: "Woh Din",
    path: "songs/WohDinChhichhore.mp3",
    cover: "covers/chhichhore.png",
    singer: "",
    movie: "Chhichhore",
    lang: "telugu",
  },
  {
    name: "Khairiyat",
    path: "songs/KhairiyatChhichhore.mp3",
    cover: "covers/chhichhore.png",
    singer: "",
    movie: "Chhichhore",
    lang: "telugu",
  },
  {
    name: "Pushpa Pushpaa",
    path: "songs/PushpaPushpaa.mp3",
    cover: "covers/pushpa.png",
    singer: "",
    movie: "Pushpa 2",
    lang: "telugu",
  },
  {
    name: "Sooseki",
    path: "songs/Sooseki.mp3",
    cover: "covers/pushpa.png",
    singer: "",
    movie: "Pushpa 2",
    lang: "telugu",
  },
  {
    name: "Fear Song",
    path: "songs/FearSong.mp3",
    cover: "covers/devara.png",
    singer: "",
    movie: "Devara",
    lang: "telugu",
  },
  {
    name: "Faded",
    path: "songs/Faded.mp3",
    cover: "covers/general.png",
    singer: "",
    movie: "",
    lang: "english",
  },
  {
    name: "Peaky Blinders",
    path: "songs/Peaky-Blinders.mp3",
    cover: "covers/general.png",
    singer: "",
    movie: "",
    lang: "english",
  },
  {
    name: "Safari",
    path: "songs/Safari.mp3",
    cover: "covers/general.png",
    singer: "",
    movie: "",
    lang: "english",
  },
  {
    name: "Friends",
    path: "songs/Friends.mp3",
    cover: "covers/general.png",
    singer: "",
    movie: "",
    lang: "english",
  },
  {
    name: "At My Worst",
    path: "songs/At-My-Worst.mp3",
    cover: "covers/general.png",
    singer: "",
    movie: "",
    lang: "english",
  },
  {
    name: "Love Me Like You Do",
    path: "songs/Love-Me-Like-You-Do.mp3",
    cover: "covers/general.png",
    singer: "",
    movie: "",
    lang: "english",
  },
  {
    name: "Perfect EdSheeran",
    path: "songs/PerfectEdSheeran.mp3",
    cover: "covers/general.png",
    singer: "",
    movie: "",
    lang: "english",
  },
  {
    name: "Lover",
    path: "songs/Taylor_Swift_-_Lover.mp3",
    cover: "covers/lover.png",
    singer: "",
    movie: "",
    lang: "english",
  },
  {
    name: "Heeriye",
    path: "songs/Heeriye.mp3",
    cover: "covers/general.png",
    singer: "",
    movie: "",
    lang: "hindi",
  },
  {
    name: "Jeena SikhaDe",
    path: "songs/JeenaSikhaDe.mp3",
    cover: "covers/general.png",
    singer: "",
    movie: "",
    lang: "hindi",
  },
  {
    name: "Kesariya Brahmastra",
    path: "songs/KesariyaBrahmastra.mp3",
    cover: "covers/general.png",
    singer: "",
    movie: "",
    lang: "hindi",
  },
  {
    name: "O Mahi O Mahi",
    path: "songs/OMahiOMahi.mp3",
    cover: "covers/general.png",
    singer: "",
    movie: "",
    lang: "hindi",
  },
  {
    name: "Ve Kamleya",
    path: "songs/VeKamleya.mp3",
    cover: "covers/general.png",
    singer: "",
    movie: "",
    lang: "hindi",
  },
  {
    name: "O Sajni Re",
    path: "songs/O-Sajni-Re.mp3",
    cover: "covers/general.png",
    singer: "",
    movie: "",
    lang: "hindi",
  },
  {
    name: "Gulabi Sadi",
    path: "songs/Gulabi-Sadi.mp3",
    cover: "covers/general.png",
    singer: "",
    movie: "",
    lang: "hindi",
  },
  {
    name: "Illuminati Illuminati",
    path: "songs/Illuminati-Illuminati.mp3",
    cover: "covers/general.png",
    singer: "",
    movie: "",
    lang: "",
  },
  {
    name: "Amma Pade Jola Pata",
    path: "songs/AmmaPadeJolaPata.mp3",
    cover: "covers/general.png",
    singer: "",
    movie: "",
    lang: "telugu",
  },
];

let allArtists = [
  { name: "Sid Sriram", cover: "sidsriram" },
  { name: "Shreya Goshal", cover: "shreyagoshal" },
  { name: "Armaan Malik", cover: "Armaanmalik" },
  { name: "Devisri Prasad", cover: "devisriprasad" },
  { name: "Arijit Singh", cover: "arijitsingh" },
  { name: "Jubin Nautiyal", cover: "jubinnautiyal" },
  { name: "Taylor swift", cover: "taylorswift" },
  { name: "Ram Miryala", cover: "rammiryala" },
  { name: "Edsheeran", cover: "edsheeran" },
  { name: "Dualipa", cover: "dualipa" },
];

let allSongs = allAvailableSongs.filter((song, index) => {
  return allAvailableSongs[index].singer === "Sid Sriram";
});

// player Details
let currentSong = new Audio(allSongs[0].path);
let currentIndex = 0;
playerCover.src = allSongs[currentIndex].cover;
playname.innerText = allSongs[currentIndex].name;
singer.innerText = allSongs[currentIndex].singer;
document.querySelector(".currentTime").innerText = `${Math.floor(
  currentSong.currentTime / 60
)
  .toString()
  .padStart("2", "0")}:${Math.floor(currentSong.currentTime % 60)
  .toString()
  .padStart("2", "0")}/${Math.floor(currentSong.duration / 60 || 0)
  .toString()
  .padStart("2", "0")}:${Math.floor(currentSong.duration % 60 || 0)
  .toString()
  .padStart("2", "0")}`;

function fetchPlaylist() {
  for (let j = 0; j < allSongs.length; j++) {
    let song = document.createElement("div");

    song.innerHTML = ` <div class="song">
    <img class="cover" src="${allSongs[j].cover}" alt="" />
    <strong class="songName">${allSongs[j].name}</strong>
    <input
      type="range"
      value="0"
      min="0"
      max="100"
      class="songProgress"
    />
    <div class="songDuration"></div>
    <svg
      class="songPlay"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 384 512"
    >
      <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
      <path
        d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"
      />
    </svg>
    <svg
      class="songPause"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 512"
    >
      <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
      <path
        d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"
      />
    </svg>
  </div>`;
    songsContainer.appendChild(song);
  }
}
fetchPlaylist();

function play(song, index) {
  currentSong.src = allSongs[index].path;
  playerCover.src = allSongs[index].cover;
  playname.innerText = allSongs[index].name;
  singer.innerText = allSongs[index].singer;
  currentSong.play();
  songProgress.forEach((progress, i) => {
    progress.value = 0;
  });
  songPlay.forEach((p) => {
    p.style.display = "block";
  });
  songPause.forEach((p) => {
    p.style.display = "none";
  });
  songPlay[index].style.display = "none";
  songPause[index].style.display = "block";
  playerPlay.classList.add("hidden");
  playerPause.classList.remove("hidden");
  currentIndex = index;
}

function pause(song, index) {
  currentSong.pause();
  songPause[index].style.display = "none";
  songPlay[index].style.display = "block";
  playerPlay.classList.remove("hidden");
  playerPause.classList.add("hidden");
}

function playlistEvents() {
  songs = document.querySelectorAll(".song");
  songPlay = document.querySelectorAll(".songPlay");
  songPause = document.querySelectorAll(".songPause");
  songProgress = document.querySelectorAll(".songProgress");

  songPlay.forEach((song, index) => {
    song.addEventListener("click", () => {
      play(song, index);
      isPlaylistChanged = false;
    });
  });
  songPause.forEach((song, index) => {
    song.addEventListener("click", () => {
      pause(song, index);
    });
  });
  songProgress.forEach((progress, index) => {
    progress.addEventListener("input", () => {
      if (currentIndex == index) {
        currentSong.currentTime =
          (progress.value * currentSong.duration) / 100 || 0;
      }
    });
  });
}
playlistEvents();

// updating the time
currentSong.addEventListener("timeupdate", (e) => {
  let val =
    Math.floor((currentSong.currentTime / currentSong.duration) * 100) || 0;
  requestAnimationFrame(() => {
    document.querySelector("#playerProgressBar").value = val;
    if (!isPlaylistChanged) {
      songProgress[currentIndex].value = val;
    }
  });
  document.querySelector(".currentTime").innerText = `${Math.floor(
    currentSong.currentTime / 60
  )
    .toString()
    .padStart("2", "0")}:${Math.floor(currentSong.currentTime % 60)
    .toString()
    .padStart("2", "0")}/${Math.floor(currentSong.duration / 60 || 0)
    .toString()
    .padStart("2", "0")}:${Math.floor(currentSong.duration % 60 || 0)
    .toString()
    .padStart("2", "0")}`;
  if (currentSong.currentTime == currentSong.duration) {
    play(songPlay[currentIndex + 1], currentIndex + 1);
  }
});

function volume(vol) {
  currentSong.volume = vol;
  console.log(currentSong.volume);
  if (vol == 0) {
    document.querySelector(".full-volume").classList.add("hidden");
    document.querySelector(".mute").classList.remove("hidden");
  } else if (vol == 0.33) {
    document.querySelector(".mute").classList.add("hidden");
    document.querySelector(".less-volume").classList.remove("hidden");
  } else if (vol == 0.66) {
    document.querySelector(".less-volume").classList.add("hidden");
    document.querySelector(".more-volume").classList.remove("hidden");
  } else {
    document.querySelector(".more-volume").classList.add("hidden");
    document.querySelector(".full-volume").classList.remove("hidden");
  }
}

function randomGenerator(length, range) {
  let rand = [];
  while (rand.length < length) {
    let ind = Math.floor(Math.random() * range);
    if (!rand.includes(ind)) rand.push(ind);
  }
  return rand;
}

// playerPause.onclick =()=>{
//     currentSong.pause();
//     playerPlay.classList.remove("hidden");
//     playerPause.classList.add("hidden");
//     if(!isPlaylistChanged){
//         songPause[currentIndex].style.display = "none";
//         songPlay[currentIndex].style.display = "block";
//     }
// }

playerPause.addEventListener("click", () => {
  currentSong.pause();
  playerPlay.classList.remove("hidden");
  playerPause.classList.add("hidden");
  if (!isPlaylistChanged) {
    songPause[currentIndex].style.display = "none";
    songPlay[currentIndex].style.display = "block";
  }
});

playerPlay.onclick = () => {
  currentSong.play();
  playerPlay.classList.add("hidden");
  playerPause.classList.remove("hidden");
  if (!isPlaylistChanged) {
    songPlay.forEach((p) => {
      p.style.display = "block";
    });
    songPause.forEach((p) => {
      p.style.display = "none";
    });
    songPlay[currentIndex].style.display = "none";
    songPause[currentIndex].style.display = "block";
  }
};

document.querySelector(".playerPrev").onclick = () => {
  if (currentIndex === 0) {
    currentIndex = allSongs.length;
  }
  play(songPlay[currentIndex - 1], currentIndex - 1);
};

document.querySelector(".playerNext").onclick = () => {
  if (currentIndex >= allSongs.length - 1) {
    currentIndex = -1;
  }
  play(songPlay[currentIndex + 1], currentIndex + 1);
};

playerProgressBar.addEventListener("input", () => {
  currentSong.currentTime =
    (playerProgressBar.value * currentSong.duration) / 100;
});

// aside

// Trending Songs Section
const trendingSongs = document.querySelectorAll(".trendingSong");
const trendingName = document.querySelectorAll(".trendingName");

var rand = randomGenerator(10, 115);
trendingSongs.forEach((trendingSong, i) => {
  trendingSong.style.backgroundImage = `url(${
    allAvailableSongs[rand[i]].cover
  })`;
  trendingName[i].innerText = allAvailableSongs[rand[i]].name;
  trendingSong.addEventListener("click", () => {
    let song = allAvailableSongs.find(
      (availableSong) => availableSong.name === trendingName[i].innerText
    );
    currentSong.src = song.path;
    playerCover.src = song.cover;
    playname.innerText = song.name;
    singer.innerText = song.singer;
    playerPlay.classList.add("hidden");
    playerPause.classList.remove("hidden");
    currentSong.play();
  });
});

// Artists Section
const artists = document.querySelectorAll(".artist");
const artistName = document.querySelectorAll(".artistName");
artists.forEach((artist, i) => {
  artist.style.backgroundImage = `url(covers/${allArtists[i].cover}.png)`;
  artist.addEventListener("click", () => {
    allSongs = allAvailableSongs.filter((song, index) => {
      return allAvailableSongs[index].singer === allArtists[i].name;
    });
    document.querySelector(".albumname").innerHTML = "best of:<span> </span>";
    document.querySelector(".albumname span").innerText = allArtists[i].name;
    while (songsContainer.firstChild) {
      songsContainer.removeChild(songsContainer.firstChild);
    }
    fetchPlaylist();
    playlistEvents();
    isPlaylistChanged = true;
  });
});
artistName.forEach((name, i) => {
  name.innerText = allArtists[i].name || "";
});

// Search
searchBox.addEventListener("input", (event) => {
  allSongs = allAvailableSongs.filter((availableSong) => {
    let movieMatch = false;
    let singerMatch = false;
    if (availableSong.movie) {
      movieMatch = availableSong.movie
        .toLowerCase()
        .includes(searchBox.value.trim());
    }
    if (availableSong.singer) {
      singerMatch = availableSong.singer
        .toLowerCase()
        .includes(searchBox.value.trim());
    }
    let nameMatch = availableSong.name
      .toLowerCase()
      .includes(searchBox.value.trim());
    return nameMatch || movieMatch || singerMatch;
  });
  if (allSongs.length > 0) {
    document.querySelector(".albumname").innerHTML =
      "showing results related to:<span> </span>";
    document.querySelector(".albumname span").innerText = searchBox.value;
    while (songsContainer.firstChild) {
      songsContainer.removeChild(songsContainer.firstChild);
    }
    fetchPlaylist();
    playlistEvents();
  } else {
    document.querySelector(".albumname").innerText =
      "Sorry Couldn't Found Any Matches";
  }
  isPlaylistChanged = true;
});

// Movie Albums
let allMovies = allAvailableSongs.reduce((accumulator, value) => {
  if (value.movie && !accumulator.some((item) => item.movie === value.movie)) {
    accumulator.push(value);
  }
  return accumulator;
}, []);
let allMovieCovers = allMovies.map((movie) => movie.cover);
let allMovieNames = allMovies.map((movie) => movie.movie);
const albumCover = document.querySelectorAll(".album");
const albumName = document.querySelectorAll(".albumName");
var rand = randomGenerator(10, 20);
albumCover.forEach((album, index) => {
  album.style.backgroundImage = `url(${allMovieCovers[rand[index]]})`;
  albumName[index].innerText = allMovieNames[rand[index]];
  album.addEventListener("click", (event) => {
    allSongs = allAvailableSongs.filter((song) => {
      if (song.movie)
        return (
          song.movie.toLowerCase() == albumName[index].innerText.toLowerCase()
        );
    });
    document.querySelector(".albumname").innerHTML = "Songs Of:<span> </span>";
    document.querySelector(".albumname span").innerText =
      albumName[index].innerText;
    while (songsContainer.firstChild) {
      songsContainer.removeChild(songsContainer.firstChild);
    }
    fetchPlaylist();
    playlistEvents();
    isPlaylistChanged = true;
  });
});

// language

const languages = document.querySelectorAll(".language");
const lang = document.querySelectorAll(".language h3");
languages.forEach((language, index) => {
  language.addEventListener("click", () => {
    allSongs = allAvailableSongs.filter((song) => {
      return song.lang == lang[index].innerText.toLowerCase();
    });
    document.querySelector(".albumname").innerHTML = "Popular <span> </span>";
    document.querySelector(
      ".albumname span"
    ).innerText = `${lang[index].innerText} songs`;
    while (songsContainer.firstChild) {
      songsContainer.removeChild(songsContainer.firstChild);
    }
    fetchPlaylist();
    playlistEvents();
    isPlaylistChanged = true;
  });
});

function changeMode(mode) {
  if (mode === "dark") {
    document.querySelector(":root").style =
      "--primary-color: black; --text-color:white; --light-color: rgba(255, 255, 255,0.6); --search-color:rgba(255, 255, 255,0.2)";
    document.querySelector(".dark").classList.add("hidden");
    document.querySelector(".light").classList.remove("hidden");
  } else {
    document.querySelector(":root").style =
      "--primary-color: white; --text-color:black; --light-color: rgb(80, 75, 75); --search-color: whitesmoke;";
    document.querySelector(".light").classList.add("hidden");
    document.querySelector(".dark").classList.remove("hidden");
  }
}

document.addEventListener("keydown", (event) => {
  if (event.target.tagName !== "INPUT" && event.target.tagName !== "TEXTAREA") {
    event.preventDefault();
    if (event.key === "ArrowUp") {
      if (currentSong.volume <= 0.9) currentSong.volume += 0.1;
      else currentSong.volume = 1;
    } else if (event.key === "ArrowDown") {
      if (currentSong.volume >= 0.1) currentSong.volume -= 0.1;
      else currentSong.volume = 0;
    } else if (event.key === "ArrowLeft") {
      if (currentSong.currentTime >= 10) currentSong.currentTime -= 10;
      else currentSong.currentTime = 0;
    } else if (event.key === "ArrowRight") {
      if (currentSong.currentTime <= currentSong.duration - 10)
        currentSong.currentTime += 10;
      else currentSong.currentTime = currentSong.duration - 1;
    }
  }
});
