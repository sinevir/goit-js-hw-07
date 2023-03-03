import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const galleryMarkUp = createPhotosMarkUpGallery(galleryItems);

function createPhotosMarkUpGallery(galleryItems) {
    return galleryItems
    .map(({ preview, original, description }) => {
    return `<li><a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" title="${description}">
  </a></li>`})
  .join('');
}

gallery.insertAdjacentHTML('beforeend', galleryMarkUp);

new SimpleLightbox('.gallery a', {
    captionDelay: 250
});