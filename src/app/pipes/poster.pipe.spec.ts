import { PosterPipe } from './poster.pipe';

describe('PosterPipe', () => {
  const pipe = new PosterPipe();

  it('crear una instancia', () => {
    expect(pipe).toBeTruthy();
  });

  it('Deberá de devolver la url del poster', () => {
    const response = pipe.transform('kqjL17yufvn9OVLyXYpvtyrFfak.jpg');
    expect(response).toEqual('https://image.tmdb.org/t/p/w342/kqjL17yufvn9OVLyXYpvtyrFfak.jpg');
  });

  it('Deberá de devolver la url del backdrop', () => {
    const response = pipe.transform('kqjL17yufvn9OVLyXYpvtyrFfak.jpg', 'backdrop');
    expect(response).toEqual('https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg');
  });

  it('Deberá de devolver el path del backdrop por defecto', () => {
    const response = pipe.transform('', 'backdrop');
    expect(response).toEqual('./assets/movie_bg.png');
  });

  it('Deberá de devolver el path del poster por defecto', () => {
    const response = pipe.transform('');
    expect(response).toEqual('./assets/noimage.png');
  });
});
