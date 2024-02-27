import Swiper from "./node_modules/swiper/swiper-bundle.min.mjs";

const products = document.querySelector(".products");
const render = (parent, htmlEl, itemsNum) => {
  Array(itemsNum)
    .fill()
    .map((item) => {
      parent.insertAdjacentHTML("beforeend", htmlEl);
    });
};

////////// swiper initialization //////////
const swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  direction: "horizontal",
  spaceBetween: 10,
  freeMode: true,

  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

// Render Best seller ptroducts (5 products) inside .product
const productHTMLElement = `
<div class="product__card swiper-slide ">
  <button class="button__fav">
    <svg
      width="16"
      height="13"
      viewBox="0 0 16 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.6328 1.47266C15.3555 2.94922 15.4375 5.57422 13.9062 7.16016L8.60156 12.6289C8.4375 12.793 8.21875 12.875 7.97266 12.875C7.75391 12.875 7.53516 12.793 7.37109 12.6289L2.06641 7.16016C0.535156 5.57422 0.617188 2.94922 2.33984 1.47266C4.08984 -0.00390625 6.33203 0.679688 7.45312 1.82812L8 2.40234L8.51953 1.82812C9.91406 0.40625 12.1289 0.214844 13.6328 1.47266ZM13.2773 6.55859C14.3164 5.46484 14.5352 3.41406 13.0586 2.15625C11.5547 0.871094 9.77734 1.80078 9.14844 2.45703L8 3.66016L6.82422 2.45703C6.16797 1.80078 4.41797 0.871094 2.91406 2.15625C1.4375 3.41406 1.65625 5.46484 2.69531 6.55859L8 12.0273L13.2773 6.55859Z"
        fill="#020511"
      />
    </svg>
  </button>
  <div class="product__pic">
    <img src="./Afbeeldingen/product.png" alt="" />
  </div>
  <div class="product__review">
    <div class="review__stars"></div>
    <div class="in-stock">
      <span
        ><svg
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.1328 1.40625L4.75781 7.78125C4.6875 7.85156 4.59375 7.875 4.5 7.875C4.38281 7.875 4.28906 7.85156 4.21875 7.78125L0.84375 4.40625C0.703125 4.26562 0.703125 4.00781 0.84375 3.86719C0.984375 3.72656 1.24219 3.72656 1.38281 3.86719L4.5 6.98438L10.5938 0.867188C10.7344 0.726562 10.9922 0.726562 11.1328 0.867188C11.2734 1.00781 11.2734 1.26562 11.1328 1.40625Z"
            fill="#66CF4D"
          />
        </svg>
      </span>
      <span>Op voorraad</span>
    </div>
  </div>

  <div class="product__title">
    Leren hoesje met MagSafe voor iPhone 13 Pro Max
  </div>
  <div class="card__lower">
    <div class="price">
      <span class="price__prv">&euro;800</span>
      <span class="price__new">&euro;65,00</span>
    </div>
    <button class="button__add--to--cart">
      <svg
        width="14"
        height="16"
        viewBox="0 0 14 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13 4C13.5312 4 14 4.46875 14 5V13C14 14.6875 12.6562 16 11 16H3C1.3125 16 0 14.6875 0 13V5C0 4.46875 0.4375 4 1 4H4V3C4 1.375 5.34375 0 7 0C8.625 0 10 1.375 10 3V4H13ZM5 3V4H8.96875V3C8.96875 1.90625 8.09375 1 7 1C5.875 1 5 1.90625 5 3ZM13 13V5H9.96875V7.5C9.96875 7.78125 9.71875 8 9.46875 8C9.1875 8 8.96875 7.78125 8.96875 7.5V5H5V7.5C5 7.78125 4.75 8 4.5 8C4.21875 8 4 7.78125 4 7.5V5H1V13C1 14.125 1.875 15 3 15H11C12.0938 15 13 14.125 13 13Z"
          fill="black"
        />
      </svg>
    </button>
  </div>
</div>`;

render(products, productHTMLElement, 5);

// Render 5stars in .review__stars
const reviewStarsWrappers = document.querySelectorAll(".review__stars");

const starIconElement = `
<svg
width="16"
height="14"
viewBox="0 0 16 14"
fill="none"
xmlns="http://www.w3.org/2000/svg"
>
<path
  d="M8.64062 0.242188L10.4453 3.87891L14.4375 4.45312C15.1484 4.5625 15.4492 5.4375 14.9297 5.95703L12.0312 8.74609L12.7148 12.7109C12.8242 13.4219 12.0859 13.9688 11.4297 13.6406L7.875 11.7812L4.29297 13.668C3.63672 13.9961 2.89844 13.4492 3.00781 12.7383L3.69141 8.77344L0.792969 5.95703C0.273438 5.4375 0.574219 4.5625 1.28516 4.45312L5.27734 3.87891L7.08203 0.242188C7.41016 -0.414062 8.33984 -0.386719 8.64062 0.242188Z"
  fill="#FE3E31"
/>
</svg>`;

reviewStarsWrappers.forEach((wrapperEl) =>
  render(wrapperEl, starIconElement, 5)
);

// Render 5stars in .webwinkel--keur
const stars = document.querySelector(".stars");
render(stars, starIconElement, 5);

// Render review cards inside .reviews
const reviews = document.querySelector(".reviews");
const reviewCardHTML = `
<div class="swiper-slide review__card">
  <div>
    <div class="review__stars--reviews--sec"></div>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
      efficitur, ligula eu imperdiet maximus, elit nulla eleifend
      risus, vitae ullamcorper lacus lorem sed diam. Pellentesque a
      euismod lectus.
    </p>
  </div>
  <p class="reviewer">John Doe, Roosendaal</p>
</div>
`;
render(reviews, reviewCardHTML, 5);

const reviewStarsReviewsWrapper = document.querySelectorAll(
  ".review__stars--reviews--sec"
);
reviewStarsReviewsWrapper.forEach((reviewStarsWrapepr) => {
  render(reviewStarsWrapepr, starIconElement, 5);
});

//Reveal Sections
const sectionsToReveal = document.querySelectorAll(".section__to__reveal");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle("section--show", entry.isIntersecting);
  });
});

sectionsToReveal.forEach((section) => {
  observer.observe(section);
});
