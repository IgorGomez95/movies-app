import { MoviegenresPipe } from './moviegenres.pipe';

describe('MoviegenresPipe', () => {
  const pipe = new MoviegenresPipe();

  it('crear una instancia', () => {
    expect(pipe).toBeTruthy();
  });

  it('Crear array de generos', () => {
    const response = pipe.transform([28, 12]);
    expect(response).toEqual(['Acción', 'Aventura']);
  });

  it('Deberá de enviar un array vacío', () => {
    const response = pipe.transform([]);
    expect(response).toEqual([]);
  });
});
