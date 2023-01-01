import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector('.gallery');

galleryItems.forEach(item => {
  const galleryLink = document.createElement('a');
  galleryLink.classList.add('gallery__item');
  galleryLink.setAttribute('href', item.original);
  gallery.append(galleryLink);

  const image = document.createElement('img');
  image.classList.add('gallery__image');
  image.src = item.preview;
  image.alt = item.description;
  galleryLink.append(image);
});

const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});
