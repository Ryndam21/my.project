// Fungsi untuk memulai musik
function playMusic() {
  const music = document.getElementById('background-music');
  music.play();
}

window.addEventListener('DOMContentLoaded', function() {
  const tap = document.getElementById('tap');
  if (tap) {
    tap.classList.add('d-none'); 
  }
  playMusic();
  initSakuraRain(); // Jalankan efek bunga otomatis saat halaman dimuat
});

document.body.addEventListener('click', playMusic, { once: true });

const content = document.getElementById('content');
const footer = document.getElementsByTagName('footer')[0];
const timer = document.getElementById('timer');

const second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24;

let countDown = new Date('Oct 2, 2026 00:00:00').getTime(),
  x = setInterval(function () {
    let now = new Date().getTime(),
      distance = countDown - now;
      document.getElementById('days').innerText = Math.floor(distance / (day)),
      document.getElementById('hours').innerText = Math.floor(distance / (hour)),
      document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
      document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);

    if (distance < 0) {
      timer.classList.add('d-none');
      confetti();
      clearInterval(x);
      _slideSatu();
    }
  }, second);

const _slideSatu = function () {
  const tap = document.getElementById('tap');
  const slideSatu = document.getElementById('slideSatu');
  slideSatu.classList.remove('d-none');
  setTimeout(function () {
    tap.classList.remove('d-none');
    document.body.addEventListener('click', function () {
      _slideDua();
    });
  }, 7000);
};

const _slideDua = function () {
  const slideSatu = document.getElementById('slideSatu');
  const tap = document.getElementById('tap');
  const slideDua = document.getElementById('slideDua');

  setTimeout(function () {
    slideSatu.classList.replace('animate__slideInDown', 'animate__backOutDown');
    tap.classList.add('d-none');
    setTimeout(function () {
      slideSatu.classList.add('d-none');
    }, 1000);
  }, 1000);

  slideDua.classList.remove('d-none');
  setTimeout(function () {
    tap.classList.remove('d-none');
    document.body.addEventListener('click', function () {
      slideDua.classList.replace('animate__zoomInDown', 'animate__fadeOutLeft');
      slideDua.classList.remove('animate__delay-2s', 'animate__slow');
      tap.classList.add('d-none');
      setTimeout(function () {
        slideDua.remove();
        _slideTiga();
      }, 1000);
    });
  }, 40000);
};

const _slideTiga = function () {
  const tap = document.getElementById('tap');
  const slideTiga = document.getElementById('slideTiga');

  slideTiga.classList.remove('d-none');
  
  setTimeout(function () {
    tap.classList.remove('d-none');
    document.body.addEventListener('click', function () {
      slideTiga.classList.remove('animate__delay-2s', 'animate__slow');
      slideTiga.classList.replace('animate__fadeInRight', 'animate__fadeOut');
      tap.remove();
      setTimeout(function () {
        slideTiga.remove();
        _slideEmpat();
      }, 1000);
    }, { once: true });
  }, 11000);
};

function getRandomPosition(element) {
  var x = document.body.offsetHeight - element.clientHeight;
  var y = document.body.offsetWidth - element.clientWidth;
  var randomX = Math.floor(Math.random() * 500);
  var randomY = Math.floor(Math.random() * y);
  return [randomX, randomY];
};

const _slideEmpat = function () {
  const slideEmpat = document.getElementById('slideEmpat');
  const btn = document.getElementsByTagName('button');
  slideEmpat.classList.remove('d-none');

  btn[0].addEventListener('click', function () {
    var xy = getRandomPosition(slideEmpat);
    slideEmpat.style.top = xy[0] + 'px';
  });

  btn[1].addEventListener('click', function () {
    slideEmpat.classList.replace('animate__fadeInDown', 'animate__bounceOut');
    slideEmpat.classList.remove('animate__delay-2s');
    setTimeout(function () {
      slideEmpat.remove();
      setTimeout(() => {
        _slideLima();
      }, 500);
    }, 1000);
  });
};

const _slideLima = function () {
  const slideLima = document.getElementById('slideLima');
  slideLima.classList.remove('d-none');
  const trims = document.getElementById('trims');

  setTimeout(() => {
    trims.classList.remove('d-none');
  }, 1000);

  slideLima.addEventListener('animationend', () => {
    slideLima.classList.add('animate__delay-3s');
    slideLima.classList.replace('animate__bounceIn', 'animate__fadeOut');
    trims.classList.add('animate__animated', 'animate__fadeOut', 'animate__delay-3s');
    setTimeout(() => {
      trims.remove();
      setTimeout(() => {
        slideLima.remove();
        _slideEnam();
      }, 1000);
    }, 6000);
  });
};

