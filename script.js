// =========================
// ИЗМЕНИТЬ ДАТУ СВАДЬБЫ ЗДЕСЬ
// =========================
const weddingDate = new Date('2026-11-14T18:30:00+03:00');

const envelope = document.getElementById('envelope');
const body = document.body;
const wishInput = document.getElementById('wishInput');
const addWishButton = document.getElementById('addWish');
const wishList = document.getElementById('wishList');
const langButtons = document.querySelectorAll('.lang-btn');

const translations = {
  ru: {
    invited: 'Вы приглашены',
    names: 'Оразбек <span>&</span> Балнура',
    date: '13 ноября 2026',
    location: 'ХАЁТ РЕСТОРАН, Чирчик',
    countdownTitle: 'До нашей свадьбы',
    days: 'Дней',
    hours: 'Часов',
    minutes: 'Минут',
    seconds: 'Секунд',
    locationLabel: 'Локация',
    locationTitle: 'Место встречи',
    addressLine1: 'город Чирчик, Аранчи',
    addressLine2: 'Ресторан Хаёт',
    googleMaps: 'Google Maps',
    yandexMaps: 'Яндекс Карты',
    galleryLabel: 'Галерея',
    galleryTitle: 'Наши моменты',
    wishesLabel: 'Пожелания',
    wishesTitle: 'Книга гостей',
    addWish: 'Добавить пожелание',
    wish1: 'Спасибо, что разделяете с нами этот счастливый день.',
    wish2: 'Пусть ваша любовь будет такой же светлой и крепкой.',
    wish3: 'Желаем вам бесконечных прекрасных моментов.',
    textarea: 'Напишите тёплые слова...',
    surveyLabel: 'Опрос',
    surveyTitle: 'Вы придёте?',
    attendYes: 'Да, обязательно приду',
    attendNo: 'К сожалению, не смогу',
    surveySubmit: 'Ответить',
    surveyThanksYes: 'Спасибо! Мы будем ждать вас.',
    surveyThanksNo: 'Спасибо за ответ. Очень жаль, что не сможете прийти.'
  },
  uz: {
    invited: 'Siz taklif etilasiz',
    names: 'Orazbek <span>&</span> Balnura',
    date: '13-noyabr 2026',
    location: 'XAYOT RESTORAN, Chirchiq',
    countdownTitle: 'To’yimizgacha',
    days: 'Kun',
    hours: 'Soat',
    minutes: 'Daqiqa',
    seconds: 'Sekund',
    locationLabel: 'Manzil',
    locationTitle: 'Uchrashuv joyi',
    addressLine1: 'Chirchiq shahri, Aranchi',
    addressLine2: 'Xayot Restoran',
    googleMaps: 'Google Maps',
    yandexMaps: 'Yandex Xaritalar',
    galleryLabel: 'Galereya',
    galleryTitle: 'Bizning lahzalarimiz',
    wishesLabel: 'Tilaklar',
    wishesTitle: 'Mehmonlar kitobi',
    addWish: 'Tilak qo‘shish',
    wish1: 'Bu baxtli kunda biz bilan birga bo‘lishingiz uchun rahmat.',
    wish2: 'Sizning sevginingiz ham shunchalik yorqin va kuchli bo‘lsin.',
    wish3: 'Sizga cheksiz go‘zal daqiqalar tilaymiz.',
    textarea: 'Iltimos, iliq so‘zlar yozing...',
    surveyLabel: 'So‘rov',
    surveyTitle: 'Siz kelasizmi?',
    attendYes: 'Ha, albatta kelaman',
    attendNo: 'Afsuski, kela olmayman',
    surveySubmit: 'Javob berish'
  },
  kz: {
    invited: 'Сіздерді шақырамыз',
    names: 'Оразбек <span>&</span> Балнура',
    date: '13 қараша 2026',
    location: 'ХАЁТ РЕСТОРАН, Чирчик',
    countdownTitle: 'Біздің үйленуімізге дейін',
    days: 'Күн',
    hours: 'Сағат',
    minutes: 'Минут',
    seconds: 'Секунд',
    locationLabel: 'Орналасқан жер',
    locationTitle: 'Кездесу орны',
    addressLine1: 'Чирчик қаласы, Аранчи',
    addressLine2: 'Хаёт Ресторан',
    googleMaps: 'Google Maps',
    yandexMaps: 'Яндекс Карталар',
    galleryLabel: 'Галерея',
    galleryTitle: 'Біздің сәттеріміз',
    wishesLabel: 'Тілек',
    wishesTitle: 'Қонақтар кітабы',
    addWish: 'Тілек қосу',
    wish1: 'Бұл бақытты күнде бізбен бірге болғаныңыз үшін рахмет.',
    wish2: 'Сіздің махаббаттарыңыз да осындай жарық пен күшті болсын.',
    wish3: 'Сізге шексіз әдемі сәттер тілейміз.',
    textarea: 'Ыстық сөздер жазып қойыңыз...',
    surveyLabel: 'Сауалнама',
    surveyTitle: 'Сіз келесіз бе?',
    attendYes: 'Иә, міндетті түрде келемін',
    attendNo: 'Кешіріңіз, келмеймін',
    surveySubmit: 'Жауап беру',
    surveyThanksYes: 'Рахмет! Біз сізді күтеміз.',
    surveyThanksNo: 'Жауап үшін рахмет. Кешіріңіз, келмейсіз.'
  }
};

const setLanguage = (lang) => {
  const data = translations[lang] || translations.ru;
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n;
    if (key && data[key]) {
      element.innerHTML = data[key];
    }
  });

  if (wishInput) {
    wishInput.placeholder = data.textarea;
  }

  langButtons.forEach((button) => {
    const isActive = button.dataset.lang === lang;
    button.classList.toggle('active', isActive);
  });
};

langButtons.forEach((button) => {
  button.addEventListener('click', () => setLanguage(button.dataset.lang));
});

setLanguage('kz');

const updateCountdown = () => {
  const now = new Date();
  const distance = weddingDate - now;

  if (distance <= 0) {
    document.getElementById('days').textContent = '00';
    document.getElementById('hours').textContent = '00';
    document.getElementById('minutes').textContent = '00';
    document.getElementById('seconds').textContent = '00';
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  document.getElementById('days').textContent = String(days).padStart(2, '0');
  document.getElementById('hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
  document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
};

if (envelope) {
  envelope.addEventListener('click', () => {
    body.classList.add('open');
    envelope.setAttribute('aria-label', 'Приглашение открыто');
  });
}

// =========================
// КНИГА ЖЕЛАНИЙ: ТУТ ДОБАВЛЯЮТСЯ НОВЫЕ ПОЖЕЛАНИЯ
// =========================
if (addWishButton && wishInput && wishList) {
  addWishButton.addEventListener('click', () => {
    const value = wishInput.value.trim();
    if (!value) return;

    const item = document.createElement('li');
    item.textContent = value;
    wishList.prepend(item);
    wishInput.value = '';
  });
}

const surveySubmitButton = document.getElementById('submitSurvey');
const surveyMessage = document.getElementById('surveyMessage');

if (surveySubmitButton && surveyMessage) {
  surveySubmitButton.addEventListener('click', () => {
    const selected = document.querySelector('input[name="attendance"]:checked');
    if (!selected) return;

    const isComing = selected.value === 'yes';
    const lang = document.documentElement.lang || 'kz';
    const data = translations[lang] || translations.kz;
    surveyMessage.textContent = isComing ? data.surveyThanksYes : data.surveyThanksNo;
    surveyMessage.hidden = false;
  });
}

updateCountdown();
setInterval(updateCountdown, 1000);
