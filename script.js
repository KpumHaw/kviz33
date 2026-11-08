document.addEventListener('DOMContentLoaded', () => {
const questions = [
  {
    question: "Хто створив компанію лего?",
    answers: [
      { name: "Ілон Маск", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNyCImYZVDdrc6xCr01vmeTsdqw7cseJWCZJs_4QH7tw&s=10" },
      { name: "Містер Біст", image: "https://cdn-cabinet.ua.news/uploads/images/ilona-folder/mrbeast.webp" },
      { name: "Альберт Енштейн", image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b2/Einstein-formal_portrait-35_%28cropped%29.jpg/250px-Einstein-formal_portrait-35_%28cropped%29.jpg?utm_source=uk.wikipedia.org&utm_campaign=parser&utm_content=thumbnail" },
      { name: "Оле Кірк Крістіансен", image: "https://api.chas.news/img-srv/image/width=960,quality=85/media-storage/07_2021/2021_07_08_1bc971463af3cb85.jpg" }
    ],
    correct: "Оле Кірк Крістіансен",
    info: "Оле Кірк Крістіансен — людина яка подарувала дитинство всім."
  },
  {
    question: "Скільки фільмів у  серії Трансформери?",
    answers: [
      { name: "5", image: "https://upload.wikimedia.org/wikipedia/uk/f/f8/%D0%A2%D1%80%D0%B0%D0%BD%D1%81%D1%84%D0%BE%D1%80%D0%BC%D0%B5%D1%80%D0%B8_4_%282014%29_%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80.jpg?utm_source=uk.wikipedia.org&utm_campaign=index&utm_content=original" },
      { name: "4", image: "https://cdn-ksvod.kyivstar.ua/content/HLS/VOD/IMAGE6/649ebf35e4b044f20db9f1ae/IMAGE_2_3_XL.jpg" },
      { name: "2", image: "https://thumb.wikimedia.org/wikipedia/uk/thumb/c/cb/TF2SteelPoster.jpg/250px-TF2SteelPoster.jpg?utm_source=uk.wikipedia.org&utm_campaign=parser&utm_content=thumbnail" },
      { name: "7", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXiz2EKyN_rgTozMNsfaeJb48g-cFVo4x8PytgqzLYxqj26LEz2XFWXxM&s=10" }
    ],
    correct: "7",
    info: "Так,у трансформерів цілих сім частин."
  },
  {
    question: "Яка роль у грі мафія може дивитися ролі інших гравців?",
    answers: [
      { name: "Шпигун ", image: "https://play-lh.googleusercontent.com/-HxKvl2f1U0UdbnGzjEYeK6CfiELpF7hgl0OyYpCpkwCiS_HRxzDmQvgs2voOjTiPj1OX9ntWB0Gsjs-UVEu" },
      { name: "Мафія", image: "https://static.lelekan.ua/image/cache/catalog/igri/mafia-ukr/mafia-fun-games-shop-lelekan-cover-800x800.png" },
      { name: "Комісар", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReJDYoFEA6IF24TsMIeM3Y27Iyn3UN2PmkSIfV6gTWdw&s=10" },
      { name: "Лікар", image: "https://bilor.com.ua/wp-content/uploads/2020/08/nevrolog-bilor-300x300.jpg" }
    ],
    correct: "Комісар",
    info: "Хто грає за комісара = командний гравець."
  },
  {
    question: "Яка ціль у Танджіро із аніме Клинок що зищує демонів?",
    answers: [
      { name: "1.Вилікувати сестру", image: "https://preview.redd.it/i-love-nezuko-i-dont-love-how-nezuko-is-handled-in-most-of-v0-9ukoufqfyyqf1.jpeg?auto=webp&s=c95a4890c051bca7b21b42ddf6414b3fa6328f00" },
      { name: "2.Знайти друзів", image: "https://i.redd.it/lju60ttow2b91.jpg" },
      { name: "3.Убити Кібуцуджі Мудзана", image: "https://lib-cdn.ongaku.one/character/66/194866/cover.jpg" },
      { name: "1 і 3", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNTzxJ_l_vOJyinn2rT_f0_BqOpNc4923KluHa8cKdvD6V18oFZ0hEx7KM&s=10" }
    ],
    correct: "1 і 3",
    info: "Після тієї ночі у Танджіро немає перешкод."
  },
  {
    question: "Хто із цих єгерів називається Сrimson typhoon?",
    answers: [
      { name: "1", image: "https://images.prom.ua/6757460922_w640_h640_6757460922.jpg" },
      { name: "2", image: "https://content2.rozetka.com.ua/goods/images/big/343263647.jpg" },
      { name: "3", image: "https://content2.rozetka.com.ua/goods/images/big/343262403.jpg" },
      { name: "4", image: "https://content.rozetka.com.ua/goods/images/big/456151455.jpg" }
    ],
    correct: "2",
    info: "Мій улюблений єгерь)."
  },
  {
    question: "Скільки унікальних наборів лего виробили за весь час?",
    answers: [
      { name: "від 15 000 до 19 000", image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/19/Lego_bricks.jpg/330px-Lego_bricks.jpg?utm_source=uk.wikipedia.org&utm_campaign=parser&utm_content=thumbnail" },
      { name: "від 13 000 до 15 000", image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/19/Lego_bricks.jpg/330px-Lego_bricks.jpg?utm_source=uk.wikipedia.org&utm_campaign=parser&utm_content=thumbnail" },
      { name: "від 19 000 до 22 000", image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/19/Lego_bricks.jpg/330px-Lego_bricks.jpg?utm_source=uk.wikipedia.org&utm_campaign=parser&utm_content=thumbnail" },
      { name: "від 12 000 до 13 000", image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/19/Lego_bricks.jpg/330px-Lego_bricks.jpg?utm_source=uk.wikipedia.org&utm_campaign=parser&utm_content=thumbnail" }
    ],
    correct: "від 15 000 до 19 000",
    info: "Бери що захочеш)."
  },
  {
    question: "Хто із цих десептиконів помер в 1 частині?",
    answers: [
      { name: "Баррікейд", image: "https://content2.rozetka.com.ua/goods/images/big/357732183.jpg" },
      { name: "Фоллен", image: "https://content1.rozetka.com.ua/goods/images/big/311632846.jpg" },
      { name: "Броул", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvxz9NigClYEvJJbDPB8EXTOXwrvZ75KUYjTaiL4bkQA36O79VsyTg720&s=10" },
      { name: "Демолішер", image: "https://i.redd.it/l9ftyugecxaf1.png" }
    ],
    correct: "Броул",
    info: "Його хотіли назвати Девостатор."
  },
  {
    question: "В яку чергу встає лікар в грі Мафія?",
    answers: [
      { name: "1", image: "https://images.icon-icons.com/3302/PNG/512/one_number_icon_209031.png" },
      { name: "5", image: "https://svgsilh.com/png-1024/150794.png" },
      { name: "2", image: "https://purepng.com/public/uploads/large/21504467801ulne5owk7r7q4uhszupeq50ncyhjmeekqzwa547ovdmo75fbhkqwuiezsd9tcjhuisrjyn5getxjdzsjq7plxpzn4v2ehsxuioob.png" },
      { name: "3", image: "https://freepngimg.com/thumb/3/40807-number-3.png" }
    ],
    correct: "2",
    info: "Найкорисніша ролю у грі."
  },
  {
    question: "Ким працював Гьотаро до того як стати демоном(Клинок що знищує демонів)?",
    answers: [
      { name: "Лісорубом", image: "https://ua.mapakarier.org/assets/occupations/photos/drwal-m.jpg" },
      { name: "Фермером", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkimukyqtsYhbK282ioULN4WVVZxwGlOeJaaDMVutaUMRAVNc_JVK5CiM&s=10" },
      { name: "Колектор", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxoRZjwnVu48NLiOoVb7xiElj4PWLV5XRj6drM0uvrQABRtUIae9B7_7Md&s=10" },
      { name: "Гончарем", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5Kjb0zTr_ueRhVDyEh2oWCAlRtY7IXAFpVKoJ9jOS8AB0hZW0eMww6K-p&s=10" }
    ],
    correct: "Колектор",
    info: "Його боялися всі в селі."
  },
  {
    question: "Мако Морі є рідною дочкою капітана в фільмі Тихоокеанський рубіж?",
    answers: [
      { name: "Так", image: "https://synonimy.info/%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B0/%D0%A2%D0%B0%D0%BA" },
      { name: "Ні", image: "https://taslife.com.ua/wp-content/uploads/2021/06/0_jnxwntj7bzt_jae1-1024x683.jpg" },
    ],
    correct: "Ні",
    info: "Він її вдочерив на одні із місій."
  }  
  ];

let current = 0;
let score = 0;
let answered = false;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("next");
const gameEl = document.getElementById("game");
const resultEl = document.getElementById("result");

function showQuestion() {
  answered = false;

  const q = questions[current];

  document.getElementById("number").textContent =
    `Раунд ${current + 1} із ${questions.length}`;

  document.getElementById("score").textContent =
    `⭐ ${score} балів`;

  document.getElementById("progress-bar").style.width =
    `${(current / questions.length) * 100}%`;

  questionEl.textContent = q.question;
  answersEl.innerHTML = "";
  feedbackEl.textContent = "";
  nextBtn.hidden = true;

  // Перемішуємо відповіді
  const shuffled = [...q.answers];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  shuffled.forEach(answer => {
    const btn = document.createElement("button");
    btn.className = "answer";

    const img = document.createElement("img");
    img.src = answer.image;
    img.alt = answer.name;
    img.loading = "lazy";

    img.onerror = () => {
      img.onerror = null;
      img.src = "https://placehold.co/400x250/211d3b/ffffff?text=Image";
    };

    const label = document.createElement("div");
    label.className = "label";
    label.textContent = answer.name;

    btn.append(img, label);

    btn.addEventListener("click", () => {
      checkAnswer(btn, answer);
    });

    answersEl.appendChild(btn);
  });
}

function checkAnswer(button, answer) {
  if (answered) return;
  answered = true;

  const q = questions[current];

  answersEl.querySelectorAll(".answer").forEach(btn => {
    btn.disabled = true;

    const label = btn.querySelector(".label").textContent;

    if (label === q.correct) {
      btn.classList.add("correct");
    }
  });

  if (answer.name === q.correct) {
    score++;
    feedbackEl.textContent = `✅ Правильно! ${q.info}`;
    feedbackEl.style.color = "#4ade80";
  } else {
    button.classList.add("wrong");
    feedbackEl.textContent =
      `❌ Правильна відповідь: ${q.correct}. ${q.info}`;
    feedbackEl.style.color = "#f87171";
  }

  document.getElementById("score").textContent =
    `⭐ ${score} балів`;

  nextBtn.textContent =
    current === questions.length - 1
      ? "Побачити результат 🏆"
      : "Наступне запитання ➜";

  nextBtn.hidden = false;
}

function showResult() {
  gameEl.hidden = true;
  resultEl.hidden = false;

  document.getElementById("progress-bar").style.width = "100%";

  document.getElementById("final-score").textContent =
    `${score} із ${questions.length} балів`;

  const message = document.getElementById("message");

  if (score === questions.length) {
    message.textContent = "🔥 Неймовірно! Ти справжній уважно мене слухав(-а)!";
  } else if (score >= 4) {
    message.textContent = "🎉 Чудовий результат! Ти не все знаєш,що я говорив!";
  } else {
    message.textContent = "💻 Слухай краще:(!";
  }
}

nextBtn.addEventListener("click", () => {
  if (current < questions.length - 1) {
    current++;
    showQuestion();
  } else {
    showResult();
  }
});

document.getElementById("restart").addEventListener("click", () => {
  current = 0;
  score = 0;
  gameEl.hidden = false;
  resultEl.hidden = true;
  showQuestion();
});

showQuestion();





    
    
    
    
    
    
});
