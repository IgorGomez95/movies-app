import { MovieComponent } from './movie.component';

describe('ApiService', () => {
  let movieComponent: MovieComponent;

  beforeEach(async () => {
    movieComponent = new MovieComponent(null, null, null, null, null);
  });

  it('Debe de crearce correctamente', () => {
    expect(movieComponent).toBeTruthy();
  });
});
