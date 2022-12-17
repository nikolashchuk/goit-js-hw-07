import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector('.gallery');

const markup = galleryItems
  .map(
    ({ preview, original, description }) => `
<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
  )
  .join('');

galleryEl.innerHTML = markup;

const instance = basicLightbox.create(
  `
  <img
      class="gallery__image"
      src=""
      alt=""
    />
 `,
  {
    onShow: instance => {
      window.addEventListener('keydown', onEscKeyPress);
    },
    onClose: instance => {
      window.removeEventListener('keydown', onEscKeyPress);
    },
  }
);

galleryEl.addEventListener('click', clickOnImage);

function clickOnImage(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  instance.element().querySelector('img').src = event.target.dataset.source;
  instance.show();
}

function onEscKeyPress(event) {
  if (event.code === 'Escape') {
    instance.close();
  }
}