const _slideEnam = function () {
  const slideFoto = document.getElementById('slideFoto'); // Mengarah ke ID galeri foto di index.html
  if (slideFoto) {
    slideFoto.classList.remove('d-none');
  }
};
// TypeIt Slide 1
new TypeIt("#teks1", {
  strings: [
    "Selamat ulang tahun, sayang.", 
    "Hari ini, aku langitkan semua doa terbaikku untukmu.", 
    "Terima kasih ya sudah lahir ke dunia ini dan menjadi salah satu bagian terbaik dalam hidupku.", 
    "Bersamamu membuatku paham artinya bersyukur setiap hari.", 
    "Terima kasih atas setiap senyuman, kehangatan, dan kebaikan yang selalu kamu bagikan.", 
    "Semoga hal-hal yang membuatmu runtuh turut menjadi alasan buat kamu untuk tetap tumbuh.", 
    "Semoga dunia senantiasa menjagamu dimana pun kamu berada.",   
  ],
  startDelay: 3000,
  speed: 90,
  waitUntilVisible: true
}).go();

setTimeout(function() {
  const tap = document.getElementById('tap');
  if (tap) {
    tap.classList.remove('d-none'); 
  }

  function handleTelevisClick() {
    document.removeEventListener('click', handleTelevisClick);
    const tapEl = document.getElementById('tap');
    if (tapEl) tapEl.classList.add('d-none');
    _slideDua();
  }
  document.addEventListener('click', handleTelevisClick, { once: true });
}, 13000);

// TypeIt Slide 2 (#teks2)
new TypeIt("#teks2", {
  strings: [
    "Semoga setiap hari kamu selalu diiringi oleh cinta yang tak pernah ada batasnya, dan setiap langkahmu dimudahkan hingga tercapai apa yang kamu inginkan.",
    "Diusiamu yang baru ini, ingat ya kalau kamu nggak pernah sendirian.", 
    "Dalam setiap langkah, suka, maupun duka yang akan datang, aku akan selalu ada disini untuk menemani dan mendukungmu.", 
    "Dengan ataupun tanpaku, semoga semesta selalu membahagiakan kamu bagaimanapun caranya.", 
    "Barakallah fi umrik, terima kasih sayang sudah bertahan sampai sejauh ini.", 
    "- I Love You Syifa"
  ],
  startDelay: 2000,
  speed: 90,
  waitUntilVisible: true
}).go();

new TypeIt("#trims", {
  strings: ["Bonus"],
  startDelay: 2000,
  speed: 100,
  loop: false,
  waitUntilVisible: true,
}).go();

'use strict';

var onlyOnKonami = false;

