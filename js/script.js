const box = document.querySelector(`.img-box`);
const box_2 = document.querySelector(`.thumb-box`);
const next_btn = document.querySelector(`#next-btn`);
const prev_btn = document.querySelector(`#prev-btn`);
const auto_next_btn = document.querySelector(`#auto-next-btn`);
const auto_prev_btn = document.querySelector(`#auto-prev-btn`);

const images = [
	{
		image: "img/01.webp",
		title: "Marvel's Spiderman Miles Morale",
		text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
	},
	{
		image: "img/02.webp",
		title: "Ratchet & Clank: Rift Apart",
		text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
	},
	{
		image: "img/03.webp",
		title: "Fortnite",
		text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
	},
	{
		image: "img/04.webp",
		title: "Stray",
		text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
	},
	{
		image: "img/05.webp",
		title: "Marvel's Avengers",
		text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
	},
];

// MILESTONE #1

let check = true;

for (const element of images) {
	box.innerHTML += `
        <div class="carousel-item slide">
        	<img src="${element.image}" class="w-100 object-fit-cover my-h border border-5 rounded" />
       		<div class="carousel-caption d-none d-md-block">
			   <h5 class="fw-bold fs-3">${element.title}</h5>
			   <p class="fw-bold fs-5">${element.text}</p>
        	</div>
      	</div>
    `;
	box_2.innerHTML += `
		<div class="col-2 px-1">
			<img src="${element.image}" class="img-thumbnail thumb w-100 object-fit-cover" />
		</div>
	`;
	if (check) {
		let first_slide = document.querySelector(`.carousel-item`);
		let first_thumb = document.querySelector(`.thumb`);
		first_slide.classList.add(`active`);
		first_thumb.classList.add(`active-thumb`);
		check = false;
	}
}

// MILESTONE #2
// MILESTONE #3
// BONUS #1

const slides = document.getElementsByClassName(`slide`);
const thumbs = document.getElementsByClassName(`thumb`);
let active_img_i;
let active_thumb_i;

next_btn.addEventListener(`click`, () => {
	if (prev_interval != 0 || next_interval != 0) {
		clearInterval(prev_interval);
		clearInterval(next_interval);
		next_interval = 0;
		prev_interval = 0;
	}
	nextButton();
});

prev_btn.addEventListener(`click`, () => {
	if (prev_interval != 0 || next_interval != 0) {
		clearInterval(prev_interval);
		clearInterval(next_interval);
		next_interval = 0;
		prev_interval = 0;
	}
	prevButton();
});

// BONUS #2
// BONUS #3
let next_interval = 0;
let prev_interval = 0;

auto_next_btn.addEventListener(`click`, () => {
	if (prev_interval != 0) {
		clearInterval(prev_interval);
		prev_interval = 0;
	}
	if (next_interval != 0) {
		clearInterval(next_interval);
		next_interval = 0;
	} else {
		next_interval = setInterval(() => {
			nextButton();
		}, 3000);
	}
});

auto_prev_btn.addEventListener(`click`, () => {
	if (next_interval != 0) {
		clearInterval(next_interval);
		next_interval = 0;
	}
	if (prev_interval != 0) {
		clearInterval(prev_interval);
		prev_interval = 0;
	} else {
		prev_interval = setInterval(() => {
			prevButton();
		}, 3000);
	}
});
