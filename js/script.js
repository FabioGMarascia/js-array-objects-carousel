const box = document.querySelector(`.img-box`);
const next_btn = document.querySelector(`#next-btn`);
const prev_btn = document.querySelector(`#prev-btn`);

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
	if (check) {
		let first_slide = document.querySelector(`.carousel-item`);
		first_slide.classList.add(`active`);
		check = false;
	}
}

const slides = document.getElementsByClassName(`slide`);
let active_img_i;

// MILESTONE #2
// MILESTONE #3

next_btn.addEventListener(`click`, () => {
	for (let i = 0; i < slides.length; i++) {
		const slide = slides[i];

		if (slide.classList.contains(`active`)) {
			slide.classList.remove(`active`);
			active_img_i = i;
		}
	}

	let next_img_i = active_img_i + 1;

	if (next_img_i >= slides.length) {
		slides[0].classList.add(`active`);
	} else {
		slides[next_img_i].classList.add(`active`);
	}
});

prev_btn.addEventListener(`click`, () => {
	for (let i = 0; i < slides.length; i++) {
		const slide = slides[i];

		if (slide.classList.contains(`active`)) {
			slide.classList.remove(`active`);
			active_img_i = i;
		}
	}

	let prev_img_i = active_img_i - 1;

	if (prev_img_i < 0) {
		slides[4].classList.add(`active`);
	} else {
		slides[prev_img_i].classList.add(`active`);
	}
});
