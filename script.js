const alphaBox = document.querySelector('#alphaBox');
const finalBox = document.querySelector('.finalBox');
const middleBox = document.querySelector('.middleBox');
const initialBox = document.querySelector('.initialBox');
let mainMessage = document.querySelector('#mainMessage');
let title = document.querySelector('.english');
let flag = document.querySelector('#flag');
const alphabet = {
    "1": {
        "letter": "ا",
        "name": "alef",
        "english": "ah",
        "soundslike": "'ā' and initial vowels 'a', 'e' and 'o'",
        "initial": "ا",
        "middle": "ــا",
        "final": "ــا",
        "soundclip": "./assets/sounds/alef.mp3"
    },
    "2": {
        "letter": "ب",
        "name": "be",
        "english": "b",
        "soundslike": "b",
        "initial": "بــ",
        "middle": "ــبــ",
        "final": "ــب",
        "soundclip": "./assets/sounds/be.mp3"
    },
    "3": {
        "letter": "پ",
        "name": "pe",
        "english": "p",
        "soundslike": "p",
        "initial": "پــ",
        "middle": "ــپــ",
        "final": "ــپ",
        "soundclip": "./assets/sounds/pe.mp3"
    },
    "4": {
        "letter": "ت",
        "name": "te",
        "english": "t",
        "soundslike": "t",
        "initial": "تــ",
        "middle": "ــتــ",
        "final": "ــت",
        "soundclip": "./assets/sounds/te.mp3"
    },
    "5": {
        "letter": "ث",
        "name": "se",
        "english": "",
        "soundslike": "s, th",
        "initial": "ثــ",
        "middle": "ـثــ",
        "final": "ــث",
        "soundclip": "./assets/sounds/se.mp3"
    },
    "6": {
        "letter": "ج",
        "name": "jim",
        "english": "j",
        "soundslike": "j",
        "initial": "جــ",
        "middle": "ـجــ",
        "final": "ــج",
        "soundclip": "./assets/sounds/jim.mp3"
    },
    "7": {
        "letter": "چ",
        "name": "che",
        "english": "ch",
        "soundslike": "ch",
        "initial": "چــ",
        "middle": "ــچــ",
        "final": "ــچ",
        "soundclip": "./assets/sounds/che.mp3"
    },
    "8": {
        "letter": "ح",
        "name": "he",
        "english": "h",
        "soundslike": "soft h",
        "initial": "حــ",
        "middle": "ــحــ",
        "final": "ــح",
        "soundclip": "./assets/sounds/he.mp3"
    },
    "9": {
        "letter": "خ",
        "name": "khe",
        "english": "",
        "soundslike": "rough H",
        "initial": "خــ",
        "middle": "ــخــ",
        "final": "ــخ",
        "soundclip": "./assets/sounds/khe.mp3"
    },
    "10": {
        "letter": "د",
        "name": "dal",
        "english": "d",
        "soundslike": "d",
        "initial": "د",
        "middle": "ــد",
        "final": "ــد",
        "soundclip": "./assets/sounds/dal.mp3"
    },
    "11": {
        "letter": "ذ",
        "name": "zal",
        "english": "z",
        "soundslike": "z",
        "initial": "ذ",
        "middle": "ــذ",
        "final": "ــذ",
        "soundclip": "./assets/sounds/zal.mp3"
    },
    "12": {
        "letter": "ر",
        "name": "re",
        "english": "r",
        "soundslike": "rolled r",
        "initial": "ر",
        "middle": "ــر",
        "final": "ــر",
        "soundclip": "./assets/sounds/re.mp3"
    },
    "13": {
        "letter": "ز",
        "name": "ze",
        "english": "z",
        "soundslike": "z",
        "initial": "ز",
        "middle": "ــز",
        "final": "ــز",
        "soundclip": "./assets/sounds/ze.mp3"
    },
    "14": {
        "letter": "ژ",
        "name": "zhe",
        "english": "zh",
        "soundslike": "meaSUre",
        "initial": "ژ",
        "middle": "ــژ",
        "final": "ــژ",
        "soundclip": "./assets/sounds/zhe.mp3"
    },
    "15": {
        "letter": "س",
        "name": "sin",
        "english": "s",
        "soundslike": "s",
        "initial": "ســ",
        "middle": "ــســ",
        "final": "ــس",
        "soundclip": "./assets/sounds/sin.mp3"
    },
    "16": {
        "letter": "ش",
        "name": "shin",
        "english": "sh",
        "soundslike": "sh",
        "initial": "شــ",
        "middle": "ــشــ",
        "final": "ــش",
        "soundclip": "./assets/sounds/shin.mp3"
    },
    "17": {
        "letter": "ص",
        "name": "sād",
        "english": "s",
        "soundslike": "s",
        "initial": "صــ",
        "middle": "ــصــ",
        "final": "ــص",
        "soundclip": "./assets/sounds/sad.mp3"
    },
    "18": {
        "letter": "ض",
        "name": "zād",
        "english": "z",
        "soundslike": "z",
        "initial": "ضــ",
        "middle": "ــضــ",
        "final": "ــض",
        "soundclip": "./assets/sounds/zad.mp3"
    },
    "19": {
        "letter": "ط",
        "name": "tā",
        "english": "t",
        "soundslike": "t",
        "initial": "طــ",
        "middle": "ــطــ",
        "final": "ــط",
        "soundclip": "./assets/sounds/ta.mp3"
    },
    "20": {
        "letter": "ظ",
        "name": "zā",
        "english": "z",
        "soundslike": "z",
        "initial": "ظــ",
        "middle": "ــظــ",
        "final": "ــظ",
        "soundclip": "./assets/sounds/za.mp3"
    },
    "21": {
        "letter": "ع",
        "name": "‘ain",
        "english": "n/a",
        "soundslike": "ae",
        "initial": "عــ",
        "middle": "ــعــ",
        "final": "ــع",
        "soundclip": "./assets/sounds/ain.mp3"
    },
    "22": {
        "letter": "غ",
        "name": "ghain",
        "english": "n/a",
        "soundslike": "",
        "initial": "غــ",
        "middle": "ــغــ",
        "final": "ــغ",
        "soundclip": "./assets/sounds/ghain.mp3"
    },
    "23": {
        "letter": "ف",
        "name": "fe",
        "english": "f",
        "soundslike": "",
        "initial": "فــ",
        "middle": "ــفــ",
        "final": "ــف",
        "soundclip": "./assets/sounds/fe.mp3"
    },
    "24": {
        "letter": "ق",
        "name": "qāf",
        "english": "n/a",
        "soundslike": "deep in mouth k or g",
        "initial": "قــ",
        "middle": "ــقــ",
        "final": "ــق",
        "soundclip": "./assets/sounds/qaf.mp3"
    },
    "25": {
        "letter": "ک",
        "name": "kāf",
        "english": "k",
        "soundslike": "k",
        "initial": "کــ",
        "middle": "ــکــ",
        "final": "ــک",
        "soundclip": "./assets/sounds/kaf.mp3"
    },
    "26": {
        "letter": "گ",
        "name": "gāf",
        "english": "g",
        "soundslike": "g",
        "initial": "گــ",
        "middle": "ــگــ",
        "final": "ــگ",
        "soundclip": "./assets/sounds/gaf.mp3"
    },
    "27": {
        "letter": "ل",
        "name": "lām",
        "english": "l",
        "soundslike": "l",
        "initial": "لــ",
        "middle": "ــلــ",
        "final": "ــل",
        "soundclip": "./assets/sounds/lam.mp3"
    },
    "28": {
        "letter": "م",
        "name": "mim",
        "english": "m",
        "soundslike": "m",
        "initial": "مــ",
        "middle": "ــمــ",
        "final": "ــم",
        "soundclip": "./assets/sounds/mim.mp3"
    },
    "29": {
        "letter": "ن",
        "name": "nun",
        "english": "n",
        "soundslike": "n",
        "initial": "نــ",
        "middle": "ــنــ",
        "final": "ــن",
        "soundclip": "./assets/sounds/nun.mp3"
    },
    "30": {
        "letter": "و",
        "name": "vāv",
        "english": "v",
        "soundslike": "v",
        "initial": "و",
        "middle": "ــو",
        "final": "ــو",
        "soundclip": "./assets/sounds/vav.mp3"
    },
    "31": {
        "letter": "ه",
        "name": "he",
        "english": "h",
        "soundslike": "h",
        "initial": "هــ",
        "middle": "ــهــ",
        "final": "ــه",
        "soundclip": "./assets/sounds/heh.mp3"
    },
    "32": {
        "letter": "ی",
        "name": "ye",
        "english": "y, i",
        "soundslike": "y",
        "initial": "یــ",
        "middle": "ــیــ",
        "final": "ــی",
        "soundclip": "./assets/sounds/ye.mp3"
    }
}
flag.addEventListener('click', function () {
    window.location.reload();
})
function playSound(num) {
    audio = new Audio(alphabet[num].soundclip);
    audio.volume = .8;
    audio.play();
    initialBox.textContent = alphabet[num].initial;
    middleBox.textContent = alphabet[num].middle;
    finalBox.textContent = alphabet[num].final;
    title.textContent = alphabet[num].name;
};


