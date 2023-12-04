// Кнопка скролла вверх

mybutton = document.getElementById("myBtn");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
} 

// Секция для теста


let coll = document.getElementsByClassName("collapsible");
let i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}



const langButtons = document.querySelectorAll("[data-btn]");
const allLangs = ["ru", "en"];
const currentPathName = window.location.pathname;
let currentLang =
	localStorage.getItem("language") || checkBrowserLang() || "ru";
let currentTexts = {};

const homeTexts = {
	"start": {
		ru: "Начало",
		en: "Start",
	},
	"end": {
		ru: "Исход",
		en: "Exodus",
	},
	"name": {
		ru: "Борьба Московского государства",
		en: "The struggle of the Moscow state",
	},
	"subName": {
		ru: "с набегами татар 16-17 веках",
		en: "with Tatar raids in the 16th and 17th centuries",
	},
	"subtitle": {
		ru: "Узнать больше",
		en: "See more",
	},
  "why": {
		ru: "Почему все началось",
		en: "Why did it all start",
	},
  "whyTitle": {
		ru: "В XVI и XVII веках Московское государство подверглось татарским набегам, наиболее значемыми из которых являлись: Крымское Казанское ханства, а так же Ногайская орда, образовавшиеся в следствии распада Золотой Орды на отдельные ханства. Основными целями их набегов были: грабеж материальных ценностей, пленники (рабы), желание установить контроль над русскими землями. ",
		en: "In the 16th and 17th centuries, the Moscow state was subjected to Tatar raids, the most significant of which were: the Crimean Kazan Khanate, as well as the Nogai Horde, formed as a result of the collapse of the Golden Horde into separate khanates. The main goals of their raids were: robbery of material assets, captives (slaves), the desire to establish control over Russian lands.",
	},
  "first16": {
		ru: "Первая половина 16 века ",
		en: "First half of the 16th century",
	},
  "first16Title": {
		ru: "В первой половине XVI века татарские набеги на Московское государства становятся более интенсивными. Иван III проводит активную политику укрепления границ и создания оборонительных линий для защиты от татарских нападений. ",
		en: "In the first half of the 16th century, Tatar raids on the Muscovite state became more intense. Ivan III pursues an active policy of strengthening borders and creating defensive lines to protect against Tatar attacks.",
	},
  "second16": {
		ru: "Вторая половина 16 века",
		en: "Second half of the 16th century",
	},
  "second16Title": {
		ru: "Во второй половине XVI века ситуация осложняется. Внутренние противостояния в Крымском ханстве приводят к усилению татарских набегов на Московское государство. В ответ на угрозу Иван IV (Грозный) укрепляет оборонные структуры и начинает активные контрнаступления, пытаясь предотвратить татарские нашествия. ",
		en: "In the second half of the 16th century the situation became more complicated. Internal confrontations in the Crimean Khanate lead to increased Tatar raids on the Moscow state. In response to the threat, Ivan IV (the Terrible) strengthens his defense structures and launches active counter-offensives in an attempt to prevent Tatar invasions.",
	},
  "first17": {
		ru: "Первая половина 17 века",
		en: "First half of the 17th century",
	},
  "first17Title": {
		ru: "В первой половине XVII века Московское государство продолжало бороться с татарскими набегами, укрепляя границы, строя оборонительные сооружения и ведя оборонительные операции. Также заключались мирные договоры с татарскими ханами для уменьшения напряженности на границе.",
		en: "In the first half of the 17th century, the Moscow state continued to fight Tatar raids, strengthening its borders, building defensive structures and conducting defensive operations. Peace treaties were also concluded with the Tatar khans to reduce tensions on the border.",
	},
  "second17": {
		ru: "Вторая половина 16 века",
		en: "Second half of the 17th century",
	},
  "second17Title": {
		ru: "К концу XVII века обстановка постепенно стабилизируется. Реформы Петра I, начиная с конца 17 века, укрепляют оборонную систему России и ослабляют татарские угрозы. Войны с Османской империей и Крымским ханством приводят к изменениям в региональной политике, снижая масштаб татарских набегов. ",
		en: "By the end of the 17th century, the situation gradually stabilized. The reforms of Peter I, starting in the late 17th century, strengthened Russia's defense system and weakened Tatar threats. Wars with the Ottoman Empire and the Crimean Khanate lead to changes in regional politics, reducing the scale of Tatar raids.",
	},
  "exodus": {
		ru: "Исход",
		en: "Exodus",
	},
  "exodusTitle": {
		ru: "Борьба московского государства с татарскими набегами в XVI-XVII веках привела к укреплению границ и оборонительных структур. Этот период стал важным этапом в формировании российской государственности и оборонной мощи. ",
		en: "The struggle of the Muscovite state against Tatar raids in the 16th-17th centuries led to the strengthening of borders and defensive structures. This period became an important stage in the formation of Russian statehood and defense power.",
	},
  "test": {
		ru: "Проверь свои знания",
		en: "Test your knowledge",
	},
  "testTitle": {
		ru: "Привет! Ты дочитал страницу сайта до конца? Теперь ты можешь гордо звать себя специалистом в Борьбае московского государства с набегами татар 16-17 веках. ",
		en: "Hello! Have you read the site page to the end? Now you can proudly call yourself an expert in the Moscow state’s fight against Tatar raids in the 16th and 17th centuries.    ",
	},
  "footer": {
		ru: "По вопросам качества образования в екатеринбургском филиале обращайтесь в колледж IThub в Москве — пишите на почту info@ithub.ru © 2021-2023, Международная Академия Информационных технологий ИТ ХАБ",
		en: "For questions regarding the quality of education in the Yekaterinburg branch, please contact IThub College in Moscow - write to info@ithub.ru © 2021-2023, International Academy of Information Technologies IT HUB",
	},
};


// Проверка пути страницы сайта
function checkPagePathName() {
	switch (currentPathName) {
		case "/index.html":
			currentTexts = homeTexts;
			break;
		case "/another_page.html":
			currentTexts = anotherTexts;
			break;

		default:
			currentTexts = homeTexts;
			break;
	}
}
checkPagePathName();

// Изменение языка у текстов
function changeLang() {
	for (const key in currentTexts) {
		let elem = document.querySelector(`[data-lang=${key}]`);
		if (elem) {
			elem.textContent = currentTexts[key][currentLang];
		}
	}
}
changeLang();

// Вешаем обработчики на каждую кнопку
langButtons.forEach((btn) => {
	btn.addEventListener("click", (event) => {
		if (!event.target.classList.contains("header__btn_active")) {
			currentLang = event.target.dataset.btn;
			localStorage.setItem("language", event.target.dataset.btn);
			resetActiveClass(langButtons, "header__btn_active");
			btn.classList.add("header__btn_active");
			changeLang();
		}
	});
});

// Сброс активного класса у переданного массива элементов
function resetActiveClass(arr, activeClass) {
	arr.forEach((elem) => {
		elem.classList.remove(activeClass);
	});
}

// Проверка активной кнопки 
function checkActiveLangButton() {
	switch (currentLang) {
		case "ru":
			document
				.querySelector('[data-btn="ru"]')
				.classList.add("header__btn_active");
			break;
		case "en":
			document
				.querySelector('[data-btn="en"]')
				.classList.add("header__btn_active");
			break;

		default:
			document
				.querySelector('[data-btn="ru"]')
				.classList.add("header__btn_active");
			break;
	}
}
checkActiveLangButton();