function confetti() {
  var $window =$(window),
    random = Math.random,
    cos = Math.cos,
    sin = Math.sin,
    PI = Math.PI,
    PI2 = PI * 2,
    timer = undefined,
    frame = undefined,
    confetti = [];

  var runFor = 2000;
  var isRunning = true;

  setTimeout(() => {
    isRunning = false;
  }, runFor);

  var konami = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65],
    pointer = 0;

  var particles = 150,
    spread = 20,
    sizeMin = 5,
    sizeMax = 12 - sizeMin,
    eccentricity = 10,
    deviation = 100,
    dxThetaMin = -.1,
    dxThetaMax = -dxThetaMin - dxThetaMin,
    dyMin = .13,
    dyMax = .18,
    dThetaMin = .4,
    dThetaMax = .7 - dThetaMin;

  var colorThemes = [
    function () { return color(200 * random() | 0, 200 * random() | 0, 200 * random() | 0); },
    function () { var black = 200 * random() | 0; return color(200, black, black); },
    function () { var black = 200 * random() | 0; return color(black, 200, black); },
    function () { var black = 200 * random() | 0; return color(black, black, 200); },
    function () { return color(200, 100, 200 * random() | 0); },
    function () { return color(200 * random() | 0, 200, 200); },
    function () { var black = 256 * random() | 0; return color(black, black, black); },
    function () { return colorThemes[random() < .5 ? 1 : 2](); },
    function () { return colorThemes[random() < .5 ? 3 : 5](); },
    function () { return colorThemes[random() < .5 ? 2 : 4](); }
  ];

  function color(r, g, b) {
    return 'rgb(' + r + ',' + g + ',' + b + ')';
  }

  function interpolation(a, b, t) {
    return (1 - cos(PI * t)) / 2 * (b - a) + a;
  }

  var radius = 1 / eccentricity,
    radius2 = radius + radius;

  function createPoisson() {
    var domain = [radius, 1 - radius],
      measure = 1 - radius2,
      spline = [0, 1];
    while (measure) {
      var dart = measure * random(),
        i, l, interval, a, b, c, d;

      for (i = 0, l = domain.length, measure = 0; i < l; i += 2) {
        a = domain[i], b = domain[i + 1], interval = b - a;
        if (dart < measure + interval) {
          spline.push(dart += a - measure);
          break;
        }
        measure += interval;
      }
      c = dart - radius, d = dart + radius;

      for (i = domain.length - 1; i > 0; i -= 2) {
        l = i - 1, a = domain[l], b = domain[i];
        if (a >= c && a < d)
          if (b > d) domain[l] = d;
          else domain.splice(l, 2);
        else if (a < c && b > c)
          if (b <= d) domain[i] = c;
          else domain.splice(i, 0, c, d);
      }

      for (i = 0, l = domain.length, measure = 0; i < l; i += 2)
        measure += domain[i + 1] - domain[i];
    }
    return spline.sort();
  }

  var container = document.createElement('div');
  container.style.position = 'fixed';
  container.style.top = '0';
  container.style.left = '0';
  container.style.width = '100%';
  container.style.height = '0';
  container.style.overflow = 'visible';
  container.style.zIndex = '9999';

  function Confetto(theme) {
    this.frame = 0;
    this.outer = document.createElement('div');
    this.inner = document.createElement('div');
    this.outer.appendChild(this.inner);

    var outerStyle = this.outer.style,
      innerStyle = this.inner.style;
    outerStyle.position = 'absolute';
    outerStyle.width = (sizeMin + sizeMax * random()) + 'px';
    outerStyle.height = (sizeMin + sizeMax * random()) + 'px';
    innerStyle.width = '100%';
    innerStyle.height = '100%';
    innerStyle.backgroundColor = theme();

    outerStyle.perspective = '50px';
    outerStyle.transform = 'rotate(' + (360 * random()) + 'deg)';
    this.axis = 'rotate3D(' +
      cos(360 * random()) + ',' +
      cos(360 * random()) + ',0,';
    this.theta = 360 * random();
    this.dTheta = dThetaMin + dThetaMax * random();
    innerStyle.transform = this.axis + this.theta + 'deg)';

    this.x = $window.width() * random();
    this.y = -deviation;
    this.dx = sin(dxThetaMin + dxThetaMax * random());
    this.dy = dyMin + dyMax * random();
    outerStyle.left = this.x + 'px';
    outerStyle.top = this.y + 'px';

    this.splineX = createPoisson();
    this.splineY = [];
    for (var i = 1, l = this.splineX.length - 1; i < l; ++i)
      this.splineY[i] = deviation * random();
    this.splineY[0] = this.splineY[l] = deviation * random();

    this.update = function (height, delta) {
      this.frame += delta;
      this.x += this.dx * delta;
      this.y += this.dy * delta;
      this.theta += this.dTheta * delta;

      var phi = this.frame % 7777 / 7777,
        i = 0,
        j = 1;
      while (phi >= this.splineX[j]) i = j++;
      var rho = interpolation(
        this.splineY[i],
        this.splineY[j],
        (phi - this.splineX[i]) / (this.splineX[j] - this.splineX[i])
      );
      phi *= PI2;

      outerStyle.left = this.x + rho * cos(phi) + 'px';
      outerStyle.top = this.y + rho * sin(phi) + 'px';
      innerStyle.transform = this.axis + this.theta + 'deg)';
      return this.y > height + deviation;
    };
  }

  function poof() {
    if (!frame) {
      document.body.appendChild(container);
      var theme = colorThemes[onlyOnKonami ? colorThemes.length * random() | 0 : 0],
        count = 0;

      (function addConfetto() {
        if (onlyOnKonami && ++count > particles)
          return timer = undefined;

        if (isRunning) {
          var confetto = new Confetto(theme);
          confetti.push(confetto);
          container.appendChild(confetto.outer);
          timer = setTimeout(addConfetto, spread * random());
        }
      })(0);

      var prev = undefined;
      requestAnimationFrame(function loop(timestamp) {
        var delta = prev ? timestamp - prev : 0;
        prev = timestamp;
        var height = $window.height();

        for (var i = confetti.length - 1; i >= 0; --i) {
          if (confetti[i].update(height, delta)) {
            container.removeChild(confetti[i].outer);
            confetti.splice(i, 1);
          }
        }

        if (timer || confetti.length)
          return frame = requestAnimationFrame(loop);

        document.body.removeChild(container);
        frame = undefined;
      });
    }
  }

  $window.keydown(function (event) {
    pointer = konami[pointer] === event.which ?
      pointer + 1 :
      +(event.which === konami[0]);
    if (pointer === konami.length) {
      pointer = 0;
      poof();
    }
  });

  if (!onlyOnKonami) poof();
}

