/* Створення і рендер розмітки на підставі масиву даних galleryItems 
 * і наданого шаблону елемента галереї.
 *
 * Реалізація делегування на div.gallery і отримання url великого зображення.
 *
 * Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. 
 * Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані (.min) файли бібліотеки.
 *
 * Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.
 *
 * Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям. Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.
 *
*/

import { galleryItems } from './gallery-items.js';
// // Change code below this line

const gallery = document.querySelector('.gallery');

const galleryMarkUp = createPhotosMarkUpGallery(galleryItems);

function createPhotosMarkUpGallery(galleryItems) {
    return galleryItems
    .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`; })
  .join('');
}

gallery.insertAdjacentHTML('beforeend', galleryMarkUp);


// --------- Друга версія створення розмітки ----------

// const photos = [];
// galleryItems.forEach(photo => {
//     const galleryItem = document.createElement('div');
//     galleryItem.className = 'gallery__item';
    
//     const galleryLink = document.createElement('a');
//     galleryLink.className = 'gallery__link';
//     galleryLink.href = photo.original;

//     const galleryImage = document.createElement('img');
//     galleryImage.className = 'gallery__image';
//     galleryImage.src = photo.preview;
//     galleryImage.setAttribute('data-source', photo.original);
//     galleryImage.alt = photo.description;
//     galleryItem.append(galleryLink);
//     galleryLink.append(galleryImage);
//     photos.push(galleryItem);
// });

// gallery.append(...photos);
// -----------------------------------------------------

gallery.addEventListener('click', event => {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return;
    }

    const bigPhoto = event.target.getAttribute('data-source')

    const instance = basicLightbox.create(`
    <img src="${bigPhoto}" width="800" height="600">
`)

instance.show()

    gallery.addEventListener('keydown', event => {
        const ESC_KEY_CODE = 'Escape';
        const isEscKey = event.code === ESC_KEY_CODE;
      
        if (isEscKey) {
            instance.close();
        }
    });
});
