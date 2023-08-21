import noPoster from '../images/No_image_poster.png';
export function getPoster(poster) {
  if (poster) {
    return `https://image.tmdb.org/t/p/w300${poster}`;
  } else {
    return noPoster;
  }
}