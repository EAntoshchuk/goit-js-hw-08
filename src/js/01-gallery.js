import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryItems(galleryItems);
galleryContainer.insertAdjacentHTML('afterbegin', galleryMarkup);

function createGalleryItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
  </li>`;
    })
    .join('');
}

let lightbox = new SimpleLightbox('.gallery__link', {
  captionsData: 'alt',
  captionDelay: 250,
  //   captionPosition: "bottom",
});

console.log(galleryMarkup);
