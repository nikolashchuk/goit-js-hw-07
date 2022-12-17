import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector('.gallery');

console.log(galleryItems);

const markup = galleryItems
  .map(
    ({ preview, original, description }) => ` <li> <a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
    </li>`
  )
  .join('');

galleryEl.innerHTML = markup;

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  //   animationSlide: true,
  //   animationSpeed: 500,
});