// --- EFEK KELOPAK BUNGA EMOJI BERJATUHAN ---
function initSakuraRain() {
  const sakuraContainer = document.createElement('div');
  sakuraContainer.className = 'sakura-container';
  document.body.appendChild(sakuraContainer);

  const flowers = ['🌸']; // Pilihan bunga warna pink
  const petalCount = 15; 

  for (let i = 0; i < petalCount; i++) {
    const petal = document.createElement('div');
    petal.className = 'petal';
    
    // Pilih emoji secara acak
    petal.innerHTML = flowers[Math.floor(Math.random() * flowers.length)];
    petal.style.left = `${Math.random() * 100}vw`;

    // Durasi jatuh vertikal yang bervariasi (6 - 12 detik)
    const fallDuration = Math.random() * 6 + 6; 
    // Durasi goyangan horizontal yang berbeda-beda tiap bunga (2 - 5 detik)
    const swayDuration = Math.random() * 3 + 2; 
    
    const size = Math.random() * 20 + 25; 
    
    // Menerapkan dua durasi animasi (jatuh & goyang) secara bersamaan
    petal.style.animationDuration = `${fallDuration}s, ${swayDuration}s`;
    petal.style.fontSize = `${size}px`;
    petal.style.animationDelay = `${Math.random() * 5}s, ${Math.random() * 2}s`;

    sakuraContainer.appendChild(petal);
    
  }
}

const memoryPhotos = [
  "./img/foto1.jpeg",
  "./img/foto2.jpeg",
  "./img/foto3.jpeg",
  "./img/foto4.jpeg",
  "./img/foto5.jpeg",
  "./img/foto6.jpeg",
  "./img/foto7.jpeg"
];

let currentPhotoIndex = -1;

function nextPhotoStep() {
  const envelopeWrapper = document.getElementById('envelope-wrapper');
  const photoContainer = document.getElementById('photo-display-container');
  const photoCard = document.getElementById('photo-card-wrapper');
  const photoImg = document.getElementById('current-memory-photo');

  // Langkah 1: Saat amplop pertama kali diketuk (Transisi halus ke foto)
  if (currentPhotoIndex === -1) {
    if (envelopeWrapper) {
      // Efek amplop membesar dan memudar perlahan
      envelopeWrapper.style.transition = 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)';
      envelopeWrapper.style.transform = 'scale(1.15)';
      envelopeWrapper.style.opacity = '0';
      
      // Tunggu sampai efek amplop pudar, baru tampilkan foto
      setTimeout(() => {
        envelopeWrapper.style.display = 'none';
        
        // Siapkan dan tampilkan container foto
        photoContainer.style.display = 'flex';
        currentPhotoIndex = 0;
        photoImg.src = memoryPhotos[currentPhotoIndex];
        
        // Mulai dari skala kecil (efek keluar dari dalam amplop)
        photoCard.style.transition = 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
        photoCard.style.opacity = '0';
        photoCard.style.transform = 'scale(0.5)';
        
        // Picu animasi kemunculan foto polaroid dengan efek spring/bounce lembut
        requestAnimationFrame(() => {
          setTimeout(() => {
            photoCard.style.opacity = '1';
            photoCard.style.transform = 'scale(1)';
          }, 30);
        });
      }, 300); // Sinkron dengan durasi pudar amplop
    }
    return;
  }

  // Langkah 2: Ketuk untuk lanjut ke foto berikutnya
  currentPhotoIndex++;

  if (currentPhotoIndex < memoryPhotos.length) {
    // Efek transisi antar foto
    photoCard.style.transform = 'scale(0.85)';
    photoCard.style.opacity = '0';

    setTimeout(() => {
      photoImg.src = memoryPhotos[currentPhotoIndex];
      photoCard.style.transform = 'scale(1)';
      photoCard.style.opacity = '1';
    }, 180);
  } else {
    // Jika foto sudah habis, sembunyikan kartu
    photoCard.style.transform = 'scale(0.8)';
    photoCard.style.opacity = '0';
  }
}